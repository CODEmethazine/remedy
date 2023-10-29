const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
  startDate: Date,
  medicationName: String,
  dosage: String,
  frequency: String,
  phoneNumber: String,
  notes: String
});

module.exports = mongoose.model('Medication', medicationSchema);