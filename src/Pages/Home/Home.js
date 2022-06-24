import React from 'react'

import KategoriButton from '../../Components/Category/KategoriButton'
import NavbarBack from '../../Components/NavbarBack/NavbarBack'
import { Container, Carousel,Row, Col, Button } from 'react-bootstrap'
import {MdOutlineAdd} from 'react-icons/md'
import TypeAnimation from 'react-type-animation';
import style from './Home.module.css'
import Cardss from '../../Components/Card/Cardss'




const Home = () => {

  return (
    <>
      <NavbarBack/>
        <Carousel className={style.carousel_}>
          <Carousel.Item className={style.fill}>
            <img alt='' src='./Img/1.jpg' className={'d-block w-100 '}/>
            <Carousel.Caption>
              <p className='fw-bold fs-1'>Second Hand</p>
              <h4 className='text-dark'>Special Tahun Baru</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={style.fill}>
            <img alt='' src='./Img/2.jpg' className={'d-block w-100 '}/>
            <Carousel.Caption>
              <p className='fw-bold'>Second Hand</p>
              <h4 className=''>Special Tahun Baru</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={style.fill}>
            <img alt='' src='./Img/3.jpg' className={'d-block w-100 '}/>
            <Carousel.Caption>
              <p className='fw-bolder text-dark'>Second Hand</p>
              <h4 className='text-dark'>Special Tahun Baru</h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12} className={''+ style.wrapper_hero_title}>
          <h1 className='fs-1 fw-bold text-start'>Cari 
            <span> 
            <TypeAnimation
              cursor={true}
              sequence={[' Pakaian',
              4000,
              ' Elektronik',
              4000,
              ' Aksesoris',
              4000,
              ' Gadget',
              4000,
              ' Bahan Dapur',
              4000]}
              wrapper="a"
              repeat={Infinity}
              className='fs-1 fw-bold '
            />
            </span>
          </h1>
          <h1 className='fw-bold fs-1'>Semuanya tersedia disini..</h1>
          </Col>
          <Col lg={6} md={12} sm={12} className={'d-block mt-4'} >
            <h3 className='text-muted'>Telusuri Kategori</h3>
            <div className={' '+style.wrapper_kategori}>
              <KategoriButton text='Gadget'/>
              <KategoriButton text='Token'/>
              <KategoriButton text='Pakaian'/>
              <KategoriButton text='Makanan'/>
              <KategoriButton text='Elektronik'/>
            </div>
            <div className={'mt-3 '+ style.card_container}>
              <Cardss />
              <Cardss />
              <Cardss />
              <Cardss />
              <Cardss />
              <Button variant='dark' className={style.jual}>
                <MdOutlineAdd className={style.add}/><br/>
                  <p className='fs-5 fw-bold'>Jual</p>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      
    </>
  )
}

export default Home
