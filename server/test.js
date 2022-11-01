const { User } = require('./models/user');
User.create({
    name: 'ryu',
    password: '1234',
    email: 'test@gmail.com',
    mento: false,
    game_id: 1,
});