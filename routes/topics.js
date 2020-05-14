const { Router } = require('express');

const router = Router();
const pool = require('./db')

//return all topics by contact ID 
app.get('/:id', (request, response, next) => {
    const { id } = request.params;

    pool.query('SELECT * FROM Topics WHERE contact_id = $1', [id], (err, resp) => {
        if (err) return next(err);

        response.json(resp.rows)
    });
});

//going to need to joins for tags

module.exports = router;