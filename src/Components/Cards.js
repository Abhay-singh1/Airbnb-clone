import React from 'react'
import Card from './template/Card'
import Typography from '@mui/material/Typography';
import styled from 'styled-components'
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Button from '@mui/material/Button'
import { useState } from 'react';

const CardDiv = styled.div`
    display: block;
    padding-left:5vw ;
    padding-top:4vw ;
    margin-right: 80px;
`;
const TitleDiv = styled.div`
    display: flex;
    justify-content: space-between ;
`;

const RightTitleDiv = styled.div`
    display:flex;
`;





function Cards() {
  
  const CardBlock = styled.div`
    display: flex;
    overflow:hidden;
    margin-left:${(props) => left ? '0vw': '-35vw'};
    transition:transform 2s ease-out ;
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
    <CardDiv>
        <TitleDiv>
            <Typography variant='h5' >Plan a trip with help from local Hosts around the world</Typography>
            <RightTitleDiv> 
                <Typography variant='body1' sx={{fontWeight:'bold'}} >Show(9)</Typography>
                <Button sx={{color:'grey', borderRadius:'100%'}} onClick={goLeft}>        
                    <ChevronLeftOutlinedIcon  sx={{border: '1px solid lightgray', borderRadius:'50%'}} />
                </Button> 
                <Button sx={{color:'grey', borderRadius:'100%'}} onClick={goRight}>        
                    <ChevronRightOutlinedIcon  sx={{border: '1px solid lightgray', borderRadius:'50%'}} />
                </Button> 
            </RightTitleDiv>
        </TitleDiv>

        <CardBlock>
            
            <Card src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2496585-active_media/original/8d64c46c-96ee-4509-bc94-51c61d61d742.jpg?im_w=1200"
                 title="Plan The Perfect New York Vacation" 
                 price="From ₹1,566" 
                 star="4.99" 
                 country="United States"
                 people="(153)" />
            <Card src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2488061-active_media/original/463633c6-b6e7-496f-888e-7d5c3b16575c.jpg?im_w=1200" 
                 title="Design your trip to Barcelona with Gemma" 
                 price="From ₹3,119"
                 star="5.0" 
                 country="Spain"
                 people="(19)" />
            <Card src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2563542-active_media/original/f952164b-179f-4402-bbf9-c31907fa0cf7.jpg?im_w=1200" 
                 title="Craft a custom trip to Korea with Jay" 
                 price="From ₹3,475"
                 star="4.97" 
                 country="South Korea"
                 people="(60)" />
            <Card src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2496585-active_media/original/8d64c46c-96ee-4509-bc94-51c61d61d742.jpg?im_w=1200"
                 title="Plan The Perfect New York Vacation" 
                 price="From ₹1,566" 
                 star="4.99" 
                 country="United States"
                 people="(153)" />
            <Card src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2488061-active_media/original/463633c6-b6e7-496f-888e-7d5c3b16575c.jpg?im_w=1200" 
                 title="Design your trip to Barcelona with Gemma" 
                 price="From ₹3,119"
                 star="5.0" 
                 country="Spain"
                 people="(19)" />
            <Card src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2563542-active_media/original/f952164b-179f-4402-bbf9-c31907fa0cf7.jpg?im_w=1200" 
                 title="Craft a custom trip to Korea with Jay" 
                 price="From ₹3,475"
                 star="4.97" 
                 country="South Korea"
                 people="(60)" />
            <Card src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2496585-active_media/original/8d64c46c-96ee-4509-bc94-51c61d61d742.jpg?im_w=1200"
                 title="Plan The Perfect New York Vacation" 
                 price="From ₹1,566" 
                 star="4.99" 
                 country="United States"
                 people="(153)" />
            <Card src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2488061-active_media/original/463633c6-b6e7-496f-888e-7d5c3b16575c.jpg?im_w=1200" 
                 title="Design your trip to Barcelona with Gemma" 
                 price="From ₹3,119"
                 star="5.0" 
                 country="Spain"
                 people="(19)" />
            <Card src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2563542-active_media/original/f952164b-179f-4402-bbf9-c31907fa0cf7.jpg?im_w=1200" 
                 title="Craft a custom trip to Korea with Jay" 
                 price="From ₹3,475"
                 star="4.97" 
                 country="South Korea"
                 people="(60)" />
            
        </CardBlock>
    </CardDiv>
  )
}

export default Cards