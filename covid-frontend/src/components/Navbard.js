import React from "react";
import { Navbar, Nav, Container, Card, Button } from 'react-bootstrap';

export function NavBar() {
  return (

<>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Li9ha Covid</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Patient</Nav.Link>
      <Nav.Link href="#features">Vaccin</Nav.Link>
      <Nav.Link href="#pricing">vaccination</Nav.Link>
    </Nav>
    <div>
        <button style={{  background: "#00b5ad"  }}>Logout</button>
        </div>
    </Container>
  </Navbar>
  <br />
 
</>)
}