import axios from "axios";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./print-passvaccinal.css";
import QRCode from "qrcode";
import { jsPDF } from "jspdf";
const doc = new jsPDF();
const iframe =
  '<iframe height="265" style="width: 100%;" scrolling="no" title="fx." src="//codepen.io/ycw/embed/JqwbQw/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">See the Pen <a href="https://codepen.io/ycw/pen/JqwbQw/">fx.</a> by ycw(<a href="https://codepen.io/ycw">@ycw</a>) on <a href="https://codepen.io">CodePen</a>.</iframe>';

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

  savePass() {
    //Ajout d'amoirie
    var amoirie = new Image();
    amoirie.src = "images/logo_maroc.png";

    // doc.text("Hello world!", 10, 10);
    doc.addImage(amoirie, "png", 1, 2, 55, 50);

    //Ajout de logo ministère
    var logoMinistere = new Image();

    logoMinistere.src = "images/logo.png";
    doc.addImage(logoMinistere, "png", 150, 2, 50, 50);

    // doc.text("تصريح التطعيم", 62, 20);
    doc.text("PASS VACCINAL", 73, 26);
    doc.text("VACCINE PASS", 73, 32);

    // ajout de qrCode
    var qr = new Image();
    qr.src = this.state.src;
    doc.addImage(qr, "png", 65, 60, 80, 80);
    //affichage du code patient

    doc.setFontSize(13);
    doc.text("CODE PATIENT ", 10, 150);
    doc.setFontSize(11);
    doc.text("PATIENT CODE", 12, 155);
    doc.text(this.state.patient.code_patient, 100, 152);
    doc.setFontSize(15);
    // doc.text("كود المريض", 150, 152);

    //affichage du nom complet

    doc.setFontSize(13);
    doc.text("NOM COMPLET ", 10, 180);
    doc.setFontSize(11);
    doc.text("PATIENT CODE", 12, 186);
    doc.text(
      this.state.patient.nom + " " + this.state.patient.prenom,
      100,
      185
    );

    doc.setFontSize(15);
    // doc.text("الاسم الكامل", 150, 185);

    //affichage de date de naissance

    doc.setFontSize(13);
    doc.text("DATE DE NAISSANCE ", 10, 203);
    doc.setFontSize(11);
    doc.text("DATE OF BIRTH", 12, 208);
    doc.text(this.state.patient.date_naiss, 100, 208);
    doc.setFontSize(15);
    //doc.text("الاسم الكامل", 150, 209);

    //  information 1ere dose

    doc.setFontSize(13);
    doc.text(" DATE DE PRIMIERE DOSE", 10, 223);
    doc.setFontSize(11);
    doc.text("DATE OF FIRST DOSE", 12, 227);
    doc.text(this.state.vaccinationInfo.date_dose_1, 100, 225);
    // doc.setFontSize(15);
    // doc.text("الاسم الكامل", 150, 224);

    //  information 2eme dose

    doc.setFontSize(13);
    doc.text(" DATE DE DEUXIEME DOSE", 10, 250);
    doc.setFontSize(11);
    doc.text("DATE OF SECOND DOSE", 12, 255);
    doc.text(this.state.vaccinationInfo.date_dose_2, 100, 255);
    // doc.setFontSize(15);
    //doc.text("الاسم الكامل", 150, 254);

    // TYPE DE VACCIN

    doc.setFontSize(13);
    doc.text("TYPE DE VACCIN", 10, 270);
    doc.setFontSize(11);
    doc.text("VACCINE TYPE", 12, 275);
    doc.text(this.state.vaccinationInfo.nom_vaccin, 100, 275);
    doc.setFontSize(15);
    // doc.text("الاسم الكامل", 150, 274);
    doc.save("mon pass vaccinal.pdf");
  }
  componentDidMount() {
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
      <div
        className="form-wrapper"
        style={{
          background: `url("images/pass-print.jpg")`,
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
        }}
      >
        {" "}
        <div
          style={{
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

          <Button
            variant="success"
            size="lg"
            block="block"
            onClick={() => {
              this.savePass();
            }}
          >
            TELECHARGER{" "}
          </Button>

          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}
