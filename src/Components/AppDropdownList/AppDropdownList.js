import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {FaCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import style from '../NavLogin/NavLogin.module.css'

const AppDropdownList = (props) => {
  return (
    <Link to='/notifikasi'>
      <Row className={style.notif}>
        <Col md={2} className={'m-0 p-1 '+ style.imgNotif}><img src={props.img} className='w-100 rounded-3 mt-2' alt=""/></Col>
        <Col md={10} >
          <div className='d-inline-flex w-100 justify-content-between align-items-center'>
            <p className={`${style.descriptionText} mb-0 text-muted `}>{props.title}</p>
            <div className='d-flex flex-row align-items-center'>
              <p className={`${style.descriptionText} mb-0 me-2`}>{props.date}</p>
              <FaCircle size={10} color='red'/>
            </div>
          </div>
          <div className='d-flex flex-column mt-2'>
            <h6 className={`fw-normal ${style.titleText}`}>{props.name}</h6>
            <h6 className={`fw-normal ${style.titleText}`}>Rp. {props.price}</h6>
            <h6 className={`fw-normal ${style.titleText}`}>{props.desc}</h6>
          </div>
        </Col>
      </Row>
    </Link>
  )
}

export default AppDropdownList