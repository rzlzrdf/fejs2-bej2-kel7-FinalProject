import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material"
import CardProduk from "../containers/web/CardProduk";
import Header from "../containers/web/Header";
import CategoryBox from "../containers/web/CategoryBox";
import AddButton from "../components/web/AddButton";
import ProfileList from "../containers/web/ProfileList";

import HeaderM from "../containers/mobile/HeaderM";
import Sidebar from "../components/mobile/SidebarM";
import ProfileListM from "../containers/mobile/ProfileListM";
import CategoryBoxM from "../containers/mobile/CategoryBoxM";
import CardProdukM from "../containers/mobile/CardProdukM";
import AddButtonM from "../components/mobile/AddButtonM";

const ListProduk = () => {
    const isMobile = useMediaQuery("(max-width:425px)");
    const [open, setOpen] = React.useState(false);

    return (
        <>
            {
                isMobile ? (
                    <Box>
                        {open && <>
                            <Box bgcolor={'rgba(0, 0, 0, 0.6)'} position={'fixed'} width={"100%"} height={"100%"} /> <Sidebar setOpen={setOpen} />
                        </>}
                        <Box p={2} width={"100%"} height={"100%"}>
                            <HeaderM setOpen={setOpen} />
                            <ProfileListM />
                        </Box>
                        <CategoryBoxM page={'list-produk'} />
                        <Box p={2} display='flex' alignItems='center' flexWrap='wrap' gap={1.5} justifyContent='space-between'>
                            <AddButtonM />
                            <CardProdukM />
                            <CardProdukM />
                            <CardProdukM />
                            <CardProdukM />
                        </Box>
                    </Box>
                ) : (
                    <>
                        <Header page={'list-produk'} />
                        <Box mx={28} mt={4}>
                            <Typography variant="h5" mb={2}>Daftar Jual Saya</Typography>
                            <ProfileList />
                        </Box>
                        <Box mx={28} mt={4} display='flex'>
                            <CategoryBox page={'list-produk'} />
                            <Box ml={'2rem'} display="flex" flexWrap='wrap' sx={{ width: 'calc(80% - 2rem)' }}>
                                <Box display='flex' alignItems='center' flexWrap='wrap' gap={2}>
                                    <AddButton />
                                    <CardProduk />
                                    <CardProduk />
                                    <CardProduk />
                                    <CardProduk />
                                </Box>
                            </Box>
                        </Box>
                    </>
                )
            }
        </>
    )
}

export default ListProduk
