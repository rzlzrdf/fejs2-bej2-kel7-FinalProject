import React, {useState, useEffect} from 'react'
import { Button, Modal } from 'react-bootstrap'
import style from './ModalBuyer.module.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
const ModalBuyer = (props) => {

    let idr=Intl.NumberFormat('id-ID')
    const {user} = useSelector((state) => state.auth)
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get(`https://secondhandapp.herokuapp.com/api/penawaran/list-buyer`, 
        {
            header:
            {
                Authorization:user
            }
        })
        .then(res => {
            console.log(res)
            setProduct(res.data.penawaran)
        })
    }, [])

  return (
    <Modal
    {...props}
    size="sm"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
    <Modal.Header closeButton className='modals__tolak__header'></Modal.Header>
    <Modal.Body >
        <p className='fw-bold'>Masukkan harga tawaranmu</p>
        <p className='text-muted'>Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan segera dihubungi penjual.</p>
        <div className={`d-flex ${style.produk} align-items-center`}>
            <div className='pict'>
                <img   alt=''/>
            </div>
            <div className={``}>
                <h6><b>nama</b></h6>
                <span>harga</span>
            </div>
        </div>
        <form className='mt-2'>
            <div class={"form-group"}>
                <label className={`mb-2 fw-bold`}>Harga Tawar</label>
                <input type="text"  className={`form-control ${style.input} mb-4`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter price"/>
            </div>
        </form>
        <button type="submit" className={`col-4 btn ${style.btn__kirim__} w-100`}>
            Kirim
        </button>
    </Modal.Body>
    
    </Modal>
  )
}

export default ModalBuyer
