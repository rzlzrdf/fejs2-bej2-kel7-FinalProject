import { Button } from 'react-bootstrap'
import {AiOutlineFileAdd} from 'react-icons/ai'
import React from 'react'
import Cardss from '../Card/Cardss'
import style from './AllProduk.module.css'
import { Link } from 'react-router-dom'


const AllProduk = () => {

  return (
    <>
      <div className={style.wrapper_card}>
        <Link to='/info-produk'>
            <Button className={style.upload + ' fw-light text-muted'}>
              <AiOutlineFileAdd className={style.next}/>
              <p>Tambah Produk</p>
            </Button>
        </Link>
         <Cardss />
         <Cardss />
         <Cardss />
         <Cardss />
         <Cardss />
         <Cardss />
         <Cardss />
         <Cardss />
      </div>
    </>
  )
}

export default AllProduk