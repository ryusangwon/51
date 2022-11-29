const Sequelize = require('sequelize');

module.exports = class Review_star extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            star: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            lecture_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            create_date: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.NOW,
            },
        }, {
            sequelize,
            timestamps: true,
            modelName: 'Review_star',
            tableName: 'review_star',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.Review_star.belongsTo(db.Lecture, {foreignKey:'lecture_id', targetKey: 'id'});
    }
};