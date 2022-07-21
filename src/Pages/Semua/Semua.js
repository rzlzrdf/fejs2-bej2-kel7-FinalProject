import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Col, Container, Pagination, Row } from 'react-bootstrap'
import style from './Semua.module.css'
import Filter from '../../Components/Filter/Filter'
import NavbarSearch from '../../Components/NavbarSearch/NavbarSearch'
import Cardss from '../../Components/Card/Cardss'
import KategoriButton from '../../Components/Category/KategoriButton'
import styleFilter from './Filter.module.css'

const Semua = () => {

   const [products, setProducts] = useState([])
   const [pagination, setPagination] = useState(null)
   const [current, setcurrent] = useState(1)

   useEffect(() => {
      axios.get('https://secondhandapp.herokuapp.com/api/product/all?size=20&page=1')
      .then(response=>{
         console.log(response.data)
         setProducts (response.data.content)
         setPagination(response.data.totalPages)
      })
      
   },[])

   const changePage = (event) => {
         axios.get(`https://secondhandapp.herokuapp.com/api/product/all?page=${event}&size=20`)
         .then(res => {
            console.log('ini pagination', res)
            setcurrent(event)
            setProducts(res.data.content)
         }).catch(err => {
            console.log(err)
         })
   }
   const changeCategory = (event) => {
      if(event === 'all'){
         axios.get(`https://secondhandapp.herokuapp.com/api/product/all`)
         .then(res => {
           console.log(res)
           setProducts(res.data.content)
         }).catch(err => {
           console.log(err)
         })
        } else{
           axios.get(`https://secondhandapp.herokuapp.com/api/product/list?id=${event}&size=20`)
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
               <div className={styleFilter.wrapper_filter}>
                  <h6>Harga</h6>
                  <select className={styleFilter.filter_1}>
                     <option>Harga Terendah - Tertinggi</option>
                     <option>Harga Tertinggi - Terendah</option>
                  </select>
                  <h6>Waktu</h6>
                  <select className={styleFilter.filter_2}>            
                     <option>Produk Terbaru - Lama</option>
                     <option>Produk Terlama - Terbaru</option>
                  </select>
               </div>
               <div className={styleFilter.kategori}>
                  <h6>Kategori Teratas</h6>
                  <KategoriButton changeCategory={changeCategory}/>
                  {/* <KategoriButton text='Token'/>
                  <KategoriButton text='Pakaian'/>
                  <KategoriButton text='Makanan'/>
                  <KategoriButton text='Elektronik'/>
                  <KategoriButton text='Sparepart'/>
                  <KategoriButton text='Obat'/>
                  <KategoriButton text='Peralatan'/>
                  <KategoriButton text='Mebel'/>
                  <KategoriButton text='Sepatu'/> */}
               </div>
            </div>
               {/* <Filter /> */}
            </Col>
            <Col lg={10} className={style.all}>
               {
                  products.map((semua,index) => {
                     return(
                        <Cardss 
                           key={`Product-${index}`}
                           product={semua}
                        />
                     )
                  })
               }
            </Col>
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