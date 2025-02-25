'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Dm_PhongBans', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            ID_Mapping: {
                type: Sequelize.INTEGER
            },
            TenPhongBan: {
                type: Sequelize.STRING
            },
            Note: {
                type: Sequelize.STRING
            },
            TruongKhoa: {
                type: Sequelize.STRING
            },
            DieuDuongTruong: {
                type: Sequelize.STRING
            },
            NguoiTao_Id: {
                type: Sequelize.INTEGER
            },
            NguoiCapNhap_Id: {
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
        await queryInterface.dropTable('Dm_PhongBans');
    }
};
