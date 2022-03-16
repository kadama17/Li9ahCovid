import axios from "axios";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./form-passvaccinal.css";

export default class PassVaccinal extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangePatientCode = this.onChangePatientCode.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      code_patient: "",
      isData: false,
      success: false,
      message: "",
    };
  }

  onChangePatientCode(e) {
    this.setState({ code_patient: e.target.value });
  }

  async onSubmit(e) {
    e.preventDefault();

    await axios
      .get(
        process.env.REACT_APP_API_URL +
          "api/patientsCode/" +
          this.state.code_patient
      )
      .then((res) => {
        if (res.data.success == true) {
          this.setState({
            isData: true,
            success: res.data.success,
            message: res.data.message,
          });

          window.sessionStorage.setItem("pass", JSON.stringify(res.data.data));
        } else {
          this.setState({
            isData: false,
            success: res.data.success,
            message: res.data.message,
          });
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div
        className="form-wrapper"
        style={{
          width: "104%",
          background: `url("images/covid-background.jpg")`,
        }}
      >
        <div
          style={{
            background: `url("images/form-pass.jpg")`,
            objectFit: "cover",
          }}
          className="card-pass card-5"
        >
          <Form onSubmit={this.onSubmit}>
            <Row>
              <Col md={3}>{/* <img src="images/logo.png" /> */}</Col>
              <Col md={6}>
                <Form.Group controlId="CodePatient">
                  <Form.Label
                    style={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      marginBottom: "10px",
                    }}
                  >
                    Plateforme de délivrance de l'Attestation de Vaccination
                    CORONAVIRUS (COVID-19) Entrez votre code patient
                  </Form.Label>
                  <Form.Control
                    placeholder="Entrez votre code..."
                    type="text"
                    value={this.state.code_patient}
                    onChange={this.onChangePatientCode}
                  />
                </Form.Group>
                <br />
                <br />
                {this.state.success == true ? (
                  <>
                    <p style={{ color: "green" }}>{this.state.message}</p>
                    <Button
                      variant="success"
                      size="lg"
                      block="block"
                      type="submit"
                      href="/print-pass"
                    >
                      Voir
                    </Button>
                  </>
                ) : (
                  <>
                    <p style={{ color: "red" }}>{this.state.message}</p>
                  </>
                )}
                {this.state.success == true ? (
                  ""
                ) : (
                  <Button
                    variant="primary"
                    size="lg"
                    block="block"
                    type="submit"
                  >
                    Valider
                  </Button>
                )}
              </Col>
            </Row>
          </Form>
        </div>

        <br></br>
        <br></br>
      </div>
    );
  }
}
