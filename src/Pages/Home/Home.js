import React, { useEffect, useState } from 'react'
import KategoriButton from '../../Components/Category/KategoriButton'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import {TbPlayerTrackNext, TbHeartHandshake, TbArrowBack, TbTruckDelivery, TbFreeRights} from 'react-icons/tb'
import {FiPlus} from 'react-icons/fi'
import TypeAnimation from 'react-type-animation';
import style from './Home.module.css'
import Cardss from '../../Components/Card/Cardss'
import { Link } from 'react-router-dom'
import CarouselHome from '../../Components/CarouserHome/CarouselHome'
import NavbarSearch from '../../Components/NavbarSearch/NavbarSearch';
import { useSelector } from "react-redux";
import Loading from '../../Components/Loading/Loading'
import axios from 'axios'




const Home = () => {

  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState([])
  const { user } = useSelector((state) => state.auth);

  let idr=Intl.NumberFormat('id-ID')

  useEffect(()=> {
    setLoading(true)
    if(user){
       axios
       .get('https://secondhandapp.herokuapp.com/api/product/all?page=0&size=13', {headers:{Authorization:user}})
          .then((res) => {
             setLoading(false)
             console.log(res.data.content)
             setProduct(res.data.content)
          })
    } else {
       axios
       .get('https://secondhandapp.herokuapp.com/api/product/all?page=0&size=13')
          .then(res => {
             setLoading(false)
             console.log(res.data.content)
             setProduct(res.data.content)
          })
    }
 }, [])

  return (
    <>
      <NavbarSearch />
      <CarouselHome />
      <Container>
        <Row>
          {/* Kategori */}
          <Col lg={7} md={12} sm={12} className={'d-block mt-4'} >
            <h3 className='text-muted'>Telusuri Kategori</h3>
            <div className={' '+style.wrapper_kategori}>
              <KategoriButton text='Gadget'/>
              <KategoriButton text='Token'/>
              <KategoriButton text='Pakaian'/>
              <KategoriButton text='Makanan'/>
              <KategoriButton text='Elektronik'/>
              <KategoriButton text='Baju'/>
              <KategoriButton text='Pakaian Wanita'/>
              <KategoriButton text='Baju Anak'/>
              <KategoriButton text='Alat tulis'/>
              <KategoriButton text='Sparepart'/>
              <KategoriButton text='Obat'/>
              <KategoriButton text='Peralatan'/>
              <KategoriButton text='Mebel'/>
              <KategoriButton text='Sepatu'/>
            </div>
          </Col>
          {/* Animation */}
          <Col lg={5} md={12} sm={12} className={'mt-4 '+ style.wrapper_hero_title}>
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
              className={'fs-1 fw-bold '+ style.anim }
            />
            </span>
          </h1>
          <h1 className='fw-bold fs-2'>Semuanya tersedia disini..</h1>
          </Col>
        </Row>
        <Row>
          {/* Card Produk */}
          <Col lg={12} >
          <div className={'mt-3 '+ style.card_container}>
              {/*nanti tinggal gunakan method .map dari json endpoint untuk menampilkan isi card sebanyak x */}
              {loading ? (<Loading/>) :
                  product.map( (product, i) => (
                     <Cardss
                     key={i}
                     id={product.id}
                     nama={product.nama}
                     kategori_1={product.kategori_1 !== null ? product.kategori_1.nama : ''}
                     kategori_2={product.kategori_2 !== null ? product.kategori_2.nama : ''}
                     kategori_3={product.kategori_3 !== null ? '.' : ''}
                     kategori_4={product.kategori_4 !== null ? '.' : ''}
                     kategori_5={product.kategori_5 !== null ? '.' : ''}
                     harga={idr.format(product.harga)}
                     img={product.foto_produk_1} />
               ))}
              <Link to='/all'>
              <Button variant='dark' className={style.jual}> {/* ganti link to pages yg deden buat*/ }
                <TbPlayerTrackNext className={style.next}/>
                  <p className='fs-5 fw-bold'>Lainnya</p>
              </Button>
              </Link>
            </div>
          </Col>
          <Button className={style.btn_jual}><Link to='/info-produk' className='text-light'><FiPlus/> Jual</Link></Button>
        </Row>
        <Row>
          <Col lg={12} className='mt-4'>
            <h3 className='fw-bold my-3'>Keuntungan Jual/Beli di Second Hand</h3>
          </Col>
        </Row>
        {/* Card Keuntungan */}
        <Row className='my-4'>
          <Col lg={3} sm={6} xs={12}>
            <Card className={'text-center p-3 ' + style.benefitCard}>
              <Card.Title>
                <TbHeartHandshake className='fs-1'/>
              </Card.Title>
              <Card.Body>
                <h5>Tawar menawar langsung sampai deal</h5>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} sm={6} xs={12}>
            <Card className={'text-center p-3 '+ style.benefitCard}>
              <Card.Title>
                <TbArrowBack className='fs-1'/>
              </Card.Title>
              <Card.Body>
                <h5>Jaminan barang kembali apabila tidak sesuai</h5>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} sm={6} xs={12}>
            <Card className={'text-center p-3 '+ style.benefitCard}>
              <Card.Title>
                <TbTruckDelivery className='fs-1'/>
              </Card.Title>
              <Card.Body>
                <h5>Gratis ongkir ke pulau Jawa dan Bali</h5>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} sm={6} xs={12}>
            <Card className={'text-center p-3 '+ style.benefitCard}>
              <Card.Title>
                <TbFreeRights className='fs-1'/>
              </Card.Title>
              <Card.Body>
                <h5>Gratis pasang iklan produkmu sampai laku</h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Bikin Akun */}
        <Row className={'' + style.daftarsekarang}>
          <Col lg={6} xs={12}>
            {user === null && <h1 className={'text-muted text-end '+style.textDaftar}>Bikin akunmu sekarang juga!</h1>}
            {user === null && <Link to={'/register'}><Button variant='dark' className={'fw-bold '+style.daftarBtn}>Daftar</Button></Link>}
            {user !== null && <h1 className={'text-muted text-end '+style.textDaftar}>Selamat Datang</h1>}
          </Col>
          <Col lg={6} xs={12}>
            <img src='./Img/2a.png' alt='' className={style.daftarImg} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
