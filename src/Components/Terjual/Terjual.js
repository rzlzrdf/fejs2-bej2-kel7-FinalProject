import React, { useEffect, useState } from "react";
import axios from "axios";
import Cardss from '../Card/Cardss'
import style from './Terjual.module.css'
import { useSelector } from "react-redux";
import Empty from "../Card/Empty";


const Terjual = () => {
  const [products, setProducts] = useState(null)
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
        console.log(response.data);
        setProducts(response.data.data)
      });
  }, []);


  return (
    <div className={style.wrapper_card}>
    {
      products==null ? (<h5 className="fw-light text-muted mt-4">Belum ada produk disini</h5>) : products?.map((semua,index) => {
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

export default Terjual