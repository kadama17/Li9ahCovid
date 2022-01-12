import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PatientListe from './components/patient/liste-patient.component';
import CreatePatient from './components/patient/create-patient.component';
import EditPatient from './components/patient/edit-patient.component';
import VaccinListe from './components/vaccin/liste-vaccin.component';
import CreateVaccin from './components/vaccin/create-vaccin.component';
import EditVaccin from './components/vaccin/edit-vaccin.component';
import VaccinerPatient from './components/patient/vacciner-patient.compoenent';
import VaccinerFinal from './components/patient/vacciner-final.component';

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


  </Routes>
</BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
