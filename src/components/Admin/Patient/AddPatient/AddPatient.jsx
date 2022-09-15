import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPatient = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  let navigate = useNavigate();

  const addPatient = () => {
    axios
      .post("http://localhost:8080/api/patients", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        aadhar: aadhar,
        dob: dob,
        mobile: mobile,
        address: address,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/admin/patient");
      });
  };
  console.log(firstName);
  //console.log('name' + firstName);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className="card col-md-6 offset-md-3 offset-md-3 shadow"
            style={{ marginTop: 20, marginBottom: 80 }}
          >
            <h3 className="text-center" style={{ marginTop: "5px" }}>
              {" "}
              Add Patient{" "}
            </h3>
            <div className="card-body">
              <form>
                <div className="from-group">
                  <div style={{ display: "flex", flexDirection: "center" }}>
                    <label> Name: </label>
                    {/* <label> Last Name: </label> */}
                  </div>
                  <div
                    style={{ display: "flex", flexDirection: "space-between" }}
                  >
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="form-control shadow-sm"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="form-control shadow-sm"
                      style={{ marginLeft: "10px" }}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>

                  <label style={{ marginTop: "5px" }}> Email ID: </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email ID"
                    className="form-control shadow-sm"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <label style={{ marginTop: "5px" }}> Password: </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control shadow-sm"
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <label style={{ marginTop: "5px" }}> Aadhar Number: </label>
                  <input
                    type="text"
                    name="aadhar"
                    placeholder="Aadhar Number"
                    className="form-control shadow-sm"
                    onChange={(e) => setAadhar(e.target.value)}
                  />

                  <label style={{ marginTop: "5px" }}> Date of Birth: </label>
                  <input
                    type="date"
                    name="dob"
                    placeholder="YYYY/MM/DD"
                    className="form-control shadow-sm"
                    onChange={(e) => setDob(e.target.value)}
                  />

                  <label style={{ marginTop: "5px" }}> Mobile: </label>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile"
                    className="form-control shadow-sm"
                    onChange={(e) => setMobile(e.target.value)}
                  />

                  <label style={{ marginTop: "5px" }}> Address: </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="form-control shadow-sm"
                    onChange={(e) => setAddress(e.target.value)}
                  />

                  <div style={{ marginTop: 15 }}>
                    <button
                      className="btn btn-success shadow"
                      onClick={(e) => {
                        e.preventDefault();
                        console.log("saving patient");
                        addPatient();
                      }}
                    >
                      SAVE
                    </button>
                    <button
                      className="btn btn-danger shadow"
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

export default AddPatient;
