import React, { useEffect, useState } from "react";
import axios from "axios";
import Cardss from '../Card/Cardss'
import style from './Disukai.module.css'


const Disukai = () => {

  const [products, setProducts] = useState(null)
  const jwtToken = localStorage.getItem('loginToken')

  useEffect(() => {
    axios
      .get('https://secondhandapp.herokuapp.com/api/product/list-by-user', {
        headers: {
          Authorization:
           jwtToken,
        },
      })
      .then((response) => {
        console.log(response.data);
        setProducts(response.data)
      });
  }, []);


  return (
    <>
    {products?.map( (product, id) => {
      return(
        <Cardss key={`product-${id}`} product = {product} />
      )
    })}
     </>
  )
 
}

export default Disukai