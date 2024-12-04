const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

// Construct the correct path to the partsDb.sqlite file
const dbPath = path.join(__dirname, '..', 'db', 'partsDb.sqlite');
const db = new sqlite3.Database(dbPath);

// Remote database connection pool
const remotePool = mysql.createPool({
  host: 'blitz.cs.niu.edu',
  user: 'student',
  password: 'student',
  database: 'csci467',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Function to check and make sure that the local database has all the parts from the remote database
async function initialize() {
  try {
    // Read SQL file
    const setupSQL = fs.readFileSync(path.join(__dirname, '..', 'db', 'localDB.sql'), 'utf8');

    db.serialize(() => {
      db.exec(setupSQL, (err) => {
        if (err) {
          console.error('Error executing SQL script:', err);
          return;
        }
        console.log('Executed SQL script');
      });
    });

    // Check if the quantity table is empty
    db.get('SELECT COUNT(*) AS count FROM quantity', async (err, row) => {
      if (err) {
        console.error('Error checking quantity table:', err);
        return;
      }

      if (row.count === 0) {
        // Fetch data from remote database and insert into local database
        const [remoteParts] = await remotePool.query('SELECT * FROM parts');
        for (const part of remoteParts) {
          await new Promise((resolve, reject) => {
            db.run('INSERT OR IGNORE INTO quantity (qty, number) VALUES (?, ?)', [5, part.number], function(err) {
              if (err) {
                return reject(err);
              }
              resolve();
            });
          });
        }
        console.log('Inserted rows into quantity table');
      } else {
        console.log('Quantity table already contains data, skipping insertion');
      }
    });
  } catch (err) {
    console.error('Error during initialization:', err);
  }
}

// Route to join data from both databases
router.get('/site-db', async (req, res) => {
  try {
    const [remoteParts] = await remotePool.query('SELECT * FROM parts');
    
    db.all('SELECT * FROM quantity', (err, quantity) => {
      if (err) {
        console.error('Error fetching quantity data:', err);
        return res.status(500).json({ error: 'Error fetching quantity data' });
      }

      const joinedData = remoteParts.map((part) => {
        const localPart = quantity.find((p) => p.number === part.number);
        return {
          ...part,
          quantity: localPart ? localPart.qty : 0,
        };
      });
      res.json(joinedData);
    });
  } catch (err) {
    console.error('Error fetching joined data:', err);
    res.status(500).json({ error: 'Error fetching joined data' });
  }
});

// Route to get all quantities and their associated part numbers
router.get('/quantity', async (req, res) => {
  db.all('SELECT * FROM quantity', (err, rows) => {
    if (err) {
      console.error('Error fetching quantities:', err);
      return res.status(500).json({ error: 'Error fetching quantities' });
    }
    res.json(rows);
  });
});

module.exports = { router, initialize };