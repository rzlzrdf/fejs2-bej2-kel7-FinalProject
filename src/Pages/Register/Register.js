import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from './Register.module.css'
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import userSlice from '../../Store/userSlice'
import axios from "axios";
import jwtDecode from 'jwt-decode'


const Register = () => {
	
	const { register, handleSubmit, formState } = useForm() //inisiasi useForm

	//inisiasi object untuk template
	const [registStatus, setRegistStatus] = useState({
		succes: false,
		messafe:''
	})

	//inisiasi dispatch dan axios
	const dispatch = useDispatch()
	const navigate = useNavigate()


	//membuat submit handler
	const formSubmitHandler = (data) => {
		console.log('formSubmitHandler Jalan')

		//membuat template rare JSON dari input pada form (form - data)
		const postData = {
			nama: data.user_name,
			email: data.user_email,
			password: data.user_password
		}

		//membuat template x-www-form-urlencoded
		// let formData = new FormData();
		// formData.append('nama', data.user_name);
		// formData.append('email', data.user_email,);
		// formData.append('password', data.user_password);
		// console.log(postData)

		
		axios({
			method: "post",
			url: "https://secondhandapp.herokuapp.com/api/auth/register",
			data: postData,
			headers: { "Content-Type": "application/json" },
		 })//post object template dari from ke link API
		.then((res) => {
			console.log(res.data)
			if(typeof res.data.token !== 'undefined'){
				localStorage.setItem('secondHandToken', res.data.token)
			}

			//menyimpan di redux store
			const user = jwtDecode(res.data.acessToken)
			axios.get(`https://secondhandapp.herokuapp.com/api/user/detail-user'${user.sub}`)
				.then((res) => {
					dispatch(
						userSlice.actions.addUser({userData: res.data})
					)
				})

				navigate('/')

		}).catch( err => {
			console.log(err)
			setRegistStatus({
				 succes: false,
				 message: 'sorry, something is wrong'
			})
	  })
		
	}

	return (
		<div className={"d-flex " + style.register_container}>
		<div className={style.hero_register}>
		  <img src="./Img/img.svg" alt="" />
		</div>  
		<div className={style.register_form}>
		  <Link to="/"><img src="./Img/logo.svg" alt="" className="py-4" /></Link>
			<h3 className="fw-bold my-3">Daftar</h3>
			<form className="form" id="register-form" method="post" onSubmit={handleSubmit(formSubmitHandler)}>
				<div className="form-group mt-3">
					<label htmlFor="name">Nama</label>
					<input type="text" className={"form-control "+ style.input_} id="name" placeholder="Nama Lengkap" {...register("user_name")} />
				</div>
				<div className="form-group mt-3">
					<label htmlFor="username">Email</label>
					<input type="text" className={"form-control "+ style.input_} id="username" placeholder="Contoh: johndee@gmail.com" {...register("user_email")} />
				</div>
				<div className="form-group mt-3">
					<label htmlFor="password">Password</label>
					<input type="password" className={"form-control "+ style.input_}id="password" placeholder="Masukkan Password" {...register("user_password")} />
				</div>
			</form>

			<div className='d-grid gap-0'>
				<button className={"btn btn-dark mt-4 " +style.btn_signin} type="submit" form="register-form">Buat Akun</button>
			</div>
			<p className='mt-4 d-flex justify-content-center'>Sudah punya akun 
			<Link to="/login" className={style.login}>Masuk disini</Link></p>
		</div>
	</div>
	);
};

export default Register;
