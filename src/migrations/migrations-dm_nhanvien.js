'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Dm_NhanViens', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            DuyetCongVan: {
                type: Sequelize.INTEGER
            },
            Index: {
                type: Sequelize.INTEGER
            },
            ID_Mapping: {
                type: Sequelize.INTEGER
            },
            TenNhanVien: {
                type: Sequelize.STRING
            },
            Email: {
                type: Sequelize.STRING
            },
            ChucDanh: {
                type: Sequelize.STRING
            },
            ChucVu: {
                type: Sequelize.STRING
            },
            UserName: {
                type: Sequelize.STRING
            },
            SDT: {
                type: Sequelize.INTEGER
            },
            PhongBan_Id: {
                type: Sequelize.INTEGER
            },
            TrangThai: {
                type: Sequelize.INTEGER
            },
            CheckGui: {
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
        await queryInterface.dropTable('Dm_NhanViens');
    }
};
