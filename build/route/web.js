"use strict";

var _express = _interopRequireDefault(require("express"));
var _userController = _interopRequireDefault(require("../controllers/userController"));
var _phongbanController = _interopRequireDefault(require("../controllers/phongbanController"));
var _grouproleController = _interopRequireDefault(require("../controllers/grouproleController"));
var _menuController = _interopRequireDefault(require("../controllers/menuController"));
var _importController = _interopRequireDefault(require("../controllers/importController"));
var _nhanvienController = _interopRequireDefault(require("../controllers/nhanvienController"));
var _urlController = _interopRequireDefault(require("../controllers/urlController"));
var _exportController = _interopRequireDefault(require("../controllers/exportController"));
var _JWTAction = require("../middleware/JWTAction");
var _multer = _interopRequireDefault(require("multer"));
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
require('dotenv').config();

// const app = express();
var router = _express["default"].Router();
// const uploadnew = multer({ dest: path.join(__dirname, "../uploads/") });
// const uploadedit = multer({ dest: path.join(__dirname, "../uploads/") });
// const uploadnew_congvandi = multer({ dest: path.join(__dirname, "../uploads/") });
// const uploadedit_congvandi = multer({ dest: path.join(__dirname, "../uploads/") });

var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, _path["default"].join(__dirname, '../uploads/'));
  },
  filename: function filename(req, file, cb) {
    // Convert original name from latin1 to utf8
    var originalNameBuffer = Buffer.from(file.originalname, 'latin1');
    var originalName = originalNameBuffer.toString('utf8');
    cb(null, originalName);
  }
});
var storageimage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, _path["default"].join(__dirname, '../image/'));
  },
  filename: function filename(req, file, cb) {
    // Convert original name from latin1 to utf8
    var originalNameBuffer = Buffer.from(file.originalname, 'latin1');
    var originalName = originalNameBuffer.toString('utf8');
    cb(null, originalName);
  }
});
var uploadnew_congvandi = (0, _multer["default"])({
  storage: storage
});
var uploadedit_congvandi = (0, _multer["default"])({
  storage: storage
});
var uploadnew = (0, _multer["default"])({
  storage: storage
});
var uploadnewmerge = (0, _multer["default"])({
  storage: storage
});
var uploadedit = (0, _multer["default"])({
  storage: storage
});
var uploadedituser = (0, _multer["default"])({
  storage: storageimage
});
var initWebRoutes = function initWebRoutes(app) {
  router.all('*', _JWTAction.checkUserJWT, _JWTAction.checkUserPermission, _JWTAction.checkButonPermission); //checkUserPermission,checkButonPermission

  // router.get('/api/url-view', (req, res) => {
  //     res.json({ url: process.env.URL_VIEW });
  // });

  // Cấu hình phục vụ các tệp tĩnh từ thư mục uploads
  var uploadsDirectory = _path["default"].join(__dirname, '..', 'uploads');
  app.use('/uploads', _express["default"]["static"](uploadsDirectory));

  // Cấu hình phục vụ các tệp tĩnh từ thư mục image
  var uploadsDirectoryimgae = _path["default"].join(__dirname, '..', 'image');
  app.use('/image', _express["default"]["static"](uploadsDirectoryimgae));
  router.get('/api/url-view', _urlController["default"].getUrlView);
  router.post('/api/import-po', _importController["default"].handleImportPO);
  router.get('/api/get-all-po', _importController["default"].handleGetAllPO);
  router.post('/api/get-chungtu', _importController["default"].handleGetChungTu);
  router.post('/api/get-checkchungtu', _importController["default"].handleGetCheckChungTu);
  router.post('/api/edit-mataisan', _importController["default"].handleEditMaTaiSan);
  router.post('/api/edit-mataisannew', _importController["default"].handleEditMaTaiSanNew);
  router.post('/api/get-one-po', _importController["default"].handleGetOnePo);
  router.post('/api/get-all-log-chungtu-po', _importController["default"].handleGetAllLogChungTuPO);
  router.post('/api/get-check-all-log-chungtu-po', _importController["default"].handleGetCheckAllLogChungTuPO);
  router.post('/api/get-check-po', _importController["default"].handleGetCheckPO);
  router.post('/api/get-check-editmataisanpo', _importController["default"].handleGetCheckEditMaTaiSanPO);
  router.post('/api/get-check-editsoluongpo', _importController["default"].handleGetCheckEditSoLuongPO);
  router.post('/api/get-check-editmataisanpr', _importController["default"].handleGetCheckEditMaTaiSanPR);
  router["delete"]('/api/delete-po', _menuController["default"].handleDeletePO);
  router.post('/api/check-machungtu-po', _importController["default"].handleCheckMaChungTuPO);
  router.post('/api/delete-log-ctpo', _menuController["default"].handleDeleteLogCTPO);
  router.post('/api/delete-check-log-ctpo', _menuController["default"].handleDeleteCheckLogCTPO);
  router.get('/api/get-all-taisan', _importController["default"].handleGetAllTaiSan);
  router.get('/api/get-all-tentaisan', _importController["default"].handleGetAllTenTaiSan);
  router.get('/api/get-all-dvt', _importController["default"].handleGetAllDVT);
  router.get('/api/get-all-bv', _importController["default"].handleGetAllBV);
  router.get('/api/get-all-pl', _importController["default"].handleGetAllPL);
  router.get('/api/get-all-tgbh', _importController["default"].handleGetAllTGBH);
  router.get('/api/get-all-tgkh', _importController["default"].handleGetAllTGKH);
  router.put('/api/edit-taisan', _importController["default"].handleEditTaiSan);
  router.post('/api/create-new-ts', _importController["default"].handleNewTaiSan);
  router.get('/api/check-xoa-ts/:Duoc_Id', _importController["default"].handleCheckXoaTS);
  router.post('/api/delete-taisan', _menuController["default"].handleDeleteTaiSan);
  router.get('/api/get-all-kho', _importController["default"].handleGetAllKho);
  router.get('/api/get-lankiemke', _importController["default"].handleGetLanKiemKe);
  router.get('/api/get-all-kho-qltk', _importController["default"].handleGetAllKhoQLTK);
  router.get('/api/get-all-kho-edit', _importController["default"].handleGetAllKhoEdit);
  router.get('/api/get-all-vitri', _importController["default"].handleGetAllViTri);
  router.get('/api/get-all-nguoisudung', _importController["default"].handleGetAllNguoiSuDung);
  router.get('/api/get-all-tinhtrang', _importController["default"].handleGetAllTinhTrang);
  router.post('/api/get-all-khoql', _importController["default"].handleGetAllKhoQL);
  router.post('/api/get-taisantheokho', _importController["default"].handleGetTaiSanTheoKho);
  router.post('/api/get-taisantheokho-lichsu', _importController["default"].handleGetTaiSanTheoKhoLichSu);
  router.post('/api/get-taisanxacnhantheokho-lichsu', _importController["default"].handleGetTaiSanXacNhanTheoKhoLichSu);
  router.post('/api/get-taisanxacnhanallkho-lichsu', _importController["default"].handleGetTaiSanXacNhanAllKhoLichSu);
  router.post('/api/get-taisanxacnhantoanvien-kho-lichsu', _importController["default"].handleGetTaiSanXacNhanToanVienKhoLichSu);
  router.post('/api/get-lichsukiemke', _importController["default"].handleGetLichSuKiemKe);
  router.post('/api/get-taisantheokhoql', _importController["default"].handleGetTaiSanTheoKhoQL);
  router.post('/api/get-mataisan-kiemke', _importController["default"].handleGetMaTaiSanKiemKe);
  router.post('/api/edit-khoaphonghientai', _importController["default"].handleEditKhoaPhongHienTai);
  router.post('/api/get-serial-kiemke', _importController["default"].handleGetSerialKiemKe);
  router.get('/api/get-all-nhanvien', _importController["default"].handleGetAllNhanVien);
  router.get('/api/get-all-nhanvien-phong', _importController["default"].handleGetAllNhanVienPhong);
  router.get('/api/get-all-nguoilap', _importController["default"].handleGetAllNguoiLap);
  router.get('/api/get-all-ketoantruong', _importController["default"].handleGetKeToanTruong);
  router.get('/api/get-all-ketoantaisan', _importController["default"].handleGetKeToanTaiSan);
  router.get('/api/get-all-giamdoc', _importController["default"].handleGetGiamDoc);
  router.post('/api/check-dongbo', _importController["default"].handleCheckDongBo);
  router.get('/api/get-all-ct', _importController["default"].handleGetAllCT);
  router.post('/api/get-check-all-ct', _importController["default"].handleGetCheckAllCT);
  router.post('/api/get-check-all', _importController["default"].handleGetCheckAll);
  router.post('/api/get-one-ct', _importController["default"].handleGetOneCT);
  router.post('/api/get-check-one-ct', _importController["default"].handleGetCheckOneCT);
  router.post('/api/check-xoa-chungtu', _importController["default"].handleCheckXoaChungTu);
  router.post('/api/check-xoa-check-chungtu', _importController["default"].handleCheckXoaCheckChungTu);
  router.post('/api/delete-ct', _menuController["default"].handleDeleteCT);
  router.post('/api/delete-check-ct', _menuController["default"].handleDeleteCheckCT);
  router.post('/api/xacnhan-kiemke', _menuController["default"].handleXacNhanKiemKe);
  router.post('/api/huyxacnhan-kiemke', _menuController["default"].handleHuyXacNhanKiemKe);
  router.post('/api/delete-data-kiemke', _menuController["default"].handleDeleteDataKiemKe);
  router.post('/api/huy-kiemke', _menuController["default"].handleHuyKiemKe);
  router.post('/api/timkiem-data-kiemke', _importController["default"].getDaTaKiemKe);
  router.post('/api/xacnhan-themtaisan', _importController["default"].handleXacNhanThemTaiSan);
  router.post('/api/checkdata-chuaxacnhan', _importController["default"].handleCheckDataChuaXacNhan);
  router.post('/api/import-pr', _importController["default"].handleImportPR);
  router.get('/api/get-all-pr', _importController["default"].handleGetAllPR);
  router.post('/api/get-one-pr', _importController["default"].handleGetOnePR);
  router.post('/api/get-sopo', _importController["default"].handleGetSoPO);
  router.post('/api/get-all-log-po-pr', _importController["default"].handleGetAllLogPOPR);
  router.post('/api/get-all-log-popr', _importController["default"].handleGetLogPOPR);
  router.post('/api/get-check-pr', _importController["default"].handleGetCheckPR);
  router["delete"]('/api/delete-pr', _menuController["default"].handleDeletePR);
  router.post('/api/check-po-pr', _importController["default"].handleCheckPOPR);
  router.post('/api/delete-log-popr', _menuController["default"].handleDeleteLogPOPR);
  router.post('/api/import-hd', _importController["default"].handleImportHD);
  router.get('/api/get-all-hd', _importController["default"].handleGetAllHD);
  router.post('/api/get-all-log-chungtu-hd', _importController["default"].handleGetAllLogChungTuHopDong);
  router.post('/api/get-check-all-log-chungtu-hd', _importController["default"].handleGetCheckAllLogChungTuHopDong);
  router.post('/api/get-one-hd', _importController["default"].handleGetOneHD);
  router.post('/api/get-machungtu', _importController["default"].handleGetMaChungTu);
  router.post('/api/get-check-hd', _importController["default"].handleGetCheckHopDong);
  router["delete"]('/api/delete-hopdong', _menuController["default"].handleDeleteHopDong);
  router.post('/api/check-machungtu-hopdong', _importController["default"].handleCheckMaChungTuHD);
  router.post('/api/delete-log-cthd', _menuController["default"].handleDeleteLogCTHD);
  router.post('/api/delete-check-log-cthd', _menuController["default"].handleDeleteCheckLogCTHD);
  router.get('/api/download-file/:filename', _importController["default"].handleDownloadFile);
  // router.get('/api/download-po/:filename', importController.handleDownloadDataPO);
  // router.get('/api/download-pr/:filename', importController.handleDownloadDataPR);
  // router.get('/api/download-hd/:filename', importController.handleDownloadDataHD);

  router.post('/api/exportnhapncc', _exportController["default"].getExportNhapNCC);
  router.post('/api/exportdatapo', _exportController["default"].getExportDataPO);
  router.post('/api/exportdatapr', _exportController["default"].getExportDataPR);
  router.post('/api/exportdatahd', _exportController["default"].getExportDataHD);
  router.post('/api/export-kiemketaisan', _exportController["default"].getExportKiemKeTaiSan);
  router.post('/api/get-action', _userController["default"].handleGetAction);
  router.post('/api/login', _userController["default"].handleLogin);
  router.post('/api/login-token', _userController["default"].handleLoginToken);
  router.post('/api/logout', _userController["default"].handleLogout);
  router.get('/api/get-all-users', _userController["default"].handleGetAllUsers);
  router.post('/api/create-new-user', _userController["default"].handleCreateNewUser);
  // router.put('/api/edit-user', userController.handleEditUser);
  router.put('/api/edit-user', uploadedituser.single('File'), _userController["default"].handleEditUser);
  router["delete"]('/api/delete-user', _userController["default"].handleDeleteUser);
  router.get('/api/allcode', _userController["default"].getAllCode);
  router.get('/api/get-group_id/:Group_Id', _userController["default"].handleGetGroupId);
  router.get('/api/get-all-group', _userController["default"].handleGetAllGroup);
  router.post('/api/create-new-user', _userController["default"].handleCreateNewUser);
  router.get('/api/get-all-nhanvien', _userController["default"].handleGetAllNhanVien);
  router.get('/api/check-xoa-user/:id', _userController["default"].handleCheckXoaUser);
  router.get('/api/get-magroup', _userController["default"].handleGetMaGroup);
  router.get('/api/get-all-dm-nhanvien', _nhanvienController["default"].handleGetAllNhanVien);
  router.get('/api/get-phongban', _nhanvienController["default"].handleGetAllPhongBan);
  router.post('/api/create-new-nhanvien', _nhanvienController["default"].handleCreateNewNhanVien);
  router.put('/api/edit-nhanvien', _nhanvienController["default"].handleEditNhanVien);
  router.get('/api/check-xoa-nhanvien/:id', _nhanvienController["default"].handleCheckXoaNhanVien);
  router["delete"]('/api/delete-nhanvien', _nhanvienController["default"].handleDeleteNhanVien);
  router.get('/api/get-all-phongban', _phongbanController["default"].handleGetAllPhongBan);
  router.put('/api/get-phongban_id', _phongbanController["default"].handleGetPhongBanId);
  router.post('/api/create-new-phongban', _phongbanController["default"].handleCreateNewPhongBan);
  router.put('/api/edit-phongban', _phongbanController["default"].handleEditPhongBan);
  router["delete"]('/api/delete-phongban', _phongbanController["default"].handleDeletePhongBan);
  router.get('/api/get-all-phongban-his', _phongbanController["default"].handleGetAllPhongBanHis);
  router.get('/api/check-xoa-phongban/:id', _phongbanController["default"].handleCheckXoaPhongBan);
  router.put('/api/get-all-rolegroup', _grouproleController["default"].handleGetAllRoleGroup);
  router.put('/api/get-all-checkrolegroup', _grouproleController["default"].handleCheckRoleGroup);
  router.post('/api/create-new-rolegroup', _grouproleController["default"].handleCreateNewRoleGroup);
  router["delete"]('/api/delete-rolegroup', _grouproleController["default"].handleDeleteRoleGroup);
  router.get('/api/get-all-role', _grouproleController["default"].handleGetAllRole);
  router.post('/api/create-new-role', _grouproleController["default"].handleCreateNewRole);
  router.put('/api/edit-role', _grouproleController["default"].handleEditRole);
  router["delete"]('/api/delete-role', _grouproleController["default"].handleDeleteRole);
  router.get('/api/get-all-group', _grouproleController["default"].handleGetAllGroup);
  router.post('/api/create-new-group', _grouproleController["default"].handleCreateNewGroup);
  router.put('/api/edit-group', _grouproleController["default"].handleEditGroup);
  router["delete"]('/api/delete-group', _grouproleController["default"].handleDeleteGroup);
  router.get('/api/get-all-menu-con', _menuController["default"].handleGetAllMenuCon);
  router.get('/api/get-all-menu-cha', _menuController["default"].handleGetAllMenuCha);
  router.post('/api/create-new-menucha', _menuController["default"].handleCreateNewMenuCha);
  router["delete"]('/api/delete-menucha', _menuController["default"].handleDeleteMenuCha);
  router.put('/api/edit-menu-cha', _menuController["default"].handleEditMenuCha);
  router.get('/api/get-all-select-menu-cha', _menuController["default"].handleGetAllSelectMenuCha);
  router.get('/api/get-all-group', _menuController["default"].handleGetAllGroup);
  router.put('/api/create-new-menucon', _menuController["default"].handleCreateNewMenuCon);
  router["delete"]('/api/delete-menucon', _menuController["default"].handleDeleteMenuCon);
  router.post('/api/get-all-nhomquyen', _menuController["default"].handleGetNhomQuyen);
  router.post('/api/get-all-menucha', _menuController["default"].handleGetMenuCha);
  router.put('/api/edit-menu-con', _menuController["default"].handleEditMenuCon);
  return app.use("/", router);
};
module.exports = initWebRoutes;