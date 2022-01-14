import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

export default class PrintVaccinal extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangePatientCode = this.onChangePatientCode.bind(this);
   

    // Setting up state
    this.state = {
      code_patient: "",
      patient: "",
      vaccinationInfo: ""
     
    };
  }

  componentDidMount(){
    let patient =JSON.parse(window.sessionStorage.getItem("patient"));
    console.log(patient)
    axios
    .get("http://127.0.0.1:8000/api/vaccinationsPatient/"+patient.id)
    .then((res) => {
      console.log(res)
      this.setState({ vaccinationInfo: res.data });
    })
    .catch((error) => {
      console.log(error);
    });


    this.setState({patient: patient})

  }

  onChangePatientCode(e) {
    this.setState({ code_patient: e.target.value });
  }

  render() {
    return (      

    
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col>
              <Form.Group controlId="CodePatient">
                <Form.Label>Code Patient</Form.Label>
                <Form.Control
                disabled 
                  type="text"
                  value={this.state.patient.code_patient}
                  onChange={this.onChangePatientCode}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="CodePatient">
                <Form.Label>Nom patient</Form.Label>
                <Form.Control
                disabled 
                  type="text"
                  value={this.state.patient.nom}
                  onChange={this.onChangePatientCode}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="CodePatient">
                <Form.Label>Prenom Patient</Form.Label>
                <Form.Control
                disabled 
                  type="text"
                  value={this.state.patient.prenom}
                  onChange={this.onChangePatientCode}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="CodePatient">
                <Form.Label>Date de Naissance Patient</Form.Label>
                <Form.Control
                disabled 
                  type="text"
                  value={this.state.patient.date_naiss}
                  onChange={this.onChangePatientCode}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="CodePatient">
                <Form.Label>Profession</Form.Label>
                <Form.Control
                disabled 
                  type="text"
                  value={this.state.patient.profession}
                  onChange={this.onChangePatientCode}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="CodePatient">
                <Form.Label>Sexe</Form.Label>
                <Form.Control
                disabled 
                  type="text"
                  value={this.state.patient.sexe}
                  onChange={this.onChangePatientCode}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="CodePatient">
                <Form.Label>Statut</Form.Label>
                <Form.Control
                disabled 
                  type="text"
                  value={this.state.patient.statut}
                  onChange={this.onChangePatientCode}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="CodePatient">
                <Form.Label>Vaccin</Form.Label>
                <Form.Control
                disabled 
                  type="text"
                  value={this.state.vaccinationInfo.nom_vaccin}
                  onChange={this.onChangePatientCode}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="CodePatient">
                <Form.Label>Date dose1</Form.Label>
                <Form.Control
                disabled 
                  type="text"
                  value={this.state.vaccinationInfo.date_dose_1}
                  onChange={this.onChangePatientCode}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="CodePatient">
                <Form.Label>Date dose2</Form.Label>
                <Form.Control
                disabled 
                  type="text"
                  value={this.state.vaccinationInfo.date_dose_2}
                  onChange={this.onChangePatientCode}
                />
              </Form.Group>
            </Col>
          </Row>
          <h1 onClick={this.onSubmit}>test</h1>
          <Button variant="primary" size="lg" block="block" type="submit">
            Add Expense
          </Button>
        </Form>

        <br></br>
        <br></br>
      </div>
    );
  }
}
