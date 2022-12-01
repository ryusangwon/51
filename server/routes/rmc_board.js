const express = require('express');
const User = require('../models/user');
const Rmc = require('../models/rmc');
const RmcBoard = require('../models/rmc_board');
const Sequelize = require('sequelize');

const router = express.Router();

router.post('/create', async (req, res, next) => {

    const comment = req.body.comment;
    const rmc_id = req.body.rmc_id;
    const gosok_id = req.body.gosok_id;

    const RmcBoard = await RmcBoard.create({
        comment: comment,
        rmc_id: rmc_id,
        create_date: Sequelize.NOW,
        gosok_id: gosok_id,
    });
});

module.exports = router;
