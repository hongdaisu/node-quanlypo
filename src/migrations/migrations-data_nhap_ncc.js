'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Data_ChungTus', {
            chungtu_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            machungtu: {
                type: Sequelize.STRING,
                allowNull: false
            },
            ngaychungtu: {
                type: Sequelize.DATE,
                allowNull: false
            },
            mataisan: {
                type: Sequelize.STRING,
                allowNull: true
            },
            tentaisan: {
                type: Sequelize.STRING,
                allowNull: true
            },
            donvitinh: {
                type: Sequelize.STRING,
                allowNull: true
            },
            soluongnhap: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            dongianhap: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            thanhtiennhap: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            vatnhap: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            dongianhapvat: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            thanhtiennhapvat: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            nhacungcap_id: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            tennhacungcap: {
                type: Sequelize.STRING,
                allowNull: true
            },
            khonhap: {
                type: Sequelize.STRING,
                allowNull: true
            },
            nguoinhap: {
                type: Sequelize.STRING,
                allowNull: true
            },
            sopo: {
                type: Sequelize.STRING,
                allowNull: true
            },
            trangthai: {
                type: Sequelize.STRING,
                allowNull: true
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Data_ChungTus');
    }
};
