import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ViewDoctor = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState({});

  const getDoctor = () => {
    axios.get("http://localhost:8080/api/doctors/" + id).then((res) => {
      console.log(res.data);
      setDoctor({
        ...res.data,
      });
    });
  };

  useEffect(() => {
    console.log(id);
    getDoctor();
  }, []);
  return (
    <div>
      <h2 className="text-center" style={{ marginTop: "10px" }}>
        Doctor's Details
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
              {doctor.firstName + " " + doctor.lastName}{" "}
            </div>
          </div>
          <div class="field-container">
            <div className="label-container"> Email Id : </div>
            <div className="value-container"> {doctor.email} </div>
          </div>
          <div class="field-container">
            <div className="label-container"> Aadhar no : </div>
            <div className="value-container"> {doctor.aadhar} </div>
          </div>
          <div class="field-container">
            <div className="label-container"> D.O.B. : </div>
            <div className="value-container"> {doctor.dob} </div>
          </div>
          <div class="field-container">
            <div className="label-container"> Mobile : </div>
            <div className="value-container"> {doctor.mobile} </div>
          </div>
          <div class="field-container" >
            <div className="label-container"> Address : </div>
            <div className="value-container"> {doctor.address} </div>
          </div>
          <div class="field-container">
            <div className="label-container"> Specialization : </div>
            <div className="value-container"> {doctor.specialization} </div>
          </div>
          <div class="field-container" style={{ marginBottom: "10px" }}>
            <div className="label-container"> Department ID : </div>
            <div className="value-container"> {doctor.deptId} </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewDoctor;
