const Sequelize = require('sequelize');

module.exports = class Lecture extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            user_id: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            description: {
                type: Sequelize.BLOB,
                allowNull: true,
            },
            room_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            start_time: {
                type: 'TIMESTAMPS',
                allowNull: true,
                // defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            }
        }, {
            sequelize,
            timestamps: false,
            modelName: 'Lecture',
            tableName: 'lecture',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {}
};