import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios'; // Make sure to install axios if you haven't: npm install axios
import './schedule.css';

const Schedule = () => {
  const [date, setDate] = useState(new Date());
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    // Fetch medication data for the selected date
    const fetchMedications = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/medications?date=${date.toISOString()}`);
        setMedications(response.data);
      } catch (error) {
        console.error("Error fetching medication information");
      }
    };

    fetchMedications();
  }, [date]);

  return (
    <div>
      <h1>Calendar</h1>
      <Calendar
        value={date}
        onChange={setDate}
      />
      <div className="medication-list">
        <h2>Medications for {date.toLocaleDateString()}</h2>
        {medications.length === 0 ? (
          <p>No medications scheduled for this day.</p>
        ) : (
          medications.map(med => (
            <div key={med._id} className="medication-item">
              <strong>{med.medicationName}</strong> - {med.dosage} every {med.frequency} hours
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Schedule;