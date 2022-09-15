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

function App() {
  return (
    <Router>
      <div>
        <HeaderComponent />
        <Routes>
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
        </Routes>

        {/* <FooterComponent /> */}
      </div>
    </Router>
  );
}

export default App;
