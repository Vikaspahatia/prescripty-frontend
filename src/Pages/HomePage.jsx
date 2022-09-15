import React from "react";
import image from "../bgImage.jpg";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  let navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: "48.8vw",
        width: "99vw",
        paddingTop: "60px",
      }}
    >
      <div class="box box1 shadow" style={{ paddingTop: "20px" }}>
        <div
          style={{
            paddingLeft: "35px",
            paddingRight: "30px",
            marginTop: "37px",
            color: "white",
            justifyContent: "center",
            textAlign: "justify",
          }}
        >
          <label>
            Prescripty is a hospital management app that helps Hospitals smooth
            out their workflow. We offers simple, intuitive access to Patients'
            and Doctors' records. Only the admin with proper authorization have
            the liberty to access the data of Patients’ and Doctors’.
          </label>
          <label>
            The core vision of Prescripty is to make the management as easy as
            possible in the simplest way possible.
          </label>
        </div>
        <button className="box box2" onClick={() => navigate("/login")}>
          <span style={{ fontSize: "25px", color: "black" }}>START</span>
        </button>
      </div>
      <div className="box3 shadow">
        <img
          style={{ width: 240, marginTop: "-32px", marginLeft: "8px" }}
          src={require("../proLogo.png")}
          alt=""
        />
      </div>
    </div>
  );
};
export default HomePage;
