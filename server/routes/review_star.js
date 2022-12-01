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
    const star = req.body.star;
    const lecture_id = req.body.lecture_id;

    const ReviewStar = await ReviewStar.create({
        star: star,
        lecture_id: lecture_id,
    });
});

router.get('/getStar', async (req, res, next) => {
    const lecture_id = req.body.lecture_id;
    const reviewStar = await ReviewStar.findOne({
        where: {lecture_id: lecture_id}
    });

    return res.send(reviewStar);
});


module.exports = router;
