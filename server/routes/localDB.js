const express = require('express');
const router = express.Router();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "local",
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

router.get("/api/local", (req, res) => {
  connection.query("SELECT * FROM quantity", (err, rows) => {
    if (err) {
      console.error('Error fetching parts:', err);
      res.status(500).json({ error: 'Error fetching quantity' });
      return;
    }
    // console.log("rows: ", rows);
    res.json(rows);
  });
});

module.exports = router;