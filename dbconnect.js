
const { MongoClient } = require('mongodb');
require('dotenv').config();
const connectionString = process.env.MONGO_CONNECT_STRING;

let mongoDB = null;

async function initDB(){

    const client = new MongoClient(connectionString);    
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        mongoDB = client;
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
initDB().catch(console.error);

function getDB() {
    if (mongoDB != null) {
        return mongoDB
    } else {
        console.log("db not initialized yet.")
        return null
    }
}

module.exports = { initDB, getDB }



 
