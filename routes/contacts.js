const { Router } = require('express');

const router = Router();
const pool = require('./db')

//return all contacts by user
router.get('/:id', (request, response, next) => {
    const { id } = request.params;

    pool.query('SELECT * FROM Contacts WHERE linked_user_id = $1', [id], (err, resp) => {
        if (err) return next(err);

        response.json(resp.rows)
    });
});

module.exports = router;