const Sequelize = require('sequelize');

module.exports = class Rmc_board extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            rmc_id: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            comment: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            vote: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            create_date: {
                type: 'TIMESTAMPS',
                allowNull: true,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
        }, {
            sequelize,
            timestamps: false,
            modelName: 51,
            tableName: rmc_board,
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        })
    }
}