import { Box, Link, Typography } from "@mui/material"
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const KategoryPage = ({ page, name, active }) => {

    return (
        <Box component={Link} display='flex' alignItems='center' py={1} color={active ? '#7126B5' : '#D0D0D0'} justifyContent='space-between' href={'/' + page} sx={{
            cursor: 'pointer',
            textDecoration: 'none',
            '&:hover': {
                backgroundColor: '#f5f5f5',
            }
        }}>
            <Box display='flex' alignItems='center'>
                {page === 'list-produk' && <ViewInArIcon />}
                {page === 'wishlist' && <FavoriteBorderIcon />}
                {page === 'list-transaksi' && <MonetizationOnOutlinedIcon />}
                <Typography ml={1} variant='subtitle1' color={active ? '#7126B5' : 'black'}>{name}</Typography>
            </Box>
            <ArrowForwardIosOutlinedIcon />
        </Box >
    )
}

export default KategoryPage
