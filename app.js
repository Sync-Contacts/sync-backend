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

app.use((err, request, response, next) => {
    response.json(err)
})

module.exports = app;