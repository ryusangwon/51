const express = require('express');
const User = require('../models/user');
const Rmc = require('../models/rmc');
const RmcBoard = require('../models/rmc_board');
const Sequelize = require('sequelize');

const router = express.Router();

router.post('/create', async (req, res, next) => {
    const {id} = req.params.body.id;
    const {user_id} = req.params.body.user_id;
    const {title} = req.params.body.title;
    const {content} = req.params.body.content;

    const RmcBoard = await Rmc.create({
        id: id,
        comment: comment,
        vote: vote,
        create_date: Sequelize.NOW,
        rmc_id: rmc_id,
        user_id: user_id,
    });
});

module.exports = router;
