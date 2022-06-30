import React from 'react'
import Cards from '../../Components/Seller-halaman-produk/Cards'
import Corousel from '../../Components/Seller-halaman-produk/Corousel'
import Deskripsi from '../../Components/Seller-halaman-produk/Deskripsi'
import Profile from '../../Components/Seller-halaman-produk/Profile'
import style from './SellerHalamanProduk.module.css'
import NavbarBack from '../../Components/NavbarBack/NavbarBack'


const SellerHalamanProduk = () => {
  return (
    <>
    <NavbarBack />
      <div className='container d-sm-flex justify-content-center mt-4'>
        <div className={''}>
          <Corousel/>
          <Deskripsi/>
        </div>
        <div className={`${style.right}`}>
          <Cards/>
          <Profile/>
        </div>
      </div>
    </>
  )
}

export default SellerHalamanProduk
