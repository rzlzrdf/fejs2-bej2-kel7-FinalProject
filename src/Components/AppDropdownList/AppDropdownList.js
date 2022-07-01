import React from 'react'
import {FaCircle} from 'react-icons/fa'
import {Row, Col} from 'react-bootstrap'
import style from '../Navbar/Navbar.module.css'


const Dropdown = ({title,date,image,desc,name,price}) => {
  return (
      <Row>
      <Col md={2} className='m-0 p-0'><img src={image} className='w-100' alt=""/></Col>
      <Col md={10} >
        <div className='d-inline-flex w-100 justify-content-between align-items-center'>
          <p className={`${style.descriptionText} mb-0 `}>{title}</p>
          <div className='d-flex flex-row align-items-center'>
            <p className={`${style.descriptionText} mb-0 me-2`}>{date}</p>
            <FaCircle size={10} color='red'/>
          </div>
        </div>
        <div className='d-flex flex-column mt-2'>
          <h6 className={`fw-normal ${style.titleText}`}>{name}</h6>
          <h6 className={`fw-normal ${style.titleText}`}>{price}</h6>
          <h6 className={`fw-normal ${style.titleText}`}>{desc}</h6></div>
      </Col>
    </Row>
  )
}

export default Dropdown
