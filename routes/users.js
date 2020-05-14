const { Router } = require('express');

const router = Router();
const pool = require('./db')

//next is passing along to next piece of middlewear to handle whatever you send it
router.get('/', (request, response, next) => {
    pool.query('SELECT * FROM AppUsers', (err, resp) => {
        if (err) return next(err);

        response.json(resp.rows)
    });
});

module.exports = router;