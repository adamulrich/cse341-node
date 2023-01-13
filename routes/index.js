const router = require('express').Router();
const dataController = require('../controllers');

router.get('/', dataController.returnData);

module.exports = router;
