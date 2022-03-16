import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class TableVaccin extends Component {
  constructor(props) {
    super(props);
    this.deleteVaccins = this.deleteVaccins.bind(this);
    console.log(props);
  }

  deleteVaccins() {
    axios
      .delete(
        process.env.REACT_APP_API_URL + "api/vaccins/" + this.props.obj.id
      )
      .then((res) => {
        console.log("vaccins supprimé");
        window.location.replace("/vaccin-list");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <tr>
        <td>{this.props.obj.code_vaccin}</td>
        <td>{this.props.obj.nom_vaccin}</td>
        <td>{this.props.obj.description}</td>
        <td>{this.props.obj.quantite}</td>
        <td>{this.props.obj.date_exp}</td>
        <td>{this.props.obj.nbr_dose}</td>

        <td>
          <Link className="edit-link" to={"/edit-vaccin/" + this.props.obj.id}>
            <Button size="sm" variant="info">
              Modifier
            </Button>
          </Link>
          <Button onClick={this.deleteVaccins} size="sm" variant="danger">
            Supprimer
          </Button>
        </td>
      </tr>
    );
  }
}
