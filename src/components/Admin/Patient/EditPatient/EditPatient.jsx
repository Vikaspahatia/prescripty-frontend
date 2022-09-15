import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPatient = () => {
  const [pid, setPId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  let navigate = useNavigate();
  const { id } = useParams();

  const updatePatient = () => {
    axios
      .put("http://localhost:8080/api/patients", {
        id,
        firstName,
        lastName,
        email,
        password,
        aadhar,
        dob,
        mobile,
        address,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/admin/patient");
      });
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className="card col-md-6 offset-md-3 offset-md-3"
            style={{ marginTop: 20, marginBottom: 80 }}
          >
            <h3 className="text-center"> Update Patient </h3>
            <div className="card-body">
              <form>
                <div className="from-group">
                  <label> Patient ID: </label>
                  <input
                    type="text"
                    placeholder="Patient Id"
                    className="form-control"
                    onChange={(e) => setPId(e.target.value)}
                    value={id}
                  />

                  <div style={{ display: "flex", flexDirection: "center" }}>
                    <label> Name: </label>
                    {/* <label> Last Name: </label> */}
                  </div>
                  <div
                    style={{ display: "flex", flexDirection: "space-between" }}
                  >
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control shadow-sm"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control shadow-sm"
                      style={{ marginLeft: "10px" }}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>

                  <label> Email ID: </label>
                  <input
                    type="email"
                    placeholder="Email ID"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <label> Password: </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <label> Aadhar Number: </label>
                  <input
                    type="text"
                    placeholder="Aadhar Number"
                    className="form-control"
                    onChange={(e) => setAadhar(e.target.value)}
                  />

                  <label> Date of Birth: </label>
                  <input
                    type="date"
                    placeholder="d.o.b."
                    className="form-control"
                    onChange={(e) => setDob(e.target.value)}
                  />

                  <label> Mobile: </label>
                  <input
                    type="tel"
                    placeholder="Mobile"
                    className="form-control"
                    onChange={(e) => setMobile(e.target.value)}
                  />

                  <label> Address: </label>
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                    onChange={(e) => setAddress(e.target.value)}
                  />

                  <div style={{ marginTop: 15 }}>
                    <button
                      className="btn btn-success"
                      onClick={(e) => {
                        e.preventDefault();
                        updatePatient();
                      }}
                    >
                      SAVE
                    </button>
                    <button
                      className="btn btn-danger"
                      style={{ marginLeft: "20px" }}
                      onClick={() => navigate("/")}
                    >
                      CANCEL
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPatient;
