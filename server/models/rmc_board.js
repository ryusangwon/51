const Sequelize = require('sequelize');

module.exports = class Rmc_board extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            comment: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            vote: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            create_date: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.NOW,
            },
            rmc_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: true,
            modelName: 'Rmc_board',
            tableName: 'rmc_board',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.Rmc.belongsTo(db.rmc, {foreignKey: 'rmc_id', targetKey: 'id'});
    }
};