import React, { useState, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useParams } from "react-router";
import Patient from "./Patient/Patient";
import Doctor from "./Doctor/Doctor";
import Profile from "./Profile/Profile";

export default function Admin(props) {
  const [key, setKey] = useState(props.tabKey);

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
          <Profile admin={props.user} />
        </Tab>
        <Tab eventKey="patient" title="Patient">
          <Patient />
        </Tab>
        <Tab eventKey="doctor" title="Doctor">
          <Doctor />
        </Tab>
      </Tabs>
    </div>
  );
}
