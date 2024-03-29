import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import style from "./NavLogin.module.css";
import { FaBell, FaListUl, FaUser, FaHome } from "react-icons/fa";
import { Dropdown, Nav, Navbar } from "react-bootstrap";
import AppDropdownList from "../AppDropdownList/AppDropdownList";

const NavLogin = () => {
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://secondhandapp.herokuapp.com/api/notif/unread", {
        headers: {
          Authorization: user,
        },
      })
      .then((res) => {
        console.log(res.data.notif);
        setData(res.data.notif);
      });
  }, [user]);

  return (
    <>
      <Navbar.Toggle className={style.togle} />
      <Navbar.Collapse className={style.mobile}>
        <Nav className={"ms-auto " + style.btn_wrapper}>
          <Link to="/" id="RouterNavLink" className={"d-md-none " + style.btn_}>
            <FaHome /> <span> Home</span>
          </Link>

          <Link id="RouterNavLink" className={style.btn_} to="/daftar-jual">
            <FaListUl /> <span className="d-md-none "> Daftar Jual</span>
          </Link>

          <Link
            to="/notifikasi"
            id="RouterNavLink"
            className={"d-md-none " + style.btn_}
          >
            <FaBell /> <span> Notifikasi</span>
          </Link>

          <Dropdown to="#" align={"end"} className={style.btn_dropdown}>
            <Dropdown.Toggle
              variant="white"
              className={"" + style.icons_menu}
              id="dropdown-basic"
            >
              <FaBell />
              {/* <span
                className={"badge rounded-pill badge-notification bg-danger "}
              ></span> */}
            </Dropdown.Toggle>
            <Dropdown.Menu className={`p-3 w-auto ${style.dropdownMenu}`}>
              {data.map((item, i) => {
                return (
                  <AppDropdownList
                    key={i}
                    img={item.foto_produk_1}
                    title={item.status_notif.toUpperCase()}
                    date={"20 Jan 22"}
                    name={"Xperia 1 mark iii"}
                    price={new Intl.NumberFormat("id-ID", {
                      currency: "IDR",
                    }).format(item.harga)}
                    // desc={"Ditawar Rp 4.200.000"}
                    link={"/notifikasi"}
                  />
                );
              })}
            </Dropdown.Menu>
          </Dropdown>

          <Link to="/info-profil" id="RouterNavLink" className={style.btn_}>
            <FaUser /> <span className="d-md-none"> Akun Saya</span>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </>
  );
};

export default NavLogin;
