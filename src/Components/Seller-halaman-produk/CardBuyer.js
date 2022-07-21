import React, {useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import style from './Seller-halaman-produk.module.css'
import { AiFillStar } from 'react-icons'

const CardBuyer = (props) => {

  const params = useParams()
  const [wishlist, setWishlist] = useState(false)

  const DeleteHandler = () => {
    setWishlist(!wishlist)
    axios.delete(`https://secondhandapp.herokuapp.com/api/wishlist/delete/${params.id}`,{
      // Headers:{
      //   Authorization:
      // },
    })
    .then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(TypeError)
    })
  }

  return (
    <div>
      <div className={`card ${style.cards}`} >
        <div className="card-body">
            <div className='d-flex flex-row justify-content-between'>
              <p className="card-title fs-5 fw-bolder">{props.produk.nama}</p> 
              <div>
                <AiFillStar />
              </div>
            </div>
            <p className="text-muted">
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

export default CardBuyer
