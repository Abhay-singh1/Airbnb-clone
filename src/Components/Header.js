import React from 'react'
import styled, { css } from "styled-components";
import Typography from '@mui/material/Typography';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import {Avatar} from '@mui/material';

const HeaderBar = styled.nav`
  display:flex;
  justify-content:space-between ;
  align-items: center ;
  position: sticky ;
  width:100%;
  top:0;
  z-index:100;
  background-color:white ;
  border-bottom: 1px solid lightgray;

`;

const ImageIcon = styled.img`
    height:90px ;
    object-fit:contain ;
    margin-left:55px ;
    
`;

const HeaderRight = styled.div`
  display: flex;
  
  align-items: center;
  justify-content: space-between;
  width: 17vw;
  margin-right: 80px;
`;

const Text = styled.p`
  align-items: center;

`;
const Iconic = styled.div`
  display: flex;
  
  align-items: center;
  max-width: fit-content;
  padding: 10px;
  height: 30px;
  border: 1px solid lightgray;
  border-radius: 999px;
`;

export default function Header() {
  return (
    <HeaderBar>
        <ImageIcon src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" />
        <HeaderRight>
          <Typography variant = "subtitle2"  sx={{fontWeight:'bold'}}>Become a Host</Typography>
          <LanguageIcon />
          <Iconic>
            <MenuIcon  sx={{fontSize:20, paddingRight:2}} />
            <Avatar sx={{ width: 28, height: 28 }} />
          </Iconic>
        </HeaderRight>
    </HeaderBar>
  )
}

