import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
import {FaUser, FaBell, FaBars} from 'react-icons/fa'

const Navbar = () => {
  return (
    <header className={style.header}>
        <div className="container">
          <div className="row justify-content-between align-items-center">
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
                    <FaBell/>
                  </Link>
                  <Link to="#" type="submit" className={`${style['icons-menu']} btn d-flex align-items-center`}>
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