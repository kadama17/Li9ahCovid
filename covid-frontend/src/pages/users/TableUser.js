import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class TableUser extends Component {
  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
    console.log(props);
  }

  

  deleteUser() {
    axios
      .delete("http://localhost:8000/api/user/" + this.props.obj.id)
      .then((res) => {
        console.log("Expense removed deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <tr>
        <td>{this.props.obj.matricule}</td>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.date_naissance}</td>
        <td>{this.props.obj.sexe}</td>
        <td>{this.props.obj.type}</td>
  
        <td>
          <Link className="edit-link" to={"/edit-user/" + this.props.obj.id}>
            <Button size="sm" variant="primary">
              Modifier
            </Button>
          </Link>
          {
            (this.props.obj.statut === "VC" ? (
              <Link
                className="edit-link"
                to={"/vacciner-final/" + this.props.obj.id}
              >
                <Button size="sm" variant="info">
                  2ème dose
                </Button>
              </Link>
            ) : 
            this.props.obj.statut==="NV"?
            
            (
              <Link
                className="edit-link"
                to={"/vacciner-patient/" + this.props.obj.id}
              >
                <Button size="sm" variant="warning">
                  1ère dose
                </Button>
              </Link>
            ) : ""
            )            

          }

          {/* <Button onClick={this.deletePatient} size="sm" variant="danger">Supprimer</Button> */}
        </td>
      </tr>
    );
  }
}
