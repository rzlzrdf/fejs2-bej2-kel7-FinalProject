import React from 'react'
import style from './Cardss.module.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Cardss = (props) => {
  return (
    <Link to={`/all/${props.id}`}>
    <Card className={style.wrapper_card + ' shadow-sm'}>
      <img variant="top" src={props.foto_produk_1}/>
      <div className={style.labels}>
        <p className={'fw-bold '+style.title}>{props.nama}</p>
        <p className={'text-muted '+style.teks}>
          {props.kategori_1 === null ? '' : props.kategori_1.nama + ' '}
          {props.kategori_2 === null ? '' : props.kategori_2.nama + ' '}
          {props.kategori_3 === null ? '' : props.kategori_3.nama + ' '}
          {props.kategori_4 === null ? '' : props.kategori_4.nama + ' '}
          {props.kategori_5 === null ? '' : props.kategori_5.nama + ' '}
        </p>
        <br/>  
        <p className={'fw-bold '+ style.harga}>Rp. {props.harga}</p>
      </div>
    </Card>
    </Link>
  )
}

export default Cardss