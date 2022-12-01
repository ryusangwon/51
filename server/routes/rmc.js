const express = require('express');
const User = require('../models/user');
const Rmc = require('../models/rmc');
const User_rmc = require('../models/user_rmc');

const router = express.Router();

const {QueryTypes} = require("sequelize");
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
    console.log("[GET_RMC]");
    Rmcs = await Rmc.findAll({});
    return res.send(Rmcs);
});

router.post('/create', async (req, res, next) => {
    const gosok_id = req.body.gosok_id;
    const title = req.body.title;
    const video_src = req.body.video_src;
    const content = req.body.content;

    const rmc = await Rmc.create({
        gosok_id: gosok_id,
        title: title,
        video_src: video_src,
        content: content,
    });
    res.send("DONE");
});

router.get('/getRmc', async (req, res, next) => {
    try{
        console.log("[GET_RMC]");
        rmcs = await Rmc.findAll({});
        return res.send(rmcs);
    } catch(err){
        console.error(err);
        next(err);
    }
});

router.post('/getRmcById', async (req, res, next) => {
    try{
        console.log("[GET_RMC]");
        const id = req.body.id;
        rmcById = await Rmc.findOne({where: {id: id}});
        return res.send(rmcById);
    } catch(err){
        console.error(err);
        next(err);
    }
});

router.post('/vote', async (req, res, next) => {
    try{
        console.log("[GET_vote]");
        const gosok_id = req.body.gosok_id;
        const rmc_id = req.body.rmc_id;
        const vote = req.body.vote; // 0이면 false(반대), 1이면 true(찬성)

        const exUser = await User_rmc.findOne({where: {gosok_id}});
        const exUserRmc = await User_rmc.findOne({where: {rmc_id}});

        if (exUser) {
            if (exUserRmc){
                return res.send('이미 투표하였습니다.');
            }else{
                await User_rmc.create({
                    gosok_id: gosok_id,
                    rmc_id: rmc_id,
                    vote: vote,
                });
            }
        } else{
            await User_rmc.create({
                        gosok_id: gosok_id,
                        rmc_id: rmc_id,
                        vote: vote,
            });
        }

        let query = `SELECT vote, count(vote) AS count FROM user_rmc WHERE rmc_id=? GROUP BY vote`;
        const result = await sequelize.query(query, {
            type: QueryTypes.SELECT,
            replacements: [rmc_id],
        });

        return res.send(result);
    } catch(err){
        console.error(err);
        next(err);
    }
});

router.post('/voteResult', async (req, res, next) => {
    try{
        console.log("[GET_vote_result]");
        const rmc_id = req.body.rmc_id;
        let query = `SELECT vote, count(vote) AS count FROM user_rmc WHERE rmc_id=? GROUP BY vote`;
        const result = await sequelize.query(query, {
            type: QueryTypes.SELECT,
            replacements: [rmc_id],
        });

        return res.send(result);
    } catch(err){
        console.error(err);
        next(err);
    }
});


router.put('/update', async (req, res, next) => {
  let id = req.body.id;
  let title = req.body.title;
  let content = req.body.content;

  Rmc.update(
    {
      title: title,
      content: content,
    },
    {
      where: { id: id },
    }
  );
  res.send('update done');
});


module.exports = router;
