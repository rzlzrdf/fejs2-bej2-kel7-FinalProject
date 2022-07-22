import React from 'react'
import { Link } from 'react-router-dom'
import style from './PanelMobile.module.css'

const PanelMobile = () => {
  return (
    <div className={style.panel}>
      <Link to='' className={style.mobile}>Semua Produk</Link>
      <Link to='disukai' className={style.mobile}>Disuka</Link>
      <Link to='terjual' className={style.mobile}>Terjual</Link>
      <Link to='wishlist' className={style.mobile}>Wishlist</Link>
    </div>    
  )
}

export default PanelMobile