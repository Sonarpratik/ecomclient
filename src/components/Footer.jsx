import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {mobile, tablet} from "../responsive";

const Con = styled.div`
display: flex;
${mobile({
  // backgroundColor:"red",
  flexDirection:"column"

})}
${tablet({
  // backgroundColor:"red",
  flexDirection:"column"

})}



`;
const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({
  display:"none"
  })}
`;
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;
const Right = styled.div`
flex: 1;
padding: 20px;
`;
const Logo = styled.h1`
font-weight: bold;

`;
const Des = styled.p`
// text-align: center;
${mobile({
  textAlign:"center"
  })}
`;
const Socialcon = styled.div`
display: flex;

`;
const Socialicon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color: #${props=>props.color};
    display:flex;
  justify-content: center;
  align-items: center;
  margin-top:20px;
  margin-right:20px;
  cursor: pointer;



    
`;
const Ti = styled.h3`
margin-bottom:30px;
font-weight: bold;

`;
const List = styled.ul`
margin:0px;
padding:0px;
list-style:none;
display:flex;
flex-wrap:wrap;
`;
const Listitem = styled.li`
width:50%;
margin-bottom:10px;

`;

const Title = styled.h3`
margin-bottom:30px;
font-weight: bold;
`;
const Contactitem = styled.div`
margin-bottom:20px;
display:flex;
align-items: center;

`;



const Footer = () => {
  return (
    <Con >
      <Left >
        <Logo>iCade</Logo>
        <Des >
          Shri kant Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias rem
          cumque molestiae inventore officia harum aut voluptates! Fugiat ere
          inventore quibusdam quo adipisci ullam unde?
        </Des>
        <Socialcon >
          <Socialicon color="3B5999">
           
         
            <FacebookIcon  />

           
          </Socialicon>
          <Socialicon  color="E4405F">
            <InstagramIcon/>
          </Socialicon>
          <Socialicon color="000000">
            <GitHubIcon/>
          </Socialicon>
          <Socialicon color="55ACEE">
            <TwitterIcon/>
          </Socialicon>
        </Socialcon>
      </Left>
      <Center >
        <Ti>Usefull Links</Ti>
        <List>
            <Listitem>Home</Listitem>
            <Listitem>Cart</Listitem>
            <Listitem>Man Fashion</Listitem>
            <Listitem>Woman Fashion</Listitem>
            <Listitem>Accessories</Listitem>
            <Listitem>My Account</Listitem>
            <Listitem>Order Tracking</Listitem>
            <Listitem>Wishlist</Listitem>
            <Listitem>Terms</Listitem>
        </List>

      </Center>
      <Right >
        <Title>Contact</Title>
        <Contactitem>< HomeIcon style={{marginRight:"10px"}} />622 Bla Bla Steer, Somewhere Near Clouds</Contactitem>
        <Contactitem><  CallIcon style={{marginRight:"10px"}} />+91 8698xxxxxx</Contactitem>
        <Contactitem>< EmailOutlinedIcon style={{marginRight:"10px"}} />contactme@gmail.com</Contactitem>
        <img className="last-img" src="img/visa.webp" alt="" />
      </Right>
    </Con>
  );
};

export default Footer;
