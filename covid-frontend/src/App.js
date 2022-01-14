import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Navigate } from "react-router-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Redirect } from "react-router-dom";

import PatientListe from "./pages/patient/liste-patient.component";
import CreatePatient from "./pages/patient/create-patient.component";
import EditPatient from "./pages/patient/edit-patient.component";
import VaccinListe from "./pages/vaccin/liste-vaccin.component";
import CreateVaccin from "./pages/vaccin/create-vaccin.component";
import EditVaccin from "./pages/vaccin/edit-vaccin.component";
import VaccinerPatient from "./pages/patient/vacciner-patient.compoenent";
import VaccinerFinal from "./pages/patient/vacciner-final.component";
import PassVaccinal from "./pages/passvaccinal/form-passvaccinal.component";
import PrintVaccinal from "./pages/passvaccinal/print-passvaccinal.component";
import UserListe from "./pages/users/liste-user.component";
import EditUser from "./pages/users/edit-user.component";
import CreateUser from "./pages/users/create-user.component";
import { Login } from "./pages/auth/login-component";
import { Dashboard } from "./pages/Dashboard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      isAuth: false,
    };
  }

  componentDidMount() {
    console.log(JSON.parse(window.localStorage.getItem("user")).type)
  }

  componentDidUpdate() {
    console.log(this.state.isAuth);
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />

            {window.localStorage.getItem("user") &&
            window.localStorage.getItem("user").length > 1 && JSON.parse(window.localStorage.getItem("user")).type ==
            "Soignant" ? (
              
      
                  <>
                  <Route path="patient-list" element={<PatientListe />} />
                  <Route path="create-patient" element={<CreatePatient />} />
                  <Route path="/edit-patient/:id" element={<EditPatient />} />
                  <Route path="vaccin-list" element={<VaccinListe />} />
                  <Route path="create-vaccin" element={<CreateVaccin />} />
                  <Route path="/edit-vaccin/:id" element={<EditVaccin />} />
                  <Route
                    path="/vacciner-patient/:id"
                    element={<VaccinerPatient />}
                  />
                  <Route path="/dashboard" element={<Dashboard />} />

                  <Route path="/vacciner-final/:id" element={<VaccinerFinal />} />
                  <Route path="/form-pass" element={<PassVaccinal />} />
                  <Route path="/print-pass" element={<PrintVaccinal />} />
                            <Route path="*" element={<Navigate to="/dashboard" />} />
                  
                  

                    </>
            ) : (
              <Route path="*" element={<Navigate to="/" />} />
            )}


{/*               
<Route path="user-list" element={<UserListe />} />
                <Route path="create-user" element={<CreateUser />} />
                <Route path="/edit-user/:id" element={<EditUser />} />
                <Route path="/" element={<Login />} />

                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/create-patient" component={CreatePatient} />
                <Route path="/edit-patient/:id" component={EditPatient} />

                <Route path="/expenses-listing" component={PatientListe} /> */}
       
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
