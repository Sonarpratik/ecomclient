import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import {mobile, tablet} from "../responsive";

const Con=styled.div`
height :60vh;
background-color: #fbf0f4;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const Title=styled.h1`
font-size: 4rem;
margin-bottom: 20px;

`
const Description=styled.div`
font-size: 1.5rem;
margin-bottom: 30px;
${mobile({
textAlign:"center"
})}
`
const InputCon=styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
${mobile({
width:"80%"
})}
`
const Input=styled.input`
border: none;
flex: 8;
padding-left: 10px;`
const Button=styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;
${mobile({
flex:"2"
})}
`

const News = () => {
  return (
    <Con >
        <Title className='ti'>Newsletter</Title>
        <Description className='dis'>Get timly updates of our website</Description>
        <InputCon className='inp'>
            <Input placeholder='Enter email' className='input'/>
            <Button className='btn12'>
                <SendIcon/>
            </Button>
        </InputCon>
        
    </Con>
  )
}

export default News
