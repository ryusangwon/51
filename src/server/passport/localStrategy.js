const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'id',
        passwordField: 'password',
    }, async (id, password, done) => {
        try{
            const exUser = await User.findOne({
                where: {id}
            });
            if (exUser) {
                if (password === exUser.password){
                    done(null, exUser);
                } else{
                    done(null, false, {message: '비밀번호가 일치하지 않습니다.'});
                }

            } else{
                done(null, false, {message: '가입되지 않은 회원'});
            }
        } catch (error) {
            console.error(error);
            done(error);
        }
    }));
}