import React from 'react'
import { Link } from 'react-router-dom'
import style from './PanelMobile.module.css'

const PanelMobile = () => {
  return (
    <select className={style.mobile + ' '}>
      <option><Link to='./'>Semua Produk</Link></option>
      <option><Link to='./'>Disuka</Link></option>
      <option><Link to='./'>Terjual</Link></option>
    </select>
    
  )
}

export default PanelMobile