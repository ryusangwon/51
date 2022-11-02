const Sequelize = require('sequelize');

module.exports = class Lecture_user extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            lecture_id: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            user_id: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            modelName: 'Lecture_user',
            tableName: 'lecture_users',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {}
};