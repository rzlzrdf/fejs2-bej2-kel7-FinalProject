import React, { useEffect, useState } from 'react'
import Corousel from '../../Components/HalamanProduk/Corousel'
import Deskripsi from '../../Components/HalamanProduk/Deskripsi'
import Profile from '../../Components/HalamanProduk/Profile'
import CardBuyer from '../../Components/HalamanProduk/CardBuyer'
import { Col, Container, Row } from 'react-bootstrap'
import NavbarSearch from '../../Components/NavbarSearch/NavbarSearch'
import axios from 'axios'
import Loading from '../../Components/Loading/Loading'
import { useParams } from 'react-router-dom'


const SellerHalamanProduk = () => {

  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const [disable, setDisable] = useState(false)
  const [show, setShow] = useState(false)
  const buttonText = disable ? 'Menunggu respon penjual' : 'Saya Tertarik dan ingin nego'

  const {id} = useParams()

  useEffect(()=>{
    setLoading(true)
    axios.get(`https://secondhandapp.herokuapp.com/api/product/list-by-id?id=${id}`)
      .then(res => {
        setLoading(false)
        console.log(res)
        setProduct(res.data)
      })
  }, [id])

  return (
    <>
    <NavbarSearch/>
    <Container>
      {loading ? (<Loading/>) : 
      <>
      <Row>
        <Col lg={{offset: 1, span: 6}}>
          <Corousel 
          produk={product}
          />
        </Col>
        <Col lg={4} >
          <CardBuyer 
            id={id}
            produk={product}
          />
          <Profile produk={product}/>
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
