const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            id: {
                type:Sequelize.STRING(20),
                primaryKey: true,
                allowNull: false,
                // unique: true,
            },
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
                // unique: true,
            },
            password: {
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            email: {
                type: Sequelize.STRING(45),
                allowNull: false,
                unique: true,
            },
            mento: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            game_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            modelName: 'User',
            tableName: 'user',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {}
};