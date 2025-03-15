'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Data_DotKiemKes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            KhoDuoc_Id: {
                type: Sequelize.INTEGER
            },
            KhoaPhongSuDung: {
                type: Sequelize.STRING
            },
            KhoaQuanLy: {
                type: Sequelize.STRING
            },
            NamKiemKe: {
                type: Sequelize.INTEGER
            },
            NguoiTao: {
                type: Sequelize.INTEGER
            },
            LanKiemKe: {
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
        await queryInterface.dropTable('Data_DotKiemKes');
    }
};
