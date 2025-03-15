'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Data_KiemKes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            DotKiemKe_Id: {
                type: Sequelize.INTEGER
            },
            STT: {
                type: Sequelize.INTEGER
            },
            MaTaiSan: {
                type: Sequelize.STRING
            },
            MaTaiSanNew: {
                type: Sequelize.STRING
            },
            BenhVien: {
                type: Sequelize.STRING
            },
            PhanLoai: {
                type: Sequelize.STRING
            },
            TenTaiSan: {
                type: Sequelize.STRING
            },
            Model: {
                type: Sequelize.STRING
            },
            Serial: {
                type: Sequelize.STRING
            },
            TenDonViTinh: {
                type: Sequelize.STRING
            },
            ThoiGianDuaVao: {
                type: Sequelize.DATE
            },
            NguyenGia: {
                type: Sequelize.INTEGER
            },
            Duoc_Id: {
                type: Sequelize.INTEGER
            },
            SoLoNhap_Id: {
                type: Sequelize.INTEGER
            },
            KhoDuoc_Id: {
                type: Sequelize.INTEGER
            },
            KhoDuocSaiViTri_Id: {
                type: Sequelize.INTEGER
            },
            ViTri_Id: {
                type: Sequelize.INTEGER
            },
            TrangThaiKiemKe: {
                type: Sequelize.INTEGER
            },
            IsCheckKiemKe: {
                type: Sequelize.INTEGER
            },
            LanKiemKe: {
                type: Sequelize.INTEGER
            },
            SoLuong: {
                type: Sequelize.INTEGER
            },
            NguoiSuDung_Id: {
                type: Sequelize.INTEGER
            },
            NguoiSuDung: {
                type: Sequelize.STRING
            },
            KhoaPhongSuDung: {
                type: Sequelize.STRING
            },
            ViTri: {
                type: Sequelize.STRING
            },
            GhiChu: {
                type: Sequelize.STRING
            },
            KhoaQuanLy: {
                type: Sequelize.STRING
            },
            KhoaQuanLySaiViTri: {
                type: Sequelize.STRING
            },
            SoLuongThucTe: {
                type: Sequelize.INTEGER
            },
            ChenhLech: {
                type: Sequelize.INTEGER
            },
            KhoaPhongHienTai: {
                type: Sequelize.STRING
            },
            ViTriHienTai: {
                type: Sequelize.STRING
            },
            GhiChuHienTai: {
                type: Sequelize.STRING
            },
            TinhTrang: {
                type: Sequelize.STRING
            },
            CheckMaTaiSan: {
                type: Sequelize.INTEGER
            },
            XacNhanKiemKe: {
                type: Sequelize.INTEGER
            },
            NguoiTao: {
                type: Sequelize.INTEGER
            },
            NamKiemKe: {
                type: Sequelize.INTEGER
            },
            NgayKiemKe: {
                type: Sequelize.DATE
            },
            NgayXacNhanKiemKe: {
                type: Sequelize.DATE
            },
            TrangThaiChuyen: {
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
        await queryInterface.dropTable('Data_KiemKes');
    }
};