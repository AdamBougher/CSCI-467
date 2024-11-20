const express = require('express');
const app = express();
const parts = require("./routes/parts");

const port = process.env.PORT || 8080;

app.get("/api/parts", parts);

app.get("/api/parts", (req, res) => {
    parts.getAll((list) => {
      res.send(list);
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
