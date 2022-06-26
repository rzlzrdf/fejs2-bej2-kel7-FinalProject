import React from 'react'

import KategoriButton from '../../Components/Category/KategoriButton'
import NavbarBack from '../../Components/NavbarBack/NavbarBack'
import { Container, Carousel,Row, Col, Button } from 'react-bootstrap'
import {TbPlayerTrackNext} from 'react-icons/tb'
import TypeAnimation from 'react-type-animation';
import style from './Home.module.css'
import Cardss from '../../Components/Card/Cardss'
// import NavbarBack from '../../Components/NavbarBack/NavbarBack'
import Navbar from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'




const Home = () => {

  return (
    <>
      <Navbar />
        <Carousel className={style.carousel_}>
          <Carousel.Item className={style.fill}>
            <img alt='' src='./Img/a.jpg' className={'d-block w-100 '}/>
            <Carousel.Caption>
              <p className='fw-bolder fs-1'>Second Hand</p>
              <h4 className='text-dark'>#1 E-Commerce in Indonesia</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={style.fill}>
            <img alt='' src='./Img/aa.jpg' className={'d-block w-100 '}/>
            <Carousel.Caption>
              <p className='fw-bolder fs-1'>Second Hand</p>
              <h4 className='text-dark'>#1 E-Commerce in Indonesia</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={style.fill}>
            <img alt='' src='./Img/aaa.jpg' className={'d-block w-100 '}/>
            <Carousel.Caption>
              <p className='fw-bolder fs-1'>Second Hand</p>
              <h4 className='text-dark'>#1 E-Commerce in Indonesia</h4>
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
          <h1 className='fw-bold fs-2'>Semuanya tersedia disini..</h1>
          <h5 className={style.atau}>--atau--</h5>
          <img src='./Img/3d-model-2.png' alt='' className={style.hero3d} />
          <div className={' ' + style.hero_title_2}>
            <h4 className='fs-5 fw-bold '>pengen <Link to='/info-produk' className={'fs-1 fw-bolder ' + style.btnjual}> Jual </Link>produkmu</h4>
            <h5 className='fw-bold'>cepet laku ?</h5>
          </div>
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
                <TbPlayerTrackNext className={style.next}/>
                  <p className='fs-5 fw-bold'>Lainnya</p>
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            
          </Col>
        </Row>
      </Container>
      
    </>
  )
}

export default Home
