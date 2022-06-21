import { Box, Button, Typography } from "@mui/material"


const ProfileList = () => {
    return (
        <Box display='flex' justifyContent='space-between' alignItems='center' boxShadow='0px 0px 4px rgba(0, 0, 0, 0.15)' p={2} borderRadius='20px'>
            <Box display='flex' alignItems='center'>
                <Box component={'img'} src={'https://via.placeholder.com/5'} width={'4rem'} height={'4rem'} borderRadius={'20px'} />
                <Box display='flex' flexDirection='column' ml={2}>
                    <Typography variant='subtitle1'>Dila</Typography>
                    <Typography variant='body2' color='textSecondary'>Bandar Lampung</Typography>
                </Box>
            </Box>
            <Box >
                <Button variant='outlined' color='primary' sx={{
                    width: '100%',
                    color: 'black',
                    fontSize: '.8rem',
                    borderRadius: '10px',
                }}>Edit</Button>
            </Box>
        </Box>
    )
}

export default ProfileList
