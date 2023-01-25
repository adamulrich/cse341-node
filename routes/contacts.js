// Create a GET request in your contacts route file that will return all of the documents in your contacts collection.


// Create another GET request in your contacts route file that will return a single document from your contacts collection where an id matches the id from a query parameter.

const router = require('express').Router();
const dataController = require('../controllers/contacts');

router.get('/',
    // #swagger.summary = 'returns all the contacts in the mongoDB'
    // #swagger.description = 'returns all the contacts in the mongoDB'
    /* #swagger.responses[200] = {
            description: 'contacts json',
            schema: [{ $ref: '#/definitions/contact' }]
             }
    }
    */
    dataController.getContacts);

router.get('/:id', 
    // #swagger.summary = 'returns a contact from the db based on ID.'
    // #swagger.description = 'returns a contact from the db based on ID.'
    // #swagger.parameters['id'] = { description: 'Contact Id' }
    /* #swagger.responses[200] = {
            description: 'contacts json',
            schema: { $ref: '#/definitions/contact' }
             }
    }
    */
    dataController.getContact);

router.post('/', 
    // #swagger.summary = 'creates a contact in the db'
    // #swagger.description = 'creates a contact in the db'
    /* #swagger.responses[201] = {
            description: 'OK',
            schema: { $ref: '#definitions/insertionSuccess' }
             }
    }
    */
    /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Add a user',
                schema: { $ref: '#/definitions/newContact' }
        } */
    dataController.createNewContact);

router.put("/:id", 
    // #swagger.summary = 'replaces a contact in the db based on ID'
    // #swagger.description = 'replaces a contact in the db based on ID'
    /* #swagger.responses[204] = {
            description: 'OK',
             }
    }
    */
    /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Replace contact info',
                schema: { $ref: '#/definitions/newContact' }
        } */

    dataController.updateContact);

router.delete("/:id", 
    // #swagger.summary = 'deletes a contact from the db based on ID.'
    // #swagger.description = 'deletes a contact from the db based on ID.'
    // #swagger.parameters['id'] = { description: 'Contact Id' }
    /* #swagger.responses[200] = {
            description: 'OK',
             }
    }
    */
    dataController.deleteContact);

module.exports = router;
