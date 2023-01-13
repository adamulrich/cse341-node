const mongoDB = require('../dbconnect');

async function returnData(req, res) {

    //get data
    const return_value = await getData();
    //return data
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.status(200).send(return_value);
}

async function getData() {
    
    const dbo = mongoDB.getDB().db("Contacts");
    const returnValue = await dbo.collection("contacts").find({}).toArray();
    return returnValue;
}

module.exports = { returnData, getData };
