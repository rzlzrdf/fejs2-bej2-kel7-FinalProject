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
		

		//membuat template JSON dari input pada form
		const postData = {
			nama: data.user_name,
			email: data.user_email,
			password: data.user_password
		}

		console.log(postData)

		axios.post('https://secondhandapp.herokuapp.com/api/auth/register', postData) //post object template dari from ke link API
		.then((res) => {
			if(typeof res.data.acessToken !== 'undefined'){
				localStorage.setItem('secondHandToken', res.data.acessToken)
			}

			//menyimpan di redux store
			const user = jwtDecode(res.data.acessToken)
			axios.get(/*`https://finalsecondhand-staging.herokuapp.com/User/DetailUser${user.sub}`*/)
				.then((res) => {
					dispatch(
						userSlice.actions.addUser({userData: res.data})
					)
				})

				navigate('/')

		}).catch( err => {
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
			<form className="form" method="post" onSubmit={handleSubmit(formSubmitHandler)}>
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
				<button className={"btn btn-dark mt-4 " +style.btn_signin} type="submit">Buat Akun</button>
			</div>
			<p className='mt-4 d-flex justify-content-center'>Sudah punya akun 
			<Link to="/login" className={style.login}>Masuk disini</Link></p>
		</div>
	</div>
	);
};

export default Register;
