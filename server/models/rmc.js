const Sequelize = require('sequelize');

module.exports = class Rmc extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            title: {
                type: Sequelize.STRING(45),
                allowNull: false,
            },
            content: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            video_src: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            create_date: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.NOW,
            },
            gosok_id: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            good: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            bad: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            modelName: 'Rmc',
            tableName: 'rmc',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.Rmc.belongsTo(db.User, {foreignKey: 'user_id', targetKey: 'id'});

        db.Rmc.hasMany(db.Rmc_board, {foreignKey: 'rmc_id', sourceKey: 'id'});

    }
};