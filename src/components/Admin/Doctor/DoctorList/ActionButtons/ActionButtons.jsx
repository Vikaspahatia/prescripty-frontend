import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import axios from "axios";

export default function ActionButtons(props) {
  const [doctorId, setDoctorId] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    setDoctorId(props.doctorId);
  }, []);

  const deleteDoctor = () => {
    axios
      .delete("http://localhost:8080/api/doctors/" + props.doctorId)
      .then((res) => {
        console.log(res.data);
        axios.get("http://localhost:8080/api/doctors").then((res) => {
          props.setDoctorsList(res.data);
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
        onClick={() => navigate("/admin/doctor/view/" + props.doctorId)}
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
        onClick={() => navigate("/admin/doctor/edit/" + props.doctorId)}
      >
        <BiPencil style={{ fontSize: "22px", marginTop: "-4px" }} />
      </button>
      <button
        className="btn btn-danger shadow"
        style={{ marginLeft: "15px" }}
        onClick={() => {
          deleteDoctor();
        }}
      >
        <MdDeleteOutline style={{ fontSize: "22px", marginTop: "-4px" }} />
      </button>
    </div>
  );
}
