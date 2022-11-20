const express = require("express");
const Lecture = require("../models/lecture");

const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        console.log("[LECTURE]");
        res.send('Hello, Lecture');
    } catch(err){
        console.error(err);
        next(err);
    }
});

router.post('/newLecture', async (req, res, next) => {
    const {user_id, title, mento_description, lecture_description, lecture_time, price, start_time, menti_in} = req.body;
    try{
        console.log("[LECTURE_DESCRIPTION]");
        await Lecture.create({
            user_id,
            title,
            mento_description,
            lecture_description,
            lecture_time,
            price,
            start_time,
        });
        return res.redirect('/');
    } catch(err){
        console.error(err);
        next(err);
    }
});

router.get('/getLecture', async (req, res, next) => {
    try{
        console.log("[GET_LECTURE_DESCRIPTION]");
        lectures = Lecture.findAll({});
        return res.send(lectures);
    } catch(err){
        console.error(err);
        next(err);
    }
});

module.exports = router;