import React from 'react'
import style from './Filter.module.css'
import KategoriButton from '../../Components/Category/KategoriButton'

const Filter = () => {
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
         <KategoriButton />
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