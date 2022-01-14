import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import TablePatient from "./TablePatient";
import { NavBar } from "../../components/Navbard";

export default class PatientListe extends Component {

  constructor(props) {
    super(props)
    this.state = {
      patients: []
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/patients/')
      .then(res => {
        this.setState({
          patients: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.patients.map((res, i) => {
      return <TablePatient obj={res} key={i} />;
    });
  }


  render() {
    return (
    <div>
<NavBar/>


    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Code Patient</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Date Naissance</th>
            <th>Contact</th>
            <th>Adresse</th>
            <th>Profession</th>
            <th>Sexe</th>
            <th>Statut</th>


          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>
    </div>
);
    
  }
}