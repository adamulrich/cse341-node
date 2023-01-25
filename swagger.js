const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    version: '',      // by default: '1.0.0'
    title: 'CONTACTS REST API',        // by default: 'REST API'
    description: '',  // by default: ''
  },
  host: '',      // by default: 'localhost:3000'
  basePath: '',  // by default: '/'
  schemes: [],   // by default: ['http']
  consumes: [],  // by default: ['application/json']
  produces: [],  // by default: ['application/json']
  tags: [        // by default: empty Array
    {
      name: '',         // Tag name
      description: '',  // Tag description
    },
    // { ... }
  ],
  securityDefinitions: {},  // by default: empty object
  definitions: {},          // by default: empty object (Swagger 2.0)
  components: {},            // by default: empty object (OpenAPI 3.x)
  definitions: {
    newContact: {
      lastName: 'Bar',
      firstName: 'Foo',
      email: 'foo@bar.org',
      favoriteColor: 'paisley',
      birthday: '01/01/2000'
    },
    contact: {
      _id: '',
      lastName: 'Bar',
      firstName: 'Foo',
      email: 'foo@bar.org',
      favoriteColor: 'paisley',
      birthday: '01/01/2000'
    },
    insertionSuccess: {
      acknowledged: true,
      insertedId: "<24 char guid>"
    }

  }
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as: index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
