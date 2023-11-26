const express = require('express');
const app = express.Router();


app.use(express.json());

// import all routes
const products = require('./routes/product');   

app.use('/api/v1', products)

// app.use(express.urlencoded({limit: "50mb", extended: true }));
// app.use(cors({
//     origin: "http://localhost:4000",
//     }));
// app.use(cookieParser());


module.exports = app