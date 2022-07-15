import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import style from "./Login.module.css";
import { useDispatch } from "react-redux";
// import userSlice from "../../Store/userSlice";
import { useSelector } from "react-redux";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { login } from "../../Features/authSlice";

const Login = () => {
  const loginStatus = true;
  const { isLoading, user, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state ? location.state.from : "/";

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(data));
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  return (
    <div className={"d-flex " + style.login_container}>
      <div className={style.hero_login + " d-lg-flex d-xs-none"}>
        <img src="./Img/img.svg" alt="" />
      </div>
      <div className={style.login_form + " col-lg-6 col-sm-12"}>
        <Link to="/">
          <img src="./Img/logo.svg" alt="" className="py-4" />
        </Link>
        <h3 className="fw-bold my-3">Masuk</h3>
        <form
          className="form"
          method="post"
          id="login-form"
          onSubmit={() => {}}
        >
          <div className="form-group mt-3">
            <label htmlFor="username">Email</label>
            <input
              type="text"
              className={"form-control " + style.input_}
              id="username"
              placeholder="Contoh: johndee@gmail.com"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
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
              value={data.password}
              onChange={handleChange}
              required
            />
          </div>
        </form>
        <div className="d-grid gap-0">
          <button
            className={"btn btn-dark mt-4 " + style.btn_signin}
            type="submit"
            form="login-form"
            onClick={handleSubmit}
          >
            Masuk
          </button>
        </div>
        {error && <p className="text-danger text-center fw-light">{error}</p>}
        <p className="mt-4 d-flex justify-content-center">
          Belum punya akun?
          <Link to="/register" className="register">
            Daftar disini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;