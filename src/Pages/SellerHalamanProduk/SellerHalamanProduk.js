import React,{ useState ,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CardsSeller from '../../Components/Seller-halaman-produk/CardsSeller'
import Corousel from '../../Components/Seller-halaman-produk/Corousel'
import Deskripsi from '../../Components/Seller-halaman-produk/Deskripsi'
import Profile from '../../Components/Seller-halaman-produk/Profile'
import { Col, Container, Row } from 'react-bootstrap'
import NavbarSearch from '../../Components/NavbarSearch/NavbarSearch'

const SellerHalamanProduk = (props) => {

  const [produk, setProduk] = useState(null)
  const params = useParams()

  useEffect(() => {
    axios.get(`https://secondhandapp.herokuapp.com/api/product/list-by-id?id=${params.id}`)
    .then(response=>{
      console.log(response.data)
      setProduk(response.data)
    })
  },[])

  return (
    <>
    <NavbarSearch/>
    { produk !== null &&
      <Container>
      <Row>
        <Col lg={{offset: 1, span: 6}}>
          <Corousel 
            produk={produk}
          />
        </Col>
        <Col lg={4} >
          <CardsSeller produk={produk}/>
          <Profile produk={produk}/>
        </Col>
      </Row>
      <Row>
        <Col lg={{span:6, offset: 1}}>
        <Deskripsi produk={produk}/>
        </Col>
      </Row>
    </Container>
    }

    </>
  )
}

export default SellerHalamanProduk
