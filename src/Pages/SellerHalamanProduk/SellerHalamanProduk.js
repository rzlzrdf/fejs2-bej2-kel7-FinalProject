import React from 'react'
import Cards from '../../Components/Seller-halaman-produk/Cards'
import Corousel from '../../Components/Seller-halaman-produk/Corousel'
import Deskripsi from '../../Components/Seller-halaman-produk/Deskripsi'
import Profile from '../../Components/Seller-halaman-produk/Profile'
import  NavbarNoSearch from '../../Components/NavbarNoSearch/NavbarNoSearch'
import { Col, Container, Row } from 'react-bootstrap'


const SellerHalamanProduk = () => {
  return (
    <>
    <NavbarNoSearch title='Detail Produk' />
    <Container className=''>
      <Row>
        <Col lg={{span:6, offset: 1}}>
          <Corousel/>
        </Col>
        <Col lg={4}>
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
