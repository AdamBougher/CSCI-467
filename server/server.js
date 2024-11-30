const express = require('express');
const app = express();
const parts = require("./routes/legacyDB");
const cors = require("cors");
const coresOptions = {
  origin: "http://localhost:5173",
};

const port = process.env.PORT || 8080;

app.use(cors(coresOptions));

app.get("/api/parts", parts);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
