// env
require('dotenv').config();
const connectionString = process.env.MONGO_CONNECT_STRING;
const port = process.env.PORT;
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

// mongoDB
const mongoDB = require('./dbconnect');
mongoDB.initDB();

const options = {
    definition: {
        openapi : "3.0.0",
        info : {
            title: "Contacts Project for CSE 341",
            version: "1.0.0",
        },
        servers: [
            {
            url: "http://localhost:3000"
            }
        ]
    },
    apis: ["./routes/contacts.js", 
            "./routes/index.js"
        ]
}

const swaggerSpec = swaggerJSDoc(options);


//express
const express = require('express')
const app = express();

//routes
app.use(express.json());
app.use('/', require('./routes/index'));
app.use('/contacts', require('./routes/contacts'));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))


//start
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
            