const express = require('express');
const User = require('../models/user');
const Rmc = require('../models/rmc');
const ReviewStar = require('../models/review_star');

const router = express.Router();

const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        config
        );


router.get('/', async (req, res, next) => {
    console.log("[GET_REVIEW_STAR]");
    return res.send("DONE`");
});

router.post('/create', async (req, res, next) => {
    console.log(req.body.lecture_id);
    const star = req.body.star;
    const user_id = req.body.user_id;

    await ReviewStar.create({
        star: star,
        user_id: user_id,
    });
    return res.send("Thanks for review");
});

router.get('/getStar', async (req, res, next) => {
    const user_id = req.body.user_id;
    let query = `SELECT AVG(star) FROM review_star WHERE lecture_id=?`;
    const reviewStar = await sequelize.query(query, {
        type: QueryTypes.SELECT,
        replacements: [user_id],
    });

    return res.send(reviewStar);
});


module.exports = router;