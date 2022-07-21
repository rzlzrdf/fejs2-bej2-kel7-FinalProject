import React, { useState } from 'react'
import axios from 'axios'
import style from './Filter.module.css'
import KategoriButton from '../../Components/Category/KategoriButton'

const Filter = (props) => {

   const [products, setProducts] = useState([])


   const changeCategory = (event) => {
      if(event === 'all'){
         axios.get(`https://secondhandapp.herokuapp.com/api/product/all`)
         .then(res => {
           console.log(res)
           setProducts(res.data.content)
         }).catch(err => {
           console.log(err)
         })
        } else{
           axios.get(`https://secondhandapp.herokuapp.com/api/product/list?id=${event}&size=12`)
           .then(res => {
             console.log(res)
             setProducts(res.data.content)
           }).catch(err => {
             console.log(err)
           })
         }
        }

  return (
    <div className={'card shadow-sm ' +style.card_}>
      <h5 className='fw-bold text-center mt-3'>Filter</h5>
      <div className={style.wrapper_filter}>
         <h6>Harga</h6>
         <select className={style.filter_1}>
            <option>Harga Terendah - Tertinggi</option>
            <option>Harga Tertinggi - Terendah</option>
         </select>
         <h6>Waktu</h6>
         <select className={style.filter_2}>            
            <option>Produk Terbaru - Lama</option>
            <option>Produk Terlama - Terbaru</option>
         </select>
      </div>
      <div className={style.kategori}>
         <h6>Kategori Teratas</h6>
         <KategoriButton changeCategory={changeCategory}/>
         {/* <KategoriButton text='Token'/>
         <KategoriButton text='Pakaian'/>
         <KategoriButton text='Makanan'/>
         <KategoriButton text='Elektronik'/>
         <KategoriButton text='Sparepart'/>
         <KategoriButton text='Obat'/>
         <KategoriButton text='Peralatan'/>
         <KategoriButton text='Mebel'/>
         <KategoriButton text='Sepatu'/> */}
      </div>

    </div>
  )
}

export default Filter