import React, { useState } from 'react'
import ModalMenawar from './ModalMenawar'

const ButtonMenawar = () => {

   const [tawar, setTawar] = useState(false)

  return (
    <div>
      <button onClick={() => setTawar(true)}>Saya ingin nego dan menawae</button>
      <ModalMenawar show={tawar} onHide={() => setTawar(false)} />
    </div>
  )
}

export default ButtonMenawar