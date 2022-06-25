import { Button } from 'react-bootstrap'
import {AiOutlineFileAdd} from 'react-icons/ai'
import React from 'react'
import Cardss from '../Card/Cardss'
import style from './AllProduk.module.css'


const AllProduk = () => {

  return (
    <>
      <div className={style.wrapper_card}>
         <Button variant='dark' className={style.upload + ' fw-light text-muted'}>
            <AiOutlineFileAdd className={style.next}/>
            <p>Tambah Produk</p>
         </Button>
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