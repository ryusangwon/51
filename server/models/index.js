const Sequelize = require('sequelize');
const User = require('./user');
const Game = require('./game');
const Game_champ = require('./game_champ');
const Lecture = require('./lecture');
const Lecture_room = require('./lecture_room');
const Review_star = require('./review_star');
const Rmc = require('./rmc');
const Rmc_board = require('./rmc_board');
const User_rmc = require('./user_rmc');
const User_lecture = require('./user_lecture');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;

db.User = User;
db.Game = Game;
db.Game_champ = Game_champ;
db.Lecture = Lecture;
db.Lecture_room = Lecture_room;
db.Review_star = Review_star;
db.Rmc = Rmc;
db.Rmc_board = Rmc_board;
db.User_rmc = User_rmc;
db.User_lecture = User_lecture;

User.init(sequelize);

Game.init(sequelize);

Game_champ.init(sequelize);

Lecture.init(sequelize);

Review_star.init(sequelize);

Rmc.init(sequelize);

User_rmc.init(sequelize);

User_lecture.init(sequelize);

Rmc_board.init(sequelize)

User.associate(db);

Game.associate(db);

Lecture.associate(db);

Review_star.associate(db);

Rmc.associate(db);

Rmc_board.associate(db);

module.exports = db;
