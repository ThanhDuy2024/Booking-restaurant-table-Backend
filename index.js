require('dotenv');
const express = require('express')
const app = express()
const port = 3000
const clientRouter = require("./routes/client/index.route");

app.use('/', clientRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})