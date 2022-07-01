import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
import {FaUser, FaBell, FaBars} from 'react-icons/fa'
import { Dropdown} from "react-bootstrap";
import AppDropdownList from '../AppDropdownList/AppDropdownList';

const Navbar = ({data}) => {
  return (
    <header className={style.header}>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto ml-3">
              <Link to='/'><img src="/Img/logo.svg" alt="logo-img" className="logo-img" width="100" /></Link>
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
                  <Link to="/all-product"  className={`${style['icons-menu']} btn d-flex align-items-center`}>
                    <FaBars/>
                  </Link>
                  {/* <Link to="/" type="submit" className={`${style['icons-menu']} btn d-flex align-items-center`}>
                    <FaBell/>
                  </Link> */}
                   <Dropdown>
                    <Dropdown.Toggle variant="light" className={`${style['icons-menu']} m-0 p-0 d-flex align-items-center`} id="dropdown-basic">
                      <FaBell/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className={`p-3 w-auto ${style.dropdownMenu}`}>
                      {data.length===0? 'Data anda masih kosong' : data.map((e,i)=>{
                        return  <Dropdown.Item href={e.link} className='mb-2'>
                        <AppDropdownList title= {e.title} name={e.name} price= {e.price} desc={e.desc} data={e.date} image={e.image}/>
                        </Dropdown.Item>
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Link to="/" type="submit" className={`${style['icons-menu']} btn d-flex align-items-center`}>
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