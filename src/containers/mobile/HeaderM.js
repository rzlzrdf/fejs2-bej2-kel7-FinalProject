import React from 'react';
import { Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const HeaderM = ({ setOpen }) => {

    return (
        <>
            <Box display='flex' alignItems='center' p={1.5} >
                <MenuIcon sx={{ fontSize: '25px' }} onClick={() => setOpen(true)} />
                <Typography variant='h6' ml={3} fontWeight='700' fontSize={'1.5rem'}>
                    Daftar Jual Saya
                </Typography>
            </Box>
        </>
    )
}

export default HeaderM
