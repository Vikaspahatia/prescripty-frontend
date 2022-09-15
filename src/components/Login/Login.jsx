import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = ({ user, setUser }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const login = () => {
    axios
      .post("http://localhost:8080/api/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status != null && res.data.status == 200) {
          setUser(res.data.result);
          navigate("/admin/profile");
        } else {
          setErrorMsg("Invalid Credentials");
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg("Invalid Credentials");
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
          USER LOGIN PAGE{" "}
        </p>
        <form>
          <div class="form-group">
            <label for="username"> Username </label>
            <div class="input-group mb-3 shadow">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  @
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <div class="input-group mb-3 shadow">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  ***
                </span>
              </div>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="error-container">{errorMsg}</div>
          <div class="form-group">
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
                class="form-control btn btn-success btn-lg "
                value="LOG IN"
                onClick={(e) => {
                  console.log(email, password);
                  e.preventDefault();
                  login();
                }}
              />
            </div>
          </div>
          <div class="form-group">
            <span>
              New user? <a href="/signup">Register here</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
