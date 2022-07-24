import React from 'react'
import style from './Cardss.module.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Cardss = (props) => {
  return (
    <Link to={`/produk/${props.id}`}>
    <Card className={style.wrapper_card + ' shadow-sm'}>
      <img variant="top" src={props.foto_produk_1}/>
      <div className={style.labels}>
        <p className={'fw-bold '+style.title}>{props.nama}</p>
        <span className={'text-muted '+style.teks}>
          {props.kategori_1 === undefined ? '' : props.kategori_1 + ' '}
          {props.kategori_2 === undefined ? '' : props.kategori_2 + ' '}
          {props.kategori_3 === undefined ? '' : '.'}
          {props.kategori_4 === undefined ? '' : '.'}
          {props.kategori_5 === undefined ? '' : '.'}
        </span>
        <br/>  
        <p className={'fw-bold '+ style.harga}>Rp. {new Intl.NumberFormat("id-ID", {
              currency: "IDR",
            }).format(props.harga)}</p>
      </div>
    </Card>
    </Link>
  )
}

export default Cardss