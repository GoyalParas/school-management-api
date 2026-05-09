const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Database connection
const db = require('./db');

// Routes
app.use('/api/schools', require('./routes/schools'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});