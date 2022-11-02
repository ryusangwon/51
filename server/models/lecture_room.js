const Sequelize = require('sequelize');

module.exports = class Lecture_room extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            lecture_id: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            session_id: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            token_id: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            modelName: 'Lecture_room',
            tableName: 'lecture_rooms',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {}
};