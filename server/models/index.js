const Sequelize = require('sequelize');
const User = require('./user');
// const Game = require('./game');
// const Lecture = require('./lecture');
// const Lecture_room = require('./lecture_room');
// const Lecture_user = require('./lecture_user');
// const Review_star = require('./review_star');
// const Rmc = require('./rmc');
// const Rmc_board = require('./rmc_board');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = User;
// db.Game = Game;
// db.Lecture = Lecture;
// db.Lecture_room = Lecture_room;
// db.Lecture_user = Lecture_user;
// db.Review_star = Review_star;
// db.Rmc = Rmc;
// db.Rmc_board = Rmc_board;

User.init(sequelize)
// // User.associate(db);

// Game.init(sequelize)
// // Game.associate(db);

// Lecture.init(sequelize)
// // Lecture.associate(db);

// Lecture_room.init(sequelize)
// // Lecture_room.associate(db);

// Lecture_user.init(sequelize)
// // Lecture_user.associate(db);

// Review_star.init(sequelize)
// // Review_star.associate(db);

// Rmc.init(sequelize)
// // Rmc.associate(db);

// Rmc_board.init(sequelize)
// // Rmc_board.associate(db);

module.exports = db;