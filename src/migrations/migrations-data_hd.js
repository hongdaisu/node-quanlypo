'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Data_HDs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            nhacungcap_id: {
                type: Sequelize.INTEGER
            },
            tennhacungcap: {
                type: Sequelize.STRING
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
            dongiahd: {
                type: Sequelize.INTEGER
            },
            vat: {
                type: Sequelize.INTEGER
            },
            dongiahdvat: {
                type: Sequelize.INTEGER
            },
            dongianhap: {
                type: Sequelize.INTEGER
            },
            dongianhap2: {
                type: Sequelize.INTEGER
            },
            dongianhapvat: {
                type: Sequelize.INTEGER
            },
            dongianhapvat2: {
                type: Sequelize.INTEGER
            },
            soluongdanhap: {
                type: Sequelize.INTEGER
            },
            soluongdanhap2: {
                type: Sequelize.INTEGER
            },
            checkhieuluc: {
                type: Sequelize.INTEGER
            },
            rn: {
                type: Sequelize.STRING
            },
            taitro: {
                type: Sequelize.STRING
            },
            tinhtaitro: {
                type: Sequelize.STRING
            },
            sohopdong: {
                type: Sequelize.STRING
            },
            nguoitao_id: {
                type: Sequelize.INTEGER
            },
            ngayhieuluc: {
                type: Sequelize.DATE
            },
            ngayketthuc: {
                type: Sequelize.DATE
            },
            checkma: {
                type: Sequelize.INTEGER
            },
            checkten: {
                type: Sequelize.INTEGER
            },
            checknhacungcap: {
                type: Sequelize.INTEGER
            },
            dacheckvoict: {
                type: Sequelize.INTEGER
            },
            dacheckvoict2: {
                type: Sequelize.INTEGER
            },
            checkmataisanvoict: {
                type: Sequelize.INTEGER
            },
            checkmataisanvoict2: {
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
        await queryInterface.dropTable('Data_HDs');
    }
};