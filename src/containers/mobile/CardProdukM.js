import { Box, Link, Typography } from '@mui/material'

const CardProdukM = () => {
    const id = '1'
    return (
        <Box component={Link} href={'/list-produk/' + id} p={1} sx={{
            width: '8.6rem',
            height: 'calc(10.5rem + 2px)',
            textDecoration: 'none',
            borderRadius: '10px',
            color: 'black',
            boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)',
        }}>
            <Box >
                <Box component={'img'} src={'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'} width={'100%'} height={'5rem'} borderRadius={2} />
            </Box>
            <Typography variant='subtitle1' fontSize={'.85rem'} mb={1} noWrap>Kucing ngeselin bukan kucing oren</Typography>
            <Typography variant='body2' color='textSecondary' fontSize={'.7rem'} mb={1}>Pet</Typography>
            <Typography variant='subtitle2' fontSize={'.8rem'}  >Rp. 250.000</Typography>
        </Box>
    )
}

export default CardProdukM
