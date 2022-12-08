const Sequelize = require('sequelize');

module.exports = class Rmc_board extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            comment: {
                type: Sequelize.STRING(45),
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
            gosok_id: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: false,
            modelName: 'Rmc_board',
            tableName: 'rmc_board',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.Rmc_board.belongsTo(db.User, {foreignKey: 'user_id', targetKey: 'id'});
        db.Rmc_board.belongsTo(db.Rmc, {foreignKey: 'rmc_id', targetKey: 'id'});
    }
};