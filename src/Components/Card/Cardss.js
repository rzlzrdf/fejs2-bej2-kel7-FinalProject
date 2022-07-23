import React from 'react'
import style from './Cardss.module.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Cardss = (props) => {
  return (
    <Link to={`/produk/${props.product.id}`}>
    <Card className={style.wrapper_card + ' shadow-sm'}>
      <div className={style.gambar}>
        <img src={props.product.foto_produk_1}/>
      </div>
      {/* <Card.Img variant="top" src={props.product.foto_produk_1} className={style.gambar} /> */}
      <Card.Body>
        <p className={'fw-bold '+style.title}>{props.product.nama}</p>
        <span className={'text-muted '+style.teks}>
          {props.product.kategori_1 === null ? '' : props.product.kategori_1.nama + ' '}
          {props.product.kategori_2 === null ? '' : props.product.kategori_2.nama + ' '}
          {props.product.kategori_3 === null ? '' : props.product.kategori_3.nama + ' '}
          {props.product.kategori_4 === null ? '' : props.product.kategori_4.nama + ' '}
          {props.product.kategori_5 === null ? '' : props.product.kategori_5.nama + ' '}
        </span>
        <br/>  
        <p className={'fw-bold '+ style.harga}>Rp. {props.product.harga}</p>
      </Card.Body>
    </Card>
    </Link>
  )
}

export default Cardss