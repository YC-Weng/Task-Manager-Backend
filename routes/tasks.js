const pg = require('pg');
const express = require('express');
const router = express.Router();

const dbData = {
    host:'dpg-ciukc8dgkuvoig8ms4k0-a',
    port:5432,
    database:'db1_lucm',
    user:'yc_weng',
    password:'CwvqIIrTMNiSetLTLeXm3GAOqLfPMeYT'
};

router.get('/', async(req, res, next) => {

    const client = new pg.Client(dbData);
    await client.connect();
    
    const result = await client.query("SELECT * FROM test");

    res.send(result.rows);
});

module.exports = router;