import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Cardss from '../Card/Cardss'
import style from './Wishlist.module.css'

const Wishlist = () => {
  const [products, setProducts] = useState(null)
  const jwtToken = localStorage.getItem('loginToken')

  useEffect(() => {
    axios
      .get('https://secondhandapp.herokuapp.com/api/wishlist/list', {
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

export default Wishlist