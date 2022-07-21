import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import { useSelector } from "react-redux";
import AppDropdownList from '../../Components/AppDropdownList/AppDropdownList'
import NavbarNoSearch from '../../Components/NavbarNoSearch/NavbarNoSearch'

const Notif = () => {
   const { user } = useSelector((state) => state.auth);
   const [data, setData] = useState('')

   useEffect(() => {
     axios.get('https://secondhandapp.herokuapp.com/api/notif/unread', {
      headers: {
        Authorization:
          user,
      },
    })
      .then((res) => {
         console.log(res.data.dataNotif)
         setData(res.data.dataNotif)
      })
   
   }, [])
   
  return (
   <>
      <NavbarNoSearch title={'Notifikasi'}/>
      <Container className='mt-4'>
         <Row>
            <Col lg={{offset:3, span:6}}>
            {/* {data?.map((data, id) => {
               return(
                  <AppDropdownList/>
               )
            })} */}
               {/* <AppDropdownList img={'./Img/xperia.jpg'} title={'Penawaran produk'} date={'20 Jan 22'} name={'Xperia 1 mark iii'} price={'5.250.000'} desc={'Ditawar Rp 4.200.000'} link={'#/action-1'} />
               <AppDropdownList img={'./Img/Rectangle.png'} title={'Penawaran produk'} date={'20 Jan 22'} name={'Jam Casio Digital'} price={'250.000'} desc={'Ditawar Rp 200.000'} link={'#/action-1'} />
               <AppDropdownList img={'./Img/Rectangle.png'} title={'Penawaran produk'} date={'20 Jan 22'} name={'Jam Casio Digital'} price={'250.000'} desc={'Ditawar Rp 200.000'} link={'#/action-1'} />
               <AppDropdownList img={'./Img/Rectangle.png'} title={'Penawaran produk'} date={'20 Jan 22'} name={'Jam Casio Digital'} price={'250.000'} desc={'Ditawar Rp 200.000'} link={'#/action-1'} /> */}
            </Col>
         </Row>
      </Container>
   </>
  )
}

export default Notif