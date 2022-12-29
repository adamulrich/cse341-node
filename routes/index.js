const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Adam Ulrich');
})

module.exports = routes;
