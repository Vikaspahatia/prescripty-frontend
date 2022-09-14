import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdatePatientComponent = () => {
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  let navigate = useNavigate();
  //console.log('name' + firstName);
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
                    placeholder="Patient Id"
                    className="form-control"
                    onChange={(value) => setId(value)}
                  />

                  <div style={{ display: "flex", flexDirection: "center" }}>
                    <label> Name: </label>
                    {/* <label> Last Name: </label> */}
                  </div>
                  <div
                    style={{ display: "flex", flexDirection: "space-between" }}
                  >
                    <input
                      placeholder="First Name"
                      className="form-control shadow-sm"
                      onChange={(value) => setFirstName(value)}
                    />
                    <input
                      placeholder="Last Name"
                      className="form-control shadow-sm"
                      style={{ marginLeft: "10px" }}
                      onChange={(value) => setLastName(value)}
                    />
                  </div>

                  <label> Email ID: </label>
                  <input
                    placeholder="Email ID"
                    className="form-control"
                    onChange={(value) => setEmail(value)}
                  />

                  <label> Password: </label>
                  <input
                    placeholder="Password"
                    className="form-control"
                    onChange={(value) => setPassword(value)}
                  />

                  <label> Aadhar Number: </label>
                  <input
                    placeholder="Aadhar Number"
                    className="form-control"
                    onChange={(value) => setAadhar(value)}
                  />

                  <label> Date of Birth: </label>
                  <input
                    placeholder="d.o.b."
                    className="form-control"
                    onChange={(value) => setDob(value)}
                  />

                  <label> Mobile: </label>
                  <input
                    placeholder="Mobile"
                    className="form-control"
                    onChange={(value) => setMobile(value)}
                  />

                  <label> Address: </label>
                  <input
                    placeholder="Address"
                    className="form-control"
                    onChange={(value) => setAddress(value)}
                  />

                  <div style={{ marginTop: 15 }}>
                    <button className="btn btn-success">SAVE</button>
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

export default UpdatePatientComponent;
