const app = require('./app')
const connectDatabase = require('./config/database')
const PORT = 4000;

const dotenv = require('dotenv');

//setting up config file
dotenv.config({ path: 'backend/config/config.env' })

// connecting to database
connectDatabase();

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})