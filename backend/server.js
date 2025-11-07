// require('dotenv').config();
// const app = require('./app');
// const PORT = process.env.PORT || 5050;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173', 'https://salmon-meadow-0e430c50f.6.azurestaticapps.net'],
  credentials: false
}));

// connect Mongo only once
let mongoReady = null;
function connectMongo() {
  if (!mongoReady) mongoReady = mongoose.connect(process.env.MONGO_URI);
  return mongoReady;
}

// import your routes
const contact = require('./routes/contact');
const newsletter = require('./routes/newsletter');
const jobApp = require('./routes/jobApplication');

app.use('/api/contact', async (req,res,next)=>{await connectMongo();next();}, contact);
app.use('/api/newsletter', async (req,res,next)=>{await connectMongo();next();}, newsletter);
app.use('/api/job', async (req,res,next)=>{await connectMongo();next();}, jobApp);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;      // ✅ export, don’t listen()
