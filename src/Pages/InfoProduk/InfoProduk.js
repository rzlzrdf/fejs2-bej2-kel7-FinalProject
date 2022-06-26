import React from 'react'
import FormProduk from '../../Components/FormProduk/FormProduk'
import NavbarNoSearch from '../../Components/NavbarNoSearch/NavbarNoSearch'
import style from './InfoProduk.module.css'

export const InfoProduk = () => {
  return (
     <div className={style.produk}>
         <NavbarNoSearch title='Info Produk'/>
         <FormProduk />
     </div>
  )
}

export default InfoProduk
