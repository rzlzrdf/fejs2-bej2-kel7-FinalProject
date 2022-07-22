import React, {useEffect, useState} from 'react'
import style from "./CardProfile.module.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading"

const CardProfile = () => {
  
  const [products, setProducts] = useState([])
  const [loading, setLoading] =useState(true)
 
const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    axios
      .get('https://secondhandapp.herokuapp.com/api/user/detail-user/11', {
        headers: {
          Authorization:
            user,
        },
      })
      .then((response) => {
        console.log(response);
        setLoading(false)
        setProducts(response.data)
      });
  }, []);


  return (
    <Link to='/info-profil'>
      <Card className={style.card__profile+ " shadow-sm"}>
        <div className={style.profile}>
          <div className={style.left}>
            <img src={'./Img/profile.png'} alt={''} className={style.img_} />
          </div>
          <div className={style.right}>
            <div className={style.info}>
              <p className={'fw-bold fs-5 ' + style.nama}>{products.nama}</p>
              <p className={'text-muted ' + style.kota}>{products.kota}</p>
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
