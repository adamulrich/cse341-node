const router = require('express').Router();
const dataController = require('../controllers/index');

/**
 * @swagger
 * /:
 *  get:
 *      summary: Heartbeat check.
 *      description: Heartbeat check.
 *      responses:
 *          200:
 *              description: heartbeat. 
 *              content:
 *                  text/css:
 *                      type: string
 */
router.get('/', dataController.getData);

module.exports = router;
