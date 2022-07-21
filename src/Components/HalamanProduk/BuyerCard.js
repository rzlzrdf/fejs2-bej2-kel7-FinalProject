import React from 'react'
import { Link } from 'react-router-dom'
import style from './Seller-halaman-produk.module.css'

const BuyerCard = (props) => {
  return (
    <div>
      <div className={`card ${style.cards}`} >
        <div className="card-body">
            <p className="card-title fs-5 fw-bolder">{props.produk.nama}</p> 
            <p className="text-muted">
              {/* props.produk.kategori_1.nama tanya kak panca */}
              {props.produk.kategori_1 === null ? '' : props.produk.kategori_1.nama + ' '}
              {props.produk.kategori_2 === null ? '' : props.produk.kategori_2.nama + ' '}
              {props.produk.kategori_3 === null ? '' : props.produk.kategori_3.nama + ' '}
              {props.produk.kategori_4 === null ? '' : props.produk.kategori_4.nama + ' '}
              {props.produk.kategori_5 === null ? '' : props.produk.kategori_5.nama + ' '}
            </p>
            <p className='fs-5 mb-3'>Rp. {props.produk.harga}</p>
            <div className='d-grid gap-2'>
              <Link to='#' type="button" className={` ${style.buttonCards}`}>Terbitkan</Link>
              <Link to='#' type="button" className={` ${style.buttonCardsEdit}`}>Edit</Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default BuyerCard
