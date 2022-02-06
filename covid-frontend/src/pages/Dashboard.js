import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import { NavBar } from "../components/Navbard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Dashboard.css";
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: JSON.parse(window.localStorage.getItem("user")).type,
    };
  }

  componentDidMount() {
    console.log(this.state.role);
  }

  render() {
    return (
      <>
        <NavBar />

        <div>
          {this.state.role === "Soignant" ? (
            <div style={{ marginLeft: "20%" }}>
              <Row>
                <Col md={5} sm={6}>
                  <Card
                    style={{
                      marginTop: "30px",
                      float: "left",
                      width: "20rem",
                      marginLeft: "10px",
                      marginRight: "92px",
                    }}
                  >
                    <Card.Img src="images/vaccination.png" />
                    <Card.Body>
                      <Card.Title> Vacciner un patient</Card.Title>
                      <Card.Text>
                        Vous pouvez visitez la liste de patient déjà existant,
                        pour effectuer sa vaccination. Si le patient n'est pas
                        enregistrer, vous devez le faire avant.
                      </Card.Text>
                      <Button href="/patient-list" variant="primary">
                        Vacciner
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card
                    style={{
                      marginTop: "30px",
                      float: "left",
                      width: "20rem",
                      marginLeft: "10px",
                      marginRight: "92px",
                    }}
                  >
                    <Card.Img src="images/patient-vaccc.jpg" />
                    <Card.Body>
                      <Card.Title> Enregistrer un patient</Card.Title>
                      <Card.Text>
                        Un formulaire vous permettra d'enregistrer de nouveau
                        patient et aussi les informations sur la vaccination.
                      </Card.Text>
                      <Button href="/create-patient" variant="primary">
                        Enregistrer
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          ) : (
            " "
          )}

          {this.state.role === "Logistique" ? (
            <div style={{ marginLeft: "20%" }}>
              <Row>
                <Col md={5} sm={6}>
                  <Card
                    style={{
                      marginTop: "30px",
                      float: "left",
                      width: "20rem",
                      marginLeft: "10px",
                      marginRight: "92px",
                    }}
                  >
                    <Card.Img src="images/vaccin.jpg" />
                    <Card.Body>
                      <Card.Title>Enregister un nouveau vaccin </Card.Title>
                      <Card.Text>
                        Cette page vous permettra d'enregistrer de nouveau
                        vacciner, de supprimer, modifier, et de
                        reapprovissionner le stock.
                      </Card.Text>
                      <Button href="/create-vaccin" variant="primary">
                        Enregistrer
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={5} sm={6}>
                  <Card className="Card-Dashboard">
                    <Card.Img src="images/vaccin-list.png" />
                    <Card.Body>
                      <Card.Title>Liste de vaccin</Card.Title>
                      <Card.Text>
                        Sur cette page vous trouverez la liste de tous les
                        vaccins enregister dans notre base de données.
                      </Card.Text>
                      <Button href="/vaccin-list" variant="primary">
                        Lister
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          ) : (
            ""
          )}

          {this.state.role === "Admin" ? (
            <>
              <div className="box">
                <div>
                  <Card className="Card-Dashboard">
                    <Card.Img src="images/user.jpg" />
                    <Card.Body>
                      <Card.Title>Création de compte utilisateur</Card.Title>
                      <Card.Text></Card.Text>
                      <Button href="/create-user" variant="primary">
                        Créer un compte
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  {" "}
                  <Card className="Card-Dashboard">
                    <Card.Img src="images/user-list.jpg " />
                    <Card.Body>
                      <Card.Title>Gestion des utilisateurs</Card.Title>
                      <Card.Text></Card.Text>
                      <Button href="/user-list" variant="primary">
                        Voir les comptes
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card className="Card-Dashboard">
                    <Card.Img src="images/vaccin.jpg" />
                    <Card.Body>
                      <Card.Title>Enregister un nouveau vaccin </Card.Title>
                      <Card.Text></Card.Text>
                      <Button href="/create-vaccin" variant="primary">
                        Enregistrer
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className="box">
                <div>
                  <Card className="Card-Dashboard">
                    <Card.Img src="images/vaccin-list.png" />
                    <Card.Body>
                      <Card.Title>Liste de vaccin</Card.Title>
                      <Card.Text></Card.Text>
                      <Button href="/vaccin-list" variant="primary">
                        Lister
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card className="Card-Dashboard">
                    <Card.Img src="images/vaccination.png" />
                    <Card.Body>
                      <Card.Title> Vacciner un patient</Card.Title>
                      <Card.Text></Card.Text>
                      <Button href="/patient-list" variant="primary">
                        Vacciner
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <div>
                  <Card className="Card-Dashboard">
                    <Card.Img src="images/patient-vaccc.jpg" />
                    <Card.Body>
                      <Card.Title> Enregistrer un patient</Card.Title>
                      <Card.Text></Card.Text>
                      <Button href="/create-patient" variant="primary">
                        Enregistrer
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}
