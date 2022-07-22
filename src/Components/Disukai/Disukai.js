import React, { useEffect, useState } from "react";
import axios from "axios";
import Cardss from '../Card/Cardss'
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
        console.log(response.data);
        setLoading(false)
        setProducts(response.data.data)
      });
  }, []);


  return (
    <>
    {loading ? (<Loading/>) :(
    <div className={style.wrapper_card}>
     
      
      {products?.map( (product, id) => {
                      return(
                        <Cardss
                        id={product.id}
                        nama={product.nama}
                        kategori_1={product.kategori_1 !== null ? product.kategori_1.nama : ''}
                        kategori_2={product.kategori_2 !== null ? product.kategori_2.nama : ''}
                        kategori_3={product.kategori_3 !== null ? product.kategori_3.nama : ''}
                        kategori_4={product.kategori_4 !== null ? product.kategori_4.nama : ''}
                        kategori_5={product.kategori_5 !== null ? product.kategori_5.nama : ''}
                        harga={product.harga}
                        img={product.foto_produk_1} 
                        />
                      )
                    })}
                
    </div>)}
    </>
  )
}
export default Disukai