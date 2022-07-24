import React, { useEffect, useState } from "react";
import axios from "axios";
import Kartu from '../Card/Kartu'
import style from './Disukai.module.css'
import Loading from "../Loading/Loading";
import { useSelector } from "react-redux";


const Disukai = () => {

  const [products, setProducts] = useState(null)
  const [loading, setLoading] =useState(true)
  const { user } = useSelector((state) => state.auth);


  useEffect(() => {
    axios
      .get('https://secondhandapp.herokuapp.com/api/product/disukai', {
        headers: {
          Authorization:
           user,
        },
      })
      .then((response) => {
        console.log(response.data.disukai);
        setLoading(false)
        setProducts(response.data.disukai)
      });
  }, []);


  return (
    <>
    {loading ? (<Loading/>) :(
    <div className={style.wrapper_card}>
    {
      products===null ? 
      (<h5 className="fw-light text-muted mt-4">Belum ada produk disini</h5>) : 
      products?.map((data,index) => {
        return(
          <Kartu 
            key={index}
            id={data.id_produk}
            foto_produk_1={data.foto_produk_1}
            nama={data.nama}
            kategori_1={data.kategori_1.nama}
            kategori_2={data.kategori_2.nama}
            kategori_3={data.kategori_3?data.kategori_3.nama : '.'}
            kategori_4={data.kategori_4?data.kategori_4.nama : '.'}
            kategori_5={data.kategori_5?data.kategori_5.nama : '.'}
            harga={data.harga}
          />
      )
      })
    }
    </div>)}
    </>
  )
}
export default Disukai