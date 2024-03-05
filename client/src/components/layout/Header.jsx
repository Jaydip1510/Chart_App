import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { orange } from '../../constants/color';
import {Menu as MenuIcon} from '@mui/icons-material';

const Header = () => {
    
    const handleMobile = () => {
      console.log('Moblie');
    }

  return <>
   
   <Box sx={{flexGrow:1}} height={"4rem"}>
    <AppBar position='static' sx={{
        bgcolor:orange
    }}
    >

   <Toolbar>
     <Typography variant='h6' sx={{
       display:{xs:"none",sm:"block"},
     }}>
      Chattu
     </Typography>
     <Box sx={{
            display:{xs:"block",sm:"none"},
     }}
     >
      <IconButton color='inherit' onClick={handleMobile}>
      <MenuIcon/>

      </IconButton>
     </Box>
     <Box>Final</Box>

   </Toolbar>

     </AppBar> 
   </Box>
    
  </>
}

export default Header