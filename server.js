// env
require('dotenv').config();
const connectionString = process.env.MONGO_CONNECT_STRING;
const port = process.env.PORT;
const swaggerUI = require("swagger-ui-express");

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
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Z-Key');
    res.setHeader('Access-Control-Allow-Credentials', true);
})
// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))


//start
app.listen(port, (res, req) => {
    
    console.log(`App listening on port ${port}`)
})
            