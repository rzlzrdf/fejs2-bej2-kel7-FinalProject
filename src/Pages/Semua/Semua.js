import React from 'react'
import { Col, Container, Pagination, Row } from 'react-bootstrap'
import style from './Semua.module.css'
import Filter from '../../Components/Filter/Filter'
import NavbarSearch from '../../Components/NavbarSearch/NavbarSearch'
import AllProduk from '../../Components/AllProduk/AllProduk'
import Cardss from '../../Components/Card/Cardss'

const Semua = () => {
   let active = 2;
let items = [];
for (let number = 1; number <= 4; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
  return (
    <>
      <NavbarSearch />
      <Container className={style.container_}>
         <Row>
            <Col lg={2}>
               <Filter/>
            </Col>
            <Col lg={10} className={style.all}>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
               <Cardss/>
            </Col>
         </Row>
         <Row className={'my-3'}>
            <Col lg={{offset: 10, span: 1}}>
               <Pagination>{items}</Pagination>
            </Col>
         </Row>
      </Container>
    </>
  )
}

export default Semua