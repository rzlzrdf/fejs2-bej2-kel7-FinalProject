import { Box, Stack, Typography, Link } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

const SidebarM = ({ setOpen }) => {
    return (
        <Stack position={'fixed'} top={0} left={0} width={'50%'} height={'100vh'} bgcolor='#f5f5f5' zIndex={1} p={2} spacing={1} >
            <Box display={'flex'} alignItems="center" justifyContent={'space-between'} mb={1}>
                <Typography variant='h6' fontSize={'1rem'} > Second Hand </Typography>
                <CloseIcon onClick={() => setOpen(false)} sx={{ fontSize: '1.5rem' }} />
            </Box>
            <Typography variant='subtitle1' fontSize={'0.8rem'} component={Link} href={'/'} sx={{ textDecoration: 'none', color: 'black', }}>
                Notifikasi
            </Typography>
            <Typography variant='subtitle1' fontSize={'0.8rem'} component={Link} href={'/list-produk'} sx={{ textDecoration: 'none', color: 'black', }}>
                Daftar Jual
            </Typography>
            <Typography variant='subtitle1' fontSize={'0.8rem'} component={Link} href={'/profile/1'} sx={{ textDecoration: 'none', color: 'black', }}>
                Akun Saya
            </Typography>
        </Stack>
    )
}

export default SidebarM
