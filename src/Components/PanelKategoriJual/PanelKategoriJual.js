import React from 'react'
import {Card,  Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import style from './PanelKategoriJual.module.css'
import {FaBox,FaHeart,FaDollarSign, FaAngleRight} from 'react-icons/fa'


const PanelKategoriJual = () => {
  return (
    <>
    <div className='d-lg-block d-md-none d-sm-none'>
      <Card className={style.card}>
         <h5 className=' fw-bold'>Kategori</h5>
         <Link to='/daftar-jual'><button className={style.btn_}>Semua Produk<FaAngleRight /></button></Link>
         <Link to='/daftar-jual'><button className={style.btn_}>Diminati<FaAngleRight /></button></Link>
         <Link to='/daftar-jual'><button className={style.btn_}>Terjual<FaAngleRight /></button></Link>
      </Card>
    </div>
    <div className='d-lg-none d-md-flex'></div>
    </>
  )
}

export default PanelKategoriJual