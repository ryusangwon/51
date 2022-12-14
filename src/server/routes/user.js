const express = require("express");
const passport = require('passport');
const User = require("../models/user");
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');
const Sequelize = require("sequelize");
const {QueryTypes} = require("sequelize");
const router = express.Router();

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
        console.log("[USER]");
        res.send('Hello, User');
    } catch(err){
        console.error(err);
        next(err);
    }
}); 

router.post('/signup', async (req, res, next) => {
    const {gosok_id, name, password, email, mento} = req.body;
    try{
        console.log("[SIGNUP]");
        const exUser = await User.findOne({where: {email}});
        if (exUser) {
            return res.redirect('/signup?error=exist');
        }
        await User.create({
            gosok_id,
            name,
            password,
            email,
            mento,
        });
        return res.redirect('/');
    } catch(err){
        console.error(err);
        next(err);
    }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
        console.log("authError", authError);
        console.log("user", user);
        console.log('info', info);
        if (authError) {
            console.error(authError);
            return next(authError);
        }
        if (!user){
            return res.send("로그인 실패.");
        }
        return req.login(user, async (loginError) => {
            console.log("check");
            if (loginError) {
                console.error(loginError);
                return next(loginError, "로그인 안됨");
            }
            const user = await User.findOne({where: {gosok_id: info}});
            console.log('로그인 되는 아이디 정보', user['dataValues']);
            return res.send(user['dataValues']);
        });

    })(req, res, next);
});


router.get('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    res.redirect('/');
});


router.post('/ismento', async (req, res) => {
    const id = req.body.id;
    const exUser = await User.findOne({where: {gosok_id: id}});
    if (exUser) {
        if (exUser.mento === true){
            return res.send("mento");
        } else{
            return res.send("no mento");
        }
    } else{
        return res.send("No User");
    }
});

router.post('/chargePoint', async (req, res) => {
    const gosok_id = req.body.gosok_id;
    const point = req.body.point;
    const user = await User.findOne({where:{gosok_id: gosok_id}});
    let current_point = user['point'];
    current_point = parseInt(point) + parseInt(current_point);
    console.log(current_point);
    let now = current_point;
    await User.update({point: current_point}, {where: {gosok_id: gosok_id}});

    return res.send(String(now));
});

module.exports = router;
