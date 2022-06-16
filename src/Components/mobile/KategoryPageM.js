import { Box, Link, Typography } from "@mui/material"
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const KategoryPageM = ({ page, name, active }) => {
    return (
        <Box component={Link} href={'/' + page} display='flex' alignItems='center' p={1.5} bgcolor={active ? '#7126B5' : '#E2D4F0'} color={active ? '#fff' : '#3C3C3C'} sx={{
            textDecoration: 'none',
            borderRadius: '10px',
        }}>
            <Box display='flex' alignItems='center'>
                {page === 'list-produk' && <ViewInArIcon />}
                {page === 'wishlist' && <FavoriteBorderIcon />}
                {page === 'list-transaksi' && <MonetizationOnOutlinedIcon />}
                <Typography ml={1.2} variant='subtitle1' fontSize={'.8rem'} color={active ? '#fff' : '#3C3C3C'}>{name}</Typography>
            </Box>
        </Box >
    )
}

export default KategoryPageM
