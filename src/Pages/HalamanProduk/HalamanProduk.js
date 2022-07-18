import React, { useEffect, useState } from 'react'
import Cards from '../../Components/HalamanProduk/SellerCard'
import Corousel from '../../Components/HalamanProduk/Corousel'
import Deskripsi from '../../Components/HalamanProduk/Deskripsi'
import Profile from '../../Components/HalamanProduk/Profile'
import { Col, Container, Row } from 'react-bootstrap'
import NavbarSearch from '../../Components/NavbarSearch/NavbarSearch'
import axios from 'axios'
import Loading from '../../Components/Loading/Loading'
import { useParams } from 'react-router-dom'


const SellerHalamanProduk = () => {

  let idr=Intl.NumberFormat('id-ID')

  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  const {id} = useParams()
  console.log(id)

  useEffect(()=>{
    setLoading(true)
    axios.get(`https://secondhandapp.herokuapp.com/api/product/list-by-id?id=${id}`)
      .then(res => {
        setLoading(false)
        console.log(res)
        setProduct(res.data)
      })
  }, [])

  return (
    <>
    <NavbarSearch/>
    <Container>
      {loading ? (<Loading/>) : 
      <>
      <Row>
        <Col lg={{offset: 1, span: 6}}>
          <Corousel 
          foto1={product.foto_produk_1}
          // tambahin foto2,dst sama kyk diatas
          />
        </Col>
        <Col lg={4} >
          <Cards
            title={product.nama}
            cat1={product.kategori_1.nama}
            cat2={product.kategori_2.nama}
            price={idr.format(product.harga)}/>
          <Profile/>
        </Col>
      </Row>
      <Row>
        <Col lg={{span:6, offset: 1}}>
        <Deskripsi desc={product.deskripsi}/>
        </Col>
      </Row></>}
    </Container>
    </>
  )
}

export default SellerHalamanProduk
