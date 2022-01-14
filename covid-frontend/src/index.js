import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PatientListe from './pages/patient/liste-patient.component';
import CreatePatient from './pages/patient/create-patient.component';
import EditPatient from './pages/patient/edit-patient.component';
import VaccinListe from './pages/vaccin/liste-vaccin.component';
import CreateVaccin from './pages/vaccin/create-vaccin.component';
import EditVaccin from './pages/vaccin/edit-vaccin.component';
import VaccinerPatient from './pages/patient/vacciner-patient.compoenent';
import VaccinerFinal from './pages/patient/vacciner-final.component';
import PassVaccinal from './pages/passvaccinal/form-passvaccinal.component';
import PrintVaccinal from './pages/passvaccinal/print-passvaccinal.component';
import UserListe from './pages/users/liste-user.component';
import EditUser from './pages/users/edit-user.component';
import CreateUser from './pages/users/create-user.component';
import { Login } from './pages/auth/login-component';
import { Dashboard } from './pages/Dashboard';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="patient-list" element={<PatientListe />} />
    <Route path="create-patient" element={<CreatePatient />} />
    <Route path="/edit-patient/:id" element={<EditPatient />} />
    <Route path="vaccin-list" element={<VaccinListe />} />
    <Route path="create-vaccin" element={<CreateVaccin />} />
    <Route path="/edit-vaccin/:id" element={<EditVaccin />} />
    <Route path="/vacciner-patient/:id" element={<VaccinerPatient />} />

    <Route path="/vacciner-final/:id" element={<VaccinerFinal />} />
    <Route path="/form-pass" element={<PassVaccinal />} />
    <Route path="/print-pass" element={<PrintVaccinal />} />


    <Route path="user-list" element={<UserListe />} />
    <Route path="create-user" element={<CreateUser />} />
    <Route path="/edit-user/:id" element={<EditUser />} />

    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />

  </Routes>
</BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
