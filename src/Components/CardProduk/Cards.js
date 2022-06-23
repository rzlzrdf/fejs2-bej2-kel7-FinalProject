import React from 'react'
import cardstyle from './Cards.module.css'

const Cards = () => {
  return (
    // img, Nama barang, harga sama kategori nanti dari API
    <div>
      <div className={`card ${cardstyle.card}`} >
        <img src="Img/Tea.png" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h6 className="card-title fw-bold">Nama Barang</h6>
            <p className="card-text">Furnitur</p>
            <h6>Rp. 500.000</h6>
        </div>
     </div>
    </div>
  )
}

export default Cards
