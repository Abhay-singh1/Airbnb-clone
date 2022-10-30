import React from 'react'
import styled from'styled-components'
import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography';

const Carddiv = styled.div`
  margin:10px;
  border: 0px solid black;
  cursor:pointer;
  `;

const Img = styled.img`
  object-fit: contain;
  border-radius:10px ;
  max-width:250px;
  max-height:275px;
  `;

const Cardinfo = styled.div`

`;

const Stardiv = styled.div`
  display: flex;
  align-items:center ;
  margin-bottom:1px;
`;

const Price = styled.span`
  display: flex;
`;

function Card({src, title, price, star, country, people }) {
  return (
    <Carddiv>
        <Img src={src} alt="" />
        <Cardinfo>
            <Stardiv>
                <StarIcon sx={{fontSize:'small'}} />
                <Typography variant='body2'>&nbsp;{star}&nbsp; </Typography>
                <Typography variant='body2' sx={{fontWeight:'light'}}> {people}&nbsp; </Typography>
                <Typography variant='body2' sx={{fontWeight:'light'}}> {country}</Typography>
                
            </Stardiv>

            <Typography>{title}</Typography>
            <Price>
            <Typography sx={{fontWeight:'bold'}}>{price}</Typography><Typography>/Person</Typography>
            </Price>
        </Cardinfo>

    </Carddiv>
  )
}

export default Card