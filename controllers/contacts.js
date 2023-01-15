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

async function createNewContact(req, res) {

    //get new contact data from request object
    const newUser = req.body;
    console.log(newUser);

    // create user in database
    const db = mongoDB.getDB().db("Contacts");
    db.collection("contacts").insertOne(newUser, (err, result) => {
        if (err) 
          return err;
        else 
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
            res.setHeader('Access-Control-Allow-Credentials', true);
            res.status(201).send(result);
        
      });

    //return data
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

async function updateContact(req, res) {

    //get id from request object
    const userId = new ObjectId(req.params.id);
    console.log(userId);
    
    //get new contact data from request object
    const updatedUser = req.body;
    console.log(updatedUser);

    //update contact
    const db = mongoDB.getDB().db("Contacts");
    db.collection("contacts").replaceOne({_id: userId}, updatedUser, (err, result) => {
        if (err) 
          return err;
        else 

            //return data
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
            res.setHeader('Access-Control-Allow-Credentials', true);
            res.status(204).send('');
    });
}

async function deleteContact(req, res) {

    //get id from request object
    const userId = new ObjectId(req.params.id);
    console.log(userId);
    
    //update contact
    const db = mongoDB.getDB().db("Contacts");
    db.collection("contacts").deleteOne({_id: userId}, (err, result) => {
        if (err) 
          return err;
        else 

            //return data
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
            res.setHeader('Access-Control-Allow-Credentials', true);
            res.status(200).send('');
    });
}

module.exports = { getContacts, getContact, createNewContact, updateContact, deleteContact };
