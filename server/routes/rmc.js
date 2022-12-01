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
    const {user_id} = req.body.user_id;
    const {title} = req.body.title;
    const {video_src} = req.body.video_src;
    const {content} = req.body.content;

    const rmc = await Rmc.create({
        user_id: user_id,
        title: title,
        video_src: video_src,
        content: content,
    });
    res.send("DONE");
});


router.put('/update', async (req, res, next) => {
  let id = req.params.body.id;
  let title = req.params.body.title;
  let content = req.params.body.content;

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
