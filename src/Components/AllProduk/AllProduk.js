import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import {AiOutlineFileAdd} from 'react-icons/ai'
import style from './AllProduk.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading"
import Cardss from '../Card/Cardss'




const AllProduk = () => {
  const [products, setProducts] = useState(null)
  const [loading, setLoading] =useState(true)
 
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
        console.log(response);
        setLoading(false)
        setProducts(response.data)
      });
  }, []);


  

  return (
    <>
    {loading ? (<Loading/>) :(
    <div className={style.wrapper_card}>
      <Link to='/info-produk'>
          <Button className={style.upload + ' fw-light text-muted'}>
            <AiOutlineFileAdd className={style.next}/>
            <p>Tambah Produk</p>
          </Button>
      </Link>
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
                
    </div>)}
    </>
  )
}

export default AllProduk