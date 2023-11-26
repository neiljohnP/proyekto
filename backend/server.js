const express = require('express');
const app = express();

const connectDatabase = require('./config/database');

const dotenv = require('dotenv');

//Setting up config file
dotenv.config({path: 'backend/config/config.env'})

//Connect to database
connectDatabase();

app.get('/api/v1/products', (req, res) => {
    // Your logic to handle the request goes here
    res.send('This is the /api/v1/products endpoint');
  });

app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT : ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})
