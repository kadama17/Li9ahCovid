import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import TableVaccin from "./TableVaccin";
import { NavBar } from "../../components/Navbard";

export default class VaccinListe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vaccins: [],
    };
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_API_URL + "api/vaccins/")
      .then((res) => {
        this.setState({
          vaccins: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.vaccins.map((res, i) => {
      return <TableVaccin obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="table-wrapper">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Code Vaccin</th>
                <th>Nom Vaccin</th>
                <th>Description</th>
                <th>Quantite</th>
                <th>Date Expiration</th>
                <th>Nombre de dose</th>
              </tr>
            </thead>
            <tbody>{this.DataTable()}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}
