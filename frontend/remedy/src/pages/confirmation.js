import React from 'react';
import './confirmation.css';

const Confirmation = () => {
    return (
        <body>
        <h1>Did you take your medication today?</h1>
        <div class="medication-details">
            <div class="medication-field">
                <div class="label">Name of Medication</div>
                <div class="value">CODEmethazine...</div>
            </div>
            <div class="medication-field">
                <div class="label">Dosage</div>
                <div class="value">30 ml...</div>
            </div>
            <div class="medication-field">
                <div class="label">Frequency</div>
                <div class="value">Every 12-16 hours...</div>
            </div>
            <div class="medication-field">
                <div class="label">Notes</div>
                <div class="value">No alcohol is allowed when taking this prescription...</div>
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