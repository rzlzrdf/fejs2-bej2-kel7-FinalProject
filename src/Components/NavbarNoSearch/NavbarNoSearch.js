import React from "react";
import "./NavbarNoSearch.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavbarNoSearch = (props) => {
  return (
    <>
      <nav className="navbar navbar-light bg-white shadow-sm d-block">
         <div className="container d-flex">
            <Link to='/' className="logo__" href="/">
               <img src="/Img/logo.svg" alt="" className='' />
            </Link>
            <a href='/' className='back__button'><IoArrowBackOutline /></a>
            <span href='/' className='navbar-text mx-auto'>{props.title}</span>
         </div>
      </nav>
    </>
  );
};

export default NavbarNoSearch;
