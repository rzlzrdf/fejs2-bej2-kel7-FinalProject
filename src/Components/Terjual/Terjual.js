import React, { useEffect, useState } from "react";
import axios from "axios";
import Kartu from '../Card/Kartu'
import Loading from "../Loading/Loading";
import style from './Terjual.module.css'
import { useSelector } from "react-redux";


const Terjual = () => {
  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(true)
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    axios
      .get('https://secondhandapp.herokuapp.com/api/product/terjual', {
        headers: {
          Authorization:
            user,
        },
      })
      .then((response) => {
        console.log(response.data.product)
        setLoading(false)
        setProducts(response.data.product)
      });
  }, []);


  return (
    <div className={style.wrapper_card}>
       {loading ? (<Loading/>) :(
    <div className={style.wrapper_card}>
    {
      products.length==0 ?
       (<h5 className="fw-light text-muted">Belum ada produk disini</h5>) : 
      products?.map((data,index) => {
        return(
          <Kartu 
            key={index}
            id={data.id_produk}
            foto_produk_1={data.foto_produk_1}
            nama={data.nama}
            kategori_1={data.kategori_1}
            harga={data.harga}
          />
      )
      })
    }
    </div>)}
    </div>
  )
}

export default Terjual