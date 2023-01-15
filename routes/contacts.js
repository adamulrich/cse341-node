// Create a GET request in your contacts route file that will return all of the documents in your contacts collection.


// Create another GET request in your contacts route file that will return a single document from your contacts collection where an id matches the id from a query parameter.

const router = require('express').Router();
const dataController = require('../controllers/contacts');

router.get('/', dataController.getContacts);
router.get('/:id', dataController.getContact);
router.post('/', dataController.createNewContact);
router.put("/:id", dataController.updateContact);
router.delete("/:id", dataController.deleteContact);

module.exports = router;
