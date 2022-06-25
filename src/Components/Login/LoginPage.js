import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const LoginPage = () => {
   return (
     <>
       <div className="d-flex login-container">
          <div className="hero-login d-lg-flex d-xs-none">
                <img className="hero-image-login" src="./Img/img.svg" alt="" />
          </div>  
          <div className="login-form col-lg-6 col-sm-12">
             <Link to="/"><img src="./Img/logo.svg" alt="" className="py-4" /></Link>
             <h3 className="fw-bold my-3">Masuk</h3>
             <form className="form" method="post">
                <div className="form-group mt-3">
                   <label for="username">Email</label>
                   <input type="text" className="form-control" id="username" placeholder="Contoh: johndee@gmail.com" />
                </div>
                <div className="form-group mt-3">
                   <label for="password">Password</label>
                   <input type="password" className="form-control" id="password" placeholder="Masukkan Password" />
                </div>
             </form>
             <div className='d-grid gap-0'>
                <button className="btn btn-dark mt-4 btn-signin" type="submit">Masuk</button>
             </div>
             <p className='mt-4 d-flex justify-content-center'>Belum punya akun? 
             <Link to="/register" className ="register">Daftar disini</Link></p>
          </div>
       </div>
     </>
   )
 }
 
 export default LoginPage