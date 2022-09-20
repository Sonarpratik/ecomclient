import { useState, useEffect } from "react";
import React from "react";

import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import News from "../components/News";
import Footer from "../components/Footer";
import styled from "styled-components";
import Remove from "@mui/icons-material/Remove";
import Add from "@mui/icons-material/Add";
import { mobile, tablet } from "../responsive";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../reqMethod";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const Filtersize = styled.select`
  padding: 10px;
`;
const Filtersizeoptions = styled.option`
  padding: 10px;
`;
const Addcontainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    width: "100%",
  })}
`;
const Amountcontainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 770;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;
const Button = styled.button`
  padding: 15px;
  border: 3px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    background-color: teal;
    color: white;
  }
`;

const Single = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(" ");
  const [size, setSize] = useState(" ");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/product/find/" + id);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    //update cart

    dispatch(addProduct({...product,quantity,color,size}));
  };
  return (
    <div className="s-con">
      <Navbar />
      <Announcements />

      <div className="s-wrapper">
        <div className="s-imgcontainer">
          <img className="s-img-all" src={product.img} alt="" />
        </div>
        <div className="s-infocontainer">
          <h1 className="s-title">{product.title}</h1>
          <p className="s-desc">{product.desc}</p>
          <span className="s-price">RS {product.price}</span>
          <div className="s-filtercontainer">
            <div className="s-filter">
              <span className="s-f-title">Color</span>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </div>
            <div className="s-filter">
              <span className="s-f-title">Size</span>
              <Filtersize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <Filtersizeoptions
                    key={s}
                    
                  >
                    {s}
                  </Filtersizeoptions>
                ))}
              </Filtersize>
            </div>
          </div>
          <Addcontainer>
            <Amountcontainer>
              <Remove
                className="cursor"
                onClick={() => handleQuantity("dec")}
              />
              <Amount>{quantity}</Amount>
              <Add className="cursor" onClick={() => handleQuantity("inc")} />
            </Amountcontainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </Addcontainer>
        </div>
      </div>
      <News />
      <Footer />
    </div>
  );
};

export default Single;
