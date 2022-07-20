import React, { useRef, useState } from 'react'
import style from './FormProduk.module.css'
import {useDropzone} from 'react-dropzone';
import {IoArrowBackOutline} from 'react-icons/io5'
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Select from 'react-select'



const FormProduk = (props) => {

   const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
   const files = acceptedFiles.map(file => (
      <li key={file.path}>
         {file.path} - {file.size} bytes
      </li>
   ));

   const options = [
      { value: '1', label: 'Kesehatan' },
      { value: '2', label: 'Elektronik' },
      { value: '3', label: 'Kendaraan' },
      { value: '4', label: 'Hobi' },
      { value: '5', label: 'Fashion' }
    ]

    const inputNama = useRef()
    const inputHarga = useRef()
    const inputKategori = useRef()
    const inputDeskripsi = useRef()
   
  return (
    <>
      <Container className='d-block'>
         <Row className='d-flex justify-content-center'>
            <Col lg={6} md={6} sm={12}>
               <Link to='/' className={style.back__}><IoArrowBackOutline /></Link>
               <Form >
                  <Form.Group className="my-3" controlId="formBasicEmail">
                     <Form.Label>Nama Produk</Form.Label>
                     <Form.Control type="text" placeholder="Nama Produk" className=' form___' ref={inputNama}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Harga Produk</Form.Label>
                     <Form.Control type="number" placeholder="Harga Produk" className=' form___' ref={inputHarga}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Kategori</Form.Label>
                     <Select options={options} isMulti ref={inputKategori}/>
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Deskripsi</Form.Label>
                     <textarea className={'form-control '+ style.form___} id="alamat" placeholder='Deskripsi Barang...' rows="3" ref={inputDeskripsi}></textarea>
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
               
                  <div className={style.button__wrapper}>
                     <Button variant="dark" className={style.button__2} type="submit">
                     Preview
                     </Button>
                     <Button variant="dark" className={style.button__1} type="submit">
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