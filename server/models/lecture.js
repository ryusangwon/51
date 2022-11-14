const Sequelize = require('sequelize');

module.exports = class Lecture extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            user_id: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            description: {
                type: Sequelize.BLOB,
                allowNull: true,
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
//            start_time: {
//                type: Sequelize.DATE,
//                allowNull: true,
//                defaultValue: Sequelize.NOW,
//            }
        }, {
            sequelize,
            timestamps: true,
            modelName: 'Lecture',
            tableName: 'lecture',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.Lecture.hasMany(db.Lecture_room, { foreignKey: 'lecture_id', sourceKey: 'id'});
        db.Lecture.hasMany(db.Lecture_user, { foreignkey: 'lecture_id', sourceKey: 'id'});
        db.Lecutre.belongsTo(db.User, {foreignKey: 'user_id', targetKey: 'id'});
    }
};