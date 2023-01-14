const express = require('express')
const app = express()

require('dotenv').config();
const port = process.env.PORT
const connectionString = process.env.MONGO_CONNECT_STRING;

const mongoDB = require('./dbconnect');
mongoDB.initDB();

app.use('/', require('./routes/contacts'))
app.use('/',require('./routes/index'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
