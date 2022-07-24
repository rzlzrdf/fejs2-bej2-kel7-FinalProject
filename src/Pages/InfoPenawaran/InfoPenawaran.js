import React from "react";
import NavbarNoSearch from "../../Components/NavbarNoSearch/NavbarNoSearch";
import { Container, Row, Col } from "react-bootstrap";
import { IoArrowBackOutline } from "react-icons/io5";
import CardPenawaran from "../../Components/CardPenawaran/CardPenawaran";
import CardProfileNoEdit from "../../Components/CardProfileNoEdit/CardProfileNoEdit";
import { Link } from "react-router-dom";
import style from './InfoPenawaran.module.css'

const InfoPenawaran = () => {
  return (
    <>
      <NavbarNoSearch title='Info Penawaran' />
      <Container className='mt-4'>
          <Link to="/" className={style.back}>
            <IoArrowBackOutline />
          </Link>
        <Row>
          <Col lg={7} className="mx-auto">
            <CardProfileNoEdit />
          </Col>
        </Row>
        <Row>
          <Col className="mx-auto mt-4" lg={7}>
            <h6>Daftar Produkmu yang Ditawar</h6>
            <CardPenawaran />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InfoPenawaran;
