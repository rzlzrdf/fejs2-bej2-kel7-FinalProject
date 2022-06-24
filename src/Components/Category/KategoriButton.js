import React from 'react'
import { BsSearch } from "react-icons/bs";
import Kategoristyle from './Kategori.module.css'

const KategoriButton = (props) => {
  return (
    <>
      {/* Kata di dalam button nanti dari API */}
      <button type="button" className={`${Kategoristyle.button}`}> <BsSearch className={Kategoristyle.logo}/> {props.text}</button>
    </>
  )
}

export default KategoriButton
