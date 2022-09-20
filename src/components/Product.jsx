import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom";


const Info =styled.div`
height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color:rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  opacity: 0;`

const Container = styled.div`
flex:1;
margin: 5px;
min-width: 280px;
height: 300px;
display: flex;
justify-content: center;
align-items: center;
background-color: #bae2ec;
position: relative;

&:hover ${Info}{
  opacity: 1;
  transition: all 0.5s ease;
}`
const Circl = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
  background-color: white;
position: absolute;
`
const Image = styled.img`
height: 75%;
/* width: 100%; */
object-fit: cover;
z-index: 2;`

const Icon =styled.div`
height:40px;
width:40px;
border-radius:50%;
background-color:white;
display: flex;
align-items: center;
justify-content: center;
margin:10px;
transition:all 0.3s ease;
cursor:pointer;


&:hover{
  background-color:#e9f5f5;
  transform:scale(1.1);
}

`
const Ps = ({item}) => {
  return (
    <Container  >
      <Circl >
      </Circl>
        <Image className='iop' src={item.img}/>
        <Info className='info'>
          <Icon>
              <ShoppingCartOutlinedIcon   />
          </Icon>
          <Icon>
            <Link to={`/product/${item._id}`}>
          <  SearchOutlinedIcon/>
            </Link>
          </Icon>
          <Icon>
              <FavoriteBorderOutlinedIcon/>
        
          </Icon>
        </Info>
     
    </Container>
  )
}

export default Ps
