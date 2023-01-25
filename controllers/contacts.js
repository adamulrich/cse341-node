const mongoDB = require('../dbconnect');
const ObjectId = require('mongodb').ObjectId;


// gets all contacts from database
async function getContacts(req, res) {

    //get data
    const dbo = mongoDB.getDB().db("Contacts");
    const result = await dbo.collection("contacts").find({}).toArray();
    setHeaders(res);
    res.status(200).send(result);
}


// gets one contact from database depending on id provided
async function getContact(req, res) {

    //get id from request object
    const userId = new ObjectId(req.params.id);
    
    //get data
    const dbo = mongoDB.getDB().db("Contacts");
    dbo.collection("contacts").findOne({ _id: userId }, (err, result) => {
        if (err) 
          return err;
        else 
            //return data
            setHeaders(res);
            res.status(200).send(result);
    });
}

// creates a new contact with the data provided
async function createNewContact(req, res) {

    //get new contact data from request object
    const newUser = req.body;

    // create user in database
    const db = mongoDB.getDB().db("Contacts");
    db.collection("contacts").insertOne(newUser, (err, result) => {
        if (err) 
          return err;
        else 
            setHeaders(res);
            res.status(201).send(result);
    });

    //return data
}

// replaces a contact based on the id provided
async function updateContact(req, res) {

    //get id from request object
    const userId = new ObjectId(req.params.id);
    
    //get new contact data from request object
    const updatedUser = req.body;

    //update contact
    const db = mongoDB.getDB().db("Contacts");
    db.collection("contacts").replaceOne({_id: userId}, updatedUser, (err, result) => {
        if (err) 
          return err;
        else 
            //return data
            setHeaders(res);
            res.status(204).send('');
    });
}


// deletes a contact based on the id provided
async function deleteContact(req, res) {

    //get id from request object
    const userId = new ObjectId(req.params.id);
    
    //update contact
    const db = mongoDB.getDB().db("Contacts");
    db.collection("contacts").deleteOne({_id: userId}, (err, result) => {
        if (err) 
          return err;
        else 
            //return data
            setHeaders(res);
            res.status(200).send('');
    });
}


// sets the headers for the response
function setHeaders(res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Z-Key');
    res.setHeader('Access-Control-Allow-Credentials', true);
    
}

module.exports = { getContacts, getContact, createNewContact, updateContact, deleteContact };
