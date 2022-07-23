import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Col, Container, Pagination, Row } from 'react-bootstrap'
import style from './Semua.module.css'
import Filter from '../../Components/Filter/Filter'
import NavbarSearch from '../../Components/NavbarSearch/NavbarSearch'
import Cardss from '../../Components/Card/Cardss'
import KategoriButton from '../../Components/Category/KategoriButton'
import styleFilter from './Filter.module.css'
import Loading from '../../Components/Loading/Loading'

const Semua = () => {

   const {user} = useSelector((state) => state.auth)
   const [products, setProducts] = useState([])
   const [pagination, setPagination] = useState(null)
   const [current, setcurrent] = useState(1)
   const [loading, setLoading] = useState(true)


   useEffect(() => {
      setLoading(true)
      if(user){
         axios.get('https://secondhandapp.herokuapp.com/api/product/all?size=20&page=1',
         {
            headers:{
               Authorization:user
             }
         })
            .then(response=>{
               setLoading(false)
               console.log(response.data)
               setProducts (response.data.content)
               setPagination(response.data.totalPages)
            })
      }else{
         axios.get('https://secondhandapp.herokuapp.com/api/product/all?size=20&page=1')
            .then(response=>{
               setLoading(false)
               console.log(response.data)
               setProducts (response.data.content)
               setPagination(response.data.totalPages)
            })
      }
      
      
   },[])

   const changePage = (event) => {
      if(user){
         axios.get(`https://secondhandapp.herokuapp.com/api/product/all?page=${event}&size=20`,
         {
            headers:{
               Authorization:user
             }
         })
         .then(res => {
            console.log('ini pagination', res)
            setcurrent(event)
            setProducts(res.data.content)
         }).catch(err => {
            console.log(err)
         })
      }else{
         axios.get(`https://secondhandapp.herokuapp.com/api/product/all?page=${event}&size=20`)
         .then(res => {
            console.log('ini pagination', res)
            setLoading(false)
            setcurrent(event)
            setProducts(res.data.content)
         }).catch(err => {
            console.log(err)
         })
      }
   }
   const changeCategory = (event) => {
if(event === 'all'){
   axios.get(`https://secondhandapp.herokuapp.com/api/product/all?size=15`)
   .then(res => {
      console.log(res)
      setProducts(res.data.content)
   }).catch(err => {
      console.log(err)
   })
   } else{
      axios.get(`https://secondhandapp.herokuapp.com/api/product/list?id=${event}&size=15`)
      .then(res => {
      console.log(res)
      setProducts(res.data.content)
      }).catch(err => {
      console.log(err)
      })
   }
   }
   const userchangeCategory = (event) => {
   if(user && event === 'all'){
      axios.get(`https://secondhandapp.herokuapp.com/api/product/all?size=15`,
      {
         headers:{
         Authorization:user
         }
      })
      .then(res => {
         console.log(res)
         setProducts(res.data.content)
      }).catch(err => {
         console.log(err)
      })
      } else if (user){
         axios.get(`https://secondhandapp.herokuapp.com/api/product/list?id=${event}&size=15`,
         {
         headers:{
            Authorization:user
         }
         })
         .then(res => {
         console.log(res)
         setProducts(res.data.content)
         }).catch(err => {
         console.log(err)
         })
      }
   }

   let items = [];

   for (let page = 1; page <= pagination; page++) {
   items.push(
      <Pagination.Item onClick={()=>changePage(page)} key={page} active={page === current}>
         {page}
      </Pagination.Item>,
   );
   }

  return (
    <>
      <NavbarSearch />
      <Container className={styleFilter.container_}>
         <Row>
            <Col lg={2}>
            <div className={'card shadow-sm ' +styleFilter.card_}>
               <h5 className='fw-bold text-center mt-3'>Filter</h5>
               <div className={styleFilter.kategori}>
                  <h6>Kategori Teratas</h6>
                  <KategoriButton changeCategory={user ? userchangeCategory :changeCategory}/>
               </div>
            </div>
               {/* <Filter /> */}
            </Col>
            {loading ? <Loading /> : 
            <Col lg={10} className={style.all}>
               {loading ? (<Loading/>):
                  products.map((semua,index) => {
                     return(
                        <Cardss 
                           key={`Product-${index}`}
                           product={semua}
                        />
                     )
                  })
               }
            </Col> }
         </Row>
         <Row className={'my-3'}>
            <Col lg={{offset: 10, span: 1}}>
               <Pagination>{items}</Pagination>
            </Col>
         </Row>
      </Container>
    </>
  )
}

export default Semua