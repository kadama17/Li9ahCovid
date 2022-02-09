import React, { Component } from "react";

import axios from "axios";
import Swal from "sweetalert2";
import { NavBar } from "../../components/Navbard";
import { Button, Col, Form, Row } from "react-bootstrap";

export default class CreatePatient extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangePatientCode = this.onChangePatientCode.bind(this);
    this.onChangePatientNom = this.onChangePatientNom.bind(this);
    this.onChangePatientPrenom = this.onChangePatientPrenom.bind(this);
    this.onChangePatientDateNaissance =
      this.onChangePatientDateNaissance.bind(this);
    this.onChangePatientContact = this.onChangePatientContact.bind(this);
    this.onChangePatientAdresse = this.onChangePatientAdresse.bind(this);
    this.onChangePatientProfession = this.onChangePatientProfession.bind(this);
    this.onChangePatientSexe = this.onChangePatientSexe.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      code_patient: "",
      nom: "",
      prenom: "",
      date_naiss: "",
      contact: "",
      adresse: "",
      profession: "",
      sexe: "",
      statut: "NV",
    };
  }

  onChangePatientCode(e) {
    this.setState({ code_patient: e.target.value });
  }

  onChangePatientNom(e) {
    this.setState({ nom: e.target.value });
  }

  onChangePatientPrenom(e) {
    this.setState({ prenom: e.target.value });
  }

  onChangePatientDateNaissance(e) {
    this.setState({ date_naiss: e.target.value });
  }
  onChangePatientContact(e) {
    this.setState({ contact: e.target.value });
  }
  onChangePatientAdresse(e) {
    this.setState({ adresse: e.target.value });
  }

  onChangePatientProfession(e) {
    this.setState({ profession: e.target.value });
  }
  onChangePatientSexe(e) {
    this.setState({ sexe: e.target.value });
  }

  async onSubmit(e) {
    e.preventDefault();
    const patient = {
      code_patient: this.state.code_patient,
      nom: this.state.nom,
      prenom: this.state.prenom,
      date_naiss: this.state.date_naiss,
      contact: this.state.contact,
      adresse: this.state.adresse,
      profession: this.state.profession,
      sexe: this.state.sexe,
      statut: this.state.statut,
    };

    await axios
      .post(process.env.API_URL + "api/patients/", patient)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    // console.log(`Expense successfully created!`);
    // console.log(`Name: ${this.state.name}`);
    // console.log(`Amount: ${this.state.amount}`);
    // console.log(`Description: ${this.state.description}`);
    Swal.fire(
      "OPERATION EFFECTUEE!",
      "Patient enregistré avec succès",
      "success"
    );

    this.setState({
      code_patient: "",
      nom: "",
      prenom: "",
      date_naiss: "",
      contact: "",
      adresse: "",
      profession: "",
      sexe: "",
      statut: "",
    });
  }

  render() {
    return (
      <div>
        <NavBar />{" "}
        <div style={{ marginLeft: "15%" }} className="form-wrapper">
          <Form onSubmit={this.onSubmit}>
            <Row>
              <Col md={5} sm={6}>
                <Form.Group controlId="CodePatient">
                  <Form.Label>Code Patient</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.code_patient}
                    onChange={this.onChangePatientCode}
                  />
                </Form.Group>
              </Col>

              <Col md={5} sm={6}>
                <Form.Group controlId="Nom">
                  <Form.Label>Nom Patien</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.nom}
                    onChange={this.onChangePatientNom}
                  />
                </Form.Group>
              </Col>
              <Col md={5} sm={6}>
                <Form.Group controlId="Prenom">
                  <Form.Label>Prenom Patient</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.prenom}
                    onChange={this.onChangePatientPrenom}
                  />
                </Form.Group>
              </Col>

              <Col md={5} sm={6}>
                <Form.Group controlId="Naissance">
                  <Form.Label>Date de Naissance Patient</Form.Label>
                  <Form.Control
                    type="date"
                    value={this.state.date_naiss}
                    onChange={this.onChangePatientDateNaissance}
                  />
                </Form.Group>
              </Col>
              <Col md={5} sm={6}>
                <Form.Group controlId="Contact">
                  <Form.Label>Contact Patient</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.contact}
                    onChange={this.onChangePatientContact}
                  />
                </Form.Group>
              </Col>

              <Col md={5} sm={6}>
                <Form.Group controlId="Adresse">
                  <Form.Label>Adresse Patient</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.adresse}
                    onChange={this.onChangePatientAdresse}
                  />
                </Form.Group>
              </Col>

              <Col md={5} sm={6}>
                <Form.Group controlId="Professsion">
                  <Form.Label>Profession Patient</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.profession}
                    onChange={this.onChangePatientProfession}
                  />
                </Form.Group>
              </Col>
              <Col md={5} sm={6}>
                <Form.Group controlId="Sexe">
                  <Form.Label>Sexe Patient</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.sexe}
                    onChange={this.onChangePatientSexe}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" size="lg" block="block" type="submit">
              Ajouter le patient
            </Button>
          </Form>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}
