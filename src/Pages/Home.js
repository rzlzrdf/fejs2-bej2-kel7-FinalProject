import React from 'react'

import Cards from '../Components/Cards'
import KategoriButton from '../Components/KategoriButton'
import homestyle from './Home.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode, Pagination} from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination"



const Home = () => {

 

  return (
    <>
        <div className='container'>
          <Swiper 
              freeMode={true}
              rewind={true}
              grabCursor={true}
              centeredSlides={true}
              pagination={{clickable:true}}
              modules={[FreeMode ,Pagination]}
              className='mySwiper my-4'
              slidesPerView={1}
              spaceBetween={10}
          >
            <SwiperSlide>
              <img src='Img/img-banner.png'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src='Img/img-banner.png'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src='Img/img-banner.png'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src='Img/img-banner.png'/>
            </SwiperSlide>
          </Swiper>
          <h5><b>Telusuri Kategori</b></h5>
          <div className={`d-flex ${homestyle.kategori}`}>
            <KategoriButton />
            <KategoriButton />
            <KategoriButton />
            <KategoriButton />
          </div>
          <div className={homestyle.gridContainer}>
            <Cards className='grid-item'/>
            <Cards className='grid-item'/>
            <Cards className='grid-item'/>
            <Cards className='grid-item'/>
            <Cards className='grid-item'/>
            <Cards className='grid-item'/>
            <Cards className='grid-item'/>
            <Cards className='grid-item'/>
            <Cards className='grid-item'/>
            <Cards className='grid-item'/>
            <Cards className='grid-item'/>
            <Cards className='grid-item'/>
          </div>
        </div>
    </>
  )
}

export default Home
