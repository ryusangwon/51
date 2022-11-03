const Sequelize = require('sequelize');

module.exports = class Rmc extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            title: {
                type: Sequelize.STRING(45),
                allowNull: false,
            },
            content: {
                type: Sequelize.BLOB,
                allowNull: true,
            },
            writer_id: {
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            video_src: {
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
            modelName: 'Rmc',
            tableName: 'rmc',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {}
};