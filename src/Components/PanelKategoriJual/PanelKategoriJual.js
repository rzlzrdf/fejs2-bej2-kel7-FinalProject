import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import style from './PanelKategoriJual.module.css'
import {FaAngleRight} from 'react-icons/fa'


const PanelKategoriJual = () => {
  return (
    <Card className={style.card}>
      <Link to='' className={style.btn_}>Semua Produk<FaAngleRight /></Link>
      <Link to='disukai' className={style.btn_}>Disukai<FaAngleRight /></Link>
      <Link to='terjual' className={style.btn_}>Terjual<FaAngleRight /></Link>
    </Card>
  )
}

export default PanelKategoriJual