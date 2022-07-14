import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Col, Container, Pagination, Row } from 'react-bootstrap'
import style from './Semua.module.css'
import Filter from '../../Components/Filter/Filter'
import NavbarSearch from '../../Components/NavbarSearch/NavbarSearch'
import AllProduk from '../../Components/AllProduk/AllProduk'
import Cardss from '../../Components/Card/Cardss'
import { useSelector, useDispatch } from 'react-redux'


const Semua = () => {

   const products = useSelector((store) => {
      return store.semua
   })

   const dispatch = useDispatch()

   useEffect(() => {
      axios.get('https://secondhandapp.herokuapp.com/api/product/all?size=12&page=3')
      .then(response=>{
         console.log(response)
         dispatch({
            type: 'populateProducts',
            payload: {
               products: [...response.data.content]
            }
         })
      })
      
   },[])

   let active = 2;
   let items = [];
   for (let number = 1; number <= 4; number++) {
   items.push(
      <Pagination.Item key={number} active={number === active}>
         {number}
      </Pagination.Item>,
   );
   }

  return (
    <>
      <NavbarSearch />
      <Container className={style.container_}>
         <Row>
            <Col lg={2}>
               <Filter/>
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
               
               {/* <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/> */}
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