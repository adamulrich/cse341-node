const router = require('express').Router();
const dataController = require('../controllers/contacts');

router.get('/contacts', dataController.getContacts);
router.get('/contact', dataController.getContact);

module.exports = router;
