import React, { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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
                onClick={(e) => setEmail(e.target.value)}
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
                type="text"
                class="form-control"
                placeholder="Password"
                onClick={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
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
              />
            </div>
          </div>
          <div class="form-group">
            <span>
              New user? <a href="/register">Register here</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
