const express = require("express");
const bodyParser = require("body-parser");
const users = require('./routes/users')
const contacts = require('./routes/contacts')
const topics = require('./routes/topics')

const app = express();

app.use(bodyParser.json());
app.use('/users', users);
app.use('/contacts', contacts);
app.use('/topics', topics);

app.use((err, request, response, next) => {
    response.json(err)
})

module.exports = app;