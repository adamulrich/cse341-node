// env
require('dotenv').config();
const connectionString = process.env.MONGO_CONNECT_STRING;
const port = process.env.PORT;

// mongoDB
const mongoDB = require('./dbconnect');
mongoDB.initDB();

//express
const express = require('express')
const app = express();

//routes
app.use(express.json());
app.use('/', require('./routes/index'));
app.use('/contacts', require('./routes/contacts'));


//start
app.listen(port, () => {
    console.log(`Successfully connected to MongoDB; app listening on port ${port}`)
})
            