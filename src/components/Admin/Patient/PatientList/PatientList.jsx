import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import ActionButtons from "./ActionButtons/ActionButtons";

const PatientList = (props) => {
  console.log(props.patientsList);
  let navigate = useNavigate();
  return (
    <div>
      <h2 className="text-center" style={{ marginTop: "5px" }}>
        Patients' List
      </h2>
      <div>
        <button
          className="btn btn-outline-primary shadow"
          onClick={() => navigate("/admin/patient/add")}
          style={{ marginTop: "-50px" }}
        >
          <AiOutlineUserAdd style={{ fontSize: "22px", marginTop: "-4px" }} />{" "}
        </button>
      </div>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th> Patient's ID </th>
              <th> Patient's Name </th>
              <th> Actions </th>
            </tr>
          </thead>

          <tbody>
            {props.patientsList != null
              ? props.patientsList.map((patient) => {
                  return (
                    <tr>
                      <td>{patient.id}</td>
                      <td>{patient.firstName + " " + patient.lastName}</td>
                      <td>
                        <ActionButtons
                          patientId={patient.id}
                          patientsList={props.patientsList}
                          setPatientsList={props.setPatientsList}
                        />
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PatientList;
