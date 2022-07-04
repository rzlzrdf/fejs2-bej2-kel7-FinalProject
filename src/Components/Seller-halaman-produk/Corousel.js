import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import style from './Seller-halaman-produk.module.css'
import { Button } from 'react-bootstrap';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Corousel = () => {
  return (
    <div>
      <Link to='/all'><Button variant='white' className={style.back_}><IoMdArrowRoundBack/>Back</Button></Link>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        centeredSlides={true}
        navigation={true}
        pagination={true}
        modules={[Pagination, Navigation,]}
        className={`mySwiper ${style.swiper}`}
      >
        <SwiperSlide><img src='Img/Rectangle.png' alt=''/></SwiperSlide>
        <SwiperSlide><img src='Img/Rectangle.png' alt=''/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Corousel
