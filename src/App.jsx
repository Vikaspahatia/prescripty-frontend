import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/LoginPage';
import Home from './Pages/HomePage';
import Profile from './Pages/ProfilePage';
import PatientList from './Pages/PatientPage';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import CreatePatientComponent from './components/CreatePatientComponent';
import UpdatePatientComponent from './components/UpdatePatientComponent';
import ViewPatientComponent from './components/ViewPatientComponent';

function App() {
  return (
    <Router>
      <div>
        <HeaderComponent />      
        <Routes>
          <Route path='/' exact element={<PatientList />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/add-patient' element={<CreatePatientComponent />}></Route>
          <Route path='/update-patient' element={<UpdatePatientComponent />}></Route>
          <Route path='/view-patient' element={<ViewPatientComponent />}></Route>
        </Routes>

        {/* <FooterComponent /> */}
      </div>
    </Router>
  );
}

export default App;
