import React from 'react'
import { Link } from 'react-router-dom'
import style from './NavLogin.module.css'
import {FaBell, FaListUl , FaUser} from 'react-icons/fa'
import { Dropdown, Nav, Navbar } from 'react-bootstrap'
import AppDropdownList from '../AppDropdownList/AppDropdownList'

const NavLogin = () => {
  return (
    <>
      <Navbar.Toggle className={style.togle} />
          <Navbar.Collapse className={style.mobile}>
          <Nav className={"ms-auto "+ style.btn_wrapper}>
            <Link id='RouterNavLink' className={style.btn_} to='/daftar-jual'><FaListUl /> <span className='d-md-none '> Daftar Jual</span></Link>

            <Link to='/notifikasi' id="RouterNavLink" className={'d-md-none ' + style.btn_}><FaBell /> <span> Notifikasi</span></Link>

            <Dropdown to="#" align={'end'} className={style.btn_dropdown} >
              <Dropdown.Toggle variant='white' className={'' + style.icons_menu} id='dropdown-basic' >
                <FaBell />
                {/* <span className={"badge rounded-pill badge-notification bg-danger "}></span> */}
              </Dropdown.Toggle>
              <Dropdown.Menu className={`p-3 w-auto ${style.dropdownMenu}`}>
                <AppDropdownList img={'./Img/xperia.jpg'} title={'Penawaran produk'} date={'20 Jan 22'} name={'Xperia 1 mark iii'} price={'5.250.000'} desc={'Ditawar Rp 4.200.000'} link={'#/action-1'} />
                <AppDropdownList img={'./Img/Rectangle.png'} title={'Penawaran produk'} date={'20 Jan 22'} name={'Jam Casio Digital'} price={'250.000'} desc={'Ditawar Rp 200.000'} link={'#/action-1'} />
                <AppDropdownList img={'./Img/Rectangle.png'} title={'Penawaran produk'} date={'20 Jan 22'} name={'Jam Casio Digital'} price={'250.000'} desc={'Ditawar Rp 200.000'} link={'#/action-1'} />
                <AppDropdownList img={'./Img/Rectangle.png'} title={'Penawaran produk'} date={'20 Jan 22'} name={'Jam Casio Digital'} price={'250.000'} desc={'Ditawar Rp 200.000'} link={'#/action-1'} />
              </Dropdown.Menu>
            </Dropdown>

            <Link to='/info-profil' id="RouterNavLink" className={style.btn_}><FaUser /> <span className='d-md-none'> Akun Saya</span></Link>
          </Nav>
        </Navbar.Collapse>
    </>
  )
}

export default NavLogin