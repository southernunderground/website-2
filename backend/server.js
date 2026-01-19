// require('dotenv').config();
// const app = require('./app');
// const PORT = process.env.PORT || 5050;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
// backend/server.js
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose'); // Removed no-db

const app = express();
app.use(express.json());
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:5175',
    'https://www.suofla.com'
  ],
  credentials: false
}));

// connect Mongo only once
// connect Mongo only once
// let mongoReady = null;
// function connectMongo() {
//   if (!mongoReady) mongoReady = mongoose.connect(process.env.MONGO_URI);
//   return mongoReady;
// }

// import your routes
// const newsletter = require('./routes/newsletter'); // Removed no-db
// const jobApp = require('./routes/jobApplication'); // Removed legacy route

const jobApply = require('../api/job-apply');
const contactApi = require('../api/contact');

// app.use('/api/contact', async (req, res, next) => { await connectMongo(); next(); }, contact);
app.post('/api/contact', contactApi);
// app.use('/api/newsletter', async (req, res, next) => { next(); }, newsletter); // Removed no-db
app.post('/api/job-apply', jobApply);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;      // ✅ export, don’t listen()
