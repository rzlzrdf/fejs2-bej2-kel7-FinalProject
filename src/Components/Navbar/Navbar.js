import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
import {FaUser, FaBell, FaBars} from 'react-icons/fa'
import { Dropdown } from 'react-bootstrap'
import AppDropdownList from '../AppDropdownList/AppDropdownList'

const Navbar = () => {
  return (
    <header className={style.header}>
        <div className="container">
          <div className="row justify-constent-between align-items-center">
            <div className="col-auto ml-3">
              <Link to='/'><img src="/Img/logo2.svg" alt="logo-img" className="logo-img" width="100" /></Link>
            </div>
            <div className="col">
              <form className="d-flex" role="search">
                <input className={`${style['search-bar']} form-control me-2`}type="search" placeholder="Search " aria-label="Search" />
              </form>
            </div>
            <div className="col-auto d-lg-none">Menu</div>
            <div className="col-auto d-none d-lg-block">
              <ul className="nav-menu list-inline mb-0">
                <li className="d-flex list-inline-item">
                  <Link to="/daftar-jual"  className={`${style['icons-menu']} btn d-flex align-items-center`}>
                    <FaBars/>
                  </Link>
                  <Link to="#" type="submit" className={`${style['icons-menu']} btn d-flex align-items-center`}>
                  <Dropdown>
                    <Dropdown.Toggle variant="white" className={`${style['icons-menu']} m-0 p-0 d-flex align-items-center`} id="dropdown-basic">
                      <FaBell/>
                    </Dropdown.Toggle>
                      <Dropdown.Menu className={`p-3 w-auto ${style.dropdownMenu}`}>
                        <AppDropdownList img={'./Img/xperia.jpg'} title={'Penawaran produk'} date={'20 Jan 22'} name={'Xperia 1 mark iii'} price={'5.250.000'} desc={'Ditawar Rp 4.200.000'} link={'#/action-1'} />
                        <AppDropdownList img={'./Img/Rectangle.png'} title={'Penawaran produk'} date={'20 Jan 22'} name={'Jam Casio Digital'} price={'250.000'} desc={'Ditawar Rp 200.000'} link={'#/action-1'} />
                        <AppDropdownList img={'./Img/Rectangle.png'} title={'Penawaran produk'} date={'20 Jan 22'} name={'Jam Casio Digital'} price={'250.000'} desc={'Ditawar Rp 200.000'} link={'#/action-1'} />
                        <AppDropdownList img={'./Img/Rectangle.png'} title={'Penawaran produk'} date={'20 Jan 22'} name={'Jam Casio Digital'} price={'250.000'} desc={'Ditawar Rp 200.000'} link={'#/action-1'} />
                      </Dropdown.Menu>
                  </Dropdown>
                  </Link>
                  <Link to="/info-profil" type="submit" className={`${style['icons-menu']} btn d-flex align-items-center`}>
                    <FaUser/>
                  </Link>
                </li>
              </ul>                    
            </div>
          </div>
        </div>
    </header>
  )
}

export default Navbar