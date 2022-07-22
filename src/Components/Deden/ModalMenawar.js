import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const ModalMenawar = (props) => {
  return (
   <Modal
   {...props}
   size="sm"
   aria-labelledby="contained-modal-title-vcenter"
   centered
   >
   <Modal.Header closeButton className='modals__tolak__header'>
   </Modal.Header>
   <Modal.Body >
       <p className='fw-bold'>Masukkan harga tawaranmu</p>
       <p className='text-muted'>paraparparpajakslaknskjasbcknsd cljadbhfaklsnd f,madnb fjabhdfna ds,mfn ad,fblahdbfl kjdbflakhdbabhdflmna</p>
       <input type={'number'} className={'d-block'}/>
       <div className='d-grid gap-0'>
           <Button variant='dark' className='btn__kirim__'>Kirim</Button>
       </div>
   </Modal.Body>
   
</Modal>
  )
}

export default ModalMenawar