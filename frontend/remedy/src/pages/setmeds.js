
import React from 'react';
import './setmeds.css';
 
const SetMeds = () => {
    return (
        <body>
    
    <form action="/submit" method="post">
        <label for="startDate">Start Date:</label>
        <input type="date" id="startDate" name="startDate" required/><br></br>

        <label for="medicationName">Name of the Medication:</label>
        <input type="text" id="medicationName" name="medicationName" required/><br></br>

        <label for="dosage">Dosage:</label>
        <input type="text" id="dosage" name="dosage" required/><br></br>

        <label for="frequency">Frequency:</label>
        <input type="text" id="frequency" name="frequency" required/><br></br>

        <label for="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" pattern="[0-9]{10}" required/><br></br>

        <label for="notes">Notes:</label><br></br>
        <textarea id="notes" name="notes" rows="4" cols="50"></textarea><br></br>

        <input type="submit" value="Submit"/>
    </form>
</body>

    );
};
 
export default SetMeds;