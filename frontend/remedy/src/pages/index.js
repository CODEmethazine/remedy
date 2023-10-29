import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // Import the specific CSS file

const Home = () => {
  const userName = "User"; // Placeholder name




  return (
    <div className="homepage-body">
      <div className="homepage-welcome-text">
        Welcome, <span className="homepage-username">{userName}</span>
      </div>
      <div className="homepage-container">
        <Link to="/setmeds" className="homepage-clickable-box">Set Meds</Link>
        <Link to="/schedule" className="homepage-clickable-box">View Schedule</Link>
      </div>
    </div>
  );
};

export default Home;