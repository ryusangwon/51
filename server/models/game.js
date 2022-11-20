const Sequelize = require('sequelize');

module.exports = class Game extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        summonerName: {
          type: Sequelize.STRING(45),
          allowNull: true,
          unique: true,
        },
        encryptedSummonerId: {
          type: Sequelize.STRING(45),
          allowNull: true,
        },
        tier: {
          type: Sequelize.STRING(20),
          allowNull: true,
        },
        win: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        loss: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        position: {
          type: Sequelize.STRING(45),
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        modelName: 'Game',
        tableName: 'game',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
  static associate(db) {
    db.Game.hasMany(db.Game_champ, { foreignKey: 'game_id', sourceKey: 'id' });
    db.Game.belongsTo(db.User, { foreignKey: 'game_id', sourceKey: 'id' });
  }
};
