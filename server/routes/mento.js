const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', async (req, res, next) => {
    let mento = req.params.body.mento;
    let mento_id = req.params.body.id;

    if (mento.mento = false){
        User.update({
            mento: true;
        }), {
            where: {id: mento_id};
        }
    }

    res.send('mento done');
});

module.exports = router;