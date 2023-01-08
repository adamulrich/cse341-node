const express = require('express')
//const { MongoClient } = require('mongodb');
const mongoDB = require('./dbconnect');

require('dotenv').config();
const connectionString = process.env.MONGO_CONNECT_STRING;
const port = process.env.PORT

const app = express()
app.use('/',require('./routes'))

mongoDB.initDB((err, mongoDB) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Successfully connected to MongoDB; app listening on port ${port}`)
        })
            
    }
} )
