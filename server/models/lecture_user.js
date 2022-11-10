const Sequelize = require('sequelize');

module.exports = class Lecture_user extends Sequelize.Model {
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
            user_id: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: true,
            modelName: 'Lecture_user',
            tableName: 'lecture_user',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.Lecture_user.belongsTo(db.Lecture, {foreignKey:'lecture_id', targetKey: 'id'});
        db.Lecture_user.belongsTo(db.User, {foreignKey: 'user_id', targetKey: 'id'});
    }
};