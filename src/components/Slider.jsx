import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import React from 'react'
import styled from 'styled-components';
import { slideitems } from '../data';
import { useState } from 'react';

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items:center;
justify-content: center;
 position: absolute;
 top: 0px;
 bottom: 0px;
 margin: auto;
 left:${props=>props.direction ==="left"&& "10px"};
 right:${props=>props.direction ==="right"&& "10px"};
cursor:pointer;
opacity:0.5;
z-index:2;

`

const Slide =styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
background-color: #${props=>props.bg};

`
const Wrapper =styled.div`
   transition: all 1.3s ease;
height: 100%;
  display: flex;
  transform: translateX(${props=>props.multiply * -100}vw);
`




export default function Slider() {
  
  const [slideindex, setslideindex] = useState(0);
  const handleclick=(direction)=>{
    if(direction==="left"){
      setslideindex(slideindex > 0 ? slideindex -1 :2)
 
    
    }
    else{
      setslideindex(slideindex<2?slideindex +1:0)
      
      
    }

  };

 
    





  return (
    
    <div className='slider-con'>
      <Arrow direction="left" onClick={()=>handleclick("left")}>
        <ArrowBackIosNewOutlinedIcon/>
      </Arrow>
      <Wrapper multiply={slideindex} >
        {slideitems.map((item)=>(

          <Slide key={item.id} bg={item.bg}>

        <div className="img-con">
          <img className='for-img' src={item.img} alt="" />
        </div>
        <div className="img-info">
              <h1 className='title-h1'>{item.title}</h1>
              <p className='title-p'>{item.desc}</p>
              <button className='title-btn'>SHOW NOW</button>
        </div>
        </Slide>
          ))}
       
        </Wrapper>
    
      <Arrow direction="right" onClick={()=>handleclick("right")} >
        <ArrowForwardIosOutlinedIcon/>
      </Arrow>
    </div>
  )

}


