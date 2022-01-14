import React from "react";
import { Navbar, Nav, Container, Card, Button } from 'react-bootstrap';

export function Dashboard() {
  return (

<>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Li9ha Covid</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Patient</Nav.Link>
      <Nav.Link href="#features">Vaccin</Nav.Link>
      <Nav.Link href="#pricing">vaccination</Nav.Link>
    </Nav>
    <div>
        <button style={{  background: "#00b5ad"  }}>Logout</button>
        </div>
    </Container>
  </Navbar>
  <br />
 <div>
 <Card style={{ marginTop:"30px", float: 'left', width: '20rem', marginLeft: "10px", marginRight: "92px" }}>
  <Card.Img variant="top" src="images/vaccination.png" />
  <Card.Body>
    <Card.Title> Vacciner un patient</Card.Title>
    <Card.Text>
      Vous pouvez visitez la liste de patient déjà existant, pour effectuer sa vaccination. Si le patient n'est pas enregistrer, vous devez le faire avant.
    </Card.Text>
    <Button  href="/patient-list" variant="primary">Vacciner</Button>
  </Card.Body>
</Card>


 <Card style={{ marginTop:"30px", float: 'left', width: '20rem', marginLeft: "10px", marginRight: "92px" }}>
  <Card.Img variant="top" src="images/patient-vaccc.jpg" />
  <Card.Body>
    <Card.Title> Enregistrer un patient</Card.Title>
    <Card.Text>
     Un formulaire vous permettra d'enregistrer de nouveau patient et aussi les informations sur la vaccination.
    </Card.Text>
    <Button  href="/create-patient" variant="primary">Enregistrer</Button>
  </Card.Body>
</Card>

 <Card style={{ marginTop:"30px", float: 'left', width: '20rem', marginLeft: "10px", marginRight: "92px" }}>
  <Card.Img variant="top" src="images/vaccin.jpg" />
  <Card.Body>
    <Card.Title>Enregister un nouveau vaccin </Card.Title>
    <Card.Text>
     Cette page vous permettra d'enregistrer de nouveau vacciner, de supprimer, modifier, et de reapprovissionner le stock. 
    </Card.Text>
    <Button href="/create-vaccin" variant="primary">Enregistrer</Button>
  </Card.Body>
</Card>
 <Card style={{ marginTop:"30px",float: 'left', width: '20rem', }}>
  <Card.Img variant="top" src="images/vaccin-list.png" />
  <Card.Body>
    <Card.Title>Liste de vaccin</Card.Title>
    <Card.Text>
     Sur cette page vous trouverez la liste de tous les vaccins enregister dans notre base de données. 
    </Card.Text>
    <Button href="/vaccin-list" variant="primary">Lister</Button>
  </Card.Body>
</Card>

 <Card style={{ marginTop:"30px",float: 'left', width: '20rem', marginLeft: "10px", marginRight: "92px" }}>
  <Card.Img variant="top" src="images/user.jpg" />
  <Card.Body>
    <Card.Title>Création de compte utilisateur</Card.Title>
    <Card.Text>
  Créer un nouveau compte utilisateur pour le personnel soignant de l'établissement sanitaire. 
    </Card.Text>
    <Button href="/create-user"variant="primary">Créer un compte</Button>
  </Card.Body>
</Card>

 <Card style={{ marginTop:"30px",float: 'left', width: '20rem', marginLeft: "10px", marginRight: "92px" }}>
  <Card.Img variant="top" src="images/user-list.jpg " />
  <Card.Body>
    <Card.Title>Gestion des utilisateurs</Card.Title>
    <Card.Text>
      Vous pouvez modifier des informations sur les utilisateur, les supprimer... 
    </Card.Text>
    <Button href="/user-list" variant="primary">Voir les comptes</Button>
  </Card.Body>
</Card>
</div>
</>)
}