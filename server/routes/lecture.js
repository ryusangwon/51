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

router.post('/room', async (req, res, next) => {
    const {id, user_id, description, room_id, price} = req.body;
    try{
        console.log("[LECTURE_DESCRIPTION]");
        await Lecture.create({
            id,
            user_id,
            description,
            room_id,
            price,
        });
        return res.redirect('/');
    } catch(err){
        console.error(err);
        next(err);
    }
});