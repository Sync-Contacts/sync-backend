const { Pool } = require('pg');

const pool = new Pool({
    user: 'node_user',
    host: 'localhost',
    database: 'syncdb',
    password: 'node_password',
    port: 5432
});

module.exports = pool;