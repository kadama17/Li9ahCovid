import axios from "axios";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./print-passvaccinal.css";

export default class PrintVaccinal extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangePatientCode = this.onChangePatientCode.bind(this);

    // Setting up state
    this.state = {
      code_patient: "",
      patient: "",
      vaccinationInfo: "",
    };
  }

  componentDidMount() {
    let patient = JSON.parse(window.sessionStorage.getItem("pass"));
    console.log(patient);
    axios
      .get("http://127.0.0.1:8000/api/vaccinationsPatient/" + patient.id)
      .then((res) => {
        console.log(res);
        this.setState({ vaccinationInfo: res.data });
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({ patient: patient });
  }

  onChangePatientCode(e) {
    this.setState({ code_patient: e.target.value });
  }

  render() {
    return (
      <div
        className="form-wrapper"
        style={{ background: `url("images/pass-print.jpg")` }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "2px",
            display: "inline-block",
            height: "500px",
            margin: "500px",
            position: "relative",
            width: "700px",
            borderRadius: "20px",
            padding: "26px",
            margin: "167px",
            boxShadow:
              "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)",
          }}
          className="card-print card-print-5"
        >
          <Row>
            <Col md={12}>
              <h2>VOTRE PASS VACCINAL</h2>
            </Col>

            <Col md={6}>
              <b style={{ float: "left", fontSize: "30px" }}>Nom: </b>
              <label style={{ float: "left", fontSize: "30px" }}>
                {this.state.patient.nom}
              </label>
            </Col>
            <Col md={6}>
              <label
                style={{ float: "left", fontSize: "30px", color: "green" }}
              >
                {this.state.patient.code_patient}
              </label>
            </Col>
            <Col md={12}>
              <b style={{ float: "left", fontSize: "30px" }}>Prenom: </b>
              <label style={{ float: "left", fontSize: "30px" }}>
                {this.state.patient.prenom}
              </label>
            </Col>
            <Col md={12}>
              <b style={{ float: "left", fontSize: "30px" }}>
                Date de naissance:
              </b>
              <label style={{ float: "left", fontSize: "30px" }}>
                {this.state.patient.date_naiss}
              </label>
            </Col>

            <Col md={12}>
              <b style={{ float: "left", fontSize: "30px" }}>Profession: </b>
              <label style={{ float: "left", fontSize: "30px" }}>
                {this.state.patient.profession}
              </label>
            </Col>
            <Col md={12}>
              <b style={{ float: "left", fontSize: "30px" }}>Sexe: </b>
              <label style={{ float: "left", fontSize: "30px" }}>
                {this.state.patient.sexe}
              </label>
            </Col>
            <Col md={12}>
              <b style={{ float: "left", fontSize: "30px" }}>Date Dose1: </b>
              <label style={{ float: "left", fontSize: "30px" }}>
                {this.state.vaccinationInfo.date_dose_1}
              </label>
            </Col>
            <Col md={12}>
              <b style={{ float: "left", fontSize: "30px" }}>Date Dose2: </b>
              <label style={{ float: "left", fontSize: "30px" }}>
                {this.state.vaccinationInfo.date_dose_2}
              </label>
            </Col>
          </Row>
          <br />
          <Button variant="primary" size="lg" block="block" type="submit">
            Télécharger{" "}
          </Button>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}
