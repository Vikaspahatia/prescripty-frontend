import React, { useState, useEffect } from "react";
import PatientList from "./PatientList/PatientList";
import ViewPatient from "./ViewPatient/ViewPatient";
import EditPatient from "./EditPatient/EditPatient";
import axios from "axios";

const getAllPatients = async () => {
  const res = await axios.get("http://localhost:8080/api/patients");
  return res.data;
};

export default function Patient(props) {
  const [patientsList, setPatientsList] = useState([]);

  useEffect(() => {
    getAllPatients().then((res) => setPatientsList(res));
    setPatientsList();
  }, []);

  return (
    <>
      <PatientList
        patientsList={patientsList}
        setPatientsList={setPatientsList}
      />
    </>
  );
}
