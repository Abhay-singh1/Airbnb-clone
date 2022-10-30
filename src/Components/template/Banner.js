import React from 'react'
import styled from'styled-components'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import MediaQuery from 'react-responsive'

const Carousel = styled.div`
 display: flex;
 padding-right:1vw ;
 width:100%;
 height:50%;
 position: relative;
 color:white;
 z-index:1;
 @media (max-width: 768px) {
    width:100%;
    position: absolute;
 height:50%;
  }
 
 `;

const Img = styled.img`
    object-fit: contain;
    border-radius:10px ;
    max-width:580px;
    max-height: 500px;
    @media (max-width: 768px) {
    max-width:300px;
    max-height: 200px;
  }
`; 



function Banner({subTitle,title,img}) {
  return (
    <Carousel>
        <MediaQuery minWidth={1224}>
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
        </MediaQuery>


        <MediaQuery maxWidth={768}>
        <Img src={img} />
        <Box sx={{position:'relative',left:'20px', top:'30px'}}>
            <Typography variant='caption'>
                {subTitle}
            </Typography>
            <Typography variant='h5' sx={{fontWeight:'bold'}}>
                {title}
            </Typography>
            <Button sx={{background:'white', color:'grey',  textTransform: 'capitalize', top:'170px'}}>Show all </Button>
        </Box>
        </MediaQuery>
                    
    </Carousel>
  )
}

export default Banner