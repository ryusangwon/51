const express = require("express");
const Lecture = require("../models/lecture");
const Game = require("../models/game");
const User = require("../models/user");
const Lecture_user = require("../models/user_lecture");
const {QueryTypes} = require("sequelize");
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
    try{
        console.log("[LECTURE]");
        res.send('Hello, Lecture');
    } catch(err){
        console.error(err);
        next(err);
    }
});

router.post('/newLecture', async (req, res, next) => {
    const {id, title, mento_description, lecture_description, lecture_time, price, start_time, menti_in, mento_id} = req.body;
    try{
        console.log("[LECTURE_DESCRIPTION]");
        await Lecture.create({
            id,
            title,
            mento_description,
            lecture_description,
            lecture_time,
            price,
            start_time,
        });

        await Lecture_user.create({
            lecture_id: id,
            mento_id: mento_id,
        });

        return res.redirect('/');
    } catch(err){
        console.error(err);
        next(err);
    }
});

router.get('/getLecture', async (req, res, next) => {
    try{
        // 리뷰 업데이트
        let query = `SELECT lecture_id, AVG(star) as avg FROM review_star GROUP BY lecture_id;`;
        const reviewStar = await sequelize.query(query, {
            type: QueryTypes.SELECT,
        });
        console.log(reviewStar);
        console.log("length:", reviewStar.length);
        console.log("lecture_id:", reviewStar[0]['lecture_id']);
        console.log("reviewStar:", reviewStar['avg']);
        for (let i=0; i < reviewStar.length; i++){
            console.log(reviewStar[i]['lecture_id'], ":", reviewStar[i]['avg']);

            await Lecture.update({
                average: reviewStar[i]['avg']}, {
                where: {
                    id: reviewStar[i]['lecture_id'],
                }
            })
        }

        // 멘토 정보 보내주기
        query = "SELECT * FROM user_lecture LEFT JOIN lecture ON user_lecture.lecture_id=lecture.id LEFT JOIN user ON user_id=user.id LEFT JOIN game ON user.game_id=game.id";
        const results = await sequelize.query(query, {
            type: QueryTypes.SELECT,
        });

        console.log("[GET_LECTURE_DESCRIPTION]");
        return res.send(results);
    } catch(err){
        console.error(err);
        next(err);
    }
});

router.post('/existMenti', async (req, res, next) => {
    try{
        const id = req.body;
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
    } catch(err){
        console.error(err);
        next(err);
    }
});

//router.get('/getUserLecture', async (req, res, next) => {
//    try{
//        console.log("[GET_USER_LECTURE]");
////        const {id} = req.body.id;
//        let id = "mento_test";
//
//        userLectures = await Lecture_user.findAll({
//            where: {
//                user_id: id
//            }
//        });
//        return res.send(userLectures);
//    } catch(err){
//        console.error(err);
//        next(err);
//    }
//});

router.post('/getLectureByPosition', async (req, res, next) => {
    try{
        const position = req.body.position;
//        let position = '미드';
        let query = `SELECT * FROM lecture WHERE id IN (SELECT lecture_id FROM user_lecture WHERE user_id = (SELECT id FROM user WHERE game_id = (SELECT id FROM game WHERE game.position=?)))`;
        const result = await sequelize.query(query, {
            type: QueryTypes.SELECT,
            replacements: [position],
        });
        console.log("test", result);
        return res.send(result);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.get('/getLectureByStar', async (req, res, next) => {
    try{
        let query = `SELECT lecture_id, AVG(star) FROM review_star GROUP BY lecture_id ORDER BY AVG(star) desc`;
        const result = await sequelize.query(query);
        console.log("test", result);
        return res.send(result);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;