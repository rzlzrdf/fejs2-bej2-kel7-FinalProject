import React, { useState } from "react";
import style from "./NavbarSearch.module.css";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import {FaSearch} from 'react-icons/fa'
import {SiHotelsdotcom, SiScrutinizerci} from 'react-icons/si'
import NavLogin from "../NavLogin/NavLogin";
import LoginButton from "../NavbarSearch/LoginButton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavbarSearch = () => {
  const { user } = useSelector((state) => state.auth);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const goToSearch = (target) => {
    navigate(`/all/${target}`);
  };

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
          <Link id="RouterNavLink" to="/" className={style.logo}>
            <SiScrutinizerci/><SiHotelsdotcom/>and
          </Link>
        </Navbar.Brand>
        <Navbar.Brand className={style.search_container}>
          <input
            type={"text"}
            placeholder="Cari di sini ..."
            className={style.search}
            onChange={(e) => setInput(e.target.value.toLowerCase())}
          />
          <button className={style.cari} onClick={() => goToSearch(input)}><FaSearch/></button>
        </Navbar.Brand>
        {user == null && <LoginButton />}
        {user !== null && <NavLogin />}
      </Container>
    </Navbar>
  );
};

export default NavbarSearch;
