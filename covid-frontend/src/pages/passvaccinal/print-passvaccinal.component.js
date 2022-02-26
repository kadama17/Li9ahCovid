import axios from "axios";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./print-passvaccinal.css";
import QRCode from "qrcode";
import { jsPDF } from "jspdf";
const doc = new jsPDF();

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
      src: "",
    };
  }

  componentDidMount() {
    doc.text("Hello world!", 10, 10);
    let patient = JSON.parse(window.sessionStorage.getItem("pass"));

    QRCode.toDataURL(patient.code_patient).then((qr) => {
      this.setState({ src: qr });
    });
    axios
      .get(
        process.env.REACT_APP_API_URL + "api/vaccinationsPatient/" + patient.id
      )
      .then((res) => {
        console.log(res);
        this.setState({ vaccinationInfo: res.data });
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({ patient: patient });
    console.log(this.state.src);
  }

  onChangePatientCode(e) {
    this.setState({ code_patient: e.target.value });
  }

  render() {
    return (
      <div className="form-wrapper" style={{}}>
        {" "}
        <div
          style={{
            background: `url("images/pass-print.jpg")`,
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            background: "#fff",
            borderRadius: "2px",
            display: "inline-block",
            height: "393px",
            margin: "500px",
            position: "relative",
            width: "570px",
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
              <b
                style={{
                  float: "left",
                  fontSize: "20px",
                  fontFamily: "Robotto",
                }}
              >
                Nom:{" "}
              </b>
              <label
                style={{
                  float: "left",
                  fontSize: "20px",
                  fontFamily: "Robotto",
                }}
              >
                {this.state.patient.nom}
              </label>
            </Col>
            <Col md={6}>
              <label
                style={{
                  float: "left",
                  fontSize: "20px",
                  fontFamily: "Robotto",
                  color: "red",
                }}
              >
                {this.state.patient.code_patient}
              </label>
            </Col>
            <Col md={12}>
              <b
                style={{
                  float: "left",
                  fontSize: "20px",
                  fontFamily: "Robotto",
                }}
              >
                Prenom:{" "}
              </b>
              <label
                style={{
                  float: "left",
                  fontSize: "20px",
                  fontFamily: "Robotto",
                }}
              >
                {this.state.patient.prenom}
              </label>
            </Col>
            <Col md={12}>
              <b
                style={{
                  float: "left",
                  fontSize: "20px",
                  fontFamily: "Robotto",
                }}
              >
                Date de naissance:
              </b>
              <label
                style={{
                  float: "left",
                  fontSize: "20px",
                  fontFamily: "Robotto",
                }}
              >
                {this.state.patient.date_naiss}
              </label>
            </Col>

            <Col md={12}>
              <b
                style={{
                  float: "left",
                  fontSize: "20px",
                  fontFamily: "Robotto",
                }}
              >
                Profession:{" "}
              </b>
              <label
                style={{
                  float: "left",
                  fontSize: "20px",
                  fontFamily: "Robotto",
                }}
              >
                {this.state.patient.profession}
              </label>
            </Col>
            <Col md={12}>
              <b
                style={{
                  float: "left",
                  fontSize: "20px",
                  fontFamily: "Robotto",
                }}
              >
                Sexe:{" "}
              </b>
              <label
                style={{
                  float: "left",
                  fontSize: "20px",
                  fontFamily: "Robotto",
                }}
              >
                {this.state.patient.sexe}
              </label>
            </Col>
            <Col md={7}>
              <b
                style={{
                  float: "left",
                  fontSize: "20px",
                  fontFamily: "Robotto",
                }}
              >
                Date Dose1:{" "}
              </b>
              <label
                style={{
                  float: "left",
                  fontSize: "20px",
                  fontFamily: "Robotto",
                }}
              >
                {this.state.vaccinationInfo.date_dose_1}
              </label>
            </Col>
            <Col md={4}>
              <img
                style={{ position: "absolute" }}
                height="140"
                width="140"
                src={this.state.src}
              />
            </Col>

            <Col md={7}>
              <b
                style={{
                  float: "left",
                  fontSize: "20px",
                  fontFamily: "Robotto",
                }}
              >
                Date Dose2:{" "}
              </b>
              <label
                style={{
                  float: "left",
                  fontSize: "20px",
                  fontFamily: "Robotto",
                }}
              >
                {this.state.vaccinationInfo.date_dose_2}
              </label>
            </Col>
            <Col md={4}></Col>
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
