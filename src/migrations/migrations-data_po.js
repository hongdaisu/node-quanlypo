'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Data_POs', {
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
            soluongpo: {
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
            sopr: {
                type: Sequelize.STRING,
                allowNull: true
            },
            sopo: {
                type: Sequelize.STRING,
                allowNull: true
            },
            soluongnhap: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            soluongnhap2: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            vatnhap: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            dongianhap: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            dongianhap2: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            dongiavatnhap: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            dongiavatnhap2: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            soluongdanhap: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            soluongdanhap2: {
                type: Sequelize.INTEGER,
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
            ngaypo: {
                type: Sequelize.DATE,
                allowNull: true
            },
            nguoitao_id: {
                type: Sequelize.INTEGER,
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
            checkmataisanvoict: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            dacheckvoict2: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            checkmataisanvoict2: {
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
        await queryInterface.dropTable('Data_POs');
    }
};
