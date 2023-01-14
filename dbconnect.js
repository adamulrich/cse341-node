const { MongoClient } = require('mongodb');
require('dotenv').config();
const connectionString = process.env.MONGO_CONNECT_STRING;

let mongoDB = null;

async function initDB(){

    const client = new MongoClient(connectionString);    
    
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("connected")
        // Make the appropriate DB calls
        mongoDB = client;
 
    } catch (e) {
        console.error(e);
    } finally {
        // await client.close();
    }
}

async function getDB() {
    if (mongoDB != null) {
        return mongoDB
    } else {
        await initDB()
        //console.log("db not initialized yet.")
        return mongoDB
    }
}

module.exports = { initDB, getDB }
