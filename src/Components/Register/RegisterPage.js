import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const RegisterPage = () => {
   return (
     <>
       <div className="d-flex register-container">
          <div className="hero-register">
            <img className="hero-image-register" src="./Img/img.svg" alt="" />
          </div>  
          <div className="register-form">
            <Link to="/"><img src="./Img/logo.svg" alt="" className="py-4" /></Link>
             <h3 className="fw-bold my-3">Daftar</h3>
             <form className="form" method="post">
                <div className="form-group mt-3">
                   <label for="name">Nama</label>
                   <input type="text" className="form-control" id="name" placeholder="Nama Lengkap" />
                </div>
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
                <button className="btn btn-dark mt-4 btn-signin" type="submit">Buat Akun</button>
             </div>
             <p className='mt-4 d-flex justify-content-center'>Sudah punya akun 
             <Link to="/login" className ="login">Masuk disini</Link></p>
          </div>
       </div>
     </>
   )
 }
 
 export default RegisterPage