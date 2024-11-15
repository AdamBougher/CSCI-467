const express = require('express');
const router = express.Router();
const mariadb = require("mariadb");

async function connect() {
  try {
    const conn = await mariadb.createConnection({
      host: "blitz.cs.niu.edu",
      user: "student",
      password: "student",
      database: "csci467",
    });
    console.log("Connected to the database");
    return conn;
  } catch (err) {
    console.log("ERROR... CAN'T CONNECT: " + err);
    throw err;
  }
}

async function getAllParts() {
  let connection;
  try {
    connection = await connect();
    const parts = await connection.query("SELECT * FROM parts");
    return parts;
  } catch (err) {
    console.error("Error fetching parts: ", err);
    throw err;
  } finally {
    if (connection) connection.end();
  }
}

router.get("/api/parts", async (req, res) => {
  try {
    const parts = await getAllParts();
    res.json(parts);
  } catch (err) {
    res.status(500).send("Error fetching parts");
  }
});

module.exports = router;