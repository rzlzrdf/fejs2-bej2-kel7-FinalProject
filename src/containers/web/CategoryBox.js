import { Box, Divider, Stack, Typography } from "@mui/material"
import KategoryPage from "../../components/web/KategoryPage"

const CategoryBox = ({ page }) => {
    return (
        <Box width={'20%'}>
            <Box boxShadow='0px 0px 10px rgba(0, 0, 0, 0.15)' p={2} borderRadius='20px'>
                <Typography variant='subtitle1' mb={2}>Kategori</Typography>
                <Stack spacing={1}>
                    <KategoryPage page='list-produk' name='Semua Produk' active={page === 'list-produk'} />
                    <Divider />
                    <KategoryPage page='wishlist' name='Diminati' active={page === 'wishlist'} />
                    <Divider />
                    <KategoryPage page='list-transaksi' name='Terjual' active={page === 'list-transaksi'} />
                </Stack>
            </Box>
        </Box>
    )
}

export default CategoryBox
