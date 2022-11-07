const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.route('/signup')
.post(async (req, res, next) => {
    try{
        const user = await User.create({
            id: req.body.id,
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            mento: req.body.mento,
        });
        console.log(user);
        res.status(201).json(user);
    } catch(err){
        console.error(err);
        next(err);
    }
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
