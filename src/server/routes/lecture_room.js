const express = require("express");
const LectureRoom = require("../models/lecture_room");
const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        console.log("[LECTURE_ROOM]");
        res.send('Hello, Lecture Room');
    } catch(err){
        console.error(err);
        next(err);
    }
});

router.post('/room', async (req, res, next) => {
    const {id, session_id, token_id} = req.body;
    try{
        console.log("[LECTURE_ROOM]");
        await LectureRoom.create({
            id,
            session_id,
            token_id,
        });
        return res.redirect('/');
    } catch(err){
        console.error(err);
        next(err);
    }
});

module.exports = router;