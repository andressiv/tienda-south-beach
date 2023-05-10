 import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget"
import {NavLink, Link} from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Tienda SB</Navbar.Brand>
          <Nav className="me-auto">
          <NavLink to={'/category/campera'} >Campera</NavLink>
              <NavLink to={'/category/shoes'} >Shoes</NavLink>
              <NavLink to={'/category/remera'} >Remera</NavLink>
          </Nav>
        </Container>
        <CartWidget contador="7" />
      </Navbar>
    
    </>
  );
}

export default NavBar; 

