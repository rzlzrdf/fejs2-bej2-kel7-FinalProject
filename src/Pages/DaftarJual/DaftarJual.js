import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {Outlet} from 'react-router-dom'
import style from './DaftarJual.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import CardProfile from '../../Components/CardProfile/CardProfile'
import PanelKategoriJual from '../../Components/PanelKategoriJual/PanelKategoriJual'
import PanelMobile from '../../Components/PanelKategoriJual/PanelMobile'

function DaftarJual() {
  return (
    <>
      <Navbar />
      <Container className='mt-4'>
        <Row>
          <Col lg={8} md={12} sm={12} className='offset-lg-3'>
            <h4 className='fs-4 fw-bold text-dark mt-4'>Daftar Jual Saya</h4>
            <CardProfile className={style.profile_card}/>
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={12} sm={12} xs={12} className={style.container_panel}>
            <h5 className=' fw-bold mt-4'>Kategori</h5>
            <PanelKategoriJual />
            <PanelMobile />
          </Col>
          <Col lg={8} md={12} sm={12}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default DaftarJual
