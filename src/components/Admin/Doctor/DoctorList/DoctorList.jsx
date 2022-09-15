import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import ActionButtons from "./ActionButtons/ActionButtons";

const DoctorList = (props) => {
  console.log(props.doctorsList);
  let navigate = useNavigate();
  return (
    <div>
      <h2 className="text-center" style={{ marginTop: "5px" }}>
        Doctors' List
      </h2>
      <div>
        <button
          className="btn btn-outline-primary shadow"
          onClick={() => navigate("/admin/doctor/add")}
          style={{ marginTop: "-50px" }}
        >
          <AiOutlineUserAdd style={{ fontSize: "22px", marginTop: "-4px" }} />{" "}
        </button>
      </div>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th> Doctor's ID </th>
              <th> Doctor's Name </th>
              <th> Actions </th>
            </tr>
          </thead>

          <tbody>
            {props.doctorsList != null
              ? props.doctorsList.map((doctor) => {
                  return (
                    <tr>
                      <td>{doctor.id}</td>
                      <td>{doctor.firstName + " " + doctor.lastName}</td>
                      <td>
                        <ActionButtons
                          doctorId={doctor.id}
                          doctorsList={props.doctorsList}
                          setDoctorsList={props.setDoctorsList}
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
export default DoctorList;
