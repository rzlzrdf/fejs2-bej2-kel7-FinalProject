import React from 'react'
import {Carousel} from 'react-bootstrap'
import style from './CarouselHome.module.css'

const CarouselHome = () => {
  return (
   <Carousel className={'shadow-sm'}>
   <Carousel.Item className={style.fill}>
     <img alt='' src='./Img/aaa.jpg' className={style.img_}/>
     <Carousel.Caption>
       <p className='fw-bolder fs-1'>Second Hand</p>
       <h4 className='text-dark'>#1 E-Commerce in Indonesia</h4>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item className={style.fill}>
     <img alt='' src='./Img/aa.jpg' className={style.img_}/>
     <Carousel.Caption>
       <p className='fw-bolder fs-1'>Second Hand</p>
       <h4 className='text-dark'>#1 E-Commerce in Indonesia</h4>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item className={style.fill}>
     <img alt='' src='./Img/a.jpg' className={style.img_}/>
     <Carousel.Caption>
       <p className='fw-bolder fs-1'>Second Hand</p>
       <h4 className='text-dark'>#1 E-Commerce in Indonesia</h4>
     </Carousel.Caption>
   </Carousel.Item>
 </Carousel>
  )
}

export default CarouselHome