
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Check_Data_ChungTu_Logs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            id_data_po: {
                type: Sequelize.INTEGER
            },
            mataisan: {
                type: Sequelize.STRING
            },
            tentaisan: {
                type: Sequelize.STRING
            },
            chungtu_id: {
                type: Sequelize.INTEGER
            },
            nhacungcap_id: {
                type: Sequelize.INTEGER
            },
            tennhacungcap: {
                type: Sequelize.STRING
            },
            machungtu: {
                type: Sequelize.STRING
            },
            sopo: {
                type: Sequelize.STRING
            },
            trangthai: {
                type: Sequelize.STRING
            },
            ngaychungtu: {
                type: Sequelize.DATE
            },
            khonhap: {
                type: Sequelize.STRING
            },
            nguoinhap: {
                type: Sequelize.STRING
            },
            soluongnhap: {
                type: Sequelize.INTEGER
            },
            dongianhap: {
                type: Sequelize.INTEGER
            },
            dongianhapvat: {
                type: Sequelize.INTEGER
            },
            vatnhap: {
                type: Sequelize.INTEGER
            },
            thanhtiennhap: {
                type: Sequelize.INTEGER
            },
            soluongnhap_check: {
                type: Sequelize.INTEGER
            },
            dongianhap_check: {
                type: Sequelize.INTEGER
            },
            dongianhapvat_check: {
                type: Sequelize.INTEGER
            },
            thanhtiennhapvat: {
                type: Sequelize.INTEGER
            },
            nguoikiemtra_id: {
                type: Sequelize.INTEGER
            },
            ngaykiemtra: {
                type: Sequelize.DATE
            },
            check_soluongnhap: {
                type: Sequelize.INTEGER
            },
            check_dongianhap: {
                type: Sequelize.INTEGER
            },
            check_dongianhapvat: {
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
        await queryInterface.dropTable('Check_Data_ChungTu_Logs');
    }
};