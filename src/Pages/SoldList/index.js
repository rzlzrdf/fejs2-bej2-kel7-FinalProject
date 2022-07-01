import React, {useState} from 'react'
import style from './SoldList.css'
import Navbar from '../../Components/Navbar/Navbar'
import {Container, Row, Col} from 'react-bootstrap'
import CardProfile from '../../Components/CardProfile/CardProfile'
import PanelKategoriJual from '../../Components/PanelKategoriJual/PanelKategoriJual'
import AllProduk from '../../Components/AllProduk/AllProduk'
import PanelMobile from '../../Components/PanelKategoriJual/PanelMobile'
import Cardss from "../../Components/Card/Cardss";

function SoldList() {
    const [listNotif,setListNotif] = useState([{id:1,image:'/Img/jam.svg',date:'20 Apr, 14:04',name:'Jam Tangan Casio',title:'Penawaran produk',price:'Rp 250.000', desc:'Ditawar Rp 200.000',link:'#/action-1'},{id:2,image:'/Img/jam.svg',date:'20 Apr, 14:04',name:'Jam Tangan Casio',title:'Berhasil di terbitkan',price:'Rp 300.000', desc:'Ditawar Rp 250.000',link:'#/action-2'}])
    const [listProduct, setListProduct]= useState([{id:1,image:'/Img/jam.svg',name:'Jam Tangan Casio 1', category:'Aksesoris', price:'Rp 251.000'},{id:2,image:'/Img/jam.svg',name:'Jam Tangan Casio 2', category:'Aksesoris', price:'Rp 252.000'},{id:3,image:'/Img/jam.svg',name:'Jam Tangan Casio 3', category:'Aksesoris', price:'Rp 253.000'},{id:4,image:'/Img/jam.svg',name:'Jam Tangan Casio 3', category:'Aksesoris', price:'Rp 253.000'}])
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
                    <Col md={2} sm={12} className={`${style.container_panel} mb-4`}>
                        <h5 className=' fw-bold mt-4'>Kategori</h5>
                        <PanelKategoriJual/>
                        <PanelMobile/>
                    </Col>
                    <Col  md={10} sm={12} className={style.container_card}>
                        {/*<AllProduk />*/}
                        <Row style={{marginTop:'30px'}}>
                            {listProduct?.length ===0 ?
                                <div className='d-flex flex-column justify-content-center align-items-center'>
                                   <div><img alt='' src='./Img/empty-illustration.png' className='d-block w-75 mx-auto'/> </div>
                                <div className='col-6 mt-5'><h5 className='text-center fw-normal'>Belum ada produkmu yang diminati nih, sabar ya rejeki nggak kemana kok</h5></div>
                                </div>: listProduct.map((e, i) => {
                                return (
                                    <Col md={4} lg={3} sm={12} className='mb-4'><Cardss item={e}/></Col>
                                )
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default SoldList
