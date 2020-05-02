const express = require("express");
const app = express();
const pool = require('./db')

//next is passing along to next piece of middlewear to handle whatever you send it
app.get('/users', (request, response, next) => {
    pool.query('SELECT * FROM AppUsers', (err, resp) => {
        if (err) return next(err);

        response.json(resp.rows)
    });
});

//return all contacts by user
app.get('/contacts/:id', (request, response, next) => {
    const { id } = request.params;

    pool.query('SELECT * FROM Contacts WHERE linked_user_id = $1', [id], (err, resp) => {
        if (err) return next(err);

        response.json(resp.rows)
    });
});

//return all topics by contact ID 
app.get('/topics/:id', (request, response, next) => {
    const { id } = request.params;

    pool.query('SELECT * FROM Topics WHERE contact_id = $1', [id], (err, resp) => {
        if (err) return next(err);

        response.json(resp.rows)
    });
});

//going to need to joins for tags

app.use((err, request, response, next) => {
    response.json(err)
})

module.exports = app;