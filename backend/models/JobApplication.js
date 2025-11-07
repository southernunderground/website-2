const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  experience: String,
  message: String,
  resumeUrl: String, // Path to uploaded file
  position: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('JobApplication', jobApplicationSchema);
