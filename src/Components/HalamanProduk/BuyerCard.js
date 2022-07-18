import React from 'react'
import { Link } from 'react-router-dom'
import style from './Seller-halaman-produk.module.css'

const BuyerCard = (props) => {
  return (
    <div>
      <div className={`card ${style.cards}`} >
        <div className="card-body">
            <p className="card-title fs-5 fw-bolder">{props.title}</p>
            <p className="text-muted">{props.category}</p>
            <p className='fs-5 mb-3'>Rp. {props.price}</p>
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
