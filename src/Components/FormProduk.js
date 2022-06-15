import React from 'react'
import './FormProduk.css'
import {useDropzone} from 'react-dropzone';
import { Col, Container, Row } from 'react-bootstrap';


const FormProduk = (props) => {
   const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <>
      <Container className='d-block'>
         <Row className='d-flex justify-content-center'>
            <Col lg={6} md={6} sm={12}>
               <h1>FORMM</h1>
               <section className="container">
                  <div {...getRootProps({className: 'dropzone'})}>
                     <input {...getInputProps()} />
                     <img src='./Img/uploadproduk.svg' alt='' />
                  </div>
                  <aside>
                     <ul>{files}</ul>
                  </aside>
               </section>
            </Col>
         </Row>
      </Container>
    </>
  )
}

export default FormProduk