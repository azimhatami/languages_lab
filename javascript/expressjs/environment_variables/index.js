const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config()
const nodeEnv = process.env.NODE_ENV;
dotenv.config({
  path: path.join(__dirname, `.env.${nodeEnv}`)
})
const app = express();

app.get('/', (req, res) => {
  console.log(process.env.API_KEY);
  res.send('run server')
})


app.listen(process.env.PORT, () => {
  console.log('server run on port: ' + process.env.PORT);
})
