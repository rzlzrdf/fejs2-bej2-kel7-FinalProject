import React from 'react'
import { useSelector } from 'react-redux' 
import Corousel from '../../Components/Seller-halaman-produk/Corousel'
import Deskripsi from '../../Components/Seller-halaman-produk/Deskripsi'
import CardBuyer from '../../Components/Seller-halaman-produk'
import Profile from '../../Components/Seller-halaman-produk/Profile'
import { Col, Container, Row } from 'react-bootstrap'
import NavbarSearch from '../../Components/NavbarSearch/NavbarSearch'

const BuyerHalamanProduk = () => {

  const {user} = useSelector((state) => state.auth)

  return (
    <div>
      <NavbarSearch/>
      <Container>
      <Row>
        <Col lg={{offset: 1, span: 6}}>
          <Corousel />
        </Col>
        <Col lg={4} >
          <Profile/>
        </Col>
      </Row>
      <Row>
        <Col lg={{span:6, offset: 1}}>
          <CardBuyer/>
        <Deskripsi/>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default BuyerHalamanProduk
