import { Box, Typography } from "@mui/material"
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const KategoryPageM = ({ name, setPage, page }) => {
    return (
        <Box display='flex' alignItems='center' p={1.5} bgcolor={page === name ? '#7126B5' : '#E2D4F0'} color={page === name ? '#fff' : '#3C3C3C'} onClick={() => setPage(name)} sx={{
            textDecoration: 'none',
            borderRadius: '10px',
        }}>
            <Box display='flex' alignItems='center'>
                {name === 'Semua Produk' && <ViewInArIcon />}
                {name === 'Diminati' && <FavoriteBorderIcon />}
                {name === 'Terjual' && <MonetizationOnOutlinedIcon />}
                <Typography ml={1.2} variant='subtitle1' fontSize={'.8rem'} color={page === name ? '#fff' : '#3C3C3C'}>{name === 'Semua Produk' ? 'Produk' : name}</Typography>
            </Box>
        </Box >
    )
}

export default KategoryPageM
