import React from 'react'
import './FormProduk.css'
import {useDropzone} from 'react-dropzone';
import {IoArrowBackOutline} from 'react-icons/io5'
import { Col, Container, Form, Row, Button } from 'react-bootstrap';



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
               <a href='/' className='back__'><IoArrowBackOutline /></a>
               <Form>
                  <Form.Group className="my-3" controlId="formBasicEmail">
                     <Form.Label>Nama Produk</Form.Label>
                     <Form.Control type="text" placeholder="Nama Produk" className=' form___'/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Harga Produk</Form.Label>
                     <Form.Control type="number" placeholder="Harga Produk" className=' form___'/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Kategori</Form.Label>
                     <select className="form-select form___" aria-label="Default select example">
                        <option selected>Pilih Kota</option>
                        <option value="1">Kota 1</option>
                        <option value="1">Kota 1</option>
                        <option value="1">Kota 1</option>
                        <option value="1">Kota 1</option>
                     </select>
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Deskripsi</Form.Label>
                     <textarea class="form-control form___" id="alamat" placeholder='Contoh: Jalan Ikan Hiu 33' rows="3"></textarea>
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Foto Produk</Form.Label>
                     <section className="container">
                        <div {...getRootProps({className: 'dropzone'})} className='d-flex justify-content-center mb-4'>
                           <input {...getInputProps()} />
                           <img src='./Img/uploadproduk.svg' alt='' />
                        </div>
                        <aside>
                           <ul>{files}</ul>
                        </aside>
                     </section>
                  </Form.Group>
               
                  <div className='button__wrapper'>
                     <Button variant="dark" className='button__2' type="submit">
                     Preview
                     </Button>
                     <Button variant="dark" className='button__1' type="submit">
                     Terbitkan
                     </Button>
                  </div>
               </Form>              
            </Col>
         </Row>
      </Container>
    </>
  )
}

export default FormProduk