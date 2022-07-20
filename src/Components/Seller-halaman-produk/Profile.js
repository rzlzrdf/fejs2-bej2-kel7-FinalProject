import React from 'react'
import style from './Seller-halaman-produk.module.css'

const Profile = (props) => {
  console.log(props.produk.user)
  return (
    <div className={`d-flex ${style.Card_Profile} align-items-center`}>
      <div className='pict'>
        { props.produk.user.foto_profil !== null &&
          <img src={props.produk.user.foto_profil}  alt=''/>
        }
      </div>
      <div className={`${style.profile}`}>
        <h6><b>{props.produk.user.nama}</b></h6>
        <span>{props.produk.user.kota}</span>
      </div>
    </div>
  )
}

export default Profile
