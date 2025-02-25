'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Check_Data_ChungTus', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            chungtu_id: {
                type: Sequelize.INTEGER
            },
            machungtu: {
                type: Sequelize.STRING
            },
            ngaychungtu: {
                type: Sequelize.DATE
            },
            mataisan: {
                type: Sequelize.STRING
            },
            tentaisan: {
                type: Sequelize.STRING
            },
            donvitinh: {
                type: Sequelize.STRING
            },
            soluongnhap: {
                type: Sequelize.INTEGER
            },
            dongianhap: {
                type: Sequelize.INTEGER
            },
            thanhtiennhap: {
                type: Sequelize.INTEGER
            },
            vatnhap: {
                type: Sequelize.INTEGER
            },
            dongianhapvat: {
                type: Sequelize.INTEGER
            },
            thanhtiennhapvat: {
                type: Sequelize.INTEGER
            },
            nhacungcap_id: {
                type: Sequelize.INTEGER
            },
            tennhacungcap: {
                type: Sequelize.STRING
            },
            khonhap: {
                type: Sequelize.STRING
            },
            nguoinhap: {
                type: Sequelize.STRING
            },
            sopo: {
                type: Sequelize.STRING
            },
            trangthai: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('Check_Data_ChungTus');
    }
};