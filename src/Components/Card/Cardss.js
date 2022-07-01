import React from 'react'
import style from './Cardss.module.css'
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';


const Cardss = ({item}) => {
  return (
    <Link to='/halaman-produk'>
    <Card className={style.wrapper_card + ' shadow-sm'}>
      <Card.Img variant="top" src="./Img/Rectangle.png" className={style.img_} />
      <Card.Body>
        <p className='fw-bold fs-6'>Jam Tangan Casio</p>
        <Card.Text className={'text-muted '+style.teks}>
        {item.category}
        </Card.Text>
        <Card.Text className={'fs-6 fw-bold '+ style.harga}>
        {item.price}
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
  )
}

export default Cardss