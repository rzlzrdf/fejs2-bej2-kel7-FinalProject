import React from 'react'
import Cardss from '../Card/Cardss'
import style from './Terjual.module.css'


const Terjual = () => {

  return (
    <div className={style.wrapper_card}>
      <Cardss img={'/Img/indomie.jpeg'} title={'Indomie Goreng'} category={'Makanan'} price={'2.000'} />
    </div>
  )
}

export default Terjual