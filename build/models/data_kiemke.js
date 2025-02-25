'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var _require = require('sequelize'),
  Model = _require.Model,
  BOOLEAN = _require.BOOLEAN;
module.exports = function (sequelize, DataTypes) {
  var Data_KiemKe = /*#__PURE__*/function (_Model) {
    function Data_KiemKe() {
      _classCallCheck(this, Data_KiemKe);
      return _callSuper(this, Data_KiemKe, arguments);
    }
    _inherits(Data_KiemKe, _Model);
    return _createClass(Data_KiemKe);
  }(Model);
  ;
  Data_KiemKe.init({
    DotKiemKe_Id: DataTypes.INTEGER,
    STT: DataTypes.INTEGER,
    MaTaiSan: DataTypes.STRING,
    MaTaiSanNew: DataTypes.STRING,
    BenhVien: DataTypes.STRING,
    PhanLoai: DataTypes.STRING,
    TenTaiSan: DataTypes.STRING,
    Model: DataTypes.STRING,
    Serial: DataTypes.STRING,
    TenDonViTinh: DataTypes.STRING,
    ThoiGianDuaVao: DataTypes.DATE,
    NguyenGia: DataTypes.INTEGER,
    Duoc_Id: DataTypes.INTEGER,
    SoLoNhap_Id: DataTypes.INTEGER,
    KhoDuoc_Id: DataTypes.INTEGER,
    KhoDuocSaiViTri_Id: DataTypes.INTEGER,
    ViTri_Id: DataTypes.INTEGER,
    TrangThaiKiemKe: DataTypes.INTEGER,
    IsCheckKiemKe: DataTypes.INTEGER,
    LanKiemKe: DataTypes.INTEGER,
    SoLuong: DataTypes.INTEGER,
    NguoiSuDung_Id: DataTypes.INTEGER,
    NguoiSuDung: DataTypes.STRING,
    KhoaPhongSuDung: DataTypes.STRING,
    ViTri: DataTypes.STRING,
    GhiChu: DataTypes.STRING,
    KhoaQuanLy: DataTypes.STRING,
    KhoaQuanLySaiViTri: DataTypes.STRING,
    SoLuongThucTe: DataTypes.INTEGER,
    ChenhLech: DataTypes.INTEGER,
    KhoaPhongHienTai: DataTypes.STRING,
    ViTriHienTai: DataTypes.STRING,
    GhiChuHienTai: DataTypes.STRING,
    TinhTrang: DataTypes.STRING,
    CheckMaTaiSan: DataTypes.INTEGER,
    XacNhanKiemKe: DataTypes.INTEGER,
    NguoiTao: DataTypes.INTEGER,
    NamKiemKe: DataTypes.INTEGER,
    NgayKiemKe: DataTypes.DATE,
    NgayXacNhanKiemKe: DataTypes.DATE,
    TrangThaiChuyen: DataTypes.INTEGER
  }, {
    sequelize: sequelize,
    modelName: 'Data_KiemKe'
  });
  return Data_KiemKe;
};