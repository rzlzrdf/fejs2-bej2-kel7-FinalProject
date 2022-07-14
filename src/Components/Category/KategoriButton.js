import React,{ useState, useEffect, useRef } from 'react'
import { BsSearch } from "react-icons/bs";
import Kategoristyle from './Kategori.module.css'
import axios from 'axios'

const KategoriButton = (props) => {

  // mengambil Kategori dari API
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get('https://secondhandapp.herokuapp.com/api/category/category')
    .then(res => {
      console.log(res.data)
      setCategories(res.data)
    })
  },[])

  const ref = useRef(null)
  
  return (
    <>
      <button onClick={props.changeCategory} ref={ref}  type="button" className={`p-1 ${Kategoristyle.button}`}> <BsSearch className={Kategoristyle.logo}/> semua </button>
      <button onClick={props.changeCategory} ref={ref} id='1' type="button" className={`p-1 ${Kategoristyle.button}`}> <BsSearch className={Kategoristyle.logo}/> Hobi </button>
      <button onClick={props.changeCategory} ref={ref} id='2' type="button" className={`p-1 ${Kategoristyle.button}`}> <BsSearch className={Kategoristyle.logo}/> Kendaraan </button>
      <button onClick={props.changeCategory} ref={ref} id='3' type="button" className={`p-1 ${Kategoristyle.button}`}> <BsSearch className={Kategoristyle.logo}/> Elektronik </button>
      <button onClick={props.changeCategory} ref={ref} id='4' type="button" className={`p-1 ${Kategoristyle.button}`}> <BsSearch className={Kategoristyle.logo}/> Kesehatan </button>
      <button onClick={props.changeCategory} ref={ref} id='5' type="button" className={`p-1 ${Kategoristyle.button}`}> <BsSearch className={Kategoristyle.logo}/> Fasion </button>
    </>
  )
}

export default KategoriButton
