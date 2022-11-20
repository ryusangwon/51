const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        gosok_id: {
          type: Sequelize.STRING(20),
          allowNull: true,
        },
        name: {
          type: Sequelize.STRING(20),
          allowNull: true,
        },
        password: {
          type: Sequelize.STRING(20),
          allowNull: true,
        },
        email: {
          type: Sequelize.STRING(45),
          allowNull: false,
          unique: true,
        },
        mento: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
        },
        game_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: 'User',
        tableName: 'user',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Rmc, { foreignKey: 'user_id', sourceKey: 'id' });
    db.User.hasMany(db.Rmc_board, { foreignKey: 'user_id', sourceKey: 'id' });
    db.User.belongsTo(db.Game, {foreignKey: 'game_id', targetKey: 'id'});
    db.User.belongsToMany(db.User, {through: 'UserLecture'});
  }
};
