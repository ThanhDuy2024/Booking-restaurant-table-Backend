require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000
const database = require('./config/database');
database.connect();
const clientRouter = require("./routes/client/index.route");

app.use(express.json());

app.use('/', clientRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})