import React from 'react'
import { Link } from 'react-router-dom'
import style from './NavbarBack.module.css'
import { FaSignOutAlt} from 'react-icons/fa'


const Navbar = () => {
  return (
    <header className={style.header}>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto ml-3">
              <Link to='/'><img src="Img/logo.svg" alt="logo-img" className="logo-img" width="100" /></Link>
            </div>
            <div className="col">
              <form className="d-flex " role="search">
                <input className={`${style['search-bar']} form-control me-2`}type="search" placeholder="Search " aria-label="Search" />
              </form>
            </div>
            <div className="col-auto d-lg-none">
            <Link to="/login" type="submit" className={`${style['btn_primary']} btn d-flex align-items-center`}><FaSignOutAlt  className={`${style['fa-sign-in-alt']}`}/></Link>
            </div>
            <div className="col-auto d-none d-lg-block">
              <ul className="nav-menu list-inline mb-0">
                <li className="list-inline-item">
                  <Link to="/login" type="submit" className={`${style['btn_primary']} btn d-flex align-items-center`}><FaSignOutAlt  className={`${style['fa-sign-in-alt']}`}/>Masuk</Link>
                </li>
              </ul>                    
            </div>
          </div>
        </div>
    </header>
  )
}

export default Navbar