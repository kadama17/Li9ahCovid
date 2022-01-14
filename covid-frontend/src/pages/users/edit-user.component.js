import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavBar } from "../../components/Navbard";

export default class EditUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserMatricule = this.onChangeUserMatricule.bind(this);
    this.onChangeUserNom = this.onChangeUserNom.bind(this);
    this.onChangeUserDateNaissance = this.onChangeUserDateNaissance.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
    this.onChangeUserType = this.onChangeUserType.bind(this);
    this.onChangeUserSexe = this.onChangeUserSexe.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    // State
    this.state = {
      matricule: "",
      nom: "",
      date_naissance: "",
      email: "",
      password: "",
      type: "",
      sexe: "",
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
  onChangeUserNom(e) {
    this.setState({ nom: e.target.value });
  }

  onChangeUserEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeUserPassword(e) {
    this.setState({ password: e.target.value });
  }

  onChangeUserType(e) {
    this.setState({ type: e.target.value });
  }
  onChangeUserMatricule(e) {
    this.setState({ matricule: e.target.value });
  }
  onChangeUserDateNaissance(e) {
    this.setState({ date_naiss: e.target.value });
  }

  onChangeUserSexe(e) {
    this.setState({ sexe: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userObject = {
      matricule: this.state.matricule,
      nom: this.state.nom,
      date_naissance: this.state.date_naissance,
      email: this.state.email,
      password: this.state.password,
      type: this.state.type,
      sexe: this.state.sexe,
    };
    const id = window.location.pathname.split("/")[2];
    console.log(id);

    axios
      .put("http://127.0.0.1:8000/api/patients/" + id, userObject)
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


      <NavBar/>
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col>
              <Form.Group controlId="MatUser">
                <Form.Label>Matricule Personnel</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.matricule}
                  onChange={this.onChangeUserMatricule}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="NomUser">
                <Form.Label>Nom & Prenom Personnel</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.nom}
                  onChange={this.onChangeUserNom}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="DateNaissance">
                <Form.Label>Date de Naissance</Form.Label>
                <Form.Control
                  type="type"
                  value={this.state.date_naiss}
                  onChange={this.onChangeDateNaissance}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="Email">
                <Form.Label>Email Patient</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.email}
                  onChange={this.onChangeUserEmail}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="Type">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.password}
                  onChange={this.onChangeUserPassword}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="Adresse">
                <Form.Label>Type de compte</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.type}
                  onChange={this.onChangeUserType}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="UserSexe">
                <Form.Label>Sexe</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.sexe}
                  onChange={this.onChangeUserSexe}
                />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" size="lg" block="block" type="submit">
            Créer l'utilisateur
          </Button>
        </Form>
        <br></br>
        <br></br>
      </div>
      </div>

    );
  }
}
