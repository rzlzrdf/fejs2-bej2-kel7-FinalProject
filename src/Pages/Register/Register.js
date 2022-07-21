import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import style from "./Register.module.css";

import { useDispatch, useSelector } from "react-redux";
import { register } from "../../Features/authSlice";
// import userSlice from "../../Store/userSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, user, error } = useSelector((state) => state.auth);
  const location = useLocation();
  const from = location.state ? location.state.from : "/";
  const [data, setData] = useState({
    nama: "",
    email: "",
    password: "",
  });

  /* Register Logic */
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(register(data));
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  return (
    <div className={"d-flex " + style.register_container}>
      <div className={style.hero_register}>
        <img src="./Img/img.svg" alt="" />
      </div>
      <div className={style.register_form}>
        <Link to="/">
          <img src="./Img/logo.svg" alt="" className="py-4" />
        </Link>
        <h3 className="fw-bold my-3">Daftar</h3>
        <form className="form" id="register-form" method="post">
          <div className="form-group mt-3">
            <label htmlFor="nama">Nama</label>
            <input
              type="text"
              className={"form-control " + style.input_}
              id="nama"
              placeholder="Nama Lengkap"
              name="nama"
              onChange={onChange}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="username">Email</label>
            <input
              type="text"
              className={"form-control " + style.input_}
              id="username"
              placeholder="Contoh: johndee@gmail.com"
              name="email"
              onChange={onChange}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={"form-control " + style.input_}
              id="password"
              placeholder="Masukkan Password"
              name="password"
              onChange={onChange}
            />
          </div>
        </form>

        <div className="d-grid gap-0">
          <button
            className={"btn btn-dark mt-4 " + style.btn_signin}
            type="submit"
            form="register-form"
            onClick={formSubmitHandler}
          >
            Buat Akun
          </button>
        </div>
        {error && <p className="text-danger text-center fw-light">{error}</p>}
        <p className="mt-4 d-flex justify-content-center">
          Sudah punya akun
          <Link to="/login" className={style.login}>
            Masuk disini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
