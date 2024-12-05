const express = require('express');
const app = express();
const { router: localDBRouter, initialize } = require('./routes/localDB');
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
};
const port = process.env.PORT || 8080;

app.use(cors(corsOptions));

app.use('/api', localDBRouter);

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await initialize();
});
