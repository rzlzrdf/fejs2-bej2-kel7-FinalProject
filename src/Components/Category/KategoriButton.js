import React,{ useState, useEffect, useRef } from 'react'
import { BsSearch } from "react-icons/bs";
import Kategoristyle from './Kategori.module.css'
import axios from 'axios'

const KategoriButton = (props) => {

  const ref = useRef(null)
  
  return (
    <>
      <button onClick={()=>props.changeCategory('all')} ref={ref}  type="button" className={`p-1 ${Kategoristyle.button}`}> <BsSearch className={Kategoristyle.logo}/> semua </button>
      <button onClick={()=>props.changeCategory(1)} ref={ref} id='1' type="button" className={`p-1 ${Kategoristyle.button}`}> <BsSearch className={Kategoristyle.logo}/> Hobi </button>
      <button onClick={()=>props.changeCategory(2)} ref={ref} id='2' type="button" className={`p-1 ${Kategoristyle.button}`}> <BsSearch className={Kategoristyle.logo}/> Kendaraan </button>
      <button onClick={()=>props.changeCategory(3)} ref={ref} id='3' type="button" className={`p-1 ${Kategoristyle.button}`}> <BsSearch className={Kategoristyle.logo}/> Fashion </button>
      <button onClick={()=>props.changeCategory(4)} ref={ref} id='4' type="button" className={`p-1 ${Kategoristyle.button}`}> <BsSearch className={Kategoristyle.logo}/> Elektronik </button>
      <button onClick={()=>props.changeCategory(5)} ref={ref} id='5' type="button" className={`p-1 ${Kategoristyle.button}`}> <BsSearch className={Kategoristyle.logo}/> Kesehatan </button>
    </>
  )
}

export default KategoriButton
