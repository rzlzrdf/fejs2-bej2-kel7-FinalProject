import React from "react";
import style from './NavbarSearch.module.css'
import {FiLogIn} from 'react-icons/fi'
import { Link } from "react-router-dom";
import {Nav} from "react-bootstrap";

const TestPage = () => {
  return (
  <Nav className='ms-auto'>
    <Link variant='otuline-dark' className={'fw-bold ' +style.buttonLogin} to='/login'><FiLogIn/>Login</Link>
  </Nav>
  ) 
  
};

export default TestPage;
