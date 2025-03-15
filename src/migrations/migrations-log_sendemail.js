'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Log_SendEmails', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            CapGui_Id: Sequelize.INTEGER,
            NhanVien_Id: Sequelize.INTEGER,
            TenPhongBan: Sequelize.STRING,
            CongVan_Id: Sequelize.INTEGER,
            ThoiGianGui: Sequelize.DATE,
            TrangThaiNhan: Sequelize.INTEGER,
            TrangThaiXem: Sequelize.INTEGER,
            ThoiGianNhan: Sequelize.DATE,
            NgayCheckEmail: Sequelize.DATE,
            GuiLai: Sequelize.INTEGER,
            GuiNhanVien: Sequelize.INTEGER,
            TrangThaiNVXem: Sequelize.INTEGER,
            ThoiGianGuiNhanVien: Sequelize.DATE,
            ThoiGianNhanVienNhan: Sequelize.DATE,
            NhanVienNhan_Id: Sequelize.INTEGER,
            PhongBan_Id: Sequelize.INTEGER,
            NhanVienNhan: Sequelize.INTEGER,
            EmailNhanVien: Sequelize.STRING,
            GhiChu: Sequelize.STRING,
            CheckGui: Sequelize.INTEGER,
            TrangThaiHoanTat: Sequelize.INTEGER,
            ThoiGianHoanTat: Sequelize.DATE,
            GhiChuHoanTat: Sequelize.STRING,
            NumHoanTat: Sequelize.INTEGER,
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
        await queryInterface.dropTable('Log_SendEmails');
    }
};
