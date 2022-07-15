import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Cardss from '../Card/Cardss'
import style from './Wishlist.module.css'
import { useSelector } from 'react-redux'

const Wishlist = () => {
  const [products, setProducts] = useState(null)
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    axios
      .get('https://secondhandapp.herokuapp.com/api/product/list-by-user', {
        headers: {
          Authorization:
          user,
        },
      })
      .then((response) => {
        console.log(response.data);
        setProducts(response.data)
      });
  }, []);
  return (
    <div className={style.wrapper_card}>
    {products?.map( (product, id) => {
      return(
        <Cardss key={`product-${id}`} product = {product} />
      )
    })}
    </div>
  )
}

export default Wishlist