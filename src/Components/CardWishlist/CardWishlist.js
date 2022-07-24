import React from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { useSelector } from 'react-redux';
import style from './CardWishlist.module.css'
const CardWishlist = (props) => {

  const { user } = useSelector((state) => state.auth);

    const DeleteHandler = () => {
          axios.delete(`https://secondhandapp.herokuapp.com/api/wishlist/delete/${props.product.id}`,{
            headers:{
              Authorization: user
            },
          })
          .then(res=>{
            console.log(res)
            console.log('berhasil menghapus')
            window.location.reload();
          }).catch(err=>{
            console.log(err)
          })
        }

// props.product.

  return (
    <div>
      <Card>
        <div className={style.gambar}>
          <img src={props.product.foto_produk_1}/>
        </div>
        {/* <Card.Img variant="top" src={props.product.foto_produk_1} className={style.gambar} /> */}
        <Card.Body>
          <p className={'fw-bold '+style.title}>{props.product.nama}</p>
          <span className={'text-muted '+style.teks}>
            {props.product.kategori_1 === null ? '' : props.product.kategori_1 + ' '}
          </span>
          <br/>  
          <p className={'fw-bold '+ style.harga}>Rp. {props.product.harga}</p>
          <button onClick={DeleteHandler}>Hapus</button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardWishlist
