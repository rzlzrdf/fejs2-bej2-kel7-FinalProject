import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import './ModalsTolak.css'

const ModalsTerima = (props) => {
    return (
        <>
            <Modal
                {...props}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton className='modals__tolak__header'>
                </Modal.Header>
                <Modal.Body >
                    <p className='fw-bold'>Perbarui status penjualan produkmu</p>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="transaksi" id="terima" value='terima' />
                        <label class="form-check-label" for="terima" >
                            <p className='text__input__transaksi'>Berhasil Terjual</p>
                            <p className='text-muted text__input__transaksi2'>Kamu telah sepakat menjual produk kepada pembeli</p>
                        </label>
                        </div>
                        <div class="form-check ">
                        <input class="form-check-input" type="radio" name="transaksi" id="tolak" value='tolak' />
                        <label class="form-check-label" for="tolak">
                            <p className='text__input__transaksi'>Batalkan Transaksi</p>
                            <p className='text-muted text__input__transaksi2'>Kamu membatalkan transaksi produk ini dengan pembeli</p>
                        </label>
                    </div>
                    <div className='d-grid gap-0'>
                        <Button variant='dark' className='btn__kirim__'>Kirim</Button>
                    </div>
                </Modal.Body>
                
            </Modal>
        </>
    )
}

export default ModalsTerima
