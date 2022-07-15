import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from './Login.module.css'
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import userSlice from "../../Store/userSlice";
import axios from "axios";
import jwtDecode from "jwt-decode";

const Login = () => {

   const { register , handleSubmit, formState } = useForm() //inisiasi useForm

	//inisiasi object untuk template
	const [loginStatus, setLoginStatus] = useState({
		succes: false,
		message:''
	})

	//inisiasi dispatch dan navigate
	const dispatch = useDispatch()
	const navigate = useNavigate()


	//membuat submit handler
	const formSubmitHandler = (data) => {
		console.log('formSubmitHandler Jalan')

		//membuat template rare JSON dari input pada form (form - data)
		const postData = {
			email: data.user_email,
			password: data.user_password
		}

		axios({
			method: "post",
			url: "https://secondhandapp.herokuapp.com/api/auth/login",
			data: postData,
			headers: { "Content-Type": "application/json" },
		 })//post object template dari from ke link API

		.then((res) => {
			console.log(res.data)

			if(typeof res.data.token !== 'undefined'){
				localStorage.setItem('secondHandToken', res.data.token) // simpan ke localStorage
				const user = jwtDecode(res.data.token) // simpan di store
				axios.get(`https://secondhandapp.herokuapp.com/api/user/detail-user/Rizal`)// endpoint input n return not valid
				.then((res) => {
					dispatch( userSlice.actions.addUser({userData: res.data}) )
					//navigate('/')
				})
			}
		}).catch( err => {
			setLoginStatus({
				 succes: false,
				 message: 'Sorry, something is wrong'
			})
	  })
		
	}

	return (
		<div className={"d-flex " + style.login_container}>
          <div className={style.hero_login +" d-lg-flex d-xs-none"}>
                <img src="./Img/img.svg" alt="" />
          </div>  
          <div className={style.login_form +" col-lg-6 col-sm-12"}>
             <Link to="/"><img src="./Img/logo.svg" alt="" className="py-4" /></Link>
             <h3 className="fw-bold my-3">Masuk</h3>
             <form className="form" method="post" id="login-form" onSubmit={handleSubmit(formSubmitHandler)}>
                <div className="form-group mt-3">
                   <label htmlFor="username">Email</label>
                   <input type="text" className={"form-control "+ style.input_} id="username" placeholder="Contoh: johndee@gmail.com" {...register("user_email")} />
                </div>
                <div className="form-group mt-3">
                   <label htmlFor="password">Password</label>
                   <input type="password" className={"form-control "+ style.input_} id="password" placeholder="Masukkan Password" {...register("user_password")} />
                </div>
             </form>
             <div className='d-grid gap-0'>
                <button className={"btn btn-dark mt-4 " + style.btn_signin} type="submit" form="login-form">Masuk</button>
             </div>
				 { (!loginStatus.succes && loginStatus.message) && <p className="text-danger text-center fw-light">{loginStatus.message}</p>}
             <p className='mt-4 d-flex justify-content-center'>Belum punya akun? 
             <Link to="/register" className ="register">Daftar disini</Link></p>
          </div>
       </div>
	);
};

export default Login;
