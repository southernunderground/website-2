const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/newsletter', require('./routes/newsletter'));
app.use('/api/contact', require('./routes/contact'));
app.use('/uploads', express.static('uploads'));

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('✅ MongoDB connected');
  
  // Only require and use the route *after* DB is connected!
  const jobAppRouter = require('./routes/jobApplication');
  app.use('/api/job', jobAppRouter);
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

app.get('/', (req, res) => {
  res.send('API is running!');
});

module.exports = app;
