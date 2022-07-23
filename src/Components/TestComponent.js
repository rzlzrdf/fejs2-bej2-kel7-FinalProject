import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';

const TestComponent = () => {
  return (
    <Container>
      <Row>
        <Col lg={12} className="text-center align-center">
        <Spinner animation="border" /> 
        <p>Tunggu Sebentar</p>
        </Col>
      </Row>
    </Container>
  )
};

export default TestComponent;
