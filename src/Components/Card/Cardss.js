import React from 'react'
import style from './Cardss.module.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Cardss = (props) => {
  return (
    <Link to='/halaman-produk'>
    <Card className={style.wrapper_card + ' shadow-sm'}>
      <Card.Img variant="top" src={props.img} className={style.img_} />
      <Card.Body>
        <p className={'fw-bold '+style.title}>{props.title}</p>
        <p className={'text-muted '+style.teks}>{props.category}</p>
        <p className={'fw-bold '+ style.harga}>Rp. {props.price}</p>
      </Card.Body>
    </Card>
    </Link>
  )
}

export default Cardss