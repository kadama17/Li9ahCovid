import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavBar } from "../../components/Navbard";

export default class EditVaccin extends Component {
  constructor(props) {
    super(props);
    this.onChangeVaccinCode = this.onChangeVaccinCode.bind(this);
    this.onChangeVaccinNom = this.onChangeVaccinNom.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeQuantite = this.onChangeQuantite.bind(this);
    this.onChangeDateExp = this.onChangeDateExp.bind(this);
    this.onChangeNbreDose = this.onChangeNbreDose.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    // State
    this.state = {
      code_vaccin: "",
      nom_vaccin: "",
      description: "",
      quantite: "",
      date_exp: "",
      nbr_dose: "",
    };
  }

  componentDidMount() {
    const id = window.location.pathname.split("/")[2];

    axios
      .get("http://127.0.0.1:8000/api/vaccins/" + id)
      .then((res) => {
        this.setState({
          code_vaccin: res.data.code_vaccin,
          nom_vaccin: res.data.nom_vaccin,
          description: res.data.description,
          quantite: res.data.quantite,
          date_exp: res.data.date_exp,
          nbr_dose: res.data.nbr_dose,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeVaccinCode(e) {
    this.setState({ code_vaccin: e.target.value });
  }

  onChangeVaccinNom(e) {
    this.setState({ nom_vaccin: e.target.value });
  }

  onChangeDescription(e) {
    this.setState({ description: e.target.value });
  }

  onChangeQuantite(e) {
    this.setState({ quantite: e.target.value });
  }
  onChangeDateExp(e) {
    this.setState({ date_exp: e.target.value });
  }
  onChangeNbreDose(e) {
    this.setState({ nbr_dose: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const vaccinObject = {
      code_vaccin: this.state.code_vaccin,
      nom_vaccin: this.state.nom_vaccin,
      description: this.state.description,
      quantite: this.state.quantite,
      date_exp: this.state.date_exp,
      nbr_dose: this.state.nbr_dose,
    };
    const id = window.location.pathname.split("/")[2];
    console.log(id);

    axios
      .put("http://127.0.0.1:8000/api/vaccins/" + id, vaccinObject)
      .then((res) => {
        console.log(res.data);
        console.log("Expense successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });

    // Redirect to Expense List
    this.props.history.push("/liste-vaccin");
  }

  render() {
    return (
      <div>
        <NavBar />

        <div style={{ marginLeft: "15%" }} className="form-wrapper">
          <Form onSubmit={this.onSubmit}>
            <Row>
              <Col md={5} sm={6}>
                <Form.Group controlId="CodeVaccin">
                  <Form.Label>Code Vaccin</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.code_vaccin}
                    onChange={this.onChangeVaccinCode}
                  />
                </Form.Group>
              </Col>

              <Col md={5} sm={6}>
                <Form.Group controlId="VaccinNom">
                  <Form.Label>Nom Vaccin</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.nom_vaccin}
                    onChange={this.onChangeVaccinNom}
                  />
                </Form.Group>
              </Col>
              <Col md={5} sm={6}>
                <Form.Group controlId="Description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                  />
                </Form.Group>
              </Col>

              <Col md={5} sm={6}>
                <Form.Group controlId="Quantite">
                  <Form.Label>Quantite</Form.Label>
                  <Form.Control
                    type="number"
                    value={this.state.quantite}
                    onChange={this.onChangeQuantite}
                  />
                </Form.Group>
              </Col>
              <Col md={5} sm={6}>
                <Form.Group controlId="DateExp">
                  <Form.Label>Date Expiration vaccin</Form.Label>
                  <Form.Control
                    type="date"
                    value={this.state.date_exp}
                    onChange={this.onChangeDateExp}
                  />
                </Form.Group>
              </Col>

              <Col md={5} sm={6}>
                <Form.Group controlId="NbreDose">
                  <Form.Label>Nombre de dose par personnes</Form.Label>
                  <Form.Control
                    type="number"
                    value={this.state.nbr_dose}
                    onChange={this.onChangeNbreDose}
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
