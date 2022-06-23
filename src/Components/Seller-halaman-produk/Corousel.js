import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import style from './Seller-halaman-produk.module.css'
const Corousel = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        centeredSlides={true}
        navigation={true}
        pagination={true}
        modules={[Pagination, Navigation,]}
        className={`mySwiper ${style.swiper}`}
      >
        <SwiperSlide><img src='Img/Rectangle.png'/></SwiperSlide>
        <SwiperSlide><img src='Img/Rectangle.png'/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Corousel
