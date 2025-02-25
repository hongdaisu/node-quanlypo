'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Data_Po_Pr_Logs', {
            id_data_pr: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
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
                type: Sequelize.INTEGER,
                allowNull: true
            },
            soluongpo: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            soluongpodacheck: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            dongiapo: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            vat: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            dongiapovat: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            thanhtien: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            thanhtienvat: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            sopo: {
                type: Sequelize.STRING,
                allowNull: true
            },
            sopr: {
                type: Sequelize.STRING,
                allowNull: true
            },
            nguoikiemtra_id: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            ngaykiemtra: {
                type: Sequelize.DATE,
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
        await queryInterface.dropTable('Data_Po_Pr_Logs');
    }
};
