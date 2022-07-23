import React, { useState, useEffect } from "react";
import style from "./NavbarSearch.module.css";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavLogin from "../NavLogin/NavLogin";
import LoginButton from "../NavbarSearch/LoginButton";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";

const NavbarSearch = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="white"
      variant="light"
      className={"shadow-sm "}
    >
      <Container>
        <Navbar.Brand>
          <Link id="RouterNavLink" to="/">
            <img src="./Img/logo2.svg" alt="" className={style.logo} />
          </Link>
        </Navbar.Brand>
        <Navbar.Brand className={style.search_container}>
          <input
            type={"search"}
            placeholder="Cari di sini ..."
            className={style.search}
          />
        </Navbar.Brand>
        {user == null && <LoginButton />}
        {user !== null && <NavLogin />}
      </Container>
    </Navbar>
  );
};

export default NavbarSearch;
