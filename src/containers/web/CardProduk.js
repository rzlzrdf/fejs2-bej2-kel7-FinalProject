import { Box, Link, Typography } from '@mui/material'
import React from 'react'

const CardProduk = () => {
    const id = '1'
    return (
        <Box component={Link} href={'/daftar-jual/' + id} p={1}
            sx={{
                width: '352px',
                textDecoration: 'none',
                cursor: 'pointer',
                borderRadius: '10px',
                color: 'black',
                boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)',
                '&:hover': {
                    backgroundColor: '#f5f5f5',
                }
            }}>
            <Box >
                <Box component={'img'} src={'https://via.placeholder.com/5'} width={'100%'} height={'10rem'} borderRadius={2} />
            </Box>
            <Typography variant='subtitle1' mb={1}>Produk 1</Typography>
            <Typography variant='body2' color='textSecondary' mb={1}>Accesoris</Typography>
            <Typography variant='subtitle2' >Rp. 250.000</Typography>
        </Box>
    )
}

export default CardProduk
