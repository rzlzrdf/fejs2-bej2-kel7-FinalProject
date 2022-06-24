import React from 'react'
import style from './DaftarJual.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import Cardss from '../../Components/Card/Cardss'
import {FaBox,FaHeart,FaDollarSign, FaAngleRight} from 'react-icons/fa'

function DaftarJual() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='row offset-lg-1 justify-content-center'>
          <div className='col-lg-10'>
            <div className='fw-bold mb-4'>Daftar Jual Saya</div>
            <div className={`${style['profile_wrapper']} card mb-3`}>
              <div className={`${style['card_profile']} card-body`}>
                <img src="/Img/profile.png" alt="profile-img" className="profile-img" /> 
                <div className="d-flex align-center">
                  <div className='col-lg-10'>
                    <div className={`${style.text_penjual} fw-bold`}>Nama Penjual</div>
                    <div className={`${style.text_penjual} text-muted`}>Kota</div>
                  </div>
                  <button type='submit' className={`${style['btn_edit']}`}>Edit  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className={`${style['category_wrapper']} mb-3`}>
                  <div className='card-body'>
                    <p className='fw-semibold'>Kategori</p>
                    <div className='row'>
                      <div className='col-1'>
                    
                        <FaBox className='mt-1'/>
                      </div>
                      <div className='col-8'>
                        <p>Semua Produk</p>
                      </div>
                      <div className='col-1'>
                      <FaAngleRight className=''/>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-1'>
                      <FaHeart className='mt-1'/>                  
                      </div>
                      <div className='col-8'>
                        <p>Diminati</p>
                      </div>
                      <div className='col-1'>
                      <FaAngleRight className=''/>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-1'>
                      <FaDollarSign className='mt-1'/>                  
                      </div>
                      <div className='col-8'>
                        <p>Terjual</p>
                      </div>
                      <div className='col-1'>
                      <FaAngleRight className=''/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${style['category_button']}`}>
                  <div className="btn-wrapper">
                      <button type="submit" className={`${style['btn_categories']} btn mb-2`}><FaBox/> Semua Produk</button>
                      <button type="submit" className={`${style['btn_categories']} btn mb-2`}><FaHeart/> Diminati</button>
                      <button type="submit" className={`${style['btn_categories']} btn mb-2`}><FaDollarSign/> Terjual</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-4 col-6">
                    {/* <img src="/img/add-product.png" alt="add-img" className="add-img" /> */}
                    <Cardss />
                  </div>
                  <div className="col-lg-4 col-6">
                    <Cardss />
                  </div>
                  <div className="col-lg-4 col-6">
                    <Cardss />
                  </div>
                  <div className="col-lg-4 col-6">
                    <Cardss />
                  </div>
                  <div className="col-lg-4 col-6">
                    <Cardss />
                  </div>
                  <div className="col-lg-4 col-6">
                    <Cardss />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DaftarJual
