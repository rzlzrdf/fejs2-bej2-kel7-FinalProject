import React, { useEffect, useState } from "react";
import axios from "axios";
import Cardss from '../Card/Cardss'
import style from './Disukai.module.css'
import Loading from "../Loading/Loading";
import { useSelector } from "react-redux";


const Disukai = () => {

  const [products, setProducts] = useState({})
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
        console.log(response.data.data);
        setLoading(false)
        setProducts(response.data.data)
      });
  }, []);


  return (
    <>
    {loading ? (<Loading/>) :(
    <div className={style.wrapper_card}>
     
      
      {products.map( (semua,index) => {
        console.log(semua.produk)
        return(
          <Cardss
          key={`Product-${index}`}
          product={semua.produk}
          />
        )
      })}            
    </div>)}
    </>
  )
}
export default Disukai