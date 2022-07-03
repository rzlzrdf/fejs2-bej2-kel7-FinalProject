import React from "react";
import style from "./CardProfileNoEdit.module.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProfileNoEdit = () => {
  return (
    <Link to='/info-profil'>
      <Card className={style.card__profile+ " shadow-sm"}>
        <div className={style.profile}>
          <div className={style.left}>
            <img src={'./Img/profile.png'} alt={''} className={style.img_} />
          </div>
          <div className={style.right}>
            <div className={style.info}>
              <p className={'fw-bold fs-5 ' + style.nama}>Nama Penjual</p>
              <p className={'text-muted ' + style.kota}>Kota</p>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CardProfileNoEdit;
