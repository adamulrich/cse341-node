const router = require('express').Router();
const dataController = require('../controllers/index');

router.get('/',
    // #swagger.summary = 'heartbeat check'
    // #swagger.description = 'heartbeat check.'
    /* #swagger.responses[200] = {
            description: 'OK' }
    */
    dataController.getData);


module.exports = router;
