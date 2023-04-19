import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget"

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Tienda SB</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Shoes</Nav.Link>
            <Nav.Link href="#features">Remeras</Nav.Link>
            <Nav.Link href="#pricing">Campera</Nav.Link>
          </Nav>
        </Container>
        <CartWidget contador="7" />
      </Navbar>
      
    </div>
  );
}

export default NavBar;