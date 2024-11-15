//index.js
const express = require('express');
const parts = require('./parts');

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
    parts.getAll((list) => {
      res.send(list);
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
