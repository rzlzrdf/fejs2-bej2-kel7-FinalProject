import React from "react";
import style from "./CardProfile.module.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProfile = () => {
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
            <div className={style.edit}>
              <button>Edit</button>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CardProfile;
