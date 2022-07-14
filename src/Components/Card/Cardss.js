import React from 'react'
import style from './Cardss.module.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Cardss = (props) => {
  return (
    <Link to='/produk'>
    <Card className={style.wrapper_card + ' shadow-sm'}>
      <Card.Img variant="top" src={props.product.foto_produk_1} className={style.img_} />
      <Card.Body>
        <p className={'fw-bold '+style.title}>{props.product.nama}</p>
        <p className={'text-muted '+style.teks}>
        {props.product.kategori_1 === null ? '' : props.product.kategori_1.nama + ' '}
        {props.product.kategori_2 === null ? '' : props.product.kategori_2.nama + ' '}
        {props.product.kategori_3 === null ? '' : props.product.kategori_3.nama + ' '}
        {props.product.kategori_4 === null ? '' : props.product.kategori_4.nama + ' '}
        {props.product.kategori_5 === null ? '' : props.product.kategori_5.nama + ' '}</p>
        <br/>
        <p className={'fw-bold '+ style.harga}>Rp. {props.product.harga}</p>
      </Card.Body>
    </Card>
    </Link>
  )
}

export default Cardss