import React, {useState} from 'react'
import KategoriButton from '../../Components/Category/KategoriButton'
import NavbarBack from '../../Components/NavbarBack/NavbarBack'
import { Container, Carousel,Row, Col, Button } from 'react-bootstrap'
import {TbPlayerTrackNext} from 'react-icons/tb'
import TypeAnimation from 'react-type-animation';
import style from './Home.module.css'
import Cardss from '../../Components/Card/Cardss'
// import NavbarBack from '../../Components/NavbarBack/NavbarBack'
import Navbar from '../../Components/Navbar/Navbar'




const Home = () => {

  const [listNotif,setListNotif] = useState([{id:1,image:'/Img/jam.svg',date:'20 Apr, 14:04',name:'Jam Tangan Casio',title:'Penawaran produk',price:'Rp 250.000', desc:'Ditawar Rp 200.000',link:'#/action-1'},{id:2,image:'/Img/jam.svg',date:'20 Apr, 14:04',name:'Jam Tangan Casio',title:'Berhasil di terbitkan',price:'Rp 300.000', desc:'Ditawar Rp 250.000',link:'#/action-2'}])
  const [listProduct, setListProduct]= useState([{id:1,image:'/Img/jam.svg',name:'Jam Tangan Casio 1', category:'Aksesoris', price:'Rp 251.000'},{id:2,image:'/Img/jam.svg',name:'Jam Tangan Casio 2', category:'Aksesoris', price:'Rp 252.000'},{id:3,image:'/Img/jam.svg',name:'Jam Tangan Casio 3', category:'Aksesoris', price:'Rp 253.000'},{id:4,image:'/Img/jam.svg',name:'Jam Tangan Casio 3', category:'Aksesoris', price:'Rp 253.000'}])


  return (
    <>
      <Navbar data={listNotif} />
        <Carousel className={style.carousel_}>
          <Carousel.Item className={style.fill}>
            <img alt='' src='./Img/1.jpg' className={'d-block w-100 '}/>
            <Carousel.Caption>
              <p className='fw-bolder fs-1'>Second Hand</p>
              <h4 className='text-dark'>#1 E-Commerce in Indonesia</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={style.fill}>
            <img alt='' src='./Img/2.jpg' className={'d-block w-100 '}/>
            <Carousel.Caption>
              <p className='fw-bolder fs-1'>Second Hand</p>
              <h4 className='text-dark'>#1 E-Commerce in Indonesia</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={style.fill}>
            <img alt='' src='./Img/3.jpg' className={'d-block w-100 '}/>
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
            {listProduct?.length ===0 ?
                                <div className='d-flex flex-column justify-content-center align-items-center'>
                                   <div><img alt='' src='./Img/empty-illustration.png' className='d-block w-75 mx-auto'/> </div>
                                <div className='col-6 mt-5'><h5 className='text-center fw-normal'>Belum ada produkmu yang diminati nih, sabar ya rejeki nggak kemana kok</h5></div>
                                </div>: listProduct.map((e, i) => {
                                return (
                                    <Col md={4} lg={3} sm={12} className='mb-4'><Cardss item={e}/></Col>
                                )
                            })}
              <Button variant='dark' className={style.jual}>
                <TbPlayerTrackNext className={style.next}/>
                  <p className='fs-5 fw-bold'>Lainnya</p>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      
    </>
  )
}

export default Home
