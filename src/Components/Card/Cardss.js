import React from 'react'
import style from './Cardss.module.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Cardss = (props) => {
  return (
    <Link to={`/produk/${props.id}`}>
    <Card className={style.wrapper_card + ' shadow-sm'}>
      <div className={style.gambar}>
        <img src={props.img ? props.img : "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"} />
      </div>
      <div className={style.label}>
        <p className={'fw-bold '+style.title}>{props.nama}</p>
        <span className={'text-muted '+style.teks}>
        {props.kategori_1} {props.kategori_2} {props.kategori_3}{props.kategori_4}{props.kategori_5}
        </span>
        <br/>
        <p className={'fw-bold '+ style.harga}>Rp. {props.harga}</p>
      </div>
    </Card>
    </Link>
  )
}

export default Cardss