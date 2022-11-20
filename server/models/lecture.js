const Sequelize = require('sequelize');

module.exports = class Lecture extends Sequelize.Model {
    static init(sequelize){
        return super.init({
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
            room_id: {
                type: Sequelize.INTEGER,
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
        db.Lecture.belongsTo(db.Lecture_room, {
            foreignKey: 'room_id',
            targetKey: 'id',
        });
        db.Lecture.belongsTo(db.Review_star, {foreignKey: 'lecture_id', targetKey: 'id'});
        db.Lecture.belongsToMany(db.User, {through: 'UserLecture'});
    }
};