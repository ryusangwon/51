const Sequelize = require('sequelize');

module.exports = class Lecture_room extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            lecture_id: {
                type: Sequelize.INTEGER,
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
            tableName: 'lecture_room',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.Lecture_room.belongsTo(db.Lecture, {foreignKey:'user_id', targetKey: 'id'});
    }
};