const express = require('express');
const User = require('../models/user');
const Rmc = require('../models/rmc');

const router = express.Router();

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
