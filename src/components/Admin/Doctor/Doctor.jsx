import React, { useState, useEffect } from "react";
import DoctorList from "./DoctorList/DoctorList";
import ViewDoctor from "./ViewDoctor/ViewDoctor";
import EditDoctor from "./EditDoctor/EditDoctor";
import axios from "axios";

const getAllDoctors = async () => {
  const res = await axios.get("http://localhost:8080/api/doctors");
  return res.data;
};

export default function Doctor(props) {
  const [doctorsList, setDoctorsList] = useState([]);

  useEffect(() => {
    getAllDoctors().then((res) => setDoctorsList(res));
    setDoctorsList();
  }, []);

  return (
    <>
      <DoctorList
        doctorsList={doctorsList}
        setDoctorsList={setDoctorsList}
      />
    </>
  );
}
