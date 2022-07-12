import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from './Login.module.css'
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import userSlice from "../../Store/userSlice";
import axios from "axios";
import jwtDecode from "jwt-decode";

const Login = () => {

   const { register, handleSubmit, formState } = useForm();

	// jika gagal login maka akan muncul pesan :
	const [loginStatus, setLoginStatus] = useState({
		success: false,
		message: "",

		/*
			{!loginStatus.sucess && loginStatus.message && <p className="text-danger  m-0 ">{loginStatus.message}</p>}
	*/
	});

	// dispatch axios
	const dispatch = useDispatch();
	const navigate = useNavigate();

	//menampilkan data  email dan password

	const formSubmithandler = (data) => {
		console.log("formsubmithandler login jalan");

		const postData = {
			email: data.user_email,
			password: data.user_password,
		};

      console.log(postData)

		axios
			.post("https://secondhandapp.herokuapp.com/api/auth/login", postData) // kalau dah ready taruh link heroku disini
			.then((res) => {
				console.log(res);
				/* memastikan bahwa token nya ada
		if (typeof res.data.acessToken !== "undefined") {
					localStorage.setItem("secondHandToken", res.data.acessToken);
				} */

				// menyimpan di redux store

				const user = jwtDecode(res.data.acessToken);
				axios.get(`https://secondhandapp.herokuapp.com/api/user/detail-user${user.sub}`).then((res) => {
					dispatch(
						userSlice.actions.addUser({
							userData: res.data,
						})
					);
					// jika sudah login maka diarahkan ke :
					navigate("/");
				});
			})

			// failed register notification
			.catch((err) => {
				//	console.log(err.response);
				setLoginStatus({
					success: false,
					message: "Failed to make Account, please try again later",
				});
			});
	};

	return (
		<div className={"d-flex " + style.login_container}>
          <div className={style.hero_login +" d-lg-flex d-xs-none"}>
                <img src="./Img/img.svg" alt="" />
          </div>  
          <div className={style.login_form +" col-lg-6 col-sm-12"}>
             <Link to="/"><img src="./Img/logo.svg" alt="" className="py-4" /></Link>
             <h3 className="fw-bold my-3">Masuk</h3>
             <form className="form" method="post" id="login-form" onSubmit={handleSubmit(formSubmithandler)}>
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
             <p className='mt-4 d-flex justify-content-center'>Belum punya akun? 
             <Link to="/register" className ="register">Daftar disini</Link></p>
          </div>
       </div>
	);
};

export default Login;
