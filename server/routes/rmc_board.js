const express = require('express');
const User = require('../models/user');
const Rmc = require('../models/rmc');
const RmcBoard = require('../models/rmc_board');
const Sequelize = require('sequelize');

const router = express.Router();

router.post('/create', async (req, res, next) => {
    const id = req.body.id;
    const gosok_id = req.body.gosok_id;
    const title = req.body.title;
    const content = req.body.content;

    const RmcBoard = await Rmc.create({
        id: id,
        comment: comment,
        vote: vote,
        create_date: Sequelize.NOW,
        rmc_id: rmc_id,
        gosok_id: gosok_id,
    });
});

module.exports = router;
