import { Box } from '@mui/material'
import KategoryPageM from '../../components/mobile/KategoryPageM'

const CategoryBoxM = ({ page, setPage }) => {
    // console.log(page);
    return (
        <Box display='flex' flexWrap='nowrap' gap={2} px={2} sx={{
            overflow: 'scroll',
        }}>
            <KategoryPageM name='Semua Produk' page={page} setPage={setPage} />
            <KategoryPageM name='Diminati' page={page} setPage={setPage} />
            <KategoryPageM name='Terjual' page={page} setPage={setPage} />
        </Box>
    )
}

export default CategoryBoxM
