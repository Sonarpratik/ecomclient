import { categories } from "../data";
import styled from "styled-components";
import { useState } from "react";
import { mobile, tablet } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  ${mobile({
    // backgroundColor:"red",
    flexDirection: "column",
    padding: "0px",
  })}
`;

const Con = styled.div`
  flex: 1;
  margin: 3px;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  vertical-align: middle;
  ${mobile({
    height: "60vh",
    width: "95vw",
  })}
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-weight: 900;
  font-size: 2rem;
  z-index: 2;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: 500;
  background-color: white;
  border: none;
  color: gray;
  font-weight: 600;
  z-index: 2;
`;

const Cat = () => {
  return (
    <Container>
      {categories.map((item) => (
        <Con key={item.id}>
            <Link to={`/products/${item.cat}`}>
              <Image src={item.img} />
              <Info className="demon">
                <Title>{item.title}</Title>
                <Button className="so">SHOW NOW</Button>
              </Info>
            </Link>
        </Con>
      ))}
    </Container>
  );
};

export default Cat;
