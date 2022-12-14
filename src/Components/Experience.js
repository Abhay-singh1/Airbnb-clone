import React from 'react'
import Banner from './template/Banner'
import styled from 'styled-components'
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Button from '@mui/material/Button'
import { useState } from 'react';
import HorizontalScroll from 'react-scroll-horizontal'
import MediaQuery from 'react-responsive'

const MainDiv = styled.div`
    height:60vh;
    
 @media (max-width: 768px) {
    display: block;
  }
`;


const ExpHead = styled.div`
    display:flex;
    justify-content:space-between ;
    align-items:center ;
    `;
const Btndiv = styled.div`
`;


function Experience() {
    const BannerDiv=styled.div`
        display:flex;
        overflow-x:hidden ;
        padding-left:5vw;
        margin-left:${(props) => left ? '0vw': '-35vw'};
        transition:transform 2s ease ;
    `;
    const [left, setLeft] = useState(true);

    const goLeft = () =>{
        setLeft(!left)
        console.log(left)
        // let spaceLeft = '5vm'
        // let spaceRight = '0vm'
    }
    const goRight = () =>{
        setLeft(!left)
    }


  return (
    <MainDiv>
        <MediaQuery minWidth={1224}>
        <ExpHead>
            <Typography sx={{paddingInlineStart:'5vw', paddingY:3, fontWeight:'bold'}} variant='h3'>
                New this week
            </Typography>
            <Btndiv>
                <Button sx={{color:'Grey', borderRadius:'100%'}} onClick={goLeft} >        
                    <ChevronLeftOutlinedIcon  sx={{border: '1px solid lightgray', borderRadius:'50%'}} />
                </Button> 
                <Button sx={{color:'Grey', borderRadius:'100%'}} onClick={goRight}>        
                    <ChevronRightOutlinedIcon  sx={{border: '1px solid lightgray', borderRadius:'50%'}} />
                </Button> 
            </Btndiv>
        </ExpHead>
        <BannerDiv>
       
            <Banner subTitle="Collection" 
                    title="Most popular around the world" 
                    img="https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=1200" />
            <Banner subTitle="Collection" 
                    title="Great for team building" 
                    img="https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=1200" />
            <Banner subTitle="Collection" 
                title="Fun for the family" 
                img="https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=1200" />
        </BannerDiv>

        </MediaQuery>
        <MediaQuery maxWidth={768}>
        <ExpHead>
            <Typography sx={{paddingInlineStart:'5vw', paddingY:3, fontWeight:'light'}} variant='h5'>
                New this week
            </Typography>
        </ExpHead>
        <BannerDiv>
        <HorizontalScroll>
            <Banner subTitle="Collection" 
                    title="Most popular around the world" 
                    img="https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=1200" />
            <Banner subTitle="Collection" 
                    title="Great for team building" 
                    img="https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=1200" />
            <Banner subTitle="Collection" 
                title="Fun for the family" 
                img="https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=1200" />
        </HorizontalScroll>
        </BannerDiv>
        </MediaQuery>
    </MainDiv>
  )
}

export default Experience