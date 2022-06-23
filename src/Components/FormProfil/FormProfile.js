import React, {useRef} from 'react'
import {useDropzone} from 'react-dropzone'
import axios from 'axios'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import {IoArrowBackOutline} from 'react-icons/io5'
import './FormProfile.css'

const FormProfile = (props) => {

   //DropZne
   const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
   const files = acceptedFiles.map(file => (
     <li key={file.path}>
       {file.path} - {file.size} bytes
     </li>
   ));

   //membuat object json dari form
   const inputNama = useRef()
   const inputKota = useRef()
   const inputAlamat = useRef()
   const inputHandphone = useRef()

   const formSubmitHandler = async(event) => {
      event.preventDefault()

      let formIseCorrect = false

      //validasi dan sanitasi
      if(inputNama.current.value !== '' && inputKota !=='' &&
         inputAlamat !== '' && inputHandphone !== ''){
         formIseCorrect =true
      }

      if(formIseCorrect){
         //data setup
         const submittedData = {
            name: inputNama.current.value,
            kota: inputKota.current.value,
            alamat: inputAlamat.current.value,
            hp: inputHandphone.current.value
         }

         //membuat object dari data di form - inisiasi
         const formData = new FormData()

         formData.append('data', JSON.stringify(submittedData))

         const up = await axios.post('')
         console.log(up.data)

      } else{
         console.log('error')
      }
   }


  return (
    <>
      <Container className='d-block'>
         <Row className='d-flex justify-content-center mt-4'>
            <Col lg={6} md={6} sm={12}>
            <a href='/' className='back'><IoArrowBackOutline /></a>
            <Form onSubmit={formSubmitHandler}>
               <section className="container d-block">
                  <div {...getRootProps({className: 'dropzone'})} className='d-flex justify-content-center'>
                     <input {...getInputProps()} />
                     <img src='./Img/uploadphoto.svg' alt=''/>
                  </div>
                  <aside>
                     <ul>{files}</ul>
                  </aside>
               </section>

               <Form.Group className="mb-3" htmlFor="formBasicEmail">
                  <Form.Label htmlFor='nama'>Nama *</Form.Label>
                  <Form.Control type="text" placeholder="Nama" className=' form__' name='nama' id='nama' ref={inputNama} required/>
               </Form.Group>

               <Form.Group className="mb-3" htmlFor="formBasicPassword">
                  <Form.Label htmlFor='kota'>Kota *</Form.Label>
                  <select className="form-select form__" aria-label="Default select example" name='kota' id='kota' ref={inputKota} required>
                     <option>Pilih Kota</option>
                     <option value="1">Kota 1</option>
                     <option value="1">Kota 2</option>
                     <option value="1">Kota 3</option>
                     <option value="1">Kota 4</option>
                     <option value="1">Kota 5</option>
                  </select>
               </Form.Group>
                 
               <Form.Group className="mb-3" htmlFor="formBasicPassword">
                  <Form.Label htmlFor='alamat'>Alamat *</Form.Label>
                  <textarea className="form-control form__" id="alamat" placeholder='Contoh: Jalan Ikan Hiu 33' rows="3" name='alamat' ref={inputAlamat} required></textarea>
               </Form.Group>
                 
               <Form.Group className="mb-3" htmlFor="formBasicPassword">
                  <Form.Label htmlFor='hp'>No. Handphone *</Form.Label>
                  <Form.Control type="number" placeholder="contoh: +628123456789" className=' form__' name='hp' id='hp' ref={inputHandphone} required/>
               </Form.Group>
              
               <div className='d-grid gap-2'>
                  <Button variant="dark" className='button__' type="submit" value='SUBMIT FORM'>
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