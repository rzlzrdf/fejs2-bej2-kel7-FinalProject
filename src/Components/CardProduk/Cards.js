import React from 'react'
import cardstyle from './Cards.module.css'

const Cards = (props) => {
  return (
    // img, Nama barang, harga sama kategori nanti dari API
    <div>
      <div className={`card ${cardstyle.card}`} >
        <img src={props.src} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h6 className="card-title fw-bold">{props.title}</h6>
            <p className="card-text">{props.category}</p>
            <h6>Rp. {props.price}</h6>
        </div>
     </div>
    </div>
  )
}

export default Cards
