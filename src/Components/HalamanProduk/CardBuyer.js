import React, {useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import style from './Seller-halaman-produk.module.css'
import { AiFillStar } from 'react-icons/ai'
import ModalBuyer from '../../Components/ModalBuyer/ModalBuyer'

const CardBuyer = (props) => {

  const {user} = useSelector((state) => state.auth)
  let idr=Intl.NumberFormat('id-ID')

  const params = useParams()
  const [wishlist, setWishlist] = useState(false)
  const [tawar, setTawar] = useState(false)
  const [modalTawar, setModalTawar] = useState(false)

  const handlerWishlist = () => {
    console.log(user)
    if (wishlist === false){
        axios.post(`https://secondhandapp.herokuapp.com/api/wishlist/create`,
        {
          produk_id:props.id
        },
        {
          headers:{
            Authorization: user
          },
        })
        .then(res=>{
          console.log(res.data.message)
          console.log('Berhasil Menambah')
          setWishlist(true)
        })
        .catch(err=>{
          console.log(err)
        })
      } else if (wishlist === true){
        
      }
    } 
    

  // const DeleteHandler = () => {
  //   setWishlist(!wishlist)
  //   axios.delete(`https://secondhandapp.herokuapp.com/api/wishlist/delete/${props.id}`,{
  //     headers:{
  //       Authorization: user
  //     },
  //   })
  //   .then(res=>{
  //     console.log(res)
  //     console.log('berhasil menghapus')
  //   }).catch(err=>{
  //     console.log(err)
  //   })
  // }

  const { register, handleSubmit, formState } = useForm()

  // const formTawarHandler = (data) => {
  //   const postData = {
  //     harga: data.findProduct.harga
  //   }

  //   axios.post(`https://secondhandapp.herokuapp.com/api/penawaran/menawar`, postData,{
  //     headers:{Authorization: user
  //     },
  //   })
  //   .then(res=>{
  //     console.log(res)
  //     setIsTawar(true)
  //   })
  //   .catch(err=>{
  //     console.log('Gagal')
  //   })
  //    setModalTawar(false)
  // }

  return (
    <div>
      <div className={`card ${style.cards}`} >
        <div className="card-body">
            <div className='d-flex flex-row justify-content-between'>
              <p className="card-title fs-5 fw-bolder">{props.produk.nama}</p> 
              <div>
                { user &&
                  <AiFillStar 
                    onClick={handlerWishlist}
                    className={wishlist ? `${style.wishlistOn}` : `${style.wishlistOff}`}
                  />
                }
              </div>
            </div>
            <p className="text-muted">
              {props.produk.kategori_1 === null ? '' : props.produk.kategori_1.nama + ' '}
              {props.produk.kategori_2 === null ? '' : props.produk.kategori_2.nama + ' '}
              {props.produk.kategori_3 === null ? '' : props.produk.kategori_3.nama + ' '}
              {props.produk.kategori_4 === null ? '' : props.produk.kategori_4.nama + ' '}
              {props.produk.kategori_5 === null ? '' : props.produk.kategori_5.nama + ' '}
            </p>
            <p className='fs-5 mb-3'>Rp. {idr.format(props.produk.harga)}</p>
            
            <div className='d-grid gap-2'>
              <Link to='#' type="button" className={` ${style.buttonCards}`} onClick={()=>setTawar(true)}>Saya tertarik dan ingin nego</Link>
            </div>
            <ModalBuyer show={tawar} onHide={() => setTawar(false)}/>
        </div>
    </div>
    </div>
  )
}
export default CardBuyer
