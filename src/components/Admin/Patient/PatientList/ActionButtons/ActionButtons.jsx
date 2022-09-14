import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import axios from "axios";

export default function ActionButtons(props) {
  const [patientId, setPatientId] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    setPatientId(props.patientId);
  }, []);

  const deletePatient = () => {
    axios
      .delete("http://localhost:8080/api/patients/" + props.patientId)
      .then((res) => {
        console.log(res.data);
        axios.get("http://localhost:8080/api/patients").then((res) => {
          props.setPatientsList(res.data);
        });
      });
  };
  return (
    <div
      style={{
        flexDirection: "row",
        display: "flex",
        justifyContent: "center",
        marginLeft: "-200px",
        marginRight: "-200px",
      }}
    >
      <button
        className="btn btn-primary shadow"
        onClick={() => navigate("/admin/patient/view/" + props.patientId)}
      >
        <FiEye
          style={{
            fontSize: "22px",
            marginTop: "-4px",
            color: "white",
          }}
        />
      </button>
      <button
        className="btn btn-success shadow"
        style={{ marginLeft: "15px" }}
        onClick={() => navigate("/admin/patient/edit/" + props.patientId)}
      >
        <BiPencil style={{ fontSize: "22px", marginTop: "-4px" }} />
      </button>
      <button
        className="btn btn-danger shadow"
        style={{ marginLeft: "15px" }}
        onClick={() => {
          deletePatient();
        }}
      >
        <MdDeleteOutline style={{ fontSize: "22px", marginTop: "-4px" }} />
      </button>
    </div>
  );
}
