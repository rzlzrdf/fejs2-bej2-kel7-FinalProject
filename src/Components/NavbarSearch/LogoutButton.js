import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authSlice from '../../Features/authSlice'
import { Button } from "react-bootstrap";

const TestPage = () => {

   //logic here

  return (
   <Button className='btn btn-danger'> Keluarkan Akun</Button>
  ) 
  
};

export default TestPage;
