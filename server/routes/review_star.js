const express = require('express');
const User = require('../models/user');
const Rmc = require('../models/rmc');
const ReviewStar = require('../models/review_star');

const router = express.Router();

router.get('/', async (req, res, next) => {
    console.log("[GET_REVIEW_STAR]");
    return res.send("DONE`");
});

router.post('/create', async (req, res, next) => {
    const {star} = req.params.body.star;
    const {lecture_id} = req.params.body.lecture_id;

    const ReviewStar = await ReviewStar.create({
        star: star,
        lecture_id: lecture_id,
    });
});


module.exports = router;
