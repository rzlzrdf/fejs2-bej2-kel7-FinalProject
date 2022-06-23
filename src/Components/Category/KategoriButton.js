import React from 'react'
import { BsSearch } from "react-icons/bs";
import Kategoristyle from './Kategori.module.css'

const KategoriButton = () => {
  return (
    <div>
      {/* Kata di dalam button nanti dari API */}
      <button type="button" className={`${Kategoristyle.button}`}> <BsSearch/> Success</button>
    </div>
  )
}

export default KategoriButton
