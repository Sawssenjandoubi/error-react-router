import React, { useState } from 'react';
import {NavDropdown,Nav,Navbar,Container,Form,Button} from "react-bootstrap"; 
import ReactStars from "react-rating-stars-component";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import Typography from "react-rating-stars-component";
import Rating from "react-rating-stars-component"

function Navbarr(props) {
  
  const handleClick=(event)=>{
    props.setSearch(event.target.value)
    
  };
  /*const ratingChanged=(newRating)=>{
    props.setRating(newRating);
  }*/
  const ratingChanged=(newRating)=>{
   console.log(props.setRate(newRating)) 
  }
  const handleReset=(event)=>{
window.location.reload();
props.setRate(0);
  }
 
  
  return (
    <Navbar bg="light" expand="lg" className='Navbar'>
      <Container fluid>
        <Navbar.Brand href="#" className="text-primary">MOVIE APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            


  <ReactStars
                        count={5}
                        onChange={(newRating) => ratingChanged(newRating)}
                        size={30}
                        activeColor="#ffd700"
                    />
                    <button type="reset" onClick={(event)=>handleReset(event)} style={{height:'50px' ,width:'80px',border:'grey'}}>Reset</button>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event)=>handleClick(event)}
              
            />
            <Button variant="outline-success" >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;