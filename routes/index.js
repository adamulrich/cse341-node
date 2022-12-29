const routes = require('express').Router();
const dataController = require('../controllers');

routes.get('/', dataController.displayData);

module.exports = routes;
