const mongoDB = require('../dbconnect');
const ObjectId = require('mongodb').ObjectId;

async function getContacts(req, res) {

    //get data
    const return_value = await getContactsFromDB();
    //return data
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.status(200).send(return_value);
}

async function getContact(req, res) {

    //get id from request object
    const userId = new ObjectId(req.params.id);
    console.log(userId);
    
    //get data
    const return_value = await getContactFromDB(userId);

    //return data
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.status(200).send(return_value);
}


async function getContactsFromDB() {    
    const dbo = mongoDB.getDB().db("Contacts");
    const returnValue = await dbo.collection("contacts").find({}).toArray();
    return returnValue;
}

async function getContactFromDB(userID) {

    const dbo = mongoDB.getDB().db("Contacts");
    const returnValue = await dbo.collection("contacts").find({ _id: userID }).toArray();
    return returnValue;
}

module.exports = { getContacts, getContact };
