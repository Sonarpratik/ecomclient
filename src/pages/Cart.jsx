import React from "react";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Remove from "@mui/icons-material/Remove";
import Add from "@mui/icons-material/Add";
import { mobile, tablet } from "../responsive";
import { useSelector } from "react-redux";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({
    padding: "5px",
  })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Topbutton = styled.button`
  box-sizing: border-box;
  padding: 20px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  border: ${(props) => (props.type === "filled" ? "none" : "2px solid black")};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  ${mobile({
    padding: "10px",
    textSize: "8px",
  })}
`;

const Toptexts = styled.div`
  ${mobile({
    display: "none",
  })}
`;
const Toptext = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
  })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
  })}
`;
const Detail = styled.div`
  flex: 2;
  display: flex;
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Proname = styled.span``;
const De = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProId = styled.span``;
const Procolor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const Prosize = styled.span``;
const Pamountcont = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Price = styled.div`
  font-size: 1.8rem;
  font-weight: 300;
  ${mobile({
    marginBottom: " 20px",
  })}
`;
const Productamount = styled.div`
  font-size: 1.5rem;
  margin: 5px;
  ${mobile({
    margin: "0px 20px",
  })}
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  position:sticky;
  top:100px;
`;
const Sitem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "1.5rem"};
`;
const Summarytitle = styled.h1``;
const Sitemtext = styled.span``;
const Sitemprice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <Topbutton>CONTINUE SHOPPING</Topbutton>

          <Toptexts>
            <Toptext>Shopping Bag</Toptext>
            <Toptext>Wistlist</Toptext>
          </Toptexts>
          <Topbutton type="filled">CHECK OUT NOW</Topbutton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
                <Product>
                  <Detail>
                    <img className="cart-img" src={product.img} alt="" />
                    <De>
                      <Proname>
                        <b>Product:</b> {product.title}
                      </Proname>
                      <ProId>
                        <b>ID:</b>64892731236x
                      </ProId>
                      <Procolor color={product.color}/>
                      <Prosize>
                        <b>Size:</b> {product.size}
                      </Prosize>
                    </De>
                  </Detail>
                  <PriceDetail>
                    <Pamountcont>
                      <Add />
                      <Productamount>{product.quantity}</Productamount>
                      <Remove />
                    </Pamountcont>
                    <Price>RS {product.price*product.quantity}</Price>
                  </PriceDetail>
                </Product>
              ))}
              <Hr/>
          
          </Info>
          <Summary>
            <Summarytitle>ORDER SUMMARY</Summarytitle>
            <Sitem>
              <Sitemtext>Subtotal</Sitemtext>
              <Sitemprice>RS {cart.total}</Sitemprice>
            </Sitem>
            <Sitem>
              <Sitemtext>Estimateed shipping</Sitemtext>
              <Sitemprice>RS 550</Sitemprice>
            </Sitem>
            <Sitem>
              <Sitemtext>Shipping Discount</Sitemtext>
              <Sitemprice>RS -550</Sitemprice>
            </Sitem>
            <Sitem type="total">
              <Sitemtext>Total</Sitemtext>
              <Sitemprice>RS {cart.total}</Sitemprice>
            </Sitem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default Cart;
