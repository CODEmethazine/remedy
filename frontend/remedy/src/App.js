import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages';
import SetMeds from './pages/setmeds';
import Confirmation from './pages/confirmation';
import Schedule from './pages/schedule';
import SignUp from './pages/signup';


function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/confirmation" className="nav-link">Confirmation</Link>
      <Link to="/setmeds" className="nav-link">Set Meds</Link>
      <Link to="/schedule" className="nav-link">Schedule</Link>
      <Link to="/signup" className="nav-link">Sign Up</Link>
    </nav>
  );
}

function YourComponent() {

  return (
    <Router>
      <div>
        <NavigationBar />
        <div className="content">
          {/* Route Configuration */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/setmeds" element={<SetMeds />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default YourComponent;
