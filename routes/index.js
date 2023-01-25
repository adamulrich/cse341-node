const router = require('express').Router();
const dataController = require('../controllers/index');

router.get('/', dataController.getData);

module.exports = router;
