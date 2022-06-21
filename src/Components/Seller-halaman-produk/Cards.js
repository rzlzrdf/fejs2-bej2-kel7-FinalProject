import React from 'react'
import style from './Seller-halaman-produk.module.css'

const Cards = () => {
  return (
    <div>
      <div className={`card ${style.cards}`} >
        <div className="card-body">
            <h5 className="card-title"><b>Jam Tangan Casio</b></h5>
            <p className="card-text">Kategori</p>
            <h5><b>Rp 250.000</b></h5>
            <div className='d-grid gap-2'>
              <button type="button" className={` ${style.buttonCards}`}>Secondary</button>
              <button type="button" className={` ${style.buttonCardsEdit}`}>Edit</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Cards
