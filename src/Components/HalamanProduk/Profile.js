import React from 'react'
import style from './Seller-halaman-produk.module.css'

const Profile = (props) => {
  console.log(props.produk.user)
  return (
    <div className={`d-flex ${style.Card_Profile} align-items-center`}>
      <div className={style.pict}>
        { props.produk.user.foto_profil !== null ?
          <img  src={props.produk.user.foto_profil} alt=''/> :  <img  src={'https://dummyimage.com/400x400/8f548f/ffffff.png&text=User'} alt='' />
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
