import React, { useState } from 'react';
import { Button, Col, Container } from 'react-bootstrap';
import logo from '../../images/logo2.png';
import './Body.css';
import headerImage from '../../images/bannerbackground.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { IconButton } from '@material-ui/core';
import Mainbar from '../Navbar/Mainbar';
import MenuItem from '../MenuItem/MenuItem';
import fakedata from '../../fakeData'

const Body = () => {
    const [data,setData]=useState(fakedata);
    const [cart,setCart]=useState([]);
    const[color,setColor]=useState(false);



    const handleShow=(cat)=>{
        const Show=data.filter(pd=>pd.category===cat);
        setCart(Show);
        setColor(!color);
    }
    
    return (
        <>
        
        
            <Container>
            <Col md={12}>
            <div className="logo">
                <img src={logo} width="150px" height="40px" alt=""/>
            </div>
            <div className="RightNav">
                <ul>
                    <li><ShoppingCartIcon></ShoppingCartIcon></li>
                    <li>Login</li>
                    <li><Button>Sign up</Button> </li>
                </ul>
            </div>
            </Col>
            </Container>
        
      
        <Col md={12}>
        <div>
        <div style={{ backgroundImage: ` url(${headerImage})` }} className="headerimage">
            <div className="bgsearch">
                <h1>Best Food Waiting For Your Belly</h1>
                <input type="text" placeholder="search your need"/>
                <button>Search</button>
            </div>
        </div>
        </div>
        </Col>
        <Col md={12}>
        
            <Mainbar 
            handleShow={handleShow}
            color={color}

            
            ></Mainbar>
            </Col>
            <Container>
        <Col md={12} className="d-flex flex-wrap bd-highlight example-parent">
        {
                cart.map(pd=>
                <MenuItem item={pd}></MenuItem>
                    )
            }
        </Col>
        </Container>
        </>
        
    );
};

export default Body;