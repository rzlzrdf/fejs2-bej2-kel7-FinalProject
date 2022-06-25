import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import style from './PanelKategoriJual.module.css'
import {FaAngleRight} from 'react-icons/fa'


const PanelKategoriJual = () => {
  return (
    <Card className={style.card}>
      <Link to='/daftar-jual' className={style.btn_}>Semua Produk<FaAngleRight /></Link>
      <Link to='/daftar-jual' className={style.btn_}>Diminati<FaAngleRight /></Link>
      <Link to='/daftar-jual' className={style.btn_}>Terjual<FaAngleRight /></Link>
    </Card>
  )
}

export default PanelKategoriJual