import axios from "axios";
import React from "react";
import "./Navbard.css";
import { Navbar, Nav, Container } from "react-bootstrap";

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: JSON.parse(window.localStorage.getItem("user")).type,
    };
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
      <div style={{ marginTop: "-20px" }}>
        <Navbar style={{ height: "50px" }} bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/dashboard">
              <img src="images/vaccine.png" height="50" className="Logo" />
              Li9ah Covid
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/patient-list">Patient</Nav.Link>
              <Nav.Link href="vaccin-list">Vaccin</Nav.Link>
            </Nav>
            <button onClick={this.logout} style={{ background: "#00b5ad" }}>
              Logout
            </button>
          </Container>
        </Navbar>
        <br />
      </div>
    );
  }
}
