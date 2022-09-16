import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const signup = () => {
    axios
      .post("http://localhost:8080/api/signup", {
        firstName,
        lastName,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div class="row">
        <p
          class="font-weight-normal"
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "40px",
          }}
        >
          {" "}
          REGISTRATION PAGE{" "}
        </p>
        <form>
          <div class="form-group">
            <label for="username"> First Name: </label>
            <input
              type="text"
              class="form-control shadow-sm"
              placeholder="Enter First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div class="form-group" style={{ marginTop: "5px" }}>
            <label for="username"> Last Name: </label>
            <input
              type="text"
              class="form-control shadow-sm"
              placeholder="Enter Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div class="form-group" style={{ marginTop: "5px" }}>
            <label for="username"> Email ID: </label>
            <input
              type="text"
              class="form-control shadow-sm"
              placeholder="Enter Email ID"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="form-group" style={{ marginTop: "5px" }}>
            <label for="username"> Password: </label>
            <input
              type="password"
              class="form-control shadow-sm"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            class="row"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <input
              type="submit"
              name="login-submit"
              id="login-submit"
              style={{ width: "96.8%" }}
              class="form-control btn btn-warning btn-lg shadow"
              value="REGISTER"
              onClick={(e) => {
                e.preventDefault();
                signup();
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
