const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT

app.use('/',require('./routes'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
