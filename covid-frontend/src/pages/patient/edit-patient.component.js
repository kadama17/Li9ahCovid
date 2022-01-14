import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import { NavBar } from "../../components/Navbard";

export default class EditPatient extends Component {
  constructor(props) {
    super(props);

    this.onChangePatientCode = this.onChangePatientCode.bind(this);
    this.onChangePatientNom = this.onChangePatientNom.bind(this);
    this.onChangePatientPrenom = this.onChangePatientPrenom.bind(this);
    this.onChangePatientDateNaissance =
      this.onChangePatientDateNaissance.bind(this);
    this.onChangePatientContact = this.onChangePatientContact.bind(this);
    this.onChangePatientAdresse = this.onChangePatientAdresse.bind(this);
    this.onChangePatientProfession = this.onChangePatientProfession.bind(this);
    this.onChangePatientSexe = this.onChangePatientSexe.bind(this);
    this.onChangePatientStatut = this.onChangePatientStatut.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    // State
    this.state = {
      code_patient: "",
      nom: "",
      prenom: "",
      date_naiss: "",
      contact: "",
      adresse: "",
      profession: "",
      sexe: "",
      statut: "",
    };
  }

  componentDidMount() {
    const id = window.location.pathname.split("/")[2];
    console.log(id);

    axios
      .get("http://127.0.0.1:8000/api/patients/" + id)
      .then((res) => {
        this.setState({
          code_patient: res.data.code_patient,
          nom: res.data.nom,
          prenom: res.data.prenom,
          date_naiss: res.data.date_naiss,
          contact: res.data.contact,
          adresse: res.data.adresse,
          profession: res.data.profession,
          sexe: res.data.sexe,
          statut: res.data.statut,
        });
      })
      .catch((error) => {
        console.log(error);
      });
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

  onChangePatientStatut(e) {
    this.setState({ statut: e.target.value });
  }

  updateDose(e) {
    e.preventDefault();
  }

  onSubmit(e) {
    e.preventDefault();

    const patientObject = {
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
    const id = window.location.pathname.split("/")[2];
    console.log(id);

    axios
      .put("http://127.0.0.1:8000/api/patients/" + id, patientObject)
      .then((res) => {
        console.log(res.data);
        console.log("Expense successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });

    // Redirect to Expense List
    this.props.history.push("/liste-patient");
  }

  render() {
    return (
      <div>
        <NavBar />

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
                    type="text"
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
                    value={this.state.sexe}
                    onChange={this.onChangePatientContact}
                  />
                </Form.Group>
              </Col>
        
              <Col md={5} sm={6}>
                <Form.Group controlId="Adresse">
                  <Form.Label>Adrese Patient</Form.Label>
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
              Add Expense
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
