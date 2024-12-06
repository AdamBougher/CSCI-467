const express = require('express');
const cors = require('cors');
const { router: localDBRouter, initialize } = require('./routes/localDB'); // Ensure the correct path to localDB.js

const app = express();
const port = process.env.PORT || 8080;

const corsOptions = {
  origin: 'http://localhost:5173',
};

app.use(cors(corsOptions));
app.use(express.json()); // Add this line to parse JSON request bodies
app.use('/api', localDBRouter);

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await initialize(); // Run the initialization function once on server start
});
