// Create a GET request in your contacts route file that will return all of the documents in your contacts collection.


// Create another GET request in your contacts route file that will return a single document from your contacts collection where an id matches the id from a query parameter.

const router = require('express').Router();
const dataController = require('../controllers/contacts');

/**
 * @swagger
 *  components:
 *      schemas:
 *          newContact:
 *              type: object
 *              properties:
 *                  firstName: 
 *                      type: string
 *                  lastName: 
 *                      type: string
 *                  email: 
 *                      type: string
 *                  favoriteColor: 
 *                      type: string
 *                  birthday: 
 *                      type: string
 *          contact:
 *              type: object
 *              properties:
 *                  _id:
 *                      type: string
 *                  firstName: 
 *                      type: string
 *                  lastName: 
 *                      type: string
 *                  email: 
 *                      type: string
 *                  favoriteColor: 
 *                      type: string
 *                  birthday: 
 *                      type: string
 */


/**
 * @swagger
 * /contacts:
 *  get:
 *      summary: This api returns all the contacts in the mongoDB.
 *      description: This api returns all the contacts in the mongoDB.
 *      responses:
 *          200:
 *              description: contacts json
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schemas/contact'
 */
router.get('/', dataController.getContacts);

/**
 * @swagger
 * /contacts/{id}:
 *  get:
 *      summary: returns a contact based on id.
 *      description: returns a contact based on id.
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: guid required
 *            schema:
 *              type: string
 *      responses:
 *          200:
 *              description: contact json
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#components/schemas/contact'
 */
router.get('/:id', dataController.getContact);

/**
 * @swagger
 * /contacts:
 *  post:
 *      summary: creates a contact in the mongoDB.
 *      description: creates a contact in the mongoDB.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
  *      responses:
 *          201:
 *              description: none
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#components/schemas/newContact'
 */
router.post('/', dataController.createNewContact);


router.put("/:id", dataController.updateContact);

router.delete("/:id", dataController.deleteContact);

module.exports = router;
