import { Box } from '@mui/material'
import KategoryPageM from '../../components/mobile/KategoryPageM'

const CategoryBoxM = ({ page }) => {
    return (
        <Box display='flex' flexWrap='nowrap' gap={2} px={2} sx={{
            overflow: 'scroll',
        }}>
            <KategoryPageM page='list-produk' name='Produk' active={page === 'list-produk'} />
            <KategoryPageM page='wishlist' name='Diminati' active={page === 'wishlist'} />
            <KategoryPageM page='list-transaksi' name='Terjual' active={page === 'list-transaksi'} />
        </Box>
    )
}

export default CategoryBoxM
