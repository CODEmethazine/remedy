import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages';
import SetMeds from './pages/setmeds';
import Confirmation from './pages/confirmation';
import Schedule from './pages/schedule';
import SignUp from './pages/signup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Router>
        <div>
          {/* Navigation */}
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/confirmation">Confirmation</Link></li>
              <li><Link to="/setmeds">Set Meds</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
              <li><Link to="/schedule">Schedule</Link></li>
            </ul>
          </nav>

          {/* Route Configuration */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/setmeds" element={<SetMeds />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;