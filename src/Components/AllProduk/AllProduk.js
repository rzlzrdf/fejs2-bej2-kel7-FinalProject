import { Button, Col, Row } from 'react-bootstrap'
import {AiOutlineFileAdd} from 'react-icons/ai'
import React from 'react'
import Cardss from '../Card/Cardss'
import style from './AllProduk.module.css'
import { Link } from 'react-router-dom'


const AllProduk = ({data}) => {

  return (
    <>
       <Row>
            <Col  md={3} sm={12} className='mb-3'>
                <Link to='/info-produk'>
                    <Button className={style.upload + ' fw-light text-muted'}>
                        <AiOutlineFileAdd className={style.next}/>
                        <p>Tambah Produk</p>
                    </Button>
                </Link>
            </Col>
            {
                data.length===0 ? 'Data Anda masih kosong' : data.map((e,i)=>{
                    return  <Col md={3} sm={12} className='mb-3'>
                        <Cardss item={e}/>
                    </Col>
                })
            }


        </Row>
    </>
  )
}

export default AllProduk