import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ViewPatient = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState({});

  const getPatient = () => {
    axios.get("http://localhost:8080/api/patients/" + id).then((res) => {
      console.log(res.data);
      setPatient({
        ...res.data,
      });
    });
  };

  useEffect(() => {
    console.log(id);
    getPatient();
  }, []);
  return (
    <div>
      <h2 className="text-center" style={{ marginTop: "10px" }}>
        Patient's Details
      </h2>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div class="card our-container shadow" style={{ width: "60%" }}>
          <div class="field-container" style={{ marginTop: "10px" }}>
            <div className="label-container"> Name : </div>
            <div className="value-container">
              {" "}
              {patient.firstName + " " + patient.lastName}{" "}
            </div>
          </div>
          <div class="field-container">
            <div className="label-container"> Email Id : </div>
            <div className="value-container"> {patient.email} </div>
          </div>
          <div class="field-container">
            <div className="label-container"> Aadhar no : </div>
            <div className="value-container"> {patient.aadhar} </div>
          </div>
          <div class="field-container">
            <div className="label-container"> D.O.B. : </div>
            <div className="value-container"> {patient.dob} </div>
          </div>
          <div class="field-container">
            <div className="label-container"> Mobile : </div>
            <div className="value-container"> {patient.mobile} </div>
          </div>
          <div class="field-container" style={{ marginBottom: "10px" }}>
            <div className="label-container"> Address : </div>
            <div className="value-container"> {patient.address} </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewPatient;
