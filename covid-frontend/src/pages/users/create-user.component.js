import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Swal from "sweetalert2";
import { NavBar } from "../../components/Navbard";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
      this.onChangeUserMatricule = this.onChangeUserMatricule.bind(this);
      this.onChangeUserNom = this.onChangeUserNom.bind(this);
      this.onChangeUserDateNaissance = this.onChangeUserDateNaissance.bind(this);
      this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
      this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
      this.onChangeUserType = this.onChangeUserType.bind(this);
      this.onChangeUserSexe = this.onChangeUserSexe.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      matricule: "",
      nom: "",
      date_naissance:"",
      email: "",
      password: "",
      type: "",
      sexe: ""
     
    };
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
    this.setState({ date_naissance: e.target.value });
  }

  onChangeUserSexe(e) {
    this.setState({ sexe: e.target.value });
  }

  async onSubmit(e) {
    e.preventDefault();
    const user = {
      matricule: this.state.matricule,
      name: this.state.nom,
      date_naissance:this.state.date_naissance,
      email: this.state.email,
      password: this.state.password,
      type: this.state.type,
      sexe: this.state.sexe
    };

    await axios
      .post("http://127.0.0.1:8000/api/users/", user)
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
      matricule: "",
      nom: "",
      date_naissance:"",
      email: "",
      password: "",
      type: "",
      sexe: ""
     
    });
  }

  render() {
    return (
      <div>


      <NavBar/>
      <div  style={{marginLeft:"15%"}} className="form-wrapper">
        <Form  onSubmit={this.onSubmit}>
          <Row>
            <Col md={5} sm={6}>
              <Form.Group  controlId="MatUser">
                <Form.Label>Matricule Personnel</Form.Label>
                <Form.Control 
                  type="text"
                  value={this.state.matricule}
                  onChange={this.onChangeUserMatricule}
                />
              </Form.Group>
            </Col>

            <Col md={5}>
              <Form.Group controlId="NomUser">
                <Form.Label>Nom & Prenom Personnel</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.nom}
                  onChange={this.onChangeUserNom}
                />
              </Form.Group>
            </Col>
            <Col md={5}>
              <Form.Group controlId="DateNaissance">
                <Form.Label>Date de Naissance</Form.Label>
                <Form.Control
                  type="type"
                  value={this.state.date_naissance}
                  onChange={this.onChangeUserDateNaissance}
                />
              </Form.Group>
            </Col>

            <Col md={5}>
              <Form.Group controlId="Email">
                <Form.Label>Email Patient</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.email}
                  onChange={this.onChangeUserEmail}
                />
              </Form.Group>
            </Col>
            <Col md={5}>
              <Form.Group controlId="Type">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.password}
                  onChange={this.onChangeUserPassword}
                />
              </Form.Group>
            </Col>

            <Col md={5}>
              <Form.Group controlId="Adresse">
                <Form.Label>Type de compte</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.type}
                  onChange={this.onChangeUserType}
                />
              </Form.Group>
            </Col>

            <Col md={5}>
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
