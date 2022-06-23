import React from 'react'
import Cards from '../Components/Seller-halaman-produk/Cards'
import Corousel from '../Components/Seller-halaman-produk/Corousel'
import Deskripsi from '../Components/Seller-halaman-produk/Deskripsi'
import Profile from '../Components/Seller-halaman-produk/Profile'
import style from './SellerHalamanProduk.module.css'

const SellerHalamanProduk = () => {
  return (
    <div className='container d-flex justify-content-center'>
      <div className=''>
        <Corousel/>
        <Deskripsi/>
      </div>
    <div className={`${style.right}`}>
        <Cards/>
        <Profile/>
      </div>
    </div>
  )
}

export default SellerHalamanProduk