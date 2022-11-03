const { User } = require('./models');
User.create({
  name: 'test123',
  password: 't',
  email: 'test123@gmail.com',
  mento: false,
  game_id: 3,
})

User.findAll({});