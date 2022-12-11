const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'id', // req.body.id
        passwordField: 'password',
    }, async (id, password, done) => {
        try{
            const exUser = await User.findOne({
                where: {gosok_id:id}
            });
            console.log("DD", id);
            console.log("D", exUser);
            console.log("DD", password);
//            console.log("DDDDD", exUser['password']);
            if (exUser) {
                if (password === exUser.password){
                    done(null, exUser, gosok_id);
                } else{
                    console.log("틀려");
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