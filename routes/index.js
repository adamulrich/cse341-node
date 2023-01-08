const router = require('express').Router();
const dataController = require('../controllers');

router.get('/', dataController.displayData);

module.exports = routes;
