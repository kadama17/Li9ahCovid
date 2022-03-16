import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Swal from "sweetalert2";
import { NavBar } from "../../components/Navbard";

export default class VaccinerPatient extends Component {
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
    this.onChangePatientRdv = this.onChangePatientRdv.bind(this);

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
      vaccinListe: [],
      vaccin: "",
      rdv: "",
    };
  }

  componentDidUpdate() {
    console.log(this.state.vaccin);
  }
  componentDidMount() {
    const id = window.location.pathname.split("/")[2];

    axios
      .get(process.env.REACT_APP_API_URL + "api/patients/" + id)
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
          rdv: res.data.rdv,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(process.env.REACT_APP_API_URL + "api/vaccins")
      .then((res) => {
        this.setState({ vaccinListe: res.data });
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
    console.log(this.state.vaccin);
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

  handleVaccinChange = (e) => {
    this.setState({ vaccin: e.target.value });
  };

  onChangePatientRdv = (e) => {
    this.setState({ rdv: e.target.value });
  };

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.vaccin);
    let id_patient = window.location.pathname.split("/")[2];

    var today = new Date(),
      date =
        today.getFullYear() + "/" + today.getMonth() + 1 + "" + today.getDate();

    let patientObject = {
      id_patient: id_patient,
      nom_vaccin: this.state.vaccin,
      rdv: this.state.rdv,
      date_dose_1: new Date().toISOString().slice(0, 10),
      dose2: null,
    };
    console.log(patientObject);
    axios
      .post(process.env.REACT_APP_API_URL + "api/vaccinations/", patientObject)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    Swal.fire(
      "OPERATION EFFECTUEE!",
      "Patient enregistré avec succès",
      "success"
    );

    axios.put(process.env.REACT_APP_API_URL + "api/patients/" + id_patient, {
      statut: "VC",
    });
    // Redirect to Expense List
    this.props.history.push("/liste-patient");
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="form-wrapper">
          <Form onSubmit={this.onSubmit}>
            <Row>
              <Col>
                <Form.Group controlId="CodePatient">
                  <Form.Label>Code Patient</Form.Label>
                  <Form.Control
                    type="text"
                    disabled="true"
                    value={this.state.code_patient}
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="Nom">
                  <Form.Label>Nom Patient</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.nom}
                    onChange={this.onChangePatientNom}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="Prenom">
                  <Form.Label>Prenom Patient</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.prenom}
                    onChange={this.onChangePatientPrenom}
                  />
                </Form.Group>

                <Col>
                  <Form.Group controlId="Naissance">
                    <Form.Label>Date de Naissance Patient</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.date_naiss}
                      onChange={this.onChangePatientDateNaissance}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="Contact">
                    <Form.Label>Contact Patient</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.contact}
                      onChange={this.onChangePatientContact}
                    />
                  </Form.Group>
                </Col>
              </Col>
            </Row>

            {
              (this.state.statut = "NV" ? (
                <div>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Type de vaccin
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.vaccin}
                        label="Type de vaccin"
                        onChange={this.handleVaccinChange}
                      >
                        {this.state.vaccinListe.map(function (vaccin, idx) {
                          return (
                            <MenuItem value={vaccin.nom_vaccin}>
                              {vaccin.nom_vaccin}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Box>

                  <Col>
                    <Form.Group controlId="RDV">
                      <Form.Label>RDV Prochain</Form.Label>
                      <Form.Control
                        type="date"
                        value={this.state.rdv}
                        onChange={this.onChangePatientRdv}
                      />
                    </Form.Group>
                  </Col>

                  <Button
                    variant="primary"
                    size="lg"
                    block="block"
                    type="submit"
                    onClick={this.vacciner1}
                  >
                    Enregistrer 1er Dose
                  </Button>
                </div>
              ) : (
                ""
              ))
            }
          </Form>
        </div>
      </div>
    );
  }
}
