import React from "react";

import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
  import {useSelector} from "react-redux"
  import { Link } from "react-router-dom";


export default function Navbar() {

  const quantity = useSelector(state=>state.cart.quantity)

  return (
    <div className="nav-con">
      <div className="child-div-nav">
        <div className="left">
          <span className="en">EN</span>

          <div className="ser-con">
            <input type="text" className="in-ser" placeholder="Search" />
            <SearchOutlinedIcon style={{color:"gray",fontSize:"16px"}}/>
          </div>
        </div>
        <div className="center">
          <h1 className="logo">iCade</h1>
        </div>
        <div className="right">
          <div className="menu-right">Login</div>
          <div className="menu-right">Register</div>
          <Link to={"/cart"}>
          <div className="menu-right">
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
