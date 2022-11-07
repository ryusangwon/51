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
            gid: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            tier: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            champion: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            win_rate: {
                type: Sequelize.DOUBLE,
                allowNull: true,
            },
            position: {
                type: Sequelize.STRING(45),
                allowNull: true,
            }
        }, {
            sequelize,
            timestamps: false,
            modelName: 'Game',
            tableName: 'game',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {}
};