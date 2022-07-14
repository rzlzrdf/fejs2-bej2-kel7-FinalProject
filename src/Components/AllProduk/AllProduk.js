import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import {AiOutlineFileAdd} from 'react-icons/ai'
import Cardss from '../Card/Cardss'
import style from './AllProduk.module.css'
import { Link } from 'react-router-dom'


const AllProduk = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    axios
      .get('https://secondhandapp.herokuapp.com/api/product/list-by-user', {
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
    <div className={style.wrapper_card}>
      <Link to='/info-produk'>
          <Button className={style.upload + ' fw-light text-muted'}>
            <AiOutlineFileAdd className={style.next}/>
            <p>Tambah Produk</p>
          </Button>
      </Link>
      
      {products?.map( (product, id) => {
                      return(
                        <Cardss key={`product-${id}`} product = {product} />
                      )
                    })}
                
    </div>
  )
}

export default AllProduk