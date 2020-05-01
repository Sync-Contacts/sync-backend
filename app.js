const express = require("express");
const app = express();
const pool = require('./db')

app.get('/users', (request, response) => {
    pool.query('SELECT * FROM AppUsers', (err, resp) => {
        if (err) return console.log(err);

        console.log(resp.rows)
    });
});

module.exports = app;