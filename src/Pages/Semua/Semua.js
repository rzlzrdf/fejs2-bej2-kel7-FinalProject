import React, { useEffect, useState } from 'react'
import { Col, Container, Pagination, Row } from 'react-bootstrap'
import style from './Semua.module.css'
import Filter from '../../Components/Filter/Filter'
import NavbarSearch from '../../Components/NavbarSearch/NavbarSearch'
import Cardss from '../../Components/Card/Cardss'
import axios from "axios"
import { useSelector } from 'react-redux'
import Loading from '../../Components/Loading/Loading'

const Semua = () => {

   const { user } = useSelector((state) => state.auth);

   const [loading, setLoading] = useState(true)
   const [product, setProduct] = useState([])

   useEffect(()=> {
      setLoading(true)
      if(user){
         axios
         .get('https://secondhandapp.herokuapp.com/api/product/all?page=0&size=20', {headers:{Authorization:user}})
            .then((res) => {
               setLoading(false)
               console.log(res.data.content)
               setProduct(res.data.content)
            })
      } else {
         axios
         .get('https://secondhandapp.herokuapp.com/api/product/all?page=0&size=20')
            .then(res => {
               setLoading(false)
               console.log(res.data.content)
               setProduct(res.data.content)
            })
      }
   }, [])

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
               {loading ? (<Loading/>) :
                  product.map( (product, i) => (
                     <Cardss
                     key={i}
                     id={product.id}
                     nama={product.nama}
                     kategori_1={product.kategori_1 !== null ? product.kategori_1.nama : ''}
                     kategori_2={product.kategori_2 !== null ? product.kategori_2.nama : ''}
                     kategori_3={product.kategori_3 !== null ? product.kategori_3.nama : ''}
                     kategori_4={product.kategori_4 !== null ? product.kategori_4.nama : ''}
                     kategori_5={product.kategori_5 !== null ? product.kategori_5.nama : ''}
                     harga={product.harga}
                     img={product.foto_produk_1} />
               ))}
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