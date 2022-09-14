import React from "react";
import { useNavigate } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";

const PatientListComponent = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h2 className="text-center" style={{ marginTop: "5px" }}>
        Patients' List
      </h2>
      <div>
        <button
          className="btn btn-outline-primary shadow"
          onClick={() => navigate("/add-patient")}
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
            <tr>
              <td>1001</td>
              <td>Jimmy McGill</td>
              <td>
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
                    onClick={() => navigate("/view-patient")}
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
                    onClick={() => navigate("/update-patient")}
                  >
                    <BiPencil style={{ fontSize: "22px", marginTop: "-4px" }} />
                  </button>
                  <button
                    className="btn btn-danger shadow"
                    style={{ marginLeft: "15px" }}
                  >
                    <MdDeleteOutline
                      style={{ fontSize: "22px", marginTop: "-4px" }}
                    />
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <td>1002</td>
              <td>Kim Wexler</td>
            </tr>

            <tr>
              <td>1003</td>
              <td>Mike Ehrmantraut</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PatientListComponent;
