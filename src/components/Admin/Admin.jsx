import React, { useState, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useParams } from "react-router";
import Patient from "./Patient/Patient";

export default function Admin(props) {
  const [key, setKey] = useState(props.tabKey);
  // const { page, action, id } = useParams();
  // const [currentPage, setCurrentPage] = useState(page);
  // const [currentAction, setCurrentAction] = useState(action);
  // const [currentId, setCurrentId] = useState(id);
  // const [patientId, setPatientId] = useState(0);
  // const [doctorId, setDoctorId] = useState(0);

  useEffect(() => {
    // setKey(props.tabKey);
  }, []);
  return (
    <div className="container">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="profile" title="Profile">
          <div>Profile here!</div>
        </Tab>
        <Tab eventKey="patient" title="Patient">
          <Patient />
        </Tab>
        <Tab eventKey="doctor" title="Doctor">
          <div>Doctor here!</div>
        </Tab>
      </Tabs>
    </div>
  );
}
