import React from 'react'
import style from './Seller-halaman-produk.module.css'
const Deskripsi = (props) => {
  return (
    <div>
      <div className={`border ${style.deskripsi}`}>
            <h6><b>Deskripsi</b></h6>
            <p>
              {props.desc}
            </p>
        </div>
    </div>
  )
}

export default Deskripsi
