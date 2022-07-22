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
      .get('https://secondhandapp.herokuapp.com/api/wishlist/list', {
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
     {
        products===null ? (<div>Tidak ada</div>) : products.map((semua,index) => {
          return(
              <Cardss 
                key={`Product-${index}`}
                product={semua}
              />
          )
        })
      }
    </div>
  )
}

export default Wishlist