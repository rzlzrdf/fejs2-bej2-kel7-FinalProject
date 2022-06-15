import React from 'react'
import {useDropzone} from 'react-dropzone'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import {IoArrowBackOutline} from 'react-icons/io5'
import './FormProfile.css'

const FormProfile = (props) => {
   const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
   const files = acceptedFiles.map(file => (
     <li key={file.path}>
       {file.path} - {file.size} bytes
     </li>
   ));

  return (
    <>
      <Container className='d-block'>
         <Row className='d-flex justify-content-center mt-4'>
            <Col lg={6} md={6} sm={12}>
            <a href='/' className='back'><IoArrowBackOutline /></a>
            <Form>
               <section className="container d-block">
                  <div {...getRootProps({className: 'dropzone'})} className='d-flex justify-content-center'>
                     <input {...getInputProps()} />
                     <img src='./Img/uploadphoto.svg' alt=''/>
                  </div>
                  <aside>
                     <ul>{files}</ul>
                  </aside>
               </section>

               <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nama *</Form.Label>
                  <Form.Control type="text" placeholder="Nama" className=' form__'/>
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Kota *</Form.Label>
                  <select className="form-select form__" aria-label="Default select example">
                     <option selected>Pilih Kota</option>
                     <option value="1">Kota 1</option>
                     <option value="1">Kota 1</option>
                     <option value="1">Kota 1</option>
                     <option value="1">Kota 1</option>
                  </select>
               </Form.Group>
                 
               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Alamat *</Form.Label>
                  <textarea class="form-control form__" id="alamat" placeholder='Contoh: Jalan Ikan Hiu 33' rows="3"></textarea>
               </Form.Group>
                 
               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>No. Handphone *</Form.Label>
                  <Form.Control type="number" placeholder="contoh: +628123456789" className=' form__'/>
               </Form.Group>
              
               <div className='d-grid gap-2'>
                  <Button variant="dark" className='button__' type="submit">
                  Simpan
                  </Button>
               </div>
               
            </Form>
            </Col>
         </Row>
      </Container>
    </>
  )
}

export default FormProfile