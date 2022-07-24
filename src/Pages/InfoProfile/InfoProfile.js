import React from 'react'
import FormProfile from '../../Components/FormProfil/FormProfile'
import NavbarNoSearch from '../../Components/NavbarNoSearch/NavbarNoSearch'
import style from './InfoProfile.module.css'

const InfoProfile = () => {

  return (
    <div className={style.profile}>
      <NavbarNoSearch title="Info Profile" />
      <FormProfile className={style.form} />
    </div>
  )
}

export default InfoProfile