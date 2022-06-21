import { useMediaQuery } from '@mui/material';
import AddButtonM from '../components/mobile/AddButtonM';
import AddButton from '../components/web/AddButton'
import CardProdukM from './mobile/CardProdukM';
import CardProduk from './web/CardProduk'

const SemuaProduk = () => {
    const isMobile = useMediaQuery("(max-width:425px)");
    return (
        <>
            {isMobile ? (
                <>
                    <AddButtonM />
                    <CardProdukM />
                    <CardProdukM />
                    <CardProdukM />
                    <CardProdukM />
                </>
            ) : (
                <>
                    <AddButton />
                    <CardProduk />
                    <CardProduk />
                    <CardProduk />
                    <CardProduk />
                </>
            )
            }

        </>
    )
}

export default SemuaProduk
