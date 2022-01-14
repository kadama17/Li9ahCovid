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
      .delete("http://localhost:8000/api/users/" + this.props.obj.id)
      .then((res) => {
        console.log("Personnel supprimé!");
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
      
         <Button onClick={this.deleteUser} size="sm" variant="danger">Supprimer</Button> 
        </td>
      </tr>
    );
  }
}
