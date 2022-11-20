const express = require("express");
const Lecture = require("../models/lecture");
const Game = require("../models/game");
const User = require("../models/user");
const Lecture_user = require("../models/user_lecture");

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
        lectures = await Lecture.findAll({});
        return res.send(lectures);
    } catch(err){
        console.error(err);
        next(err);
    }
});

router.post('/existMenti', async (req, res, next) => {
    try{
        const {id} = req.body;
        console.log("[EXISTMENTI]");
        console.log(id);
        const exLecture = await Lecture.findOne({where: {id: id}});
        if (exLecture) {
            await Lecture.update({
                menti_in: true,
            }, {
                where: {
                    id: id
                },
            })
            return res.redirect('/signup?error=exist');
        } else {
            return res.send("NO LECTURE");
        }
        return res.send("DONE");
    } catch(err){
        console.error(err);
        next(err);
    }
});

router.get('/getUserLecture', async (req, res, next) => {
    try{
        console.log("[GET_USER_LECTURE]");
        const {id} = req.body.id;
        //let id = "mento_test";

        userLectures = await Lecture_user.findAll({
            where: {
                user_id: id
            }
        });
        return res.send(userLectures);
    } catch(err){
        console.error(err);
        next(err);
    }
});

module.exports = router;