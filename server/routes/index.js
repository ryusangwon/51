const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        res.send('Hello, Express');
    } catch(err){
        console.error(err);
        next(err);
    }
});

module.exports = router;