import React from 'react';
import './setmeds.css';
import axios from 'axios';

const SetMeds = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        try {
          await axios.post('http://localhost:5000/submit', data);
          alert('Medication information saved!');
        } catch (error) {
          console.error("Error saving medication information");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="startDate">Start Date:</label>
                <input type="date" id="startDate" name="startDate" required/><br/>

                <label htmlFor="medicationName">Name of the Medication:</label>
                <input type="text" id="medicationName" name="medicationName" required/><br/>

                <label htmlFor="dosage">Dosage:</label>
                <input type="text" id="dosage" name="dosage" required/><br/>

                <label htmlFor="frequency">Frequency:</label>
                <input type="text" id="frequency" name="frequency" required/><br/>

                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" pattern="[0-9]{10}" required/><br/>

                <label htmlFor="notes">Notes:</label><br/>
                <textarea id="notes" name="notes" rows="4" cols="50"></textarea><br/>

                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default SetMeds;