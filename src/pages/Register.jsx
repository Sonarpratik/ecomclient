import React from 'react'
import styled from 'styled-components'
import {mobile, tablet} from "../responsive";


const Container =styled.div`
width:100vw;
height:100vh;
background: linear-gradient( 
    rgba(0,0,0,0.5),
    rgba(0,0,0,0.5)),
    url('img/bg22.webp');
background-size:cover;
display:flex;
justify-content: center;
align-items: center;
color:white;

`
const Wrapper =styled.div`
    padding:20px;
    width:40%;
    ${mobile({
        width:"95%"      
              })}
`
const Title =styled.h1`
font-size:2rem;
font-weight:400;

`
const Form =styled.form`
display:flex;
flex-wrap:wrap;`
const Input =styled.input`
flex:1;
min-width:40%;
margin:20px 10px  0px 0px ;
padding:10px
`

const Agreement =styled.span`
margin:20px 0px;
font-size:0.8rem;`
const Button =styled.button`
width :40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Email"/>
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>
                    By creating an someting more  account, I consent to the processing
                    of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
      
    </Container>
  )
}

export default Register
