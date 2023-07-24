const pg = require('pg');
const express = require('express');
const dbData = require('../dbInfo');

const router = express.Router();

router.get('/', async(req, res, next) => {
    
    const client = new pg.Client(dbData);
    await client.connect();
    
    const result = await client.query("SELECT * FROM test");

    res.send(result.rows);
});

module.exports = router;