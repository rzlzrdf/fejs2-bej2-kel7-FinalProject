import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import style from './Loading.module.css'


const Loading = () => {
  return (
   <Container>
   <Row>
     <Col lg={12} className={"text-center " + style.wrapper}>
     <Spinner animation="border" size='lg'/> 
     <span>Tunggu Sebentar</span>
     </Col>
   </Row>
 </Container>
  )
}

export default Loading