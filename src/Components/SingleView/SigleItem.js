
import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Mainbar from '../Navbar/Mainbar';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './Single.css'


const SigleItem = () => {
    const {id}=useParams();
    const [Item,setItem]=useState();
    const [add,setAdd]=useState(1);
    const menu =fakeData.find(pd=>pd.id === id);
    
    const handlePlus=()=>{
        let plus=add+1;
        setAdd(plus) ;
    }
    const handleminus=()=>{
        if(add>0){
        let minus=add-1;
        setAdd(minus) ;
        }
    }
    
    
    return (
        <>
            <Link to="/">Home</Link>
            <Container style={{marginTop:"100px"}}>
                <Row>
                <Col md={6}>
                        <h1>{menu.menu_name}</h1>
                        <p>{menu.description}</p>
                        <div>
                        <h3  style={{display:"inline"}}>${menu.price}</h3>
                        <button className="handleplusminus"><AddIcon onClick={()=>handlePlus()} ></AddIcon><span className="one">{add}</span><RemoveIcon onClick={()=>handleminus()}></RemoveIcon>  </button></div>
                        <Button className="button"> <ShoppingCartIcon>  </ShoppingCartIcon> Add</Button>
                </Col>
                <Col md={{span:5,offset:1}}>
                    <div>
                        <img src={menu.img} height="440px" width="100%" alt=""/>
                    </div>
                </Col>
                </Row>
            </Container>
        </>
    );
};

export default SigleItem;