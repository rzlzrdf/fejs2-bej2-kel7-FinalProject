import React from 'react'
import style from './DaftarJual.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import Cardss from '../../Components/Card/Cardss'
import {Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CardProfile from '../../Components/CardProfile/CardProfile'
import PanelKategoriJual from '../../Components/PanelKategoriJual/PanelKategoriJual'
import AllProduk from '../../Components/AllProduk/AllProduk'

function DaftarJual() {
  return (
    <>
      <Navbar />
      <Container className='mt-4'>
        <Row>
          <Col lg={8} md={12} sm={12} className='offset-lg-3'>
            <h4 className='fs-4 fw-bold text-dark mt-4'>Daftar Jual Saya</h4>
            <CardProfile />
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={3} sm={12}>
            <PanelKategoriJual />
          </Col>
          <Col lg={8} md={8} sm={12}>
            <AllProduk />
          </Col>
        </Row>
      </Container>
      
    </>
  )
}

export default DaftarJual
