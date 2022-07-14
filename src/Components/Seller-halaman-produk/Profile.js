import React from 'react'
import style from './Seller-halaman-produk.module.css'

const Profile = (props) => {
  return (
    <div className={`d-flex ${style.Card_Profile} align-items-center`}>
      <div className='pict'>
        <img src='Img/Rectangle_33.png'  alt=''/>
      </div>
      <div className={`${style.profile}`}>
        <h6><b>Nama Penjual</b></h6>
        <span>Lokasi</span>
      </div>
    </div>
  )
}

export default Profile
