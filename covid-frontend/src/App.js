import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import { Login } from "./pages/auth/login-component";
import { Dashboard } from "./pages/Dashboard";
import PassVaccinal from "./pages/passvaccinal/form-passvaccinal.component";
import PrintVaccinal from "./pages/passvaccinal/print-passvaccinal.component";
import CreatePatient from "./pages/patient/create-patient.component";
import EditPatient from "./pages/patient/edit-patient.component";
import PatientListe from "./pages/patient/liste-patient.component";
import VaccinerFinal from "./pages/patient/vacciner-final.component";
import VaccinerPatient from "./pages/patient/vacciner-patient.compoenent";
import CreateVaccin from "./pages/vaccin/create-vaccin.component";
import EditVaccin from "./pages/vaccin/edit-vaccin.component";
import VaccinListe from "./pages/vaccin/liste-vaccin.component";

const SoignantRoute = (
  <>
    <Route path="patient-list" element={<PatientListe />} />
    <Route path="create-patient" element={<CreatePatient />} />
    <Route path="/edit-patient/:id" element={<EditPatient />} />
    <Route path="vaccin-list" element={<VaccinListe />} />
    <Route path="create-vaccin" element={<CreateVaccin />} />
    <Route path="/edit-vaccin/:id" element={<EditVaccin />} />
    <Route path="/vacciner-patient/:id" element={<VaccinerPatient />} />
    <Route path="/dashboard" element={<Dashboard />} />

    <Route path="/vacciner-final/:id" element={<VaccinerFinal />} />
    <Route path="/form-pass" element={<PassVaccinal />} />
    <Route path="/print-pass" element={<PrintVaccinal />} />
    <Route path="*" element={<Navigate to="/dashboard" />} />
  </>
);

const Gestion = (
  <>
    <Route path="create-vaccin" element={<CreateVaccin />} />
    <Route path="vaccin-list" element={<VaccinListe />} />
    <Route path="/edit-vaccin/:id" element={<EditVaccin />} />
    <Route path="/vacciner-patient/:id" element={<VaccinerPatient />} />
  </>
);

const AdminRoute = (
  <>
    <Route path="patient-list" element={<PatientListe />} />
    <Route path="create-patient" element={<CreatePatient />} />
    <Route path="/edit-patient/:id" element={<EditPatient />} />
    <Route path="vaccin-list" element={<VaccinListe />} />
    <Route path="create-vaccin" element={<CreateVaccin />} />
    <Route path="/edit-vaccin/:id" element={<EditVaccin />} />
    <Route path="/vacciner-patient/:id" element={<VaccinerPatient />} />
    <Route path="/dashboard" element={<Dashboard />} />

    <Route path="/vacciner-final/:id" element={<VaccinerFinal />} />
    <Route path="/form-pass" element={<PassVaccinal />} />
    <Route path="/print-pass" element={<PrintVaccinal />} />
    <Route path="*" element={<Navigate to="/dashboard" />} />
    <Route path="create-vaccin" element={<CreateVaccin />} />
    <Route path="vaccin-list" element={<VaccinListe />} />
    <Route path="/edit-vaccin/:id" element={<EditVaccin />} />
    <Route path="/vacciner-patient/:id" element={<VaccinerPatient />} />
  </>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      isAuth: false,
    };
  }
  componentDidMount() {}

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
            window.localStorage.getItem("user").length > 1 &&
            JSON.parse(window.localStorage.getItem("user")).type ==
              "Soignant" ? (
              SoignantRoute
            ) : (
              <Route path="*" element={<Navigate to="/" />} />
            )}

            {window.localStorage.getItem("user") &&
            window.localStorage.getItem("user").length > 1 &&
            JSON.parse(window.localStorage.getItem("user")).type ==
              "Logistique" ? (
              Gestion
            ) : (
              <Route path="*" element={<Navigate to="/" />} />
            )}

            {window.localStorage.getItem("user") &&
            window.localStorage.getItem("user").length > 1 &&
            JSON.parse(window.localStorage.getItem("user")).type == "Admin" ? (
              AdminRoute
            ) : (
              <Route path="*" element={<Navigate to="/" />} />
            )}
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
