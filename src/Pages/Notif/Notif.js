import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppDropdownList from '../../Components/AppDropdownList/AppDropdownList'
import NavbarNoSearch from '../../Components/NavbarNoSearch/NavbarNoSearch'

const Notif = () => {
  return (
   <>
      <NavbarNoSearch title={'Notifikasi'}/>
      <Container className='mt-4'>
         <Row>
            <Col lg={{offset:3, span:6}}>
               <AppDropdownList img={'./Img/xperia.jpg'} title={'Penawaran produk'} date={'20 Jan 22'} name={'Xperia 1 mark iii'} price={'5.250.000'} desc={'Ditawar Rp 4.200.000'} link={'#/action-1'} />
               <AppDropdownList img={'./Img/Rectangle.png'} title={'Penawaran produk'} date={'20 Jan 22'} name={'Jam Casio Digital'} price={'250.000'} desc={'Ditawar Rp 200.000'} link={'#/action-1'} />
               <AppDropdownList img={'./Img/Rectangle.png'} title={'Penawaran produk'} date={'20 Jan 22'} name={'Jam Casio Digital'} price={'250.000'} desc={'Ditawar Rp 200.000'} link={'#/action-1'} />
               <AppDropdownList img={'./Img/Rectangle.png'} title={'Penawaran produk'} date={'20 Jan 22'} name={'Jam Casio Digital'} price={'250.000'} desc={'Ditawar Rp 200.000'} link={'#/action-1'} />

            </Col>
         </Row>
      </Container>
   </>
  )
}

export default Notif