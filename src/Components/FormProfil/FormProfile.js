import React, { useEffect, useRef, useState } from 'react'
import {useDropzone} from 'react-dropzone'
import axios from 'axios'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import {IoArrowBackOutline} from 'react-icons/io5'
import './FormProfile.css'
import { Link, useNavigate } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import {useSelector} from 'react-redux'
import LogoutButton from '../NavbarSearch/LogoutButton'
import Loading from '../../Components/Loading/Loading'
import { set } from 'react-hook-form'


const FormProfile = (props) => {
   
   //DropZne
   const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
   
   const files = acceptedFiles.map(file => (
      <li key={file.path}>
       {file.path} - {file.size} bytes
     </li>
   ));

   const [data, setData] = useState({
      foto:[],
      nama: '',
      kota:'',
      alamat:'',
      telp:''
   })
   const [error, setError] = useState(true)
   
   const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
   };
   
   const { user } = useSelector((state) => state.auth);

   var decoded = jwtDecode(user);
   const navigate = useNavigate()

 //Get Method
  useEffect(() => {
   setError(false)
   axios.get(`https://secondhandapp.herokuapp.com/api/user/detail-user/${decoded.id}`)
       .then((res) => {
       setError(false)
       setData(res.data)
     })
    },[])

   
   //membuat object json dari form
   const inputNama = useRef()
   const inputKota = useRef()
   const inputAlamat = useRef()
   const inputHandphone = useRef()


   // Put methode
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
            nama:inputNama.current.value,
            foto_profil:acceptedFiles[0],
            kota: inputKota.current.value,
            alamat: inputAlamat.current.value,
            telp: inputHandphone.current.value
         }

         // //membuat object dari data di form - inisiasi
         //const formData = new FormData()
         //formData.append('data', JSON.stringify(submittedData))

            axios({
               method: 'put',
               url:'https://secondhandapp.herokuapp.com/api/user/update',
               headers:{
                  'Content-Type': 'multipart/form-data',
                  'Authorization': user
               },
               data:submittedData})
               navigate('/') 
               
            } else{
         setError(true)
         console.error();
      }
   }


  return (
    <>
      <Container className='d-block'>
         <Row className='d-flex justify-content-center mt-4'>
            <Col lg={6} md={6} sm={12}>
            <Link to='/' className='back'><IoArrowBackOutline /></Link>
            <Form onSubmit={formSubmitHandler}>
               <section className="container d-block">
                  <div {...getRootProps({className: 'dropzone'})} className='d-flex justify-content-center'>
                     <input {...getInputProps()} name='foto' onChange={handleChange}/>
                     <img src={data.foto_profil ? data.foto_profil : './Img/uploadphoto.svg'} alt='' className={'foto_profil__'}/>
                  </div>
                  <aside>
                     <ul>{files}</ul>
                  </aside>
               </section>

               <Form.Group className="mb-3" htmlFor="formBasicEmail">
                  <Form.Label htmlFor='nama'>Nama *</Form.Label>
                  <Form.Control type="text" placeholder="Nama" className=' form__' name='nama' id='nama' ref={inputNama} value={data.nama} onChange={handleChange} required/>
               </Form.Group>

               <Form.Group className="mb-3" htmlFor="formBasicPassword">
                  <Form.Label htmlFor='kota'>Kota *</Form.Label>
                  <select className="form-select form__" aria-label="Default select example" name='kota' id='kota' ref={inputKota} value={data.kota} onChange={handleChange} required>
                     <option>Pilih Kota</option>
                     <option value="1">Kota 1</option>
                     <option value="2">Kota 2</option>
                     <option value="3">Kota 3</option>
                     <option value="4">Kota 4</option>
                     <option value="5">Kota 5</option>
                  </select>
               </Form.Group>
                 
               <Form.Group className="mb-3" htmlFor="formBasicPassword">
                  <Form.Label htmlFor='alamat'>Alamat *</Form.Label>
                  <textarea className="form-control form__" id="alamat" placeholder='Contoh: Jalan Ikan Hiu 33' rows="3" name='alamat' ref={inputAlamat} value={data.alamat} onChange={handleChange} required></textarea>
               </Form.Group>
                 
               <Form.Group className="mb-3" htmlFor="formBasicPassword">
                  <Form.Label htmlFor='telp'>No. Handphone *</Form.Label>
                  <Form.Control type="number" placeholder="contoh: +628123456789" className=' form__' name='telp' id='telp' ref={inputHandphone} value={data.telp} onChange={handleChange} required/>
               </Form.Group>
              
               <div className='d-grid gap-2 mb-3'>
                  {Loading}
                  <Button variant="dark" className='button__' type="submit" value='SUBMIT FORM'>
                  Simpan
                  </Button>
                  <LogoutButton/>
               </div>
            </Form>
            {error? <p>Error</p> : ''}
            </Col>
         </Row>
      </Container>
    </>
  )
}

export default FormProfile