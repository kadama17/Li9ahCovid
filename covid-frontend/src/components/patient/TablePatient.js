import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class TablePatient extends Component {
    constructor(props) {
        super(props);
        this.deletePatient = this.deletePatient.bind(this);
        console.log(props);
    }

    deletePatient() {
        axios.delete('http://localhost:8000/api/patients/' + this.props.obj.id)
            .then((res) => {
                console.log('Expense removed deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.code_patient}</td>
                <td>{this.props.obj.nom}</td>
                <td>{this.props.obj.prenom}</td>
                <td>{this.props.obj.date_naiss}</td>
                <td>{this.props.obj.contact}</td>
                <td>{this.props.obj.adresse}</td>
                <td>{this.props.obj.profession}</td>
                <td>{this.props.obj.sexe}</td>
                <td>{this.props.obj.statut}</td>

                <td>
                    <Link className="edit-link" to={"/edit-patient/" + this.props.obj.id}>
                       <Button size="sm" variant="info">Modifier</Button>
                    </Link>
                    <Link className="edit-link" to={"/vacciner-patient/" + this.props.obj.id}>
                       <Button size="sm" variant="warning">Vacciner</Button>
                    </Link>
                    {/* <Button onClick={this.deletePatient} size="sm" variant="danger">Supprimer</Button> */}
                </td>
            </tr>
        );
    }
}