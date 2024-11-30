const express = require('express');
const router = express.Router();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "blitz.cs.niu.edu",
  user: "student",
  password: "student",
  database: "csci467",
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

router.get("/api/parts", (req, res) => {
  connection.query("SELECT * FROM parts", (err, rows) => {
    if (err) {
      console.error('Error fetching parts:', err);
      res.status(500).json({ error: 'Error fetching parts' });
      return;
    }
    // console.log("rows: ", rows);
    res.json(rows);
  });
});

module.exports = router;