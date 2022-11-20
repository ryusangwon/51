//const Sequelize = require('sequelize');
//
//module.exports = class Lecture_user extends Sequelize.Model {
//    static init(sequelize){
//        return super.init({
//            user_id: {
//                type: Sequelize.INTEGER,
//                primaryKey: true,
//                allowNull: false,
//            },
//            lecture_id: {
//                type: Sequelize.INTEGER,
//                primaryKey: true,
//                allowNull: false,
//            },
//        }, {
//            sequelize,
//            timestamps: false,
//            modelName: 'Lecture_user',
//            tableName: 'lecture_user',
//            paranoid: false,
//            charset: 'utf8',
//            collate: 'utf8_general_ci',
//        });
//    }
//    static associate(db) {
//        db.Lecture_user.belongsTo(db.Lecture, {foreignKey:'lecture_id', targetKey: 'id'});
//        db.Lecture_user.belongsTo(db.User, {foreignKey: 'user_id', targetKey: 'id'});
//    }
//};