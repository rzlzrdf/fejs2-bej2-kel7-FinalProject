import React from 'react'
import Cards from '../../Components/Seller-halaman-produk/Cards'
import Corousel from '../../Components/Seller-halaman-produk/Corousel'
import Deskripsi from '../../Components/Seller-halaman-produk/Deskripsi'
import Profile from '../../Components/Seller-halaman-produk/Profile'
import { Col, Container, Row } from 'react-bootstrap'
import NavbarSearch from '../../Components/NavbarSearch/NavbarSearch'

const SellerHalamanProduk = () => {
  return (
    <>
    <NavbarSearch/>
    <Container>
      <Row>
        <Col lg={{offset: 1, span: 6}}>
          <Corousel/>
        </Col>
        <Col lg={4} >
          <Cards title={'Casio'} category={'Aksesoris'} price={'250.000'}/>
          <Profile/>
        </Col>
      </Row>
      <Row>
        <Col lg={{span:6, offset: 1}}>
        <Deskripsi/>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default SellerHalamanProduk
