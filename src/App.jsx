import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import Admin from "./components/Admin/Admin";
import EditPatient from "./components/Admin/Patient/EditPatient/EditPatient";
import ViewPatient from "./components/Admin/Patient/ViewPatient/ViewPatient";
import AddPatient from "./components/Admin/Patient/AddPatient/AddPatient";
import EditDoctor from "./components/Admin/Doctor/EditDoctor/EditDoctor";
import ViewDoctor from "./components/Admin/Doctor/ViewDoctor/ViewDoctor";
import AddDoctor from "./components/Admin/Doctor/AddDoctor/AddDoctor";

function App() {
  return (
    <Router>
      <div>
        <HeaderComponent />
        <Routes>
          {/* <Route path="/" exact element={<PatientList />}></Route>
          <Redirect from="/" to="/api" /> */}
          <Route path="/" element={<Navigate to="/admin/patient" />} />
          <Route path="/admin" element={<Admin tabKey={"profile"} />}></Route>
          <Route
            path="/admin/profile"
            element={<Admin tabKey={"profile"} />}
          ></Route>
          <Route
            path="/admin/patient"
            element={<Admin tabKey={"patient"} />}
          ></Route>
          <Route
            path="/admin/doctor"
            element={<Admin tabKey={"doctor"} />}
          ></Route>
          <Route path="/admin/patient/add" element={<AddPatient />}></Route>
          <Route
            path="/admin/patient/view/:id"
            element={<ViewPatient />}
          ></Route>
          <Route
            path="/admin/patient/edit/:id"
            element={<EditPatient />}
          ></Route>
          <Route path="/admin/doctor/add" element={<AddDoctor />}></Route>
          <Route
            path="/admin/doctor/view/:id"
            element={<ViewDoctor />}
          ></Route>
          <Route
            path="/admin/doctor/edit/:id"
            element={<EditDoctor />}
          ></Route>
        </Routes>

        {/* <FooterComponent /> */}
      </div>
    </Router>
  );
}

export default App;
