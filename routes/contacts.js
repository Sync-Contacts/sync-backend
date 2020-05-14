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

router.post('/:id', (request, response, next) => {
    const { id } = request.params;
    const {
        linked_user_id,
        contact_name,
        phone,
        email,
        contact_address,
        last_contact,
        contact_frq
    } = request.body;

    pool.query('INSERT INTO Contacts(id, linked_user_id, contact_name, phone, email, contact_address, last_contact, contact_frq) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', 
    [id,
    linked_user_id,
    contact_name,
    phone,
    email,
    contact_address,
    last_contact,
    contact_frq],
    (err, resp) => {
        if (err) return next(err);

        resp.redirect(`/contacts/${id}`)
    }
    );
})

module.exports = router;