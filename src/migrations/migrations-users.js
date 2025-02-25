'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            account: {
                type: Sequelize.STRING
            },
            firstName: {
                type: Sequelize.STRING
            },
            gender: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            },
            note: {
                type: Sequelize.STRING
            },
            File: {
                type: Sequelize.STRING
            },
            ky: {
                type: Sequelize.INTEGER
            },
            phongban_id: {
                type: Sequelize.INTEGER
            },
            use_ehos_id: {
                type: Sequelize.INTEGER
            },
            nhanvien_id: {
                type: Sequelize.INTEGER
            },
            use_roleId: {
                type: Sequelize.INTEGER
            },
            use_groupId: {
                type: Sequelize.INTEGER
            },
            positionId: {
                type: Sequelize.STRING
            },
            tamngung: {
                type: Sequelize.INTEGER
            },
            sudung: {
                type: Sequelize.INTEGER
            },
            UType: {
                type: Sequelize.INTEGER
            },
            nguoitaoId: {
                type: Sequelize.INTEGER
            },
            nguoicapnhapId: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Users');
    }
};
