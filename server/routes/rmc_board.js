const express = require('express');
const User = require('../models/user');
const Rmc = require('../models/rmc');
const RmcBoard = require('../models/rmc_board');
const Sequelize = require('sequelize');

const router = express.Router();

router.post('/create', async (req, res, next) => {
    try{
        const comment = req.body.comment;
        const rmc_id = req.body.rmc_id;
        const gosok_id = req.body.gosok_id;

        await RmcBoard.create({
            comment: comment,
            rmc_id: rmc_id,
            gosok_id: gosok_id,
        });
    } catch (e){
        console.error(e);
        next(e);
    }
});

router.post('/getRmcBoard', async (req, res, next) => {
    try{
        console.log("[GET_RMC_BOARD]");
        const rmc_id = req.body.rmc_id;
        const boards = await RmcBoard.findAll({
            where: {
                rmc_id:rmc_id,
            },
            order: [
                ["create_date", "DESC"],
            ],
        });
        return res.send(boards);
    } catch(err){
        console.error(err);
        next(err);
    }
});

module.exports = router;
