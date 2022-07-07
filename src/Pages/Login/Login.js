import React from "react";
import { Link } from "react-router-dom";
import style from './Login.module.css'

const Login = () => {
	return (
		<div className={"d-flex " + style.login_container}>
          <div className={style.hero_login +" d-lg-flex d-xs-none"}>
                <img src="./Img/img.svg" alt="" />
          </div>  
          <div className={style.login_form +" col-lg-6 col-sm-12"}>
             <Link to="/"><img src="./Img/logo.svg" alt="" className="py-4" /></Link>
             <h3 className="fw-bold my-3">Masuk</h3>
             <form className="form" method="post">
                <div className="form-group mt-3">
                   <label htmlFor="username">Email</label>
                   <input type="text" className={"form-control "+ style.input_} id="username" placeholder="Contoh: johndee@gmail.com" />
                </div>
                <div className="form-group mt-3">
                   <label htmlFor="password">Password</label>
                   <input type="password" className={"form-control "+ style.input_} id="password" placeholder="Masukkan Password" />
                </div>
             </form>
             <div className='d-grid gap-0'>
                <button className={"btn btn-dark mt-4 " + style.btn_signin} type="submit">Masuk</button>
             </div>
             <p className='mt-4 d-flex justify-content-center'>Belum punya akun? 
             <Link to="/register" className ="register">Daftar disini</Link></p>
          </div>
       </div>
	);
};

export default Login;
