import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Routes } from "react-router-dom";

import CreatePatient from "./components/patient/create-patient.component";
import EditPatient from "./components/patient/edit-patient.component";
import PatientListe from "./components/patient/liste-patient.component";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Navbar bg="success" variant="success">ddkdjkj
            <Container>
              <Navbar.Brand>
                <Link to={"/create-patient"} className="nav-link">
                  Expense manager
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-patient"} className="nav-link">
                    Ajouter patient
                  </Link>
                  <Link to={"/patient-list"} className="nav-link">
                    Expenses List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                  <Routes>
                    <Route exact path="/" component={CreatePatient} />
                    <Route path="/create-patient" component={CreatePatient} />
                    <Route path="/edit-patient/:id" component={EditPatient} />

                    <Route path="/expenses-listing" component={PatientListe} />
                  </Routes>
                ,
              </div>
              
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default App;
