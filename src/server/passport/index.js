const passport = require('passport');
const local = require('./localStrategy');
const User = require('../models/user');

module.exports = () => {
    passport.serializeUser((user, done) => { // 로그인 시 실행되어서 req.session 객체에 데이터 저장
        done(null, user.id); // 세션에 id만 저장
    })
    passport.deserializeUser((id, done) => {
        User.findOne({
            where: {id}
        })
        .then(user => done(null, user))
        .catch(err => done(err));
    });

    local()
};