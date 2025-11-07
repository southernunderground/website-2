const mongoose = require('mongoose');

const contactSubmissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: String,
  service: { type: String, required: true },
  projectType: String,
  timeline: String,
  budget: String,
  message: { type: String, required: true },
  newsletter: { type: Boolean, default: false },
  submissionDate: { type: Date, default: Date.now },
  status: { type: String, default: "new" }  // you can update this as you process requests
});

module.exports = mongoose.model('ContactSubmission', contactSubmissionSchema);
