// env
require('dotenv').config();
const connectionString = process.env.MONGO_CONNECT_STRING;
const port = process.env.PORT;
const swaggerUIExpress = require("swagger-ui-express");
const swaggerAutogen = require("swagger-autogen");
const cors = require('cors')

// mongoDB
const mongoDB = require('./dbconnect');
mongoDB.initDB();

//express
const express = require('express')
const app = express();

//routes
app.use(cors());
app.use(express.json());

var options = {
	validatorUrl : "http://localhost:3000/login",
	oauth: {
	 clientId: process.env.clientId,
     clientSecret: process.env.clientSecret,
     realm: "",
     appName: "Heroes",
     scopeSeparator: " ",
     scopes: "write",
     additionalQueryStringParams: {test: "Hello!"},
    }
};

const swaggerSpec = require('./swagger-output.json');
app.use('/api-docs', swaggerUIExpress.serve, swaggerUIExpress.setup(swaggerSpec, false, options));

app.use('/', require('./routes/index'));
app.use('/contacts', require('./routes/contacts'));
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Z-Key');
    res.setHeader('Access-Control-Allow-Credentials', true);
})



//start
app.listen(port, (res, req) => {
    
    console.log(`App listening on port ${port}`)
})
            