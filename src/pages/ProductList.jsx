import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements'
import News from '../components/News'
import Footer from '../components/Footer'
import Product from '../components/Products'
import {mobile, tablet} from "../responsive";
import { useLocation } from 'react-router-dom'
import { useState } from 'react'


const Container=styled.div``
const Title=styled.h1`
margin: 20px;
font-weight: 600;
`
const Filtercon=styled.div`
display: flex;
justify-content: space-between;
`
const Filter=styled.div`
margin: 20px;
${mobile({
margin:"0px 20px",
display:"flex",
flexDirection:"column"
})}
`
const Filtertext=styled.span`
font-size: 1.4rem;
font-weight: 600;
margin-right:20px;

`
const Select=styled.select`
padding:10px;
margin-right:20px;
${mobile({
  margin:"5px 0px",
  })}
`
const Option=styled.option`
padding:10px;
`

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter, setfilter] = useState({});
  const [sort, setsort] = useState("newest");

  const handleFilters =(e)=>{
    const value = e.target.value;
    setfilter({
      ...filter,
      [e.target.name]:value,
    });
  };
  console.log(filter)
  return (
    <Container>
    <Announcements/>
    <Navbar/>
      <Title >{cat}</Title>
      <Filtercon >
        <Filter>
            <Filtertext>Filter Products:</Filtertext>
            <Select name='color' onChange={handleFilters}>
                <Option disabled >Color</Option>
                <Option>white</Option>
                <Option>black</Option>
                <Option>red</Option>
                <Option>green</Option>
                <Option>blue</Option>
                <Option>yellow</Option>
            </Select>
            <Select name='size' onChange={handleFilters}>
                <Option disabled >Size</Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XXL</Option>
            </Select>
        </Filter>
        <Filter>
            <Filtertext>Sort Products:</Filtertext>
            <Select onChange={e=>setsort(e.target.value)}>
                <Option value={"newest"} >Newest</Option>
                <Option value={"asc"}>Price (asc)</Option>
                <Option value={"desc"}>Price (desc)</Option>
            </Select>
        </Filter>
      </Filtercon>
      <Product cat={cat} filters={filter} sort={sort}/>
      <News/>
      <Footer/>
    </Container>
  )
}

export default ProductList
