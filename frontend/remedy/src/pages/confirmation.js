import React from 'react';
import './confirmation.css';

const Confirmation = () => {
    return (
        <body>
        <h1>Did you take your medication today?</h1>
        <div class="medication-details">
            <div class="medication-field">
                <div class="label">Name of Medication</div>
                <div class="value">Chicken</div>
            </div>
            <div class="medication-field">
                <div class="label">Dosage</div>
                <div class="value">Chicken</div>
            </div>
            <div class="medication-field">
                <div class="label">Frequency</div>
                <div class="value">Chicken</div>
            </div>
            <div class="medication-field">
                <div class="label">Notes</div>
                <div class="value">Chicken</div>
            </div>
        </div>
        <div class="action-buttons">
            <button class="delete-button">No X</button>
            <button class="checkmark-button">Yes &#10003;</button>
        </div>
    </body>
    );
};
 
export default Confirmation;