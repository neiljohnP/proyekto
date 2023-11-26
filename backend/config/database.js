const mongoose = require('mongoose');
require('dotenv').config()

const connectDatabase = () => {
    console.log('DB_URI:', process.env.DB_URI);

    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
    });
};

module.exports = connectDatabase;