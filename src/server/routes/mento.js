const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/register', async (req, res, next) => {
//    let mento = req.body.mento;
    const gosok_id = req.body.mento_id;

    try{
        let message;
        //        if (mento.mento === false){
        //            User.update({
        //                mento: true,
        //            }, {
        //                where: {id: mento_id},
        //            })
        //        } else{
        //            message = "Already registered";
        //            return res.send('message');
        //        }
        console.log("TEST");
        await User.update({
            mento: true,
        }, {
            where: {gosok_id: gosok_id}
        })
        message = "Register new mento";
        return res.send('message');
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;