import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Kartu from '../Card/Kartu'
import Loading from '../Loading/Loading'
import style from './Wishlist.module.css'
import { useSelector } from 'react-redux'

const Wishlist = () => {
  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(true)
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
        setLoading(false)
        setProducts(response.data)
      });
  }, []);


  return (
    <div className={style.wrapper_card}>
    {loading ? (<Loading/>) :(
    <div className={style.wrapper_card}>
    {
      products.length==0 ? 
      (<h5 className="fw-light text-muted mt-4">Belum ada produk disini</h5>) : 
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

export default Wishlist