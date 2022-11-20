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
            title: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            mento_description: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            lecture_description: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            lecture_time: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            start_time: {
                type: Sequelize.DATE,
                allowNull: true,
//                defaultValue: Sequelize.NOW,
            },
            menti_in: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
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
    static associate(db) {
        db.Lecture.hasMany(db.Lecture_room, { foreignKey: 'lecture_id', sourceKey: 'id'});
        db.Lecture.hasMany(db.Lecture_user, { foreignkey: 'lecture_id', sourceKey: 'id'});
        db.Lecutre.belongsTo(db.User, {foreignKey: 'user_id', targetKey: 'id'});
    }
};