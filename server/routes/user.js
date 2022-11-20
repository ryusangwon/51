const express = require("express");
const passport = require('passport');
const User = require("../models/user");
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');
const router = express.Router();

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
})

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
})


router.post('/ismenti', async (req, res) => {
    let id = req.body.id;
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
})

module.exports = router;
