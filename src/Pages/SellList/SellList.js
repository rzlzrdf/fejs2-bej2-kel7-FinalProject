import React,{useState} from 'react'
import style from './SellList.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import {Container, Row, Col} from 'react-bootstrap'
import CardProfile from '../../Components/CardProfile/CardProfile'
import PanelKategoriJual from '../../Components/PanelKategoriJual/PanelKategoriJual'
import AllProduk from '../../Components/AllProduk/AllProduk'
import PanelMobile from '../../Components/PanelKategoriJual/PanelMobile'

function SellList() {
  const [listNotif,setListNotif] = useState([{id:1,image:'/Img/jam.svg',date:'20 Apr, 14:04',name:'Jam Tangan Casio',title:'Penawaran produk',price:'Rp 250.000', desc:'Ditawar Rp 200.000',link:'#/action-1'},{id:2,image:'/Img/jam.svg',date:'20 Apr, 14:04',name:'Jam Tangan Casio',title:'Berhasil di terbitkan',price:'Rp 300.000', desc:'Ditawar Rp 250.000',link:'#/action-2'}])

  const [listProduct, setListProduct]= useState([{id:1,image:'/Img/jam.svg',name:'Jam Tangan Casio 1', category:'Aksesoris', price:'Rp 251.000'},{id:2,image:'/Img/jam.svg',name:'Jam Tangan Casio 2', category:'Aksesoris', price:'Rp 252.000'},{id:3,image:'/Img/jam.svg',name:'Jam Tangan Casio 3', category:'Aksesoris', price:'Rp 253.000'}])
  return (
    <>
      <Navbar data={listNotif}/>
      <Container className='mt-4'>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <h4 className='fs-4 fw-bold text-dark mt-4'>Daftar Jual Saya</h4>
            <CardProfile className={style.profile_card}/>
          </Col>
        </Row>
        <Row>
          <Col md={2} sm={12}  className={style.container_panel}>
            <h5 className=' fw-bold mt-4'>Kategori</h5>
            <PanelKategoriJual />
            <PanelMobile />
          </Col>
          <Col md={10} sm={12} className={style.container_card}>
            <AllProduk data={listProduct}/>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default SellList
