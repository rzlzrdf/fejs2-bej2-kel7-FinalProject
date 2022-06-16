import { Box, Link } from "@mui/material"
import SearchField from "../../components/web/SearchField"
import ListIcon from '@mui/icons-material/List';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

const Header = ({ page }) => {
    return (
        <Box component="header" display='flex' boxShadow='0px 0px 10px rgba(0, 0, 0, 0.15)' justifyContent='space-between' alignItems='center' height='80px' padding='0px 8rem'>
            <Box display='flex' alignItems='center' width="44rem">
                <Box component='img'
                    src='/images/logo.png'
                    alt='logo'
                    mr={2}
                />
                <SearchField />
            </Box>
            <Box width={'6rem'} display='flex' justifyContent='space-between'>
                <Link href='/list-produk' color={'inherit'}>
                    <ListIcon color={page === 'list-produk' ? 'primary' : 'textPrimary'} />
                </Link>
                <NotificationsIcon />
                <Link href='/login' color={'inherit'}>
                    <PersonIcon />
                </Link>
            </Box>
        </Box >
    )
}

export default Header
