const Sequelize = require('sequelize');

module.exports = class User_rmc extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            gosok_id: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            rmc_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            vote: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            modelName: 'User_rmc',
            tableName: 'user_rmc',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

};