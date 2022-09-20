import React from "react";
import styled from "styled-components";
import { popular } from "../data";
import Ps from "./Product";
import { mobile, tablet } from "../responsive";
import axios from "axios";
import { useState, useEffect } from "react";

const Con = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({
    // backgroundColor:"red",
    justifyContent: "center",
  })}
`;

const Product = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [fillterproducts, setfillterProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://ecombackend.sonarpratik.repl.co/api/product?category=${cat}`
            : `https://ecombackend.sonarpratik.repl.co/api/product`
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setfillterProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setfillterProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setfillterProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setfillterProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);
  return (
    <Con>
      {cat
        ? fillterproducts.map((item) => <Ps item={item} key={item.id} />)
        : products.slice(0,8).map((item) => <Ps item={item} key={item.id} />)}
    </Con>
  );
};

export default Product;
