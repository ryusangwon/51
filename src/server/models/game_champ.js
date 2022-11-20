const Sequelize = require('sequelize');

module.exports = class Game_champ extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        game_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        champion: {
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
    db.Game_champ.belongsTo(db.Game, { foreignKey: 'game_id', targetKey: 'id' });
  }
};
