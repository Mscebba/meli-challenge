const express = require('express');
const cors = require('cors');
require('dotenv').config();

const items = require('./routes/items');

const port = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/', items);

app.listen(port, error => {
  if (error) throw error;
  console.log(`🚀 Server ready at Port: ${port}`);
});
