import { Button } from 'react-bootstrap'
import {AiOutlineFileAdd} from 'react-icons/ai'
import React from 'react'
import Cardss from '../Card/Cardss'
import style from './AllProduk.module.css'
import { Link } from 'react-router-dom'


const AllProduk = () => {

  return (
    <div className={style.wrapper_card}>
      <Link to='/info-produk'>
          <Button className={style.upload + ' fw-light text-muted'}>
            <AiOutlineFileAdd className={style.next}/>
            <p>Tambah Produk</p>
          </Button>
      </Link>
      <Cardss img={'./Img/rolex.webp'} title={'Rolex'} category={'Aksesoris'} price={'13.050.000'} />
      <Cardss img={'./Img/xperia.jpg'} title={'Xperia 1 mark iii'} category={'Gadget'} price={'7.000.000'} />
      <Cardss img={'./Img/appleWatch.jpeg'} title={'Apple Watch 3'} category={'Aksesoris'} price={'2.450.000'} />
      <Cardss img={'./Img/Rectangle.png'} title={'Apple Watch 3'} category={'Aksesoris'} price={'2.450.000'} />
      <Cardss img={'./Img/lgtv.jpg'} title={'LG UHD TV 65inch OLED'} category={'Aksesoris'} price={'2.450.000'} />
      <Cardss img={'./Img/xperia.jpg'} title={'Xperia 1 mark iii'} category={'Gadget'} price={'7.000.000'} />
      <Cardss img={'./Img/appleWatch.jpeg'} title={'Apple Watch 3'} category={'Aksesoris'} price={'2.450.000'} />
      <Cardss img={'./Img/Rectangle.png'} title={'Apple Watch 3'} category={'Aksesoris'} price={'2.450.000'} />
      <Cardss img={'./Img/lgtv.jpg'} title={'LG UHD TV 65inch OLED'} category={'Aksesoris'} price={'2.450.000'} />
    </div>
  )
}

export default AllProduk