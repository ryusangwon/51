const Sequelize = require('sequelize');

module.exports = class User_lecture extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            menti_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            lecture_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            in_progress: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
                defaultValue: '1',
            }
        }, {
            sequelize,
            timestamps: false,
            modelName: 'User_lecture',
            tableName: 'user_lecture',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.User_lecture.belongsTo(db.User, {foreignKey: 'user_id', targetKey: 'id'});
        db.User_lecture.belongsTo(db.Lecture, {foreignKey:'lecture_id', targetKey: 'id'});
    }
};