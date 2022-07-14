import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Cardss from '../Card/Cardss'
import style from './Wishlist.module.css'

const Wishlist = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    axios
      .get('https://secondhandapp.herokuapp.com/api/wishlist/list', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsImVtYWlsIjoiYWRlc0BnbWFpbC5jb20iLCJpYXQiOjE2NTc3MTQyNDd9.WZKPvkDQvcL6RmBIwJOtDK2NwgIqTLdpKyuIRAS5sx4',
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