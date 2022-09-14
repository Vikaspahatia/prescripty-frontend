import React from "react";
import { useNavigate } from "react-router-dom";

const ViewPatientComponent = () => {
  return (
    <div>
      <h2 className="text-center" style={{ marginTop: "10px" }}>
        Patient's Details
      </h2>

      <div className="card .mx-auto" style={{ width: "75%" }}>
        <div className="card-body">This is some text within a card body.</div>
      </div>
    </div>
  );
};
export default ViewPatientComponent;
