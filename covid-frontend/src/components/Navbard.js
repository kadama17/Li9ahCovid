import axios from "axios";
import React from "react";
import { Navbar, Nav, Container, Card, Button } from "react-bootstrap";

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  logout(e) {
    e.preventDefault();

    console.log("logout");
    axios
      .delete("http://localhost:8000/api/logout/")
      .then(() => (window.location.href = "/login"));
    window.localStorage.removeItem("user");
  }
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/dashboard">Li9ha Covid</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/patient-list">Patient</Nav.Link>
              <Nav.Link href="vaccin-list">Vaccin</Nav.Link>
              <Nav.Link href="">vaccination</Nav.Link>
            </Nav>
            <button onClick={this.logout} style={{ background: "#00b5ad" }}>
              Logout
            </button>
          </Container>
        </Navbar>
        <br />
      </>
    );
  }
}
