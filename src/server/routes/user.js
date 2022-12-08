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
        if (authError) {
            console.error(authError);
            return next(authError);
        }
        if (!user){
            return res.redirect('/');
        }
        return req.login(user, (loginError) => {
            if (loginError) {
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect('/');
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

router.post('/getLecture', async (req, res) => {
    let id = req.body.id;
//    let id = 1;
    let query;
    const exUser = await User.findOne({where: {id: id}});
    console.log(exUser);
    if (exUser) {
        if (exUser.mento === true){
            query = 'SELECT * FROM lecture_user, lecture WHERE lecture_user.mento_id = (SELECT user.game_id FROM user where user.id=?) AND lecture.id = lecture_user.lecture_id';
            const result = await sequelize.query(query, {
                type: QueryTypes.SELECT,
                replacements: [id],
            });
            console.log(result);
            return res.send(result);
        } else{
            return res.send("no mento");
        }
    } else{
        return res.send("No User");
    }
});

module.exports = router;
