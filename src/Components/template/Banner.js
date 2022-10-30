import React from 'react'
import styled from'styled-components'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'

const Carousel = styled.div`
 display: flex;
 padding-right:1vw ;
 width:100%;
 height:50%;
 position: relative;
 color:white;
 z-index:1;
 `;

const Img = styled.img`
    object-fit: contain;
    border-radius:10px ;
    max-width:580px;
    max-height: 500px;
`; 



function Banner({subTitle,title,img}) {
  return (
    <Carousel>
        
        <Img src={img} />
        <Box sx={{position:'absolute',left:'20px', top:'30px'}}>
            <Typography variant='caption'>
                {subTitle}
            </Typography>
            <Typography variant='h5' sx={{fontWeight:'bold'}}>
                {title}
            </Typography>
            <Button sx={{background:'white', color:'grey',  textTransform: 'capitalize', top:'170px'}}>Show all </Button>
        </Box>
                    
    </Carousel>
  )
}

export default Banner