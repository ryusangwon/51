const Sequelize = require('sequelize');

module.exports = class Review_star extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            mento_id: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            star: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            create_date: {
                type: 'TIMESTAMPS',
                allowNull: true,
                // defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
        }, {
            sequelize,
            timestamps: false,
            modelName: 'Review_star',
            tableName: 'review_star',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {}
};