const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise');

// Local database connection pool

// TODO: Update to use one of our student DB's
const localPool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'local',
});

// Remote database connection pool
const remotePool = mysql.createPool({
  host: 'blitz.cs.niu.edu',
  user: 'student',
  password: 'student',
  database: 'csci467',
});

// Route to join data from both databases\
// becuase there is no way to directly join data from two different databases, 
// we have to fetch the data from both databases and then join them in the server
// this takes all the data from remote ainto a json object and then adds the quantity from the local database
router.get('/site-db', async (req, res) => {
  try {
    const [remoteParts] = await remotePool.query('SELECT * FROM parts');
    const [quantity] = await localPool.query('SELECT * FROM quantity');
    
    const joinedData = remoteParts.map((part) => {
      const localPart = quantity.find((p) => p.number === part.number);
      return {
        ...part,
        quantity: localPart ? localPart.qty : 0,
      };
    });
    res.json(joinedData);
  } catch (err) {
    console.error('Error fetching joined data:', err);
  }
});

/// route to get all quantities and there associated part numbers
router.get('/quantity', async (req, res) => {
  try {
    const [rows] = await localPool.query('SELECT * FROM quantity');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching remote parts:', err);
    res.status(500).json({ error: 'Error fetching remote parts' });
  }
});

// Function to check and make sure that the local database has all the parts from the remote database
async function initialize() {
  try {
    // if there is a new item in remote that is not in local, add it to local t otrack quantity
    const [remoteParts] = await remotePool.query('SELECT * FROM parts');
    for (const part of remoteParts) {
      await localPool.query('INSERT IGNORE INTO quantity (qty, number) VALUES (?, ?)', [5, part.number]);
    }
    console.log('Initialization completed');
  } catch (err) {
    console.error('Error during initialization:', err);
  }
}

module.exports = { router, initialize };