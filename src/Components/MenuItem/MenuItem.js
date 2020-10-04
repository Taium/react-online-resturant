import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import { Col,Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const MenuItem = (props) => {
    const {id,category,img,menu_name,price,description}=props.item;
    return (
        
            
            <Col md='4'className="p-5 bd-highlight col-example">
        <Link to={"/singleItem/"+id}>
        < >
          <MDBCardImage
            hover
            overlay='white-light'
            className=' card-img-top'
            src={img}
            alt='man'
          />

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <h5>{menu_name}</h5>
            </MDBCardTitle>

            

            <MDBCardText>{
                description.toString().substring(0,15)
                }
              
            </MDBCardText>
            <MDBCardText>
             <strong>${price}</strong> 
            </MDBCardText>

           
          </MDBCardBody>
        </>
        </Link>
      </Col>

    
        
    );
};

export default MenuItem;