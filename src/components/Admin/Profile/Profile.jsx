import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ViewPatient = ({ admin }) => {
  const { id } = useParams();
  const [patient, setPatient] = useState({});

  useEffect(() => {
    console.log(admin);
  }, []);
  return (
    <div>
      <h2 className="text-center" style={{ marginTop: "10px" }}>
        Admin Profile
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
              {admin.firstName + " " + admin.lastName}{" "}
            </div>
          </div>
          <div class="field-container">
            <div className="label-container"> Email Id : </div>
            <div className="value-container"> {admin.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewPatient;
