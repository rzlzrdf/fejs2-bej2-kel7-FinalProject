import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import { useSelector } from "react-redux";
import AppDropdownList from '../../Components/AppDropdownList/AppDropdownList'
import NavbarNoSearch from '../../Components/NavbarNoSearch/NavbarNoSearch'

const Notif = () => {
   const { user } = useSelector((state) => state.auth);
   const [data, setData] = useState([])

   useEffect(() => {
     axios.get('https://secondhandapp.herokuapp.com/api/notif/unread', {
      headers: {
        Authorization:
          user,
      },
    })
      .then((res) => {
         setData(res.data.notif)
         console.log(res.data.notif)
      })
   }, [user])
   
  return (
   <>
      <NavbarNoSearch title={'Notifikasi'}/>
      <Container className='mt-4'>
         <Row>
            <Col lg={{offset:3, span:6}}>
              {data.map((item, i) => {
                return (
                  <AppDropdownList
                    key={i}
                    img={item.foto_produk_1}
                    title={item.status_notif.toUpperCase()}
                    date={"20 Jan 22"}
                    name={"Xperia 1 mark iii"}
                    price={item.harga}
                    // desc={"Ditawar Rp 4.200.000"}
                  />
                )
              })}
            </Col>
         </Row>
      </Container>
   </>
  )
}

export default Notif