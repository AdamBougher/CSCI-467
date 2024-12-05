const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const mysql = require('mysql2/promise');

const fs = require('fs');
const path = require('path');


const dbPath = path.join(__dirname, '..', 'db', 'partsdb.sqlite');
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
    const setupSQL = fs.readFileSync(path.join(__dirname, '..', 'db', 'localdb.sql'), 'utf8');

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

//route to acsess the remote database
router.get('/remote-db', async (req, res) => {
  try {
    const [rows] = await remotePool.query('SELECT * FROM parts');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching remote data:', err);
    res.status(500).json({ error: 'Error fetching remote data' });
  }
});

//route to get customer infromation from the remote database
router.get('/customers', async (req, res) => {
  try {
    const [rows] = await remotePool.query('SELECT * FROM customers');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching remote data:', err);
    res.status(500).json({ error: 'Error fetching remote data' });
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

// Route to get the weight ranges from weightRanges
router.get('/weight', async (req, res) => {
  db.all('SELECT * FROM weightRanges', (err, rows) => {
    if (err) {
      console.error('Error fetching weight ranges:', err);
      return res.status(500).json({ error: 'Error fetching weight ranges' });
    }
    res.json(rows);
  });
});

//route to set or change or add weights in weightRanges
router.post('/eight', async (req, res) => {
  const { weight, cost } = req.body;
  db.run('INSERT INTO weightRanges (weight, cost) VALUES (?, ?)', [weight, cost], function(err) {
    if (err) {
      console.error('Error inserting weight range:', err);
      return res.status(500).json({ error: 'Error inserting weight range' });
    }
    res.json({ id: this.lastID, weight, cost });
  });
});

//route to get all orders from orders
router.get('/orders', async (req, res) => {
  db.all('SELECT * FROM orders', (err, rows) => {
    if (err) {
      console.error('Error fetching orders:', err);
      return res.status(500).json({ error: 'Error fetching orders' });
    }
    res.json(rows);
  });
});

//route to get orders of status 0 from orders, these are the orders that need to be fufilled
router.get('/orders/warehouseOrders', async (req, res) => {
  db.all('SELECT * FROM orders WHERE shipped = 0', (err, rows) => {
    if (err) {
      console.error('Error fetching orders:', err);
      return res.status(500).json({ error: 'Error fetching orders' });
    }
    res.json(rows);
  });
});

//route to set the shipped status of an order to 1
router.put('/orders/:id', async (req, res) => {
  const { id } = req.params;
  db.run('UPDATE orders SET shipped = 1 WHERE id = ?', [id], function(err) {
    if (err) {
      console.error('Error updating order:', err);
      return res.status(500).json({ error: 'Error updating order' });
    }
    res.json({ id, shipped: 1 });
  });
});

module.exports = { router, initialize };