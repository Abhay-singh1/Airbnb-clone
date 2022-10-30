import React from 'react'
import styled from 'styled-components'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Button from '@mui/material/Button'

const ChipDiv = styled.div`
display:flex ;
padding-left:5vw ;
padding-top:5vw ;
/* justify-content:space-between ; */

`;

const Chipcontainer = styled.div`
  width:50%;
  display: flex;
  flex-flow: row wrap;
  overflow: hidden;
`;

function Chips() {
    const arr=['Dates', 'Group Size','More filters']
    const arr1 = ['Great-for-groups', 'Family-friendly', 'Animals', 'Arts & Writing', 'Baking', 'Cooking', 'Dance', 'Drinks', 'Entertainment', 'Fitness', 'history & culture', 'Magic']
    
    const handleClick =() =>{
        console.log('clicked')
    }
  
    return (
    <ChipDiv>

      <Stack sx={{borderRight:' 1px solid lightgray', paddingRight:'5px'}}  direction="row" spacing={1}>
           { arr.map((item,index) => {
                return(
                <Chip key={index} label={item} variant="outlined" />
             )})}
        </Stack>
        <Button sx={{color:'lightGrey', borderRadius:'100%'}} onClick={handleClick}>        
            <ChevronLeftOutlinedIcon  sx={{border: '1px solid lightgray', borderRadius:'50%'}} />
        </Button>   
        <Chipcontainer>
        
        <Stack sx={{alignItems:'center'}} direction="row" spacing={1}>
                    { arr1.map((item,index) => {
                            return(
                            <Chip key={index} label={item} />
                        )})}
        </Stack>
        </Chipcontainer>
            <Button sx={{color:'lightGrey', borderRadius:'100%'}} onClick={handleClick}>                
                <ChevronRightOutlinedIcon sx={{border: '1px solid lightgray', borderRadius:'50%'}} />
            </Button>    
    </ChipDiv>    
  )
}

export default Chips