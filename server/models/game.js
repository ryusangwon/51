const Sequelize = require('sequelize');

module.exports = class Game extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            summonerName: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            tier: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            rank: {
                type: Sequelize.STRING(5),
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
            champion: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            position: {
                type: Sequelize.STRING(45),
                allowNull: true,
            }
        }, {
            sequelize,
            timestamps: true,
            modelName: 'Game',
            tableName: 'game',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {}
};