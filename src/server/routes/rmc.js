const express = require('express');
const User = require('../models/user');
const Rmc = require('../models/rmc');

const router = express.Router();

router.post('/create', async (req, res, next) => {
    const {id} = req.params.body.id;
    const {user_id} = req.params.body.user_id;
    const {title} = req.params.body.title;
    const {content} = req.params.body.content;

  const rmc = await Rmc.create({
    id: id,
    user_id: user_id,
    title: title,
    content: content,
  });
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
