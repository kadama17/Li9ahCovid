import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

export default class PassVaccinal extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangePatientCode = this.onChangePatientCode.bind(this);
   
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      code_patient: "",
     
    };
  }

  onChangePatientCode(e) {
    this.setState({ code_patient: e.target.value });
  }

  async onSubmit(e) {
    e.preventDefault();
    const patient = {
      code_patient: this.state.code_patient,
    };

    await axios
      .get("http://127.0.0.1:8000/api/patientsCode/" + this.state.code_patient)
      .then((res) =>{
        this.setState({patient: res.data})
        window.sessionStorage.setItem("patient", JSON.stringify(res.data));
        console.log(res.data)
        if(res.data){
          this.setState({isData: true})
          console.log("data")
        }
      }
      
      )
      .catch((err) => console.log(err));

  
   

    this.setState({
      code_patient: "",
     
    });
  }

  render() {
    return (      

      this.state.isData=== true  ? 
      <div>
        <a href="/print-pass">
          Imprimer. 
        </a>
        </div>
      : 

      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col>
              <Form.Group controlId="CodePatient">
                <Form.Label>Code Patient</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.code_patient}
                  onChange={this.onChangePatientCode}
                />
              </Form.Group>
            </Col>

          </Row>
          <h1 onClick={this.onSubmit}>test</h1>
          <Button variant="primary" size="lg" block="block" type="submit">
            Add Expense
          </Button>
        </Form>

        <br></br>
        <br></br>
      </div>
    );
  }
}
