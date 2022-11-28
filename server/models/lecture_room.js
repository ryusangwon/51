const Sequelize = require('sequelize');

module.exports = class Lecture_room extends Sequelize.Model {
    static init(sequelize){
        return super.init({
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
            tableName: 'lecture_room',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.Lecture_room.hasOne(db.Lecture, {foreignKey:'room_id', sourceKey: 'id'});
    }
};