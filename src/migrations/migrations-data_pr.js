'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Data_PRs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
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
            soluongpr: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            soluongpo: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            tongsoluongpo: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            dongiaprvat: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            thanhtienprvat: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            ghichu: {
                type: Sequelize.STRING,
                allowNull: true
            },
            ngaycanhang: {
                type: Sequelize.DATE,
                allowNull: true
            },
            nguoikiemtra_id: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            nguoitao_id: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            ngaykiemtra: {
                type: Sequelize.DATE,
                allowNull: true
            },
            sopr: {
                type: Sequelize.STRING,
                allowNull: true
            },
            checkma: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            checkten: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            dacheckvoict: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            dacheckvoipo: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            checkmataisan: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable('Data_PRs');
    }
};
