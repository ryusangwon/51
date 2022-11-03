const { User } = require('./models');
User.create({
  lid: 'testid1',
  name: 'name1',
  password: 'pw1',
  email: 'test1@gmail.com',
  mento: false,
  game_id: 3,
})

User.findAll({});
