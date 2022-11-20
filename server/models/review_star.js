const Sequelize = require('sequelize');

module.exports = class Review_star extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            star: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            create_date: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.NOW,
            },
            lecture_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
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
        db.Review_star.belongsTo(db.User, {foreignKey:'mento_id', targetKey: 'id'});
    }
};