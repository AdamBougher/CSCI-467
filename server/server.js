const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const connection = mysql.createConnection({
  host: "blitz.cs.niu.edu",
  user: "student",
  password: "student",
  database: "csci467",
});


const port = process.env.PORT || 8080;

app.get("/api/parts", (req, res) => {
  connection.query("SELECT * FROM parts", (err, results) => {
    if (err) return res.json(err);
      return res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
