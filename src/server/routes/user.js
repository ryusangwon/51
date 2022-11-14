const express = require("express");
const passport = require('passport');
const User = require("../models/user");
const {isLoggedIn, isNowLoggedIn, isNotLoggedIn} = require('./middlewares');
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
    const {id, name, password, email, mento} = req.body;
    try{
        console.log("[SIGNUP]");
        const exUser = await User.findOne({where: {email}});
        if (exUser) {
            return res.redirect('/signup?error=exist');
        }
        await User.create({
            id,
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

//router.post('/login', async (req, res, next) => {
//    const {id, password} = req.body;
//    const logUser = await User.findOne({where: {id}});
//    if (logUser){
//        if (!password == logUser.password){
//            return redirect('/loginError?error=loginError');
//        }else{
//            return res.redirect('/');
//        }
//    } else{
//        res.send('no user');
//    }
//
//});

router.get('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    res.redirect('/');
})

// const { User } = require('./models');
// User.create({
//   id: 'testid2',
//   name: 'name2',
//   password: 'pw2',
//   email: 'test2@gmail.com',
//   mento: false,
//   game_id: 4,
// })


module.exports = router;
