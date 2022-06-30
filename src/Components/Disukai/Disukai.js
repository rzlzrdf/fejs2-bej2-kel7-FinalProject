import React from 'react'
import Cardss from '../Card/Cardss'
import style from './Disukai.module.css'


const Disukai = () => {

  return (
    <div className={style.wrapper_card}>
      <Cardss img={'./Img/lgtv.jpg'} title={'LG UHD TV 65inch OLED'} category={'Aksesoris'} price={'2.450.000'} />
      <Cardss img={'./Img/xperia.jpg'} title={'Xperia 1 mark iii'} category={'Gadget'} price={'7.000.000'} />
      <Cardss img={'./Img/appleWatch.jpeg'} title={'Apple Watch 3'} category={'Aksesoris'} price={'2.450.000'} />
      <Cardss img={'./Img/Rectangle.png'} title={'Apple Watch 3'} category={'Aksesoris'} price={'2.450.000'} />
      <Cardss img={'./Img/lgtv.jpg'} title={'LG UHD TV 65inch OLED'} category={'Aksesoris'} price={'2.450.000'} />
    </div>
  )
}

export default Disukai