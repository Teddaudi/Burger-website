import React from "react";
import './Nav.css'
import {BsCart} from 'react-icons/bs'
import { Link } from "react-router-dom";


const Nav = ({size,setShow}) => {
  return (
  
    <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={()=>setShow(true)}>
                My Shopping
            </span>
            <div className="cart" onClick={()=>setShow(false)}>
                <Link to='/cart'>
                   <BsCart/>
                </Link>
                <Link to='/cart'>{size}</Link>
            </div>
        </div>
    </nav>
  );
};

export default Nav;
