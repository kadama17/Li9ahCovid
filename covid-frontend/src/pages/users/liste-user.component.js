import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import TableUser from "./TableUser";
import { NavBar } from "../../components/Navbard";

export default class UserListe extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/users/')
      .then(res => {
        this.setState({
          users: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.users.map((res, i) => {
      return <TableUser obj={res} key={i} />;
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
            <th>Matricule</th>
            <th>Nom&Prenom</th>
            <th>Date de Naissance</th>
            <th>Sexe</th>
            <th>Type</th>
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