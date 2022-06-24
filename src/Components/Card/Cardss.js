import React from 'react'
import style from './Cardss.module.css'
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';


const Cardss = () => {
  return (
    <Link to='/halaman-produk'>
    <Card className={style.wrapper_card + ' shadow-sm'}>
      <Card.Img variant="top" src="./Img/Rectangle.png" className={style.img_} />
      <Card.Body>
        <Card.Title>Jam Tangan Casio</Card.Title>
        <Card.Text className={'text-muted '+style.teks}>
          Aksesoris
        </Card.Text>
        <Card.Text className={'fs-5 fw-bold '+ style.harga}>
          Rp. 250.000
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
  )
}

export default Cardss