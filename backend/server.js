// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Medication = require('./models/medication');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://SobennaStory:VbPSD4s6lg2eCNSS@cluster0.cwsjjlw.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.json());

// Route to submit medication data
app.post('/submit', async (req, res) => {
  try {
    const medication = new Medication(req.body);
    await medication.save();
    res.status(200).send('Medication saved!');
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Route to fetch medications for a specific date
app.get('/medications', async (req, res) => {
  try {
    const date = new Date(req.query.date);
    const medications = await Medication.find({ startDate: date });
    res.status(200).json(medications);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

app.listen(5000, () => {
  console.log('Server started on http://localhost:5000');
});