"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _index = _interopRequireDefault(require("../models/index"));
var _role = _interopRequireDefault(require("../models/role"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var mssql = require('mssql');
require('dotenv').config();
var getAllPO = function getAllPO() {
  return new Promise(/*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_all_po', {
              // replacements: { id: 2 },
              raw: false
            });
          case 3:
            data = _context.sent;
            resolve(data);
            _context.next = 10;
            break;
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            reject(_context.t0);
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};
var getAllTaiSan = function getAllTaiSan() {
  return new Promise(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var request, getdata, data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            request = _index["default"].sqlhis2Connection.request();
            _context2.next = 4;
            return request.execute('[sp_QLPO_DANHMUC_TAISAN]');
          case 4:
            getdata = _context2.sent;
            // Lấy dữ liệu từ recordset
            data = getdata.recordset; //console.log('recordset', data)
            resolve(data);
            _context2.next = 12;
            break;
          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            reject(_context2.t0);
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 9]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};

// let getAllTenTaiSan = () => {
//     return new Promise(async (resolve, reject) => {
//         try {

//             const request = db.sqlhis2Connection.request();
//             const getdata = await request.execute('[sp_QLPO_DANHMUC_TENTAISAN]');
//             // Lấy dữ liệu từ recordset
//             const data = getdata.recordset;
//             //console.log('recordset', data)

//             resolve(data)
//         } catch (e) {
//             reject(e)
//         }
//     })
// }

var getAllTenTaiSan = function getAllTenTaiSan(_ref3) {
  var searchTerm = _ref3.searchTerm,
    _ref3$offset = _ref3.offset,
    offset = _ref3$offset === void 0 ? 0 : _ref3$offset;
  return new Promise(/*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var request, getdata, data;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            searchTerm = String(searchTerm).trim(); // Chuẩn hóa searchTerm
            request = _index["default"].sqlhis2Connection.request(); // Thiết lập thời gian chờ (query timeout)
            request.queryTimeout = 60000; // 60 giây

            // Truyền searchTerm và offset vào stored procedure
            _context3.next = 6;
            return request.input('searchTerm', mssql.NVarChar(255), searchTerm) // Truyền searchTerm vào stored procedure
            .input('offset', mssql.Int, offset) // Truyền offset vào stored procedure
            .execute('[sp_QLPO_DANHMUC_TENTAISAN]');
          case 6:
            getdata = _context3.sent;
            // Gọi stored procedure
            // Lấy dữ liệu từ recordset
            data = getdata.recordset;
            resolve(data); // Trả về dữ liệu từ stored procedure
            _context3.next = 14;
            break;
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0); // Xử lý lỗi nếu có
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 11]]);
    }));
    return function (_x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  }());
};
var checkDataChuaXacNhan = function checkDataChuaXacNhan(KhoTaiSan_Id, KhoQuanLy) {
  return new Promise(/*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _index["default"].sequelize.query('CALL sp_checkdata_chuakiemke(:KhoTaiSan_Id,:KhoQuanLy)', {
              replacements: {
                KhoTaiSan_Id: KhoTaiSan_Id,
                KhoQuanLy: KhoQuanLy
              },
              raw: false
            });
          case 3:
            data = _context4.sent;
            //console.log('data', data.length)
            if (data.length > 0) {
              resolve({
                errCode: 0,
                errMessage: 'Khoa phòng còn dữ liệu chưa kiểm kê'
              });
            } else {
              resolve({
                errCode: 1,
                errMessage: 'Khoa phòng không có dữ liệu chưa kiểm kê'
              });
            }
            _context4.next = 10;
            break;
          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            reject(_context4.t0);
          case 10:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 7]]);
    }));
    return function (_x7, _x8) {
      return _ref5.apply(this, arguments);
    };
  }());
};
var xacNhanThemTaiSan = function xacNhanThemTaiSan(KhoTaiSan_Id, tenTaiSan, nhapTenTaiSan, KhoQuanLy, UserId, DotKiemKe_Id, KhoaPhongHienTai) {
  return new Promise(/*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
      var NgayTao, NamKiemKe, _checklankiem$, checklankiem, LanKiemKe;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            NgayTao = new Date();
            NamKiemKe = NgayTao.getFullYear();
            if (!(!tenTaiSan && !nhapTenTaiSan)) {
              _context5.next = 7;
              break;
            }
            //console.log('check', KhoTaiSan_Id, tenTaiSan, nhapTenTaiSan, KhoQuanLy)
            resolve({
              errCode: 1,
              errMessage: 'Tên tài sản không được để trống'
            });
            _context5.next = 14;
            break;
          case 7:
            _context5.next = 9;
            return _index["default"].sequelize.query('CALL sp_checklan_kiemke(:KhoTaiSan_Id,:KhoQuanLy)', {
              replacements: {
                KhoTaiSan_Id: KhoTaiSan_Id,
                KhoQuanLy: KhoQuanLy
              },
              raw: false
            });
          case 9:
            checklankiem = _context5.sent;
            LanKiemKe = (_checklankiem$ = checklankiem[0]) === null || _checklankiem$ === void 0 ? void 0 : _checklankiem$.LanKiemKe;
            _context5.next = 13;
            return _index["default"].Data_KiemKe.create({
              TenTaiSan: tenTaiSan || nhapTenTaiSan,
              KhoDuoc_Id: KhoTaiSan_Id,
              KhoaQuanLy: KhoQuanLy,
              LanKiemKe: LanKiemKe + 1,
              IsCheckKiemKe: 1,
              SoLuong: 0,
              SoLuongThucTe: 1,
              ChenhLech: 1,
              NguoiTao: UserId,
              TrangThaiKiemKe: 0,
              NgayKiemKe: NgayTao,
              NamKiemKe: NamKiemKe,
              DotKiemKe_Id: DotKiemKe_Id,
              KhoaPhongHienTai: KhoaPhongHienTai
            });
          case 13:
            resolve({
              errCode: 0,
              errMessage: 'Thêm tài sản thành công'
            });
            //console.log('xacNhanThemTaiSan', KhoTaiSan_Id, tenTaiSan, nhapTenTaiSan, KhoQuanLy)
          case 14:
            _context5.next = 19;
            break;
          case 16:
            _context5.prev = 16;
            _context5.t0 = _context5["catch"](0);
            reject(_context5.t0);
          case 19:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 16]]);
    }));
    return function (_x9, _x10) {
      return _ref6.apply(this, arguments);
    };
  }());
};
var getAllDVT = function getAllDVT() {
  return new Promise(/*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
      var request, getdata, data;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            request = _index["default"].sqlhis2Connection.request();
            _context6.next = 4;
            return request.execute('[sp_QLPO_DANHMUC_DVT]');
          case 4:
            getdata = _context6.sent;
            // Lấy dữ liệu từ recordset
            data = getdata.recordset; //console.log('recordset', data)
            resolve(data);
            _context6.next = 12;
            break;
          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](0);
            reject(_context6.t0);
          case 12:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 9]]);
    }));
    return function (_x11, _x12) {
      return _ref7.apply(this, arguments);
    };
  }());
};
var getAllNhanVien = function getAllNhanVien() {
  return new Promise(/*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve, reject) {
      var request, getdata, data;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            request = _index["default"].sqlConnection.request();
            _context7.next = 4;
            return request.execute('[sp_QLPO_DANHMUC_NHANVIEN]');
          case 4:
            getdata = _context7.sent;
            // Lấy dữ liệu từ recordset
            data = getdata.recordset; //console.log('recordset', data)
            resolve(data);
            _context7.next = 12;
            break;
          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7["catch"](0);
            reject(_context7.t0);
          case 12:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 9]]);
    }));
    return function (_x13, _x14) {
      return _ref8.apply(this, arguments);
    };
  }());
};
var getAllNguoiLap = function getAllNguoiLap() {
  return new Promise(/*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_all_nguoilap', {
              // replacements: { id: 2 },
              raw: false
            });
          case 3:
            data = _context8.sent;
            resolve(data);
            _context8.next = 10;
            break;
          case 7:
            _context8.prev = 7;
            _context8.t0 = _context8["catch"](0);
            reject(_context8.t0);
          case 10:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 7]]);
    }));
    return function (_x15, _x16) {
      return _ref9.apply(this, arguments);
    };
  }());
};
var getKeToanTruong = function getKeToanTruong() {
  return new Promise(/*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_all_ketoantruong', {
              // replacements: { id: 2 },
              raw: false
            });
          case 3:
            data = _context9.sent;
            resolve(data);
            _context9.next = 10;
            break;
          case 7:
            _context9.prev = 7;
            _context9.t0 = _context9["catch"](0);
            reject(_context9.t0);
          case 10:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 7]]);
    }));
    return function (_x17, _x18) {
      return _ref10.apply(this, arguments);
    };
  }());
};
var getKeToanTaiSan = function getKeToanTaiSan() {
  return new Promise(/*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_all_ketoantaisan', {
              // replacements: { id: 2 },
              raw: false
            });
          case 3:
            data = _context10.sent;
            resolve(data);
            _context10.next = 10;
            break;
          case 7:
            _context10.prev = 7;
            _context10.t0 = _context10["catch"](0);
            reject(_context10.t0);
          case 10:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[0, 7]]);
    }));
    return function (_x19, _x20) {
      return _ref11.apply(this, arguments);
    };
  }());
};
var getGiamDoc = function getGiamDoc() {
  return new Promise(/*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_all_giamdoc', {
              // replacements: { id: 2 },
              raw: false
            });
          case 3:
            data = _context11.sent;
            resolve(data);
            _context11.next = 10;
            break;
          case 7:
            _context11.prev = 7;
            _context11.t0 = _context11["catch"](0);
            reject(_context11.t0);
          case 10:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[0, 7]]);
    }));
    return function (_x21, _x22) {
      return _ref12.apply(this, arguments);
    };
  }());
};
var getAllNhanVienPhong = function getAllNhanVienPhong() {
  return new Promise(/*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(resolve, reject) {
      var request, getdata, data;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            request = _index["default"].sqlConnection.request();
            _context12.next = 4;
            return request.execute('[sp_QLPO_DANHMUC_NHANVIEN_PHONG]');
          case 4:
            getdata = _context12.sent;
            // Lấy dữ liệu từ recordset
            data = getdata.recordset; //console.log('recordset', data)
            resolve(data);
            _context12.next = 12;
            break;
          case 9:
            _context12.prev = 9;
            _context12.t0 = _context12["catch"](0);
            reject(_context12.t0);
          case 12:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[0, 9]]);
    }));
    return function (_x23, _x24) {
      return _ref13.apply(this, arguments);
    };
  }());
};
var getAllBV = function getAllBV() {
  return new Promise(/*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(resolve, reject) {
      var request, getdata, data;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            request = _index["default"].sqlhis2Connection.request();
            _context13.next = 4;
            return request.execute('[sp_QLPO_DANHMUC_BV]');
          case 4:
            getdata = _context13.sent;
            // Lấy dữ liệu từ recordset
            data = getdata.recordset; //console.log('recordset', data)
            resolve(data);
            _context13.next = 12;
            break;
          case 9:
            _context13.prev = 9;
            _context13.t0 = _context13["catch"](0);
            reject(_context13.t0);
          case 12:
          case "end":
            return _context13.stop();
        }
      }, _callee13, null, [[0, 9]]);
    }));
    return function (_x25, _x26) {
      return _ref14.apply(this, arguments);
    };
  }());
};
var getAllKho = function getAllKho() {
  return new Promise(/*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(resolve, reject) {
      var request, getdata, data;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            request = _index["default"].sqlhis2Connection.request();
            _context14.next = 4;
            return request.execute('[sp_QLPO_GETALL_KHO]');
          case 4:
            getdata = _context14.sent;
            // Lấy dữ liệu từ recordset
            data = getdata.recordset; //console.log('recordset', data)
            resolve(data);
            _context14.next = 12;
            break;
          case 9:
            _context14.prev = 9;
            _context14.t0 = _context14["catch"](0);
            reject(_context14.t0);
          case 12:
          case "end":
            return _context14.stop();
        }
      }, _callee14, null, [[0, 9]]);
    }));
    return function (_x27, _x28) {
      return _ref15.apply(this, arguments);
    };
  }());
};
var getAllKhoEdit = function getAllKhoEdit() {
  return new Promise(/*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(resolve, reject) {
      var request, getdata, data;
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            request = _index["default"].sqlhis2Connection.request();
            _context15.next = 4;
            return request.execute('[sp_QLPO_GETALL_KHO]');
          case 4:
            getdata = _context15.sent;
            // Lấy dữ liệu từ recordset
            data = getdata.recordset; //console.log('recordset', data)
            resolve(data);
            _context15.next = 12;
            break;
          case 9:
            _context15.prev = 9;
            _context15.t0 = _context15["catch"](0);
            reject(_context15.t0);
          case 12:
          case "end":
            return _context15.stop();
        }
      }, _callee15, null, [[0, 9]]);
    }));
    return function (_x29, _x30) {
      return _ref16.apply(this, arguments);
    };
  }());
};
var getAllViTri = function getAllViTri() {
  return new Promise(/*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(resolve, reject) {
      var request, getdata, data;
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            _context16.prev = 0;
            request = _index["default"].sqlhis2Connection.request();
            _context16.next = 4;
            return request.execute('[sp_QLPO_GETALL_ViTri]');
          case 4:
            getdata = _context16.sent;
            // Lấy dữ liệu từ recordset
            data = getdata.recordset; //console.log('recordset', data)
            resolve(data);
            _context16.next = 12;
            break;
          case 9:
            _context16.prev = 9;
            _context16.t0 = _context16["catch"](0);
            reject(_context16.t0);
          case 12:
          case "end":
            return _context16.stop();
        }
      }, _callee16, null, [[0, 9]]);
    }));
    return function (_x31, _x32) {
      return _ref17.apply(this, arguments);
    };
  }());
};
var getAllTinhTrang = function getAllTinhTrang() {
  return new Promise(/*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee17$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            _context17.prev = 0;
            _context17.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_all_tinhtrang', {
              // replacements: { id: 2 },
              raw: false
            });
          case 3:
            data = _context17.sent;
            resolve(data);
            _context17.next = 10;
            break;
          case 7:
            _context17.prev = 7;
            _context17.t0 = _context17["catch"](0);
            reject(_context17.t0);
          case 10:
          case "end":
            return _context17.stop();
        }
      }, _callee17, null, [[0, 7]]);
    }));
    return function (_x33, _x34) {
      return _ref18.apply(this, arguments);
    };
  }());
};

// let getAllKhoQL = (KhoTaiSan_Id) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let data = await db.sequelize.query('CALL sp_get_all_khoquanly(:KhoTaiSan_Id)',
//                 {
//                     replacements: { KhoTaiSan_Id: KhoTaiSan_Id },
//                     raw: false
//                 }
//             );
//             resolve(data);

//         } catch (e) {
//             reject(e)
//         }
//     })
// }

var getAllKhoQL = function getAllKhoQL() {
  return new Promise(/*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee18$(_context18) {
        while (1) switch (_context18.prev = _context18.next) {
          case 0:
            _context18.prev = 0;
            _context18.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_all_khoquanly', {
              //replacements: { KhoTaiSan_Id: KhoTaiSan_Id },
              raw: false
            });
          case 3:
            data = _context18.sent;
            resolve(data);
            _context18.next = 10;
            break;
          case 7:
            _context18.prev = 7;
            _context18.t0 = _context18["catch"](0);
            reject(_context18.t0);
          case 10:
          case "end":
            return _context18.stop();
        }
      }, _callee18, null, [[0, 7]]);
    }));
    return function (_x35, _x36) {
      return _ref19.apply(this, arguments);
    };
  }());
};
var getAllKhoQLTK = function getAllKhoQLTK() {
  return new Promise(/*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee19$(_context19) {
        while (1) switch (_context19.prev = _context19.next) {
          case 0:
            _context19.prev = 0;
            _context19.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_all_khoquanly_tiemkiem', {
              //replacements: { KhoTaiSan_Id: KhoTaiSan_Id },
              raw: false
            });
          case 3:
            data = _context19.sent;
            resolve(data);
            _context19.next = 10;
            break;
          case 7:
            _context19.prev = 7;
            _context19.t0 = _context19["catch"](0);
            reject(_context19.t0);
          case 10:
          case "end":
            return _context19.stop();
        }
      }, _callee19, null, [[0, 7]]);
    }));
    return function (_x37, _x38) {
      return _ref20.apply(this, arguments);
    };
  }());
};
var getAllPL = function getAllPL() {
  return new Promise(/*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(resolve, reject) {
      var request, getdata, data;
      return _regeneratorRuntime().wrap(function _callee20$(_context20) {
        while (1) switch (_context20.prev = _context20.next) {
          case 0:
            _context20.prev = 0;
            request = _index["default"].sqlhis2Connection.request();
            _context20.next = 4;
            return request.execute('[sp_QLPO_DANHMUC_PHANLOAI]');
          case 4:
            getdata = _context20.sent;
            // Lấy dữ liệu từ recordset
            data = getdata.recordset; //console.log('recordset', data)
            resolve(data);
            _context20.next = 12;
            break;
          case 9:
            _context20.prev = 9;
            _context20.t0 = _context20["catch"](0);
            reject(_context20.t0);
          case 12:
          case "end":
            return _context20.stop();
        }
      }, _callee20, null, [[0, 9]]);
    }));
    return function (_x39, _x40) {
      return _ref21.apply(this, arguments);
    };
  }());
};
var getAllTGBH = function getAllTGBH() {
  return new Promise(/*#__PURE__*/function () {
    var _ref22 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(resolve, reject) {
      var request, getdata, data;
      return _regeneratorRuntime().wrap(function _callee21$(_context21) {
        while (1) switch (_context21.prev = _context21.next) {
          case 0:
            _context21.prev = 0;
            request = _index["default"].sqlhis2Connection.request();
            _context21.next = 4;
            return request.execute('[sp_QLPO_DANHMUC_TGBH]');
          case 4:
            getdata = _context21.sent;
            // Lấy dữ liệu từ recordset
            data = getdata.recordset; //console.log('recordset', data)
            resolve(data);
            _context21.next = 12;
            break;
          case 9:
            _context21.prev = 9;
            _context21.t0 = _context21["catch"](0);
            reject(_context21.t0);
          case 12:
          case "end":
            return _context21.stop();
        }
      }, _callee21, null, [[0, 9]]);
    }));
    return function (_x41, _x42) {
      return _ref22.apply(this, arguments);
    };
  }());
};
var getAllTGKH = function getAllTGKH() {
  return new Promise(/*#__PURE__*/function () {
    var _ref23 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(resolve, reject) {
      var request, getdata, data;
      return _regeneratorRuntime().wrap(function _callee22$(_context22) {
        while (1) switch (_context22.prev = _context22.next) {
          case 0:
            _context22.prev = 0;
            request = _index["default"].sqlhis2Connection.request();
            _context22.next = 4;
            return request.execute('[sp_QLPO_DANHMUC_TGKH]');
          case 4:
            getdata = _context22.sent;
            // Lấy dữ liệu từ recordset
            data = getdata.recordset; //console.log('recordset', data)
            resolve(data);
            _context22.next = 12;
            break;
          case 9:
            _context22.prev = 9;
            _context22.t0 = _context22["catch"](0);
            reject(_context22.t0);
          case 12:
          case "end":
            return _context22.stop();
        }
      }, _callee22, null, [[0, 9]]);
    }));
    return function (_x43, _x44) {
      return _ref23.apply(this, arguments);
    };
  }());
};
var editTaiSan = function editTaiSan(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref24 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23(resolve, reject) {
      var request, getdata;
      return _regeneratorRuntime().wrap(function _callee23$(_context23) {
        while (1) switch (_context23.prev = _context23.next) {
          case 0:
            _context23.prev = 0;
            //console.log('data', data.ThoiGianMua)
            request = _index["default"].sqlhis2Connection.request();
            request.input('MaTaiSan', data.MaTaiSan);
            request.input('MaTaiSanNew', data.MaTaiSanNew);
            request.input('Duoc_Id', data.Duoc_Id);
            request.input('TenDuoc_Id', data.TenDuoc_Id);
            request.input('TenHang', data.TenHang);
            request.input('Serial', data.Serial);
            request.input('DonViTinh_Id', data.DonViTinh_Id);
            request.input('Model', data.Model);
            request.input('PhanLoai_Id', data.PhanLoai_Id);
            request.input('ThoiGianBaoHanh_Id', data.ThoiGianBaoHanh_Id);
            request.input('ThoiGianKhauHao_Id', data.ThoiGianKhauHao_Id);
            request.input('BenhVien_Id', data.BenhVien_Id);
            request.input('HangSanXuat', data.HangSanXuat);
            request.input('Book', data.Book);
            request.input('Account', data.Account);
            request.input('SubAccount', data.SubAccount);
            request.input('BudgetOwner', data.BudgetOwner);
            request.input('Budget', data.Budget);
            request.input('Invoice', data.Invoice);
            request.input('Categories', data.Categories);
            request.input('NamSuDung', data.NamSuDung);
            request.input('ThoiGianMua', data.ThoiGianMua);
            request.input('ThoiGianTinhKhauHao', data.ThoiGianTinhKhauHao);
            // request.input('ThoiGianMua', new Date(`${data.ThoiGianMua}T00:00:00.000Z`).toISOString());
            // request.input('ThoiGianTinhKhauHao', new Date(`${data.ThoiGianTinhKhauHao}T00:00:00.000Z`).toISOString());
            request.input('Loai', data.Loai);
            request.input('GhiChu', data.GhiChu);
            request.input('NguoiCapNhap', data.UserId);
            _context23.next = 30;
            return request.execute('[sp_QLPO_UPDATE_TAISAN]');
          case 30:
            getdata = _context23.sent;
            // // Lấy dữ liệu từ recordset
            // const data = getdata.recordset;

            resolve({
              errCode: 0,
              errMessage: 'Sửa thông tin thành công'
            });
            _context23.next = 38;
            break;
          case 34:
            _context23.prev = 34;
            _context23.t0 = _context23["catch"](0);
            console.log("Database error:", _context23.t0);
            reject(_context23.t0);
          case 38:
          case "end":
            return _context23.stop();
        }
      }, _callee23, null, [[0, 34]]);
    }));
    return function (_x45, _x46) {
      return _ref24.apply(this, arguments);
    };
  }());
};
var newTaiSan = function newTaiSan(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref25 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24(resolve, reject) {
      var sql, now, minutes, seconds, randomNum, MaTenDuoc, data_user, NguoiTao_Id, request, getdata;
      return _regeneratorRuntime().wrap(function _callee24$(_context24) {
        while (1) switch (_context24.prev = _context24.next) {
          case 0:
            _context24.prev = 0;
            sql = require('mssql');
            now = new Date();
            minutes = String(now.getMinutes()).padStart(2, '0');
            seconds = String(now.getSeconds()).padStart(2, '0'); // Tạo số ngẫu nhiên từ 1000 đến 9999
            randomNum = Math.floor(Math.random() * 9000) + 1000; // Kết hợp lại thành chuỗi
            MaTenDuoc = "".concat(minutes).concat(seconds).concat(randomNum); //console.log('code', code)
            _context24.next = 9;
            return _index["default"].User.findOne({
              attributes: ['user_ehos_id'],
              where: {
                id: data.UserId
              },
              raw: true
            });
          case 9:
            data_user = _context24.sent;
            NguoiTao_Id = data_user.user_ehos_id; //console.log('User_Id', data)
            request = _index["default"].sqlhis2Connection.request();
            request.input('MaTenDuoc', MaTenDuoc);
            request.input('NguoiTao_Id', NguoiTao_Id);
            request.input('MaTaiSan', data.MaTaiSan);
            request.input('MaTaiSanNew', data.MaTaiSanNew);
            //request.input('Duoc_Id', data.Duoc_Id);
            //request.input('TenDuoc_Id', data.TenDuoc_Id);
            request.input('TenHang', data.TenHang);
            request.input('Serial', data.Serial);
            request.input('DonViTinh_Id', data.DonViTinh_Id.DonViTinh_Id);
            request.input('Model', data.Model);
            request.input('PhanLoai_Id', data.PhanLoai_Id.PhanLoai_Id);
            request.input('ThoiGianBaoHanh_Id', data.ThoiGianBaoHanh_Id.ThoiGianBaoHanh_Id);
            request.input('ThoiGianKhauHao_Id', data.ThoiGianKhauHao_Id.ThoiGianKhauHao_Id);
            request.input('BenhVien_Id', data.BenhVien_Id.BenhVien_Id);
            request.input('HangSanXuat', data.HangSanXuat);
            request.input('Book', data.Book);
            request.input('Account', sql.Int, parseInt(data.Account, 10));
            request.input('SubAccount', sql.Int, parseInt(data.SubAccount, 10));
            request.input('BudgetOwner', data.BudgetOwner);
            request.input('Budget', data.Budget);
            request.input('Invoice', data.Invoice);
            request.input('Categories', data.Categories);
            request.input('NamSuDung', sql.Int, parseInt(data.NamSuDung, 10));
            request.input('Loai', data.Loai);
            request.input('GhiChu', data.GhiChu);
            request.input('ThoiGianMua', data.ThoiGianMua);
            request.input('ThoiGianTinhKhauHao', data.ThoiGianTinhKhauHao);
            _context24.next = 39;
            return request.execute('[sp_QLPO_ADD_TAISAN]');
          case 39:
            getdata = _context24.sent;
            resolve({
              errCode: 0,
              errMessage: 'Tạo mới tài sản thành công'
            });
            _context24.next = 47;
            break;
          case 43:
            _context24.prev = 43;
            _context24.t0 = _context24["catch"](0);
            console.log("Database error:", _context24.t0);
            reject(_context24.t0);
          case 47:
          case "end":
            return _context24.stop();
        }
      }, _callee24, null, [[0, 43]]);
    }));
    return function (_x47, _x48) {
      return _ref25.apply(this, arguments);
    };
  }());
};
var checkXoaTS = function checkXoaTS(Duoc_Id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref26 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25(resolve, reject) {
      var request, getdata, checkxoats;
      return _regeneratorRuntime().wrap(function _callee25$(_context25) {
        while (1) switch (_context25.prev = _context25.next) {
          case 0:
            _context25.prev = 0;
            request = _index["default"].sqlhis2Connection.request();
            request.input('Duoc_Id', Duoc_Id);
            _context25.next = 5;
            return request.execute('[sp_QLPO_CHECK_DELETE_TAISAN]');
          case 5:
            getdata = _context25.sent;
            checkxoats = getdata.recordset;
            if (checkxoats.length === 0) {
              resolve({
                errCode: 0
              });
            } else {
              resolve({
                errCode: 1,
                errMessage: 'Tài sản đã phát sinh nhập NCC, không được xóa.'
              });
            }
            _context25.next = 13;
            break;
          case 10:
            _context25.prev = 10;
            _context25.t0 = _context25["catch"](0);
            reject(_context25.t0);
          case 13:
          case "end":
            return _context25.stop();
        }
      }, _callee25, null, [[0, 10]]);
    }));
    return function (_x49, _x50) {
      return _ref26.apply(this, arguments);
    };
  }());
};
var getAllCT = function getAllCT() {
  return new Promise(/*#__PURE__*/function () {
    var _ref27 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee26$(_context26) {
        while (1) switch (_context26.prev = _context26.next) {
          case 0:
            _context26.prev = 0;
            _context26.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_all_ct', {
              // replacements: { id: 2 },
              raw: false
            });
          case 3:
            data = _context26.sent;
            resolve(data);
            _context26.next = 10;
            break;
          case 7:
            _context26.prev = 7;
            _context26.t0 = _context26["catch"](0);
            reject(_context26.t0);
          case 10:
          case "end":
            return _context26.stop();
        }
      }, _callee26, null, [[0, 7]]);
    }));
    return function (_x51, _x52) {
      return _ref27.apply(this, arguments);
    };
  }());
};
var getCheckAllCT = function getCheckAllCT() {
  return new Promise(/*#__PURE__*/function () {
    var _ref28 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee27$(_context27) {
        while (1) switch (_context27.prev = _context27.next) {
          case 0:
            _context27.prev = 0;
            _context27.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_check_all_ct', {
              // replacements: { id: 2 },
              raw: false
            });
          case 3:
            data = _context27.sent;
            resolve(data);
            _context27.next = 10;
            break;
          case 7:
            _context27.prev = 7;
            _context27.t0 = _context27["catch"](0);
            reject(_context27.t0);
          case 10:
          case "end":
            return _context27.stop();
        }
      }, _callee27, null, [[0, 7]]);
    }));
    return function (_x53, _x54) {
      return _ref28.apply(this, arguments);
    };
  }());
};
var getCheckAll = function getCheckAll(machungtu) {
  return new Promise(/*#__PURE__*/function () {
    var _ref29 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee28(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee28$(_context28) {
        while (1) switch (_context28.prev = _context28.next) {
          case 0:
            _context28.prev = 0;
            _context28.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_check_all(:machungtu)', {
              replacements: {
                machungtu: machungtu
              },
              raw: false
            });
          case 3:
            data = _context28.sent;
            //console.log('data', data)
            resolve(data);
            _context28.next = 10;
            break;
          case 7:
            _context28.prev = 7;
            _context28.t0 = _context28["catch"](0);
            reject(_context28.t0);
          case 10:
          case "end":
            return _context28.stop();
        }
      }, _callee28, null, [[0, 7]]);
    }));
    return function (_x55, _x56) {
      return _ref29.apply(this, arguments);
    };
  }());
};
var getAllLogChungTuHopDong = function getAllLogChungTuHopDong(nhacungcap_id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref30 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee29(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee29$(_context29) {
        while (1) switch (_context29.prev = _context29.next) {
          case 0:
            _context29.prev = 0;
            _context29.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_all_log_chungtu_hopdong(:nhacungcap_id)', {
              replacements: {
                nhacungcap_id: nhacungcap_id
              },
              raw: false
            });
          case 3:
            data = _context29.sent;
            resolve(data);
            _context29.next = 10;
            break;
          case 7:
            _context29.prev = 7;
            _context29.t0 = _context29["catch"](0);
            reject(_context29.t0);
          case 10:
          case "end":
            return _context29.stop();
        }
      }, _callee29, null, [[0, 7]]);
    }));
    return function (_x57, _x58) {
      return _ref30.apply(this, arguments);
    };
  }());
};
var getCheckAllLogChungTuHopDong = function getCheckAllLogChungTuHopDong(nhacungcap_id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref31 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee30(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee30$(_context30) {
        while (1) switch (_context30.prev = _context30.next) {
          case 0:
            _context30.prev = 0;
            _context30.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_check_all_log_chungtu_hopdong(:nhacungcap_id)', {
              replacements: {
                nhacungcap_id: nhacungcap_id
              },
              raw: false
            });
          case 3:
            data = _context30.sent;
            resolve(data);
            _context30.next = 10;
            break;
          case 7:
            _context30.prev = 7;
            _context30.t0 = _context30["catch"](0);
            reject(_context30.t0);
          case 10:
          case "end":
            return _context30.stop();
        }
      }, _callee30, null, [[0, 7]]);
    }));
    return function (_x59, _x60) {
      return _ref31.apply(this, arguments);
    };
  }());
};
var getAllLogChungTuPO = function getAllLogChungTuPO(sopo) {
  return new Promise(/*#__PURE__*/function () {
    var _ref32 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee31(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee31$(_context31) {
        while (1) switch (_context31.prev = _context31.next) {
          case 0:
            _context31.prev = 0;
            _context31.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_all_log_chungtu_po(:sopo)', {
              replacements: {
                sopo: sopo
              },
              raw: false
            });
          case 3:
            data = _context31.sent;
            resolve(data);
            _context31.next = 10;
            break;
          case 7:
            _context31.prev = 7;
            _context31.t0 = _context31["catch"](0);
            reject(_context31.t0);
          case 10:
          case "end":
            return _context31.stop();
        }
      }, _callee31, null, [[0, 7]]);
    }));
    return function (_x61, _x62) {
      return _ref32.apply(this, arguments);
    };
  }());
};
var getCheckAllLogChungTuPO = function getCheckAllLogChungTuPO(sopo) {
  return new Promise(/*#__PURE__*/function () {
    var _ref33 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee32(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee32$(_context32) {
        while (1) switch (_context32.prev = _context32.next) {
          case 0:
            _context32.prev = 0;
            _context32.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_check_all_log_chungtu_po(:sopo)', {
              replacements: {
                sopo: sopo
              },
              raw: false
            });
          case 3:
            data = _context32.sent;
            resolve(data);
            _context32.next = 10;
            break;
          case 7:
            _context32.prev = 7;
            _context32.t0 = _context32["catch"](0);
            reject(_context32.t0);
          case 10:
          case "end":
            return _context32.stop();
        }
      }, _callee32, null, [[0, 7]]);
    }));
    return function (_x63, _x64) {
      return _ref33.apply(this, arguments);
    };
  }());
};
var getAllLogPOPR = function getAllLogPOPR(sopr) {
  return new Promise(/*#__PURE__*/function () {
    var _ref34 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee33(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee33$(_context33) {
        while (1) switch (_context33.prev = _context33.next) {
          case 0:
            _context33.prev = 0;
            _context33.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_all_log_po_pr(:sopr)', {
              replacements: {
                sopr: sopr
              },
              raw: false
            });
          case 3:
            data = _context33.sent;
            resolve(data);
            _context33.next = 10;
            break;
          case 7:
            _context33.prev = 7;
            _context33.t0 = _context33["catch"](0);
            reject(_context33.t0);
          case 10:
          case "end":
            return _context33.stop();
        }
      }, _callee33, null, [[0, 7]]);
    }));
    return function (_x65, _x66) {
      return _ref34.apply(this, arguments);
    };
  }());
};
var getLogPOPR = function getLogPOPR(sopr) {
  return new Promise(/*#__PURE__*/function () {
    var _ref35 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee34(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee34$(_context34) {
        while (1) switch (_context34.prev = _context34.next) {
          case 0:
            _context34.prev = 0;
            _context34.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_all_log_popr(:sopr)', {
              replacements: {
                sopr: sopr
              },
              raw: false
            });
          case 3:
            data = _context34.sent;
            resolve(data);
            _context34.next = 10;
            break;
          case 7:
            _context34.prev = 7;
            _context34.t0 = _context34["catch"](0);
            reject(_context34.t0);
          case 10:
          case "end":
            return _context34.stop();
        }
      }, _callee34, null, [[0, 7]]);
    }));
    return function (_x67, _x68) {
      return _ref35.apply(this, arguments);
    };
  }());
};
var getCheckHopDong = function getCheckHopDong(nhacungcap_id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref36 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee35(resolve, reject) {
      var check_hd;
      return _regeneratorRuntime().wrap(function _callee35$(_context35) {
        while (1) switch (_context35.prev = _context35.next) {
          case 0:
            _context35.prev = 0;
            _context35.next = 3;
            return _index["default"].Data_HD.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                nhacungcap_id: nhacungcap_id,
                dacheckvoict: 1
              },
              raw: true
            });
          case 3:
            check_hd = _context35.sent;
            //console.log('check_hd', check_hd)
            if (check_hd.length > 0) {
              resolve({
                errCode: 1,
                data: check_hd,
                errMessage: 'Hợp động đã phát sinh chứng từ kiểm tra. Không thể xóa'
              });
            } else {
              resolve({
                errCode: 0,
                data: check_hd,
                errMessage: 'Khóa button thanh toán thành công'
              });
            }
            _context35.next = 10;
            break;
          case 7:
            _context35.prev = 7;
            _context35.t0 = _context35["catch"](0);
            reject(_context35.t0);
          case 10:
          case "end":
            return _context35.stop();
        }
      }, _callee35, null, [[0, 7]]);
    }));
    return function (_x69, _x70) {
      return _ref36.apply(this, arguments);
    };
  }());
};
var getCheckPO = function getCheckPO(sopo) {
  return new Promise(/*#__PURE__*/function () {
    var _ref37 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee36(resolve, reject) {
      var check_po;
      return _regeneratorRuntime().wrap(function _callee36$(_context36) {
        while (1) switch (_context36.prev = _context36.next) {
          case 0:
            _context36.prev = 0;
            _context36.next = 3;
            return _index["default"].sequelize.query('CALL sp_check_po(:sopo)', {
              replacements: {
                sopo: sopo
              },
              raw: false
            });
          case 3:
            check_po = _context36.sent;
            //console.log('check_hd', check_hd)
            if (check_po.length > 0) {
              resolve({
                errCode: 1,
                data: check_po,
                errMessage: 'PO đã phát sinh chứng từ kiểm tra. Không thể xóa'
              });
            } else {
              resolve({
                errCode: 0,
                data: check_po,
                errMessage: 'Khóa button thanh toán thành công'
              });
            }
            _context36.next = 10;
            break;
          case 7:
            _context36.prev = 7;
            _context36.t0 = _context36["catch"](0);
            reject(_context36.t0);
          case 10:
          case "end":
            return _context36.stop();
        }
      }, _callee36, null, [[0, 7]]);
    }));
    return function (_x71, _x72) {
      return _ref37.apply(this, arguments);
    };
  }());
};
var getCheckEditMaTaiSanPO = function getCheckEditMaTaiSanPO(sopo, mataisan) {
  return new Promise(/*#__PURE__*/function () {
    var _ref38 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee37(resolve, reject) {
      var check_po;
      return _regeneratorRuntime().wrap(function _callee37$(_context37) {
        while (1) switch (_context37.prev = _context37.next) {
          case 0:
            _context37.prev = 0;
            _context37.next = 3;
            return _index["default"].sequelize.query('CALL sp_check_editpo(:sopo,:mataisan)', {
              replacements: {
                sopo: sopo,
                mataisan: mataisan
              },
              raw: false
            });
          case 3:
            check_po = _context37.sent;
            //console.log('check_po', check_po.length)
            if (check_po.length > 0) {
              resolve({
                errCode: 0,
                data: check_po,
                errMessage: 'Khóa button thanh toán thành công'
              });
            } else {
              resolve({
                errCode: 1,
                data: check_po,
                errMessage: 'PO đã phát sinh chứng từ kiểm tra. Không thể xóa'
              });
            }
            _context37.next = 10;
            break;
          case 7:
            _context37.prev = 7;
            _context37.t0 = _context37["catch"](0);
            reject(_context37.t0);
          case 10:
          case "end":
            return _context37.stop();
        }
      }, _callee37, null, [[0, 7]]);
    }));
    return function (_x73, _x74) {
      return _ref38.apply(this, arguments);
    };
  }());
};
var getCheckEditSoLuongPO = function getCheckEditSoLuongPO(sopo, mataisan) {
  return new Promise(/*#__PURE__*/function () {
    var _ref39 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee38(resolve, reject) {
      var check_po;
      return _regeneratorRuntime().wrap(function _callee38$(_context38) {
        while (1) switch (_context38.prev = _context38.next) {
          case 0:
            _context38.prev = 0;
            _context38.next = 3;
            return _index["default"].sequelize.query('CALL sp_check_editslpo(:sopo,:mataisan)', {
              replacements: {
                sopo: sopo,
                mataisan: mataisan
              },
              raw: false
            });
          case 3:
            check_po = _context38.sent;
            //console.log('check_po', check_po.length)
            if (check_po.length > 0) {
              resolve({
                errCode: 0,
                data: check_po,
                errMessage: 'Khóa button thanh toán thành công'
              });
            } else {
              resolve({
                errCode: 1,
                data: check_po,
                errMessage: 'PO đã phát sinh chứng từ kiểm tra. Không thể xóa'
              });
            }
            _context38.next = 10;
            break;
          case 7:
            _context38.prev = 7;
            _context38.t0 = _context38["catch"](0);
            reject(_context38.t0);
          case 10:
          case "end":
            return _context38.stop();
        }
      }, _callee38, null, [[0, 7]]);
    }));
    return function (_x75, _x76) {
      return _ref39.apply(this, arguments);
    };
  }());
};
var getCheckEditMaTaiSanPR = function getCheckEditMaTaiSanPR(sopr, mataisan) {
  return new Promise(/*#__PURE__*/function () {
    var _ref40 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee39(resolve, reject) {
      var check_po;
      return _regeneratorRuntime().wrap(function _callee39$(_context39) {
        while (1) switch (_context39.prev = _context39.next) {
          case 0:
            _context39.prev = 0;
            _context39.next = 3;
            return _index["default"].sequelize.query('CALL sp_check_editpr(:sopr,:mataisan)', {
              replacements: {
                sopr: sopr,
                mataisan: mataisan
              },
              raw: false
            });
          case 3:
            check_po = _context39.sent;
            //console.log('check_hd', check_hd)
            if (check_po.length > 0) {
              resolve({
                errCode: 0,
                data: check_po,
                errMessage: 'Khóa button thanh toán thành công'
              });
            } else {
              resolve({
                errCode: 1,
                data: check_po,
                errMessage: 'PO đã phát sinh chứng từ kiểm tra. Không thể xóa'
              });
            }
            _context39.next = 10;
            break;
          case 7:
            _context39.prev = 7;
            _context39.t0 = _context39["catch"](0);
            reject(_context39.t0);
          case 10:
          case "end":
            return _context39.stop();
        }
      }, _callee39, null, [[0, 7]]);
    }));
    return function (_x77, _x78) {
      return _ref40.apply(this, arguments);
    };
  }());
};
var getCheckPR = function getCheckPR(sopr) {
  return new Promise(/*#__PURE__*/function () {
    var _ref41 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee40(resolve, reject) {
      var check_pr;
      return _regeneratorRuntime().wrap(function _callee40$(_context40) {
        while (1) switch (_context40.prev = _context40.next) {
          case 0:
            _context40.prev = 0;
            _context40.next = 3;
            return _index["default"].Data_PR.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                sopr: sopr,
                dacheckvoipo: 1
              },
              raw: true
            });
          case 3:
            check_pr = _context40.sent;
            //console.log('check_hd', check_hd)
            if (check_pr.length > 0) {
              resolve({
                errCode: 1,
                data: check_pr,
                errMessage: 'PR đã phát sinh chứng từ kiểm tra. Không thể xóa'
              });
            } else {
              resolve({
                errCode: 0,
                data: check_pr,
                errMessage: 'Khóa button thanh toán thành công'
              });
            }
            _context40.next = 10;
            break;
          case 7:
            _context40.prev = 7;
            _context40.t0 = _context40["catch"](0);
            reject(_context40.t0);
          case 10:
          case "end":
            return _context40.stop();
        }
      }, _callee40, null, [[0, 7]]);
    }));
    return function (_x79, _x80) {
      return _ref41.apply(this, arguments);
    };
  }());
};
var getAllHD = function getAllHD() {
  return new Promise(/*#__PURE__*/function () {
    var _ref42 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee41(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee41$(_context41) {
        while (1) switch (_context41.prev = _context41.next) {
          case 0:
            _context41.prev = 0;
            _context41.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_all_hd', {
              // replacements: { id: 2 },
              raw: false
            });
          case 3:
            data = _context41.sent;
            resolve(data);
            _context41.next = 10;
            break;
          case 7:
            _context41.prev = 7;
            _context41.t0 = _context41["catch"](0);
            reject(_context41.t0);
          case 10:
          case "end":
            return _context41.stop();
        }
      }, _callee41, null, [[0, 7]]);
    }));
    return function (_x81, _x82) {
      return _ref42.apply(this, arguments);
    };
  }());
};
var getAllPR = function getAllPR() {
  return new Promise(/*#__PURE__*/function () {
    var _ref43 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee42(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee42$(_context42) {
        while (1) switch (_context42.prev = _context42.next) {
          case 0:
            _context42.prev = 0;
            _context42.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_all_pr', {
              // replacements: { id: 2 },
              raw: false
            });
          case 3:
            data = _context42.sent;
            resolve(data);
            _context42.next = 10;
            break;
          case 7:
            _context42.prev = 7;
            _context42.t0 = _context42["catch"](0);
            reject(_context42.t0);
          case 10:
          case "end":
            return _context42.stop();
        }
      }, _callee42, null, [[0, 7]]);
    }));
    return function (_x83, _x84) {
      return _ref43.apply(this, arguments);
    };
  }());
};
var importPO = function importPO(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref44 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee43(resolve, reject) {
      var currentTime, convertedData, supplierAndAssets, dataPO_OLD, _iterator, _step, _step$value, sopo, mataisan, _data2, filteredData, _iterator2, _step2, item, _iterator3, _step3, _item, request, getdata, recordset, _require, Op, check_mataisan_dm, updateCheckMataisan, updatedCheckMataisan, _iterator4, _step4, _item2, _data;
      return _regeneratorRuntime().wrap(function _callee43$(_context43) {
        while (1) switch (_context43.prev = _context43.next) {
          case 0:
            _context43.prev = 0;
            currentTime = new Date(); // const convertedData = data.excelData.slice(1).map((item) => {
            convertedData = data.excelData.slice(1) // Bỏ qua phần tử đầu tiên (header)
            .filter(function (item) {
              return Object.keys(item).length > 0 && Object.values(item).some(function (value) {
                return value;
              });
            }) // Lọc các đối tượng rỗng
            .map(function (item) {
              try {
                // Hàm chuyển đổi chuỗi ngày '30/12/2024' thành đối tượng Date
                var convertDate = function convertDate(dateString) {
                  var _dateString$split = dateString.split('/'),
                    _dateString$split2 = _slicedToArray(_dateString$split, 3),
                    day = _dateString$split2[0],
                    month = _dateString$split2[1],
                    year = _dateString$split2[2];
                  return new Date(year, month - 1, day);
                }; // Loại bỏ ký tự xuống dòng \r\n trong tất cả các trường dạng chuỗi của item
                Object.keys(item).forEach(function (key) {
                  if (typeof item[key] === 'string') {
                    item[key] = item[key].replace(/\r\n/g, ''); // Xóa ký tự xuống dòng \r\n
                  }
                });
                return {
                  mataisan: item.mataisan,
                  tentaisan: item.tentaisan,
                  donvitinh: item.donvitinh,
                  soluongpo: item.soluongpo,
                  dongiapo: item.dongiapo,
                  vat: item.vat * 100,
                  dongiapovat: item.dongiapo + item.dongiapo * item.vat,
                  thanhtien: item.thanhtien,
                  //thanhtienvat: item.thanhtienvat,
                  thanhtienvat: (item.dongiapo + item.dongiapo * item.vat) * item.soluongpo,
                  sopr: item.sopr,
                  sopo: item.sopo,
                  nguoitao_id: data.user_id,
                  ngaytao: currentTime,
                  ngaypo: convertDate(item.ngaypo),
                  checkma: 0,
                  checkten: 0
                };
              } catch (error) {
                // Nếu xảy ra lỗi, gửi thông báo lỗi về React
                console.error("Error converting ngaypo 1:", error.message);
                //return { error: error.message };
                resolve({
                  errCode: 1,
                  errMessage: 'Không thể import file, vui lòng kiểm tra lại file'
                });
              }
            }); //console.log('convertedData', convertedData)
            // const sumByMataisan = convertedData.reduce((acc, item) => {
            //     // Kiểm tra nếu đã có 'mataisan' này trong accumulator
            //     if (acc[item.mataisan]) {
            //         acc[item.mataisan].soluongpo += item.soluongpo; // Cộng dồn soluongpo
            //     } else {
            //         // Nếu chưa có, thêm vào accumulator với giá trị ban đầu
            //         acc[item.mataisan] = { ...item }; // Sao chép toàn bộ thuộc tính của item vào acc
            //     }
            //     return acc;
            // }, {});
            // // Chuyển từ object trở lại thành mảng
            // const mergedData = Object.values(sumByMataisan);
            // console.log('mergedData', mergedData);
            // Lấy ra tất cả sopo và mataisan từ mảng đã lọc
            supplierAndAssets = convertedData.map(function (item) {
              return {
                sopo: item.sopo,
                mataisan: item.mataisan
              };
            }); //  // Lấy ra tất cả sopo và mataisan từ mảng mergedData
            //  const suppliermergedData= mergedData.map(item => ({
            //     sopo: item.sopo,
            //     mataisan: item.mataisan
            // }));
            dataPO_OLD = []; // Duyệt qua từng cặp sopo và mataisan để tìm kiếm trong DB
            _iterator = _createForOfIteratorHelper(supplierAndAssets);
            _context43.prev = 6;
            _iterator.s();
          case 8:
            if ((_step = _iterator.n()).done) {
              _context43.next = 22;
              break;
            }
            _step$value = _step.value, sopo = _step$value.sopo, mataisan = _step$value.mataisan;
            _context43.prev = 10;
            _context43.next = 13;
            return _index["default"].Data_PO.findOne({
              where: {
                sopo: sopo,
                mataisan: mataisan
              },
              raw: true
            });
          case 13:
            _data2 = _context43.sent;
            if (_data2) {
              dataPO_OLD.push(_data2);
            }
            _context43.next = 20;
            break;
          case 17:
            _context43.prev = 17;
            _context43.t0 = _context43["catch"](10);
            console.error("Error finding data for ".concat(sopo, " - ").concat(mataisan, ":"), _context43.t0);
          case 20:
            _context43.next = 8;
            break;
          case 22:
            _context43.next = 27;
            break;
          case 24:
            _context43.prev = 24;
            _context43.t1 = _context43["catch"](6);
            _iterator.e(_context43.t1);
          case 27:
            _context43.prev = 27;
            _iterator.f();
            return _context43.finish(27);
          case 30:
            if (!(dataPO_OLD.length > 0)) {
              _context43.next = 65;
              break;
            }
            _context43.prev = 31;
            filteredData = convertedData.filter(function (newData) {
              // Kiểm tra xem có đối tượng nào trong dataPO_OLD khớp với sopo và mataisan không
              var isMatching = dataPO_OLD.some(function (oldData) {
                return oldData.sopo === newData.sopo && oldData.mataisan === newData.mataisan;
              });
              // Nếu không khớp, thêm đối tượng này vào mảng kết quả
              return !isMatching;
            }); //console.log('filteredData', filteredData)
            // Lặp qua từng phần tử trong mảng filteredData để insert dữ liệu mới
            _iterator2 = _createForOfIteratorHelper(filteredData);
            _context43.prev = 34;
            _iterator2.s();
          case 36:
            if ((_step2 = _iterator2.n()).done) {
              _context43.next = 49;
              break;
            }
            item = _step2.value;
            _context43.prev = 38;
            _context43.next = 41;
            return _index["default"].Data_PO.create({
              mataisan: item.mataisan,
              tentaisan: item.tentaisan,
              donvitinh: item.donvitinh,
              soluongpo: item.soluongpo,
              dongiapo: item.dongiapo,
              vat: item.vat,
              dongiapovat: item.dongiapo + item.dongiapo * item.vat,
              thanhtien: item.thanhtien,
              thanhtienvat: item.thanhtienvat,
              sopr: item.sopr,
              sopo: item.sopo,
              nguoitao_id: item.nguoitao_id,
              ngaytao: currentTime,
              ngaypo: item.ngaypo,
              checkma: 0,
              checkten: 0
            });
          case 41:
            _context43.next = 47;
            break;
          case 43:
            _context43.prev = 43;
            _context43.t2 = _context43["catch"](38);
            // Nếu xảy ra lỗi, gửi thông báo lỗi về React
            console.error("Error converting ngaypo:", _context43.t2.message);
            //return { error: error.message };
            resolve({
              errCode: 1,
              errMessage: 'Không thể import file, vui lòng kiểm tra lại file'
            });
          case 47:
            _context43.next = 36;
            break;
          case 49:
            _context43.next = 54;
            break;
          case 51:
            _context43.prev = 51;
            _context43.t3 = _context43["catch"](34);
            _iterator2.e(_context43.t3);
          case 54:
            _context43.prev = 54;
            _iterator2.f();
            return _context43.finish(54);
          case 57:
            _context43.next = 63;
            break;
          case 59:
            _context43.prev = 59;
            _context43.t4 = _context43["catch"](31);
            console.error(_context43.t4);
            return _context43.abrupt("return", res.status(500).json({
              errCode: 500,
              errMessage: 'Internal Server Error'
            }));
          case 63:
            _context43.next = 88;
            break;
          case 65:
            // Insert dữ liệu vào DB nếu file import không tồn tại sopo và mataisan đã import trước đó
            _iterator3 = _createForOfIteratorHelper(convertedData);
            _context43.prev = 66;
            _iterator3.s();
          case 68:
            if ((_step3 = _iterator3.n()).done) {
              _context43.next = 80;
              break;
            }
            _item = _step3.value;
            _context43.prev = 70;
            _context43.next = 73;
            return _index["default"].Data_PO.create(_item);
          case 73:
            _context43.next = 78;
            break;
          case 75:
            _context43.prev = 75;
            _context43.t5 = _context43["catch"](70);
            console.error('Error inserting data:', _context43.t5);
          case 78:
            _context43.next = 68;
            break;
          case 80:
            _context43.next = 85;
            break;
          case 82:
            _context43.prev = 82;
            _context43.t6 = _context43["catch"](66);
            _iterator3.e(_context43.t6);
          case 85:
            _context43.prev = 85;
            _iterator3.f();
            return _context43.finish(85);
          case 88:
            request = _index["default"].sqlhis2Connection.request();
            _context43.next = 91;
            return request.execute('[sp_QLPO_DANHMUC_VPP]');
          case 91:
            getdata = _context43.sent;
            // Lấy dữ liệu từ recordset
            recordset = getdata.recordset;
            _require = require('sequelize'), Op = _require.Op;
            _context43.next = 96;
            return _index["default"].Data_PO.findAll({
              where: _defineProperty({}, Op.or, [
              // Điều kiện "hoặc"
              {
                checkma: 0
              }, {
                checkten: 0
              }]),
              raw: true
            });
          case 96:
            check_mataisan_dm = _context43.sent;
            // Hàm dò tìm và cập nhật checkmataisan
            updateCheckMataisan = function updateCheckMataisan(recordset, check_mataisan_dm) {
              // Dò tìm từng phần tử trong check_mataisan_dm
              check_mataisan_dm.forEach(function (item) {
                // Tìm trong recordset xem có phần tử nào khớp với mataisan và tentaisan
                var foundByMa = recordset.find(function (record) {
                  return record.MaVPP === item.mataisan;
                });
                var foundByTen = recordset.find(function (record) {
                  return record.TenVPP === item.tentaisan;
                });

                // Nếu tìm thấy khớp với MaVPP, cập nhật checkma = 1, ngược lại = 0
                item.checkma = foundByMa ? 1 : 0;

                // Nếu tìm thấy khớp với TenVPP, cập nhật checkten = 1, ngược lại = 0
                item.checkten = foundByTen ? 1 : 0;
              });
              return check_mataisan_dm;
            }; // Gọi hàm updateCheckMataisan
            updatedCheckMataisan = updateCheckMataisan(recordset, check_mataisan_dm);
            if (!(updatedCheckMataisan.length > 0)) {
              _context43.next = 129;
              break;
            }
            _iterator4 = _createForOfIteratorHelper(updatedCheckMataisan);
            _context43.prev = 101;
            _iterator4.s();
          case 103:
            if ((_step4 = _iterator4.n()).done) {
              _context43.next = 121;
              break;
            }
            _item2 = _step4.value;
            _context43.prev = 105;
            _context43.next = 108;
            return _index["default"].Data_PO.findOne({
              where: {
                id: _item2.id
              },
              raw: false
            });
          case 108:
            _data = _context43.sent;
            if (!_data) {
              _context43.next = 114;
              break;
            }
            //data.checkmataisan = item.checkmataisan;
            _data.checkma = _item2.checkma;
            _data.checkten = _item2.checkten;
            // Lưu thay đổi
            _context43.next = 114;
            return _data.save();
          case 114:
            _context43.next = 119;
            break;
          case 116:
            _context43.prev = 116;
            _context43.t7 = _context43["catch"](105);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt PO c\xF3 id: ".concat(_item2.id), _context43.t7);
          case 119:
            _context43.next = 103;
            break;
          case 121:
            _context43.next = 126;
            break;
          case 123:
            _context43.prev = 123;
            _context43.t8 = _context43["catch"](101);
            _iterator4.e(_context43.t8);
          case 126:
            _context43.prev = 126;
            _iterator4.f();
            return _context43.finish(126);
          case 129:
            resolve({
              errCode: 0,
              errMessage: 'Import PO thành công'
            });
            _context43.next = 135;
            break;
          case 132:
            _context43.prev = 132;
            _context43.t9 = _context43["catch"](0);
            reject(_context43.t9);
          case 135:
          case "end":
            return _context43.stop();
        }
      }, _callee43, null, [[0, 132], [6, 24, 27, 30], [10, 17], [31, 59], [34, 51, 54, 57], [38, 43], [66, 82, 85, 88], [70, 75], [101, 123, 126, 129], [105, 116]]);
    }));
    return function (_x85, _x86) {
      return _ref44.apply(this, arguments);
    };
  }());
};
var importHD = function importHD(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref45 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee44(resolve, reject) {
      var currentTime, convertedData, supplierAndAssets, dataHD_OLD, _iterator5, _step5, _step5$value, nhacungcap_id, mataisan, _data5, filteredData, _iterator6, _step6, item, _iterator7, _step7, _item3, request, getdata, recordset, _require2, Op, check_mataisan_dm, updateCheckMataisan, updatedCheckMataisan, _iterator8, _step8, _item4, _data3, requestncc, getdata_ncc, recordsetncc, check_ncc_dm, updateCheckNCC, updatedCheckNcc, _iterator9, _step9, _item5, _data4;
      return _regeneratorRuntime().wrap(function _callee44$(_context44) {
        while (1) switch (_context44.prev = _context44.next) {
          case 0:
            _context44.prev = 0;
            currentTime = new Date(); // Lọc bỏ hàng đầu tiên (tiêu đề) và trả về mảng các đối tượng đã được chuyển đổi ngày
            //const convertedData = data.excelData.slice(1).map((item) => {
            convertedData = data.excelData.slice(1) // Bỏ qua phần tử đầu tiên (header)
            .filter(function (item) {
              return Object.keys(item).length > 0 && Object.values(item).some(function (value) {
                return value;
              });
            }) // Lọc các đối tượng rỗng
            .map(function (item) {
              // Hàm chuyển đổi chuỗi ngày '30/12/2024' thành đối tượng Date
              try {
                var convertDate = function convertDate(dateString) {
                  var _dateString$split3 = dateString.split('/'),
                    _dateString$split4 = _slicedToArray(_dateString$split3, 3),
                    day = _dateString$split4[0],
                    month = _dateString$split4[1],
                    year = _dateString$split4[2];
                  return new Date(year, month - 1, day);
                }; // Loại bỏ ký tự xuống dòng \r\n trong tất cả các trường dạng chuỗi của item
                Object.keys(item).forEach(function (key) {
                  if (typeof item[key] === 'string') {
                    item[key] = item[key].replace(/\r\n/g, ''); // Xóa ký tự xuống dòng \r\n
                  }
                });
                return {
                  nhacungcap_id: item.nhacungcap_id,
                  tennhacungcap: item.tennhacungcap,
                  mataisan: item.mataisan,
                  tentaisan: item.tentaisan,
                  donvitinh: item.donvitinh,
                  dongiahd: item.dongiahd,
                  vat: item.vat * 100,
                  dongiahdvat: item.dongiahdvat,
                  rn: item.rn,
                  sohopdong: item.sohopdong,
                  ngayhieuluc: convertDate(item.ngayhieuluc),
                  ngayketthuc: convertDate(item.ngayketthuc),
                  //ngayhieuluc: item.ngayhieuluc instanceof Date ? item.ngayhieuluc : new Date(item.ngayhieuluc),
                  //ngayketthuc: item.ngayketthuc instanceof Date ? item.ngayketthuc : new Date(item.ngayketthuc),
                  nguoitao_id: data.user_id,
                  ngaytao: currentTime,
                  taitro: item.taitro,
                  tinhtaitro: item.tinhtaitro,
                  checkma: 0,
                  checkten: 0,
                  checknhacungcap: 0
                };
              } catch (error) {
                // Nếu xảy ra lỗi, gửi thông báo lỗi về React
                console.error("Error converting ngaypo:", error.message);
                //return { error: error.message };
                resolve({
                  errCode: 1,
                  errMessage: 'Không thể import file, vui lòng kiểm tra lại file'
                });
              }
            }); // Lấy ra tất cả nhacungcap_id và mataisan từ mảng đã lọc
            supplierAndAssets = convertedData.map(function (item) {
              return {
                nhacungcap_id: item.nhacungcap_id,
                mataisan: item.mataisan
              };
            });
            dataHD_OLD = []; // Duyệt qua từng cặp nhacungcap_id và mataisan để tìm kiếm trong DB
            _iterator5 = _createForOfIteratorHelper(supplierAndAssets);
            _context44.prev = 6;
            _iterator5.s();
          case 8:
            if ((_step5 = _iterator5.n()).done) {
              _context44.next = 22;
              break;
            }
            _step5$value = _step5.value, nhacungcap_id = _step5$value.nhacungcap_id, mataisan = _step5$value.mataisan;
            _context44.prev = 10;
            _context44.next = 13;
            return _index["default"].Data_HD.findOne({
              where: {
                nhacungcap_id: nhacungcap_id,
                mataisan: mataisan
              },
              raw: true
            });
          case 13:
            _data5 = _context44.sent;
            if (_data5) {
              dataHD_OLD.push(_data5);
            }
            _context44.next = 20;
            break;
          case 17:
            _context44.prev = 17;
            _context44.t0 = _context44["catch"](10);
            console.error("Error finding data for ".concat(nhacungcap_id, " - ").concat(mataisan, ":"), _context44.t0);
          case 20:
            _context44.next = 8;
            break;
          case 22:
            _context44.next = 27;
            break;
          case 24:
            _context44.prev = 24;
            _context44.t1 = _context44["catch"](6);
            _iterator5.e(_context44.t1);
          case 27:
            _context44.prev = 27;
            _iterator5.f();
            return _context44.finish(27);
          case 30:
            if (!(dataHD_OLD.length > 0)) {
              _context44.next = 65;
              break;
            }
            _context44.prev = 31;
            filteredData = convertedData.filter(function (newData) {
              // Kiểm tra xem có đối tượng nào trong dataHD_OLD khớp với nhacungcap_id và mataisan không
              var isMatching = dataHD_OLD.some(function (oldData) {
                return oldData.nhacungcap_id === newData.nhacungcap_id && oldData.mataisan === newData.mataisan;
              });
              // Nếu không khớp, thêm đối tượng này vào mảng kết quả
              return !isMatching;
            }); // Lặp qua từng phần tử trong mảng filteredData để insert dữ liệu mới
            _iterator6 = _createForOfIteratorHelper(filteredData);
            _context44.prev = 34;
            _iterator6.s();
          case 36:
            if ((_step6 = _iterator6.n()).done) {
              _context44.next = 49;
              break;
            }
            item = _step6.value;
            _context44.prev = 38;
            _context44.next = 41;
            return _index["default"].Data_HD.create({
              nhacungcap_id: item.nhacungcap_id,
              tennhacungcap: item.tennhacungcap,
              mataisan: item.mataisan,
              tentaisan: item.tentaisan,
              donvitinh: item.donvitinh,
              dongiahd: item.dongiahd,
              vat: item.vat * 100,
              // Nhân giá trị VAT với 100 nếu cần
              dongiahdvat: item.dongiahdvat,
              rn: item.rn,
              sohopdong: item.sohopdong,
              ngayhieuluc: item.ngayhieuluc,
              ngayketthuc: item.ngayketthuc,
              nguoitao_id: item.nguoitao_id,
              ngaytao: currentTime,
              taitro: item.taitro,
              tinhtaitro: item.tinhtaitro,
              checkma: 0,
              checkten: 0,
              checknhacungcap: 0
            });
          case 41:
            _context44.next = 47;
            break;
          case 43:
            _context44.prev = 43;
            _context44.t2 = _context44["catch"](38);
            // Nếu xảy ra lỗi, gửi thông báo lỗi về React
            console.error("Error converting ngaypo:", _context44.t2.message);
            resolve({
              errCode: 1,
              errMessage: 'Không thể import file, vui lòng kiểm tra lại file'
            });
          case 47:
            _context44.next = 36;
            break;
          case 49:
            _context44.next = 54;
            break;
          case 51:
            _context44.prev = 51;
            _context44.t3 = _context44["catch"](34);
            _iterator6.e(_context44.t3);
          case 54:
            _context44.prev = 54;
            _iterator6.f();
            return _context44.finish(54);
          case 57:
            _context44.next = 63;
            break;
          case 59:
            _context44.prev = 59;
            _context44.t4 = _context44["catch"](31);
            console.error(_context44.t4);
            return _context44.abrupt("return", res.status(500).json({
              errCode: 500,
              errMessage: 'Internal Server Error'
            }));
          case 63:
            _context44.next = 88;
            break;
          case 65:
            // Insert dữ liệu vào DB nếu file import không tồn tại nhacungcap và mataisan đã import trước đó
            _iterator7 = _createForOfIteratorHelper(convertedData);
            _context44.prev = 66;
            _iterator7.s();
          case 68:
            if ((_step7 = _iterator7.n()).done) {
              _context44.next = 80;
              break;
            }
            _item3 = _step7.value;
            _context44.prev = 70;
            _context44.next = 73;
            return _index["default"].Data_HD.create(_item3);
          case 73:
            _context44.next = 78;
            break;
          case 75:
            _context44.prev = 75;
            _context44.t5 = _context44["catch"](70);
            console.error('Error inserting data:', _context44.t5); // Log lỗi nếu insert thất bại
          case 78:
            _context44.next = 68;
            break;
          case 80:
            _context44.next = 85;
            break;
          case 82:
            _context44.prev = 82;
            _context44.t6 = _context44["catch"](66);
            _iterator7.e(_context44.t6);
          case 85:
            _context44.prev = 85;
            _iterator7.f();
            return _context44.finish(85);
          case 88:
            request = _index["default"].sqlhis2Connection.request();
            _context44.next = 91;
            return request.execute('[sp_QLPO_DANHMUC_VPP]');
          case 91:
            getdata = _context44.sent;
            // Lấy dữ liệu từ recordset
            recordset = getdata.recordset;
            _require2 = require('sequelize'), Op = _require2.Op;
            _context44.next = 96;
            return _index["default"].Data_HD.findAll({
              where: _defineProperty({}, Op.or, [
              // Điều kiện "hoặc"
              {
                checkma: 0
              }, {
                checkten: 0
              }]),
              raw: true
            });
          case 96:
            check_mataisan_dm = _context44.sent;
            // Hàm dò tìm và cập nhật checkmataisan
            updateCheckMataisan = function updateCheckMataisan(recordset, check_mataisan_dm) {
              // Dò tìm từng phần tử trong check_mataisan_dm
              check_mataisan_dm.forEach(function (item) {
                // Tìm trong recordset xem có phần tử nào khớp với mataisan và tentaisan
                var foundByMa = recordset.find(function (record) {
                  return record.MaVPP === item.mataisan;
                });
                var foundByTen = recordset.find(function (record) {
                  return record.TenVPP === item.tentaisan;
                });

                // Nếu tìm thấy khớp với MaVPP, cập nhật checkma = 1, ngược lại = 0
                item.checkma = foundByMa ? 1 : 0;

                // Nếu tìm thấy khớp với TenVPP, cập nhật checkten = 1, ngược lại = 0
                item.checkten = foundByTen ? 1 : 0;
              });
              return check_mataisan_dm;
            }; // Gọi hàm updateCheckMataisan
            updatedCheckMataisan = updateCheckMataisan(recordset, check_mataisan_dm);
            if (!(updatedCheckMataisan.length > 0)) {
              _context44.next = 129;
              break;
            }
            _iterator8 = _createForOfIteratorHelper(updatedCheckMataisan);
            _context44.prev = 101;
            _iterator8.s();
          case 103:
            if ((_step8 = _iterator8.n()).done) {
              _context44.next = 121;
              break;
            }
            _item4 = _step8.value;
            _context44.prev = 105;
            _context44.next = 108;
            return _index["default"].Data_HD.findOne({
              where: {
                id: _item4.id
              },
              raw: false
            });
          case 108:
            _data3 = _context44.sent;
            if (!_data3) {
              _context44.next = 114;
              break;
            }
            //data.checkmataisan = item.checkmataisan;
            _data3.checkma = _item4.checkma;
            _data3.checkten = _item4.checkten;
            // Lưu thay đổi
            _context44.next = 114;
            return _data3.save();
          case 114:
            _context44.next = 119;
            break;
          case 116:
            _context44.prev = 116;
            _context44.t7 = _context44["catch"](105);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt PO c\xF3 id: ".concat(_item4.id), _context44.t7);
          case 119:
            _context44.next = 103;
            break;
          case 121:
            _context44.next = 126;
            break;
          case 123:
            _context44.prev = 123;
            _context44.t8 = _context44["catch"](101);
            _iterator8.e(_context44.t8);
          case 126:
            _context44.prev = 126;
            _iterator8.f();
            return _context44.finish(126);
          case 129:
            // Xử  lý tìm xem file import NCC có trùng với ncc dm hay không để cập nhập trạng thái
            requestncc = _index["default"].sqlhis2Connection.request();
            _context44.next = 132;
            return requestncc.execute('[sp_QLPO_DANHMUC_NCC]');
          case 132:
            getdata_ncc = _context44.sent;
            // Lấy dữ liệu từ recordset
            recordsetncc = getdata_ncc.recordset; //console.log('recordset_ncc', recordset_ncc)
            //console.log('convert', convertedData)
            _context44.next = 136;
            return _index["default"].Data_HD.findAll({
              where: {
                checknhacungcap: 0
              },
              raw: true
            });
          case 136:
            check_ncc_dm = _context44.sent;
            // Hàm dò tìm và cập nhật checkmataisan
            updateCheckNCC = function updateCheckNCC(recordsetncc, check_ncc_dm) {
              // Dò tìm từng phần tử trong check_mataisan_dm
              check_ncc_dm.forEach(function (item) {
                // Tìm trong recordset xem có phần tử nào khớp với mataisan và tentaisan
                var foundByNcc = recordsetncc.find(function (record) {
                  return record.nhacungcap_id === item.nhacungcap_id;
                });
                // Nếu tìm thấy khớp với TenVPP, cập nhật checkten = 1, ngược lại = 0
                item.checknhacungcap = foundByNcc ? 1 : 0;
              });
              return check_ncc_dm;
            }; // Gọi hàm updateCheckNCC
            updatedCheckNcc = updateCheckNCC(recordsetncc, check_ncc_dm); //console.log('updatedCheckNcc', updatedCheckNcc)
            if (!(updatedCheckNcc.length > 0)) {
              _context44.next = 168;
              break;
            }
            _iterator9 = _createForOfIteratorHelper(updatedCheckNcc);
            _context44.prev = 141;
            _iterator9.s();
          case 143:
            if ((_step9 = _iterator9.n()).done) {
              _context44.next = 160;
              break;
            }
            _item5 = _step9.value;
            _context44.prev = 145;
            _context44.next = 148;
            return _index["default"].Data_HD.findOne({
              where: {
                id: _item5.id
              },
              raw: false
            });
          case 148:
            _data4 = _context44.sent;
            if (!_data4) {
              _context44.next = 153;
              break;
            }
            _data4.checknhacungcap = _item5.checknhacungcap;
            // Lưu thay đổi
            _context44.next = 153;
            return _data4.save();
          case 153:
            _context44.next = 158;
            break;
          case 155:
            _context44.prev = 155;
            _context44.t9 = _context44["catch"](145);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt PO c\xF3 id: ".concat(_item5.id), _context44.t9);
          case 158:
            _context44.next = 143;
            break;
          case 160:
            _context44.next = 165;
            break;
          case 162:
            _context44.prev = 162;
            _context44.t10 = _context44["catch"](141);
            _iterator9.e(_context44.t10);
          case 165:
            _context44.prev = 165;
            _iterator9.f();
            return _context44.finish(165);
          case 168:
            resolve({
              errCode: 0,
              errMessage: 'Import hợp đồng thành công'
            });
            _context44.next = 174;
            break;
          case 171:
            _context44.prev = 171;
            _context44.t11 = _context44["catch"](0);
            reject(_context44.t11);
          case 174:
          case "end":
            return _context44.stop();
        }
      }, _callee44, null, [[0, 171], [6, 24, 27, 30], [10, 17], [31, 59], [34, 51, 54, 57], [38, 43], [66, 82, 85, 88], [70, 75], [101, 123, 126, 129], [105, 116], [141, 162, 165, 168], [145, 155]]);
    }));
    return function (_x87, _x88) {
      return _ref45.apply(this, arguments);
    };
  }());
};
var importPR = function importPR(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref46 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee45(resolve, reject) {
      var currentTime, convertedData, supplierAndAssets, dataPR_OLD, _iterator10, _step10, _step10$value, sopr, mataisan, _data7, filteredData, _iterator11, _step11, item, _iterator12, _step12, _item6, request, getdata, recordset, _require3, Op, check_mataisan_dm, updateCheckMataisan, updatedCheckMataisan, _iterator13, _step13, _item7, _data6;
      return _regeneratorRuntime().wrap(function _callee45$(_context45) {
        while (1) switch (_context45.prev = _context45.next) {
          case 0:
            _context45.prev = 0;
            currentTime = new Date(); // Lọc bỏ hàng đầu tiên (tiêu đề) và trả về mảng các đối tượng đã được chuyển đổi ngày
            //const convertedData = data.excelData.slice(1).map((item) => {
            convertedData = data.excelData.slice(1) // Bỏ qua phần tử đầu tiên (header)
            .filter(function (item) {
              return Object.keys(item).length > 0 && Object.values(item).some(function (value) {
                return value;
              });
            }) // Lọc các đối tượng rỗng
            .map(function (item) {
              try {
                // Hàm chuyển đổi chuỗi ngày '30/12/2024' thành đối tượng Date
                var convertDate = function convertDate(dateString) {
                  var _dateString$split5 = dateString.split('/'),
                    _dateString$split6 = _slicedToArray(_dateString$split5, 3),
                    day = _dateString$split6[0],
                    month = _dateString$split6[1],
                    year = _dateString$split6[2];
                  return new Date(year, month - 1, day);
                }; // Loại bỏ ký tự xuống dòng \r\n trong tất cả các trường dạng chuỗi của item
                Object.keys(item).forEach(function (key) {
                  if (typeof item[key] === 'string') {
                    item[key] = item[key].replace(/\r\n/g, ''); // Xóa ký tự xuống dòng \r\n
                  }
                });
                return {
                  mataisan: item.mataisan,
                  tentaisan: item.tentaisan,
                  donvitinh: item.donvitinh,
                  soluongpr: item.soluongpr,
                  dongiaprvat: item.dongiaprvat,
                  thanhtienprvat: item.dongiaprvat * item.soluongpr,
                  ngaycanhang: convertDate(item.ngaycanhang),
                  //ngaycanhang: item.ngaycanhang instanceof Date ? item.ngaycanhang : new Date(item.ngaycanhang),
                  ghichu: item.ghichu,
                  sopr: item.sopr,
                  nguoitao_id: data.user_id,
                  ngaytao: currentTime,
                  checkma: 0,
                  checkten: 0
                };
              } catch (error) {
                // Nếu xảy ra lỗi, gửi thông báo lỗi về React
                console.error("Error converting ngaypo:", error.message);
                resolve({
                  errCode: 1,
                  errMessage: 'Không thể import file, vui lòng kiểm tra lại file'
                });
              }
            }); // Lấy ra tất cả sopo và mataisan từ mảng đã lọc
            supplierAndAssets = convertedData.map(function (item) {
              return {
                sopr: item.sopr,
                mataisan: item.mataisan
              };
            });
            dataPR_OLD = []; // Duyệt qua từng cặp nhacungcap_id và mataisan để tìm kiếm trong DB
            _iterator10 = _createForOfIteratorHelper(supplierAndAssets);
            _context45.prev = 6;
            _iterator10.s();
          case 8:
            if ((_step10 = _iterator10.n()).done) {
              _context45.next = 22;
              break;
            }
            _step10$value = _step10.value, sopr = _step10$value.sopr, mataisan = _step10$value.mataisan;
            _context45.prev = 10;
            _context45.next = 13;
            return _index["default"].Data_PR.findOne({
              where: {
                sopr: sopr,
                mataisan: mataisan
              },
              raw: true
            });
          case 13:
            _data7 = _context45.sent;
            if (_data7) {
              dataPR_OLD.push(_data7);
            }
            _context45.next = 20;
            break;
          case 17:
            _context45.prev = 17;
            _context45.t0 = _context45["catch"](10);
            console.error("Error finding data for ".concat(sopr, " - ").concat(mataisan, ":"), _context45.t0);
          case 20:
            _context45.next = 8;
            break;
          case 22:
            _context45.next = 27;
            break;
          case 24:
            _context45.prev = 24;
            _context45.t1 = _context45["catch"](6);
            _iterator10.e(_context45.t1);
          case 27:
            _context45.prev = 27;
            _iterator10.f();
            return _context45.finish(27);
          case 30:
            if (!(dataPR_OLD.length > 0)) {
              _context45.next = 65;
              break;
            }
            _context45.prev = 31;
            filteredData = convertedData.filter(function (newData) {
              // Kiểm tra xem có đối tượng nào trong dataHD_OLD khớp với nhacungcap_id và mataisan không
              var isMatching = dataPR_OLD.some(function (oldData) {
                return oldData.sopr === newData.sopr && oldData.mataisan === newData.mataisan;
              });
              // Nếu không khớp, thêm đối tượng này vào mảng kết quả
              return !isMatching;
            }); // Lặp qua từng phần tử trong mảng filteredData để insert dữ liệu mới
            _iterator11 = _createForOfIteratorHelper(filteredData);
            _context45.prev = 34;
            _iterator11.s();
          case 36:
            if ((_step11 = _iterator11.n()).done) {
              _context45.next = 49;
              break;
            }
            item = _step11.value;
            _context45.prev = 38;
            _context45.next = 41;
            return _index["default"].Data_PR.create({
              mataisan: item.mataisan,
              tentaisan: item.tentaisan,
              donvitinh: item.donvitinh,
              soluongpr: item.soluongpr,
              dongiaprvat: item.dongiaprvat,
              thanhtienprvat: item.dongiaprvat * item.soluongpr,
              ngaycanhang: item.ngaycanhang,
              ghichu: item.ghichu,
              sopr: item.sopr,
              nguoitao_id: item.nguoitao_id,
              ngaytao: currentTime,
              checkma: 0,
              checkten: 0
            });
          case 41:
            _context45.next = 47;
            break;
          case 43:
            _context45.prev = 43;
            _context45.t2 = _context45["catch"](38);
            // Nếu xảy ra lỗi, gửi thông báo lỗi về React
            console.error("Error converting ngaypo:", _context45.t2.message);
            resolve({
              errCode: 1,
              errMessage: 'Không thể import file, vui lòng kiểm tra lại file'
            });
          case 47:
            _context45.next = 36;
            break;
          case 49:
            _context45.next = 54;
            break;
          case 51:
            _context45.prev = 51;
            _context45.t3 = _context45["catch"](34);
            _iterator11.e(_context45.t3);
          case 54:
            _context45.prev = 54;
            _iterator11.f();
            return _context45.finish(54);
          case 57:
            _context45.next = 63;
            break;
          case 59:
            _context45.prev = 59;
            _context45.t4 = _context45["catch"](31);
            console.error(_context45.t4);
            return _context45.abrupt("return", res.status(500).json({
              errCode: 500,
              errMessage: 'Internal Server Error'
            }));
          case 63:
            _context45.next = 88;
            break;
          case 65:
            // Insert dữ liệu vào DB nếu file import không tồn tại sopr và mataisan đã import trước đó
            _iterator12 = _createForOfIteratorHelper(convertedData);
            _context45.prev = 66;
            _iterator12.s();
          case 68:
            if ((_step12 = _iterator12.n()).done) {
              _context45.next = 80;
              break;
            }
            _item6 = _step12.value;
            _context45.prev = 70;
            _context45.next = 73;
            return _index["default"].Data_PR.create(_item6);
          case 73:
            _context45.next = 78;
            break;
          case 75:
            _context45.prev = 75;
            _context45.t5 = _context45["catch"](70);
            console.error('Error inserting data:', _context45.t5); // Log lỗi nếu insert thất bại
          case 78:
            _context45.next = 68;
            break;
          case 80:
            _context45.next = 85;
            break;
          case 82:
            _context45.prev = 82;
            _context45.t6 = _context45["catch"](66);
            _iterator12.e(_context45.t6);
          case 85:
            _context45.prev = 85;
            _iterator12.f();
            return _context45.finish(85);
          case 88:
            request = _index["default"].sqlhis2Connection.request();
            _context45.next = 91;
            return request.execute('[sp_QLPO_DANHMUC_VPP]');
          case 91:
            getdata = _context45.sent;
            // Lấy dữ liệu từ recordset
            recordset = getdata.recordset;
            _require3 = require('sequelize'), Op = _require3.Op;
            _context45.next = 96;
            return _index["default"].Data_PR.findAll({
              // where: {
              //     checkma: 0,
              //     checkten: 0,
              // },
              where: _defineProperty({}, Op.or, [
              // Điều kiện "hoặc"
              {
                checkma: 0
              }, {
                checkten: 0
              }]),
              raw: true
            });
          case 96:
            check_mataisan_dm = _context45.sent;
            //console.log('check_mataisan_dm', check_mataisan_dm)
            // Hàm dò tìm và cập nhật checkmataisan
            updateCheckMataisan = function updateCheckMataisan(recordset, check_mataisan_dm) {
              // Dò tìm từng phần tử trong check_mataisan_dm
              check_mataisan_dm.forEach(function (item) {
                // Tìm trong recordset xem có phần tử nào khớp với mataisan và tentaisan
                var foundByMa = recordset.find(function (record) {
                  return record.MaVPP === item.mataisan;
                });
                var foundByTen = recordset.find(function (record) {
                  return record.TenVPP === item.tentaisan;
                });

                // Nếu tìm thấy khớp với MaVPP, cập nhật checkma = 1, ngược lại = 0
                item.checkma = foundByMa ? 1 : 0;

                // Nếu tìm thấy khớp với TenVPP, cập nhật checkten = 1, ngược lại = 0
                item.checkten = foundByTen ? 1 : 0;
              });
              return check_mataisan_dm;
            }; // Gọi hàm updateCheckMataisan
            updatedCheckMataisan = updateCheckMataisan(recordset, check_mataisan_dm);
            if (!(updatedCheckMataisan.length > 0)) {
              _context45.next = 129;
              break;
            }
            _iterator13 = _createForOfIteratorHelper(updatedCheckMataisan);
            _context45.prev = 101;
            _iterator13.s();
          case 103:
            if ((_step13 = _iterator13.n()).done) {
              _context45.next = 121;
              break;
            }
            _item7 = _step13.value;
            _context45.prev = 105;
            _context45.next = 108;
            return _index["default"].Data_PR.findOne({
              where: {
                id: _item7.id
              },
              raw: false
            });
          case 108:
            _data6 = _context45.sent;
            if (!_data6) {
              _context45.next = 114;
              break;
            }
            //data.checkmataisan = item.checkmataisan;
            _data6.checkma = _item7.checkma;
            _data6.checkten = _item7.checkten;
            // Lưu thay đổi
            _context45.next = 114;
            return _data6.save();
          case 114:
            _context45.next = 119;
            break;
          case 116:
            _context45.prev = 116;
            _context45.t7 = _context45["catch"](105);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt PO c\xF3 id: ".concat(_item7.id), _context45.t7);
          case 119:
            _context45.next = 103;
            break;
          case 121:
            _context45.next = 126;
            break;
          case 123:
            _context45.prev = 123;
            _context45.t8 = _context45["catch"](101);
            _iterator13.e(_context45.t8);
          case 126:
            _context45.prev = 126;
            _iterator13.f();
            return _context45.finish(126);
          case 129:
            resolve({
              errCode: 0,
              errMessage: 'Import PR thành công'
            });
            _context45.next = 135;
            break;
          case 132:
            _context45.prev = 132;
            _context45.t9 = _context45["catch"](0);
            reject(_context45.t9);
          case 135:
          case "end":
            return _context45.stop();
        }
      }, _callee45, null, [[0, 132], [6, 24, 27, 30], [10, 17], [31, 59], [34, 51, 54, 57], [38, 43], [66, 82, 85, 88], [70, 75], [101, 123, 126, 129], [105, 116]]);
    }));
    return function (_x89, _x90) {
      return _ref46.apply(this, arguments);
    };
  }());
};
var getSoPO = function getSoPO(soPO, UserId) {
  return new Promise(/*#__PURE__*/function () {
    var _ref47 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee46(resolve, reject) {
      var ngaytao, request, datapo, sopr, check_log_po_pr, _iterator14, _step14, item, data, _require4, Op, datapr, _iterator15, _step15, _item10, _data8, _iterator16, _step16, record, _iterator17, _step17, _item8, _iterator18, _step18, _item9;
      return _regeneratorRuntime().wrap(function _callee46$(_context46) {
        while (1) switch (_context46.prev = _context46.next) {
          case 0:
            _context46.prev = 0;
            ngaytao = new Date();
            request = _index["default"].sqlhis2Connection.request();
            _context46.next = 5;
            return _index["default"].Data_PO.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                sopo: soPO
              },
              raw: true
            });
          case 5:
            datapo = _context46.sent;
            sopr = _toConsumableArray(new Set(datapo.map(function (item) {
              return item.sopr;
            }))); //console.log('uniqueSopr', sopr);
            //const sopr = datapo[0];
            _context46.next = 9;
            return _index["default"].Data_Po_Pr_Log.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                sopo: soPO
              },
              raw: true
            });
          case 9:
            check_log_po_pr = _context46.sent;
            if (!(check_log_po_pr.length > 0)) {
              _context46.next = 40;
              break;
            }
            _iterator14 = _createForOfIteratorHelper(check_log_po_pr);
            _context46.prev = 12;
            _iterator14.s();
          case 14:
            if ((_step14 = _iterator14.n()).done) {
              _context46.next = 32;
              break;
            }
            item = _step14.value;
            _context46.prev = 16;
            _context46.next = 19;
            return _index["default"].Data_PR.findOne({
              where: {
                id: item.id_data_pr
              },
              raw: false
            });
          case 19:
            data = _context46.sent;
            if (!data) {
              _context46.next = 25;
              break;
            }
            data.soluongpo = data.soluongpo - item.soluongpo;
            data.tongsoluongpo = data.tongsoluongpo - item.soluongpo;
            // Lưu thay đổi
            _context46.next = 25;
            return data.save();
          case 25:
            _context46.next = 30;
            break;
          case 27:
            _context46.prev = 27;
            _context46.t0 = _context46["catch"](16);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt PO c\xF3 id: ".concat(item.id), _context46.t0);
          case 30:
            _context46.next = 14;
            break;
          case 32:
            _context46.next = 37;
            break;
          case 34:
            _context46.prev = 34;
            _context46.t1 = _context46["catch"](12);
            _iterator14.e(_context46.t1);
          case 37:
            _context46.prev = 37;
            _iterator14.f();
            return _context46.finish(37);
          case 40:
            if (!(datapo.length > 0)) {
              _context46.next = 153;
              break;
            }
            _require4 = require('sequelize'), Op = _require4.Op;
            _context46.next = 44;
            return _index["default"].Data_PR.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                //sopr: sopr.sopr,
                sopr: _defineProperty({}, Op["in"], sopr)
              },
              raw: true
            });
          case 44:
            datapr = _context46.sent;
            // Vòng lặp tìm các phần tử trùng khớp giữa datapr và datapo
            datapr = datapr.map(function (prItem) {
              var recordItem = datapo.find(function (record) {
                return record.sopr === prItem.sopr && record.mataisan === prItem.mataisan;
              });
              if (recordItem) {
                prItem.tongsoluongpo = prItem.tongsoluongpo !== null ? prItem.tongsoluongpo : 0;
                // Tính toán sự chênh lệch
                prItem.soluongpo = recordItem.soluongpo + prItem.tongsoluongpo - prItem.soluongpr;
                prItem.tongsoluongpo = recordItem.soluongpo + prItem.tongsoluongpo;
                prItem.checkmataisan = null;
              } else {
                // Điều kiện thứ nhất: Trùng sopr nhưng khác mataisan
                var recordWithSameSopr = datapo.find(function (record) {
                  return record.sopr === prItem.sopr && record.mataisan !== prItem.mataisan;
                });

                // Điều kiện thứ hai: mataisan không có trong recordset
                var recordWithDifferentMataisan = !datapo.find(function (record) {
                  return record.sopr === prItem.sopr && record.mataisan === prItem.mataisan;
                });

                // Nếu có record trùng sopo nhưng khác mataisan hoặc mataisan không có trong recordset
                if (recordWithSameSopr || recordWithDifferentMataisan) {
                  prItem.checkmataisan = 1;
                }
              }
              return prItem;
            });
            //console.log('datapr', datapr)
            _iterator15 = _createForOfIteratorHelper(datapr);
            _context46.prev = 47;
            _iterator15.s();
          case 49:
            if ((_step15 = _iterator15.n()).done) {
              _context46.next = 75;
              break;
            }
            _item10 = _step15.value;
            _context46.prev = 51;
            _context46.next = 54;
            return _index["default"].Data_PR.findOne({
              where: {
                id: _item10.id
              },
              raw: false
            });
          case 54:
            _data8 = _context46.sent;
            if (!_data8) {
              _context46.next = 68;
              break;
            }
            if (!(_item10.checkmataisan === 1 && _item10.dacheckvoipo === null)) {
              _context46.next = 62;
              break;
            }
            // Chỉ cập nhật trường check
            _data8.checkmataisan = _item10.checkmataisan;

            // Lưu thay đổi
            _context46.next = 60;
            return _data8.save();
          case 60:
            _context46.next = 68;
            break;
          case 62:
            // Cập nhật các thông tin theo từng mục
            _data8.soluongpo = _item10.soluongpo;
            _data8.tongsoluongpo = _item10.tongsoluongpo;
            _data8.dacheckvoipo = 1;
            _data8.checkmataisan = null;
            //data.nguoikiemtra_id = UserId;
            //data.ngaykiemtra = ngaytao

            // Lưu thay đổi
            _context46.next = 68;
            return _data8.save();
          case 68:
            _context46.next = 73;
            break;
          case 70:
            _context46.prev = 70;
            _context46.t2 = _context46["catch"](51);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt PO c\xF3 id: ".concat(_item10.id), _context46.t2);
          case 73:
            _context46.next = 49;
            break;
          case 75:
            _context46.next = 80;
            break;
          case 77:
            _context46.prev = 77;
            _context46.t3 = _context46["catch"](47);
            _iterator15.e(_context46.t3);
          case 80:
            _context46.prev = 80;
            _iterator15.f();
            return _context46.finish(80);
          case 83:
            // Dò tìm và thêm id_data_pr từ datapr vào datapo
            datapo.forEach(function (record) {
              var found = datapr.find(function (pr) {
                return pr.sopr === record.sopr && pr.mataisan === record.mataisan;
              });
              if (found) {
                record.id_data_pr = found.id;
                record.soluongpodacheck = found.soluongpo;
              }
            });
            if (!(check_log_po_pr.length > 0)) {
              _context46.next = 127;
              break;
            }
            _iterator16 = _createForOfIteratorHelper(check_log_po_pr);
            _context46.prev = 86;
            _iterator16.s();
          case 88:
            if ((_step16 = _iterator16.n()).done) {
              _context46.next = 100;
              break;
            }
            record = _step16.value;
            _context46.prev = 90;
            _context46.next = 93;
            return _index["default"].Data_Po_Pr_Log.destroy({
              where: {
                id: record.id
              }
            });
          case 93:
            _context46.next = 98;
            break;
          case 95:
            _context46.prev = 95;
            _context46.t4 = _context46["catch"](90);
            console.error("L\u1ED7i khi x\xF3a d\u1EEF li\u1EC7u v\u1EDBi ID ".concat(record.id, ":"), _context46.t4);
          case 98:
            _context46.next = 88;
            break;
          case 100:
            _context46.next = 105;
            break;
          case 102:
            _context46.prev = 102;
            _context46.t5 = _context46["catch"](86);
            _iterator16.e(_context46.t5);
          case 105:
            _context46.prev = 105;
            _iterator16.f();
            return _context46.finish(105);
          case 108:
            // insert lại thông tin mới    
            _iterator17 = _createForOfIteratorHelper(datapo);
            _context46.prev = 109;
            _iterator17.s();
          case 111:
            if ((_step17 = _iterator17.n()).done) {
              _context46.next = 117;
              break;
            }
            _item8 = _step17.value;
            _context46.next = 115;
            return _index["default"].Data_Po_Pr_Log.create({
              id_data_pr: _item8.id_data_pr,
              soluongpodacheck: _item8.soluongpodacheck,
              mataisan: _item8.mataisan,
              tentaisan: _item8.tentaisan,
              donvitinh: _item8.donvitinh,
              soluongpo: _item8.soluongpo,
              dongiapo: _item8.dongiapo,
              vat: _item8.vat,
              dongiapovat: _item8.dongiapovat,
              thanhtien: _item8.thanhtien,
              thanhtienvat: _item8.thanhtienvat,
              sopo: _item8.sopo,
              sopr: _item8.sopr,
              nguoikiemtra_id: UserId,
              ngaykiemtra: ngaytao
            });
          case 115:
            _context46.next = 111;
            break;
          case 117:
            _context46.next = 122;
            break;
          case 119:
            _context46.prev = 119;
            _context46.t6 = _context46["catch"](109);
            _iterator17.e(_context46.t6);
          case 122:
            _context46.prev = 122;
            _iterator17.f();
            return _context46.finish(122);
          case 125:
            _context46.next = 150;
            break;
          case 127:
            _context46.prev = 127;
            _iterator18 = _createForOfIteratorHelper(datapo);
            _context46.prev = 129;
            _iterator18.s();
          case 131:
            if ((_step18 = _iterator18.n()).done) {
              _context46.next = 137;
              break;
            }
            _item9 = _step18.value;
            _context46.next = 135;
            return _index["default"].Data_Po_Pr_Log.create({
              id_data_pr: _item9.id_data_pr,
              soluongpodacheck: _item9.soluongpodacheck,
              mataisan: _item9.mataisan,
              tentaisan: _item9.tentaisan,
              donvitinh: _item9.donvitinh,
              soluongpo: _item9.soluongpo,
              dongiapo: _item9.dongiapo,
              vat: _item9.vat,
              dongiapovat: _item9.dongiapovat,
              thanhtien: _item9.thanhtien,
              thanhtienvat: _item9.thanhtienvat,
              sopo: _item9.sopo,
              sopr: _item9.sopr,
              nguoikiemtra_id: UserId,
              ngaykiemtra: ngaytao
            });
          case 135:
            _context46.next = 131;
            break;
          case 137:
            _context46.next = 142;
            break;
          case 139:
            _context46.prev = 139;
            _context46.t7 = _context46["catch"](129);
            _iterator18.e(_context46.t7);
          case 142:
            _context46.prev = 142;
            _iterator18.f();
            return _context46.finish(142);
          case 145:
            _context46.next = 150;
            break;
          case 147:
            _context46.prev = 147;
            _context46.t8 = _context46["catch"](127);
            console.error("Lỗi khi insert vào DB:", _context46.t8);
          case 150:
            resolve({
              errCode: 0,
              errMessage: 'Kiểm tra dữ liệu thành công'
            });
            _context46.next = 154;
            break;
          case 153:
            resolve({
              errCode: 1,
              errMessage: 'Số PO không tồn tại'
            });
          case 154:
            _context46.next = 159;
            break;
          case 156:
            _context46.prev = 156;
            _context46.t9 = _context46["catch"](0);
            reject(_context46.t9);
          case 159:
          case "end":
            return _context46.stop();
        }
      }, _callee46, null, [[0, 156], [12, 34, 37, 40], [16, 27], [47, 77, 80, 83], [51, 70], [86, 102, 105, 108], [90, 95], [109, 119, 122, 125], [127, 147], [129, 139, 142, 145]]);
    }));
    return function (_x91, _x92) {
      return _ref47.apply(this, arguments);
    };
  }());
};
var checkMaChungTuHD = function checkMaChungTuHD(machungtu) {
  return new Promise(/*#__PURE__*/function () {
    var _ref48 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee47(resolve, reject) {
      var ngaytao, request, getdata, recordset, data;
      return _regeneratorRuntime().wrap(function _callee47$(_context47) {
        while (1) switch (_context47.prev = _context47.next) {
          case 0:
            _context47.prev = 0;
            ngaytao = new Date();
            request = _index["default"].sqlhis2Connection.request();
            request.input('machungtu', mssql.NVarChar(50), machungtu);
            _context47.next = 6;
            return request.execute('[sp_QLPO_CHECKCHUNGTUNHAPNCC]');
          case 6:
            getdata = _context47.sent;
            // Lấy dữ liệu từ recordset
            recordset = getdata.recordset; //console.log('recordset', recordset)
            data = recordset[0]; //console.log('data', data.trangthai)
            if (data.trangthai === 'PNDNK') {
              resolve({
                errCode: 1,
                errMessage: 'Chứng từ đã xác nhận nhập kho'
              });
            } else {
              resolve({
                errCode: 0,
                errMessage: 'Chứng từ chưa nhập kho'
              });
            }
            _context47.next = 15;
            break;
          case 12:
            _context47.prev = 12;
            _context47.t0 = _context47["catch"](0);
            reject(_context47.t0);
          case 15:
          case "end":
            return _context47.stop();
        }
      }, _callee47, null, [[0, 12]]);
    }));
    return function (_x93, _x94) {
      return _ref48.apply(this, arguments);
    };
  }());
};
var checkXoaChungTu = function checkXoaChungTu(machungtu) {
  return new Promise(/*#__PURE__*/function () {
    var _ref49 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee48(resolve, reject) {
      var ngaytao, request, getdata, recordset, data, check_log_chungtu, check_log_hopdong;
      return _regeneratorRuntime().wrap(function _callee48$(_context48) {
        while (1) switch (_context48.prev = _context48.next) {
          case 0:
            _context48.prev = 0;
            ngaytao = new Date();
            request = _index["default"].sqlhis2Connection.request();
            request.input('machungtu', mssql.NVarChar(50), machungtu);
            _context48.next = 6;
            return request.execute('[sp_QLPO_CHECKCHUNGTUNHAPNCC]');
          case 6:
            getdata = _context48.sent;
            // Lấy dữ liệu từ recordset
            recordset = getdata.recordset; //console.log('recordset', recordset)
            data = recordset[0]; //console.log('data', data.trangthai)
            _context48.next = 11;
            return _index["default"].Data_ChungTu_Log.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                machungtu: data.machungtu
              },
              raw: true
            });
          case 11:
            check_log_chungtu = _context48.sent;
            _context48.next = 14;
            return _index["default"].Data_ChungTu_Hd_Log.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                machungtu: data.machungtu
              },
              raw: true
            });
          case 14:
            check_log_hopdong = _context48.sent;
            if (data.trangthai === 'PNDNK') {
              resolve({
                errCode: 1,
                errMessage: 'Chứng từ đã xác nhận nhập kho'
              });
            } else {
              if (check_log_chungtu.length === 0 && check_log_hopdong.length === 0) {
                resolve({
                  errCode: 0,
                  errMessage: 'Chứng từ chưa nhập kho'
                });
              } else {
                resolve({
                  errCode: 1,
                  errMessage: 'Đã có log kiểm tra, không thể xóa chứng từ'
                });
              }
            }
            _context48.next = 21;
            break;
          case 18:
            _context48.prev = 18;
            _context48.t0 = _context48["catch"](0);
            reject(_context48.t0);
          case 21:
          case "end":
            return _context48.stop();
        }
      }, _callee48, null, [[0, 18]]);
    }));
    return function (_x95, _x96) {
      return _ref49.apply(this, arguments);
    };
  }());
};
var checkXoaCheckChungTu = function checkXoaCheckChungTu(machungtu) {
  return new Promise(/*#__PURE__*/function () {
    var _ref50 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee49(resolve, reject) {
      var check_log_chungtu, check_log_hopdong;
      return _regeneratorRuntime().wrap(function _callee49$(_context49) {
        while (1) switch (_context49.prev = _context49.next) {
          case 0:
            _context49.prev = 0;
            _context49.next = 3;
            return _index["default"].Check_Data_ChungTu_Log.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                machungtu: machungtu
              },
              raw: true
            });
          case 3:
            check_log_chungtu = _context49.sent;
            _context49.next = 6;
            return _index["default"].Check_Data_ChungTu_Hd_Log.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                machungtu: machungtu
              },
              raw: true
            });
          case 6:
            check_log_hopdong = _context49.sent;
            if (check_log_chungtu.length === 0 && check_log_hopdong.length === 0) {
              resolve({
                errCode: 0,
                errMessage: 'Chứng từ chưa nhập kho'
              });
            } else {
              resolve({
                errCode: 1,
                errMessage: 'Đã có log kiểm tra, không thể xóa chứng từ'
              });
            }
            _context49.next = 13;
            break;
          case 10:
            _context49.prev = 10;
            _context49.t0 = _context49["catch"](0);
            reject(_context49.t0);
          case 13:
          case "end":
            return _context49.stop();
        }
      }, _callee49, null, [[0, 10]]);
    }));
    return function (_x97, _x98) {
      return _ref50.apply(this, arguments);
    };
  }());
};
var checkMaChungTuPO = function checkMaChungTuPO(machungtu) {
  return new Promise(/*#__PURE__*/function () {
    var _ref51 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee50(resolve, reject) {
      var ngaytao, request, getdata, recordset, data;
      return _regeneratorRuntime().wrap(function _callee50$(_context50) {
        while (1) switch (_context50.prev = _context50.next) {
          case 0:
            _context50.prev = 0;
            ngaytao = new Date();
            request = _index["default"].sqlhis2Connection.request();
            request.input('machungtu', mssql.NVarChar(50), machungtu);
            _context50.next = 6;
            return request.execute('[sp_QLPO_CHECKCHUNGTUNHAPNCC]');
          case 6:
            getdata = _context50.sent;
            // Lấy dữ liệu từ recordset
            recordset = getdata.recordset; //console.log('recordset', recordset)
            data = recordset[0]; //console.log('data', data.trangthai)
            if (data.trangthai === 'PNDNK') {
              resolve({
                errCode: 1,
                errMessage: 'Chứng từ đã xác nhận nhập kho'
              });
            } else {
              resolve({
                errCode: 0,
                errMessage: 'Chứng từ chưa nhập kho'
              });
            }
            _context50.next = 15;
            break;
          case 12:
            _context50.prev = 12;
            _context50.t0 = _context50["catch"](0);
            reject(_context50.t0);
          case 15:
          case "end":
            return _context50.stop();
        }
      }, _callee50, null, [[0, 12]]);
    }));
    return function (_x99, _x100) {
      return _ref51.apply(this, arguments);
    };
  }());
};
var checkPOPR = function checkPOPR(sopo) {
  return new Promise(/*#__PURE__*/function () {
    var _ref52 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee51(resolve, reject) {
      var check_po;
      return _regeneratorRuntime().wrap(function _callee51$(_context51) {
        while (1) switch (_context51.prev = _context51.next) {
          case 0:
            _context51.prev = 0;
            _context51.next = 3;
            return _index["default"].Data_PO.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                sopo: sopo,
                dacheckvoict: 1
              },
              raw: true
            });
          case 3:
            check_po = _context51.sent;
            //console.log('check_po', check_po)
            if (check_po.length > 0) {
              resolve({
                errCode: 1,
                data: check_po,
                errMessage: 'PO đã phát sinh chứng từ kiểm tra. Không thể xóa'
              });
            } else {
              resolve({
                errCode: 0,
                data: check_po,
                errMessage: 'Khóa button thanh toán thành công'
              });
            }
            // let check_log_po_pr = await db.Data_Po_Pr_Log.findAll({
            //     //attributes: ['SoBenhAn'],
            //     where: {
            //         sopr: sopr,
            //     },
            //     raw: true
            // });
            // const data = check_log_po_pr[0];
            // //console.log('data', data.sopo)
            // if (check_log_po_pr.length > 0) {
            //     resolve({
            //         errCode: 0,
            //         errMessage: 'Chứng từ chưa nhập kho',
            //         data: data.sopo,
            //     })
            // }
            _context51.next = 10;
            break;
          case 7:
            _context51.prev = 7;
            _context51.t0 = _context51["catch"](0);
            reject(_context51.t0);
          case 10:
          case "end":
            return _context51.stop();
        }
      }, _callee51, null, [[0, 7]]);
    }));
    return function (_x101, _x102) {
      return _ref52.apply(this, arguments);
    };
  }());
};
var getChungTu = function getChungTu(machungtu, UserId) {
  return new Promise(/*#__PURE__*/function () {
    var _ref53 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee52(resolve, reject) {
      var ngaytao, request, getdata, recordset, data, check_log_chungtu_hd, _iterator19, _step19, item, _data9, gethd, _iterator20, _step20, _item13, _data10, _iterator21, _step21, record, _iterator22, _step22, _item11, _iterator23, _step23, _item12;
      return _regeneratorRuntime().wrap(function _callee52$(_context52) {
        while (1) switch (_context52.prev = _context52.next) {
          case 0:
            _context52.prev = 0;
            ngaytao = new Date();
            request = _index["default"].sqlhis2Connection.request();
            request.input('machungtu', mssql.NVarChar(50), machungtu);
            _context52.next = 6;
            return request.execute('[sp_QLPO_GETCHUNGTUNHAPNCC]');
          case 6:
            getdata = _context52.sent;
            // Lấy dữ liệu từ recordset
            recordset = getdata.recordset; //console.log('recordset', recordset)
            data = recordset[0];
            _context52.next = 11;
            return _index["default"].Data_ChungTu_Hd_Log.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                machungtu: machungtu
              },
              raw: true
            });
          case 11:
            check_log_chungtu_hd = _context52.sent;
            if (!(check_log_chungtu_hd.length > 0)) {
              _context52.next = 41;
              break;
            }
            _iterator19 = _createForOfIteratorHelper(check_log_chungtu_hd);
            _context52.prev = 14;
            _iterator19.s();
          case 16:
            if ((_step19 = _iterator19.n()).done) {
              _context52.next = 33;
              break;
            }
            item = _step19.value;
            _context52.prev = 18;
            _context52.next = 21;
            return _index["default"].Data_HD.findOne({
              where: {
                id: item.id_data_hd
              },
              raw: false
            });
          case 21:
            _data9 = _context52.sent;
            if (!_data9) {
              _context52.next = 26;
              break;
            }
            _data9.soluongdanhap = _data9.soluongdanhap - item.soluongnhap;
            // Lưu thay đổi
            _context52.next = 26;
            return _data9.save();
          case 26:
            _context52.next = 31;
            break;
          case 28:
            _context52.prev = 28;
            _context52.t0 = _context52["catch"](18);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt PO c\xF3 id: ".concat(item.id), _context52.t0);
          case 31:
            _context52.next = 16;
            break;
          case 33:
            _context52.next = 38;
            break;
          case 35:
            _context52.prev = 35;
            _context52.t1 = _context52["catch"](14);
            _iterator19.e(_context52.t1);
          case 38:
            _context52.prev = 38;
            _iterator19.f();
            return _context52.finish(38);
          case 41:
            if (!(recordset.length > 0)) {
              _context52.next = 159;
              break;
            }
            if (!(data.trangthai !== 'PNDNK')) {
              _context52.next = 156;
              break;
            }
            _context52.next = 45;
            return _index["default"].Data_HD.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                nhacungcap_id: data.nhacungcap_id
              },
              raw: true
            });
          case 45:
            gethd = _context52.sent;
            // Vòng lặp tìm các phần tử trùng khớp giữa recordset và gethd
            gethd = gethd.map(function (hdItem) {
              var recordItem = recordset.find(function (record) {
                return record.nhacungcap_id === hdItem.nhacungcap_id && record.mataisan === hdItem.mataisan;
              });
              if (recordItem) {
                hdItem.soluongdanhap = hdItem.soluongdanhap !== null ? hdItem.soluongdanhap : 0;
                // Tính toán sự chênh lệch
                hdItem.dongianhap = recordItem.dongianhap - hdItem.dongiahd;
                hdItem.dongianhapvat = recordItem.dongianhapvat - hdItem.dongiahdvat;
                hdItem.soluongdanhap = recordItem.soluongnhap + hdItem.soluongdanhap;
                hdItem.checkmataisanvoict = null;

                // Kiểm tra ngaychungtu có nằm trong khoảng ngayhieuluc và ngayketthuc
                var ngaychungtu = new Date(recordItem.ngaychungtu);
                var ngayhieuluc = new Date(hdItem.ngayhieuluc);
                var ngayketthuc = new Date(hdItem.ngayketthuc);

                // Kiểm tra điều kiện
                if (ngaychungtu >= ngayhieuluc && ngaychungtu <= ngayketthuc) {
                  hdItem.checkhieuluc = 1; // Trong khoảng
                } else {
                  hdItem.checkhieuluc = 0; // Ngoài khoảng
                }
              } else {
                // Điều kiện thứ nhất: Trùng ncc nhưng khác mataisan
                var recordWithSameSoHd = recordset.find(function (record) {
                  return record.nhacungcap_id === hdItem.nhacungcap_id && record.mataisan !== hdItem.mataisan;
                });

                // Điều kiện thứ hai: mataisan không có trong recordset
                var recordWithDifferentMataisan = !recordset.find(function (record) {
                  return record.nhacungcap_id === hdItem.nhacungcap_id && record.mataisan === hdItem.mataisan;
                });

                // Nếu có record trùng ncc nhưng khác mataisan hoặc mataisan không có trong recordset
                if (recordWithSameSoHd || recordWithDifferentMataisan) {
                  hdItem.checkmataisanvoict = 1;
                }
              }
              return hdItem;
            });

            //console.log('getpo', gethd);
            _iterator20 = _createForOfIteratorHelper(gethd);
            _context52.prev = 48;
            _iterator20.s();
          case 50:
            if ((_step20 = _iterator20.n()).done) {
              _context52.next = 78;
              break;
            }
            _item13 = _step20.value;
            _context52.prev = 52;
            _context52.next = 55;
            return _index["default"].Data_HD.findOne({
              where: {
                id: _item13.id
              },
              raw: false
            });
          case 55:
            _data10 = _context52.sent;
            if (!_data10) {
              _context52.next = 71;
              break;
            }
            if (!(_item13.checkmataisanvoict === 1)) {
              _context52.next = 63;
              break;
            }
            // Chỉ cập nhật trường check
            _data10.checkmataisanvoict = _item13.checkmataisanvoict;

            // Lưu thay đổi
            _context52.next = 61;
            return _data10.save();
          case 61:
            _context52.next = 71;
            break;
          case 63:
            // Cập nhật các thông tin theo từng mục
            _data10.dongianhap = _item13.dongianhap;
            _data10.dongianhapvat = _item13.dongianhapvat;
            _data10.soluongdanhap = _item13.soluongdanhap;
            _data10.checkhieuluc = _item13.checkhieuluc;
            _data10.checkmataisan = null;
            _data10.dacheckvoict = 1;
            //data.ngaykiemtra = ngaytao
            // Lưu thay đổi
            _context52.next = 71;
            return _data10.save();
          case 71:
            _context52.next = 76;
            break;
          case 73:
            _context52.prev = 73;
            _context52.t2 = _context52["catch"](52);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt PO c\xF3 id: ".concat(_item13.id), _context52.t2);
          case 76:
            _context52.next = 50;
            break;
          case 78:
            _context52.next = 83;
            break;
          case 80:
            _context52.prev = 80;
            _context52.t3 = _context52["catch"](48);
            _iterator20.e(_context52.t3);
          case 83:
            _context52.prev = 83;
            _iterator20.f();
            return _context52.finish(83);
          case 86:
            // Dò tìm và thêm id_data_hd từ gethd vào recordset
            recordset.forEach(function (record) {
              var found = gethd.find(function (hd) {
                return hd.nhacungcap_id === record.nhacungcap_id && hd.mataisan === record.mataisan;
              });
              if (found) {
                record.id_data_hd = found.id;
                record.dongianhap_check = found.dongianhap;
                record.dongianhapvat_check = found.dongianhapvat;
                record.hieuluc_check = found.checkhieuluc;
              }
            });
            //console.log('recordset2', recordset)

            //console.log('check_log_chungtu', check_log_chungtu)
            if (!(check_log_chungtu_hd.length > 0)) {
              _context52.next = 130;
              break;
            }
            _iterator21 = _createForOfIteratorHelper(check_log_chungtu_hd);
            _context52.prev = 89;
            _iterator21.s();
          case 91:
            if ((_step21 = _iterator21.n()).done) {
              _context52.next = 103;
              break;
            }
            record = _step21.value;
            _context52.prev = 93;
            _context52.next = 96;
            return _index["default"].Data_ChungTu_Hd_Log.destroy({
              where: {
                id: record.id
              }
            });
          case 96:
            _context52.next = 101;
            break;
          case 98:
            _context52.prev = 98;
            _context52.t4 = _context52["catch"](93);
            console.error("L\u1ED7i khi x\xF3a d\u1EEF li\u1EC7u v\u1EDBi ID ".concat(record.id, ":"), _context52.t4);
          case 101:
            _context52.next = 91;
            break;
          case 103:
            _context52.next = 108;
            break;
          case 105:
            _context52.prev = 105;
            _context52.t5 = _context52["catch"](89);
            _iterator21.e(_context52.t5);
          case 108:
            _context52.prev = 108;
            _iterator21.f();
            return _context52.finish(108);
          case 111:
            // insert lại thông tin mới    
            _iterator22 = _createForOfIteratorHelper(recordset);
            _context52.prev = 112;
            _iterator22.s();
          case 114:
            if ((_step22 = _iterator22.n()).done) {
              _context52.next = 120;
              break;
            }
            _item11 = _step22.value;
            _context52.next = 118;
            return _index["default"].Data_ChungTu_Hd_Log.create(_defineProperty(_defineProperty(_defineProperty({
              machungtu: _item11.machungtu,
              mataisan: _item11.mataisan,
              tentaisan: _item11.tentaisan,
              dongianhap_check: _item11.dongianhap_check,
              dongianhapvat_check: _item11.dongianhapvat_check,
              hieuluc_check: _item11.hieuluc_check,
              id_data_hd: _item11.id_data_hd,
              nhacungcap_id: _item11.nhacungcap_id,
              tennhacungcap: _item11.tennhacungcap,
              chungtu_id: _item11.chungtu_id,
              ngaychungtu: _item11.ngaychungtu,
              khonhap: _item11.khonhap,
              nguoinhap: _item11.nguoinhap,
              soluongnhap: _item11.soluongnhap,
              dongianhap: _item11.dongianhap,
              dongianhapvat: _item11.dongianhapvat,
              vatnhap: _item11.vatnhap,
              thanhtiennhap: _item11.soluongnhap * _item11.dongianhap,
              thanhtiennhapvat: _item11.soluongnhap * _item11.dongianhapvat
            }, "nguoinhap", _item11.nguoinhap), "nguoikiemtra_id", UserId), "ngaykiemtra", ngaytao));
          case 118:
            _context52.next = 114;
            break;
          case 120:
            _context52.next = 125;
            break;
          case 122:
            _context52.prev = 122;
            _context52.t6 = _context52["catch"](112);
            _iterator22.e(_context52.t6);
          case 125:
            _context52.prev = 125;
            _iterator22.f();
            return _context52.finish(125);
          case 128:
            _context52.next = 153;
            break;
          case 130:
            _context52.prev = 130;
            _iterator23 = _createForOfIteratorHelper(recordset);
            _context52.prev = 132;
            _iterator23.s();
          case 134:
            if ((_step23 = _iterator23.n()).done) {
              _context52.next = 140;
              break;
            }
            _item12 = _step23.value;
            _context52.next = 138;
            return _index["default"].Data_ChungTu_Hd_Log.create(_defineProperty(_defineProperty(_defineProperty({
              machungtu: _item12.machungtu,
              mataisan: _item12.mataisan,
              tentaisan: _item12.tentaisan,
              dongianhap_check: _item12.dongianhap_check,
              dongianhapvat_check: _item12.dongianhapvat_check,
              hieuluc_check: _item12.hieuluc_check,
              id_data_hd: _item12.id_data_hd,
              nhacungcap_id: _item12.nhacungcap_id,
              tennhacungcap: _item12.tennhacungcap,
              chungtu_id: _item12.chungtu_id,
              ngaychungtu: _item12.ngaychungtu,
              khonhap: _item12.khonhap,
              nguoinhap: _item12.nguoinhap,
              soluongnhap: _item12.soluongnhap,
              dongianhap: _item12.dongianhap,
              dongianhapvat: _item12.dongianhapvat,
              vatnhap: _item12.vatnhap,
              thanhtiennhap: _item12.soluongnhap * _item12.dongianhap,
              thanhtiennhapvat: _item12.soluongnhap * _item12.dongianhapvat
            }, "nguoinhap", _item12.nguoinhap), "nguoikiemtra_id", UserId), "ngaykiemtra", ngaytao));
          case 138:
            _context52.next = 134;
            break;
          case 140:
            _context52.next = 145;
            break;
          case 142:
            _context52.prev = 142;
            _context52.t7 = _context52["catch"](132);
            _iterator23.e(_context52.t7);
          case 145:
            _context52.prev = 145;
            _iterator23.f();
            return _context52.finish(145);
          case 148:
            _context52.next = 153;
            break;
          case 150:
            _context52.prev = 150;
            _context52.t8 = _context52["catch"](130);
            console.error("Lỗi khi insert vào DB:", _context52.t8);
          case 153:
            resolve({
              errCode: 0,
              errMessage: 'Kiểm tra dữ liệu thành công'
            });
            _context52.next = 157;
            break;
          case 156:
            resolve({
              errCode: 1,
              errMessage: 'Chứng từ đã nhập kho'
            });
          case 157:
            _context52.next = 160;
            break;
          case 159:
            resolve({
              errCode: 1,
              errMessage: 'Mã chứng từ không tồn tại..'
            });
          case 160:
            _context52.next = 165;
            break;
          case 162:
            _context52.prev = 162;
            _context52.t9 = _context52["catch"](0);
            reject(_context52.t9);
          case 165:
          case "end":
            return _context52.stop();
        }
      }, _callee52, null, [[0, 162], [14, 35, 38, 41], [18, 28], [48, 80, 83, 86], [52, 73], [89, 105, 108, 111], [93, 98], [112, 122, 125, 128], [130, 150], [132, 142, 145, 148]]);
    }));
    return function (_x103, _x104) {
      return _ref53.apply(this, arguments);
    };
  }());
};
var getCheckChungTu = function getCheckChungTu(machungtu, UserId) {
  return new Promise(/*#__PURE__*/function () {
    var _ref54 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee53(resolve, reject) {
      var ngaytao, request, getdata, recordset, data, check_log_chungtu_hd, _iterator24, _step24, item, _data11, gethd, _iterator25, _step25, _item18, _data14, _iterator26, _step26, record, _iterator27, _step27, _item14, _require5, Op, data_check_log_chungtu, data_log_chungtu, result, _iterator28, _step28, _item15, _data12, _iterator29, _step29, _item16, _require6, _Op, _data_check_log_chungtu, _data_log_chungtu, _result, _iterator30, _step30, _item17, _data13;
      return _regeneratorRuntime().wrap(function _callee53$(_context53) {
        while (1) switch (_context53.prev = _context53.next) {
          case 0:
            _context53.prev = 0;
            ngaytao = new Date();
            request = _index["default"].sqlhis2Connection.request();
            request.input('machungtu', mssql.NVarChar(50), machungtu);
            _context53.next = 6;
            return request.execute('[sp_QLPO_GETCHUNGTUNHAPNCC_DNK]');
          case 6:
            getdata = _context53.sent;
            // Lấy dữ liệu từ recordset
            recordset = getdata.recordset; //console.log('recordset', recordset)
            data = recordset[0];
            _context53.next = 11;
            return _index["default"].Check_Data_ChungTu_Hd_Log.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                machungtu: machungtu
              },
              raw: true
            });
          case 11:
            check_log_chungtu_hd = _context53.sent;
            if (!(check_log_chungtu_hd.length > 0)) {
              _context53.next = 41;
              break;
            }
            _iterator24 = _createForOfIteratorHelper(check_log_chungtu_hd);
            _context53.prev = 14;
            _iterator24.s();
          case 16:
            if ((_step24 = _iterator24.n()).done) {
              _context53.next = 33;
              break;
            }
            item = _step24.value;
            _context53.prev = 18;
            _context53.next = 21;
            return _index["default"].Data_HD.findOne({
              where: {
                id: item.id_data_hd
              },
              raw: false
            });
          case 21:
            _data11 = _context53.sent;
            if (!_data11) {
              _context53.next = 26;
              break;
            }
            _data11.soluongdanhap2 = _data11.soluongdanhap2 - item.soluongnhap;
            // Lưu thay đổi
            _context53.next = 26;
            return _data11.save();
          case 26:
            _context53.next = 31;
            break;
          case 28:
            _context53.prev = 28;
            _context53.t0 = _context53["catch"](18);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt PO c\xF3 id: ".concat(item.id), _context53.t0);
          case 31:
            _context53.next = 16;
            break;
          case 33:
            _context53.next = 38;
            break;
          case 35:
            _context53.prev = 35;
            _context53.t1 = _context53["catch"](14);
            _iterator24.e(_context53.t1);
          case 38:
            _context53.prev = 38;
            _iterator24.f();
            return _context53.finish(38);
          case 41:
            if (!(recordset.length > 0)) {
              _context53.next = 233;
              break;
            }
            if (!(data.trangthai !== 'PNCNK')) {
              _context53.next = 230;
              break;
            }
            _context53.next = 45;
            return _index["default"].Data_HD.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                nhacungcap_id: data.nhacungcap_id
              },
              raw: true
            });
          case 45:
            gethd = _context53.sent;
            // Vòng lặp tìm các phần tử trùng khớp giữa recordset và gethd
            gethd = gethd.map(function (hdItem) {
              var recordItem = recordset.find(function (record) {
                return record.nhacungcap_id === hdItem.nhacungcap_id && record.mataisan === hdItem.mataisan;
              });
              if (recordItem) {
                hdItem.soluongdanhap2 = hdItem.soluongdanhap2 !== null ? hdItem.soluongdanhap2 : 0;
                // Tính toán sự chênh lệch
                hdItem.dongianhap2 = recordItem.dongianhap - hdItem.dongiahd;
                hdItem.dongianhapvat2 = recordItem.dongianhapvat - hdItem.dongiahdvat;
                hdItem.soluongdanhap2 = recordItem.soluongnhap + hdItem.soluongdanhap2;
                hdItem.checkmataisanvoict2 = null;

                // Kiểm tra ngaychungtu có nằm trong khoảng ngayhieuluc và ngayketthuc
                var ngaychungtu = new Date(recordItem.ngaychungtu);
                var ngayhieuluc = new Date(hdItem.ngayhieuluc);
                var ngayketthuc = new Date(hdItem.ngayketthuc);

                // Kiểm tra điều kiện
                if (ngaychungtu >= ngayhieuluc && ngaychungtu <= ngayketthuc) {
                  hdItem.checkhieuluc = 1; // Trong khoảng
                } else {
                  hdItem.checkhieuluc = 0; // Ngoài khoảng
                }
              } else {
                // Điều kiện thứ nhất: Trùng ncc nhưng khác mataisan
                var recordWithSameSoHd = recordset.find(function (record) {
                  return record.nhacungcap_id === hdItem.nhacungcap_id && record.mataisan !== hdItem.mataisan;
                });

                // Điều kiện thứ hai: mataisan không có trong recordset
                var recordWithDifferentMataisan = !recordset.find(function (record) {
                  return record.nhacungcap_id === hdItem.nhacungcap_id && record.mataisan === hdItem.mataisan;
                });

                // Nếu có record trùng ncc nhưng khác mataisan hoặc mataisan không có trong recordset
                if (recordWithSameSoHd || recordWithDifferentMataisan) {
                  hdItem.checkmataisanvoict2 = 1;
                }
              }
              return hdItem;
            });

            //console.log('getpo', gethd);
            _iterator25 = _createForOfIteratorHelper(gethd);
            _context53.prev = 48;
            _iterator25.s();
          case 50:
            if ((_step25 = _iterator25.n()).done) {
              _context53.next = 78;
              break;
            }
            _item18 = _step25.value;
            _context53.prev = 52;
            _context53.next = 55;
            return _index["default"].Data_HD.findOne({
              where: {
                id: _item18.id
              },
              raw: false
            });
          case 55:
            _data14 = _context53.sent;
            if (!_data14) {
              _context53.next = 71;
              break;
            }
            if (!(_item18.checkmataisanvoict2 === 1)) {
              _context53.next = 63;
              break;
            }
            // Chỉ cập nhật trường check
            _data14.checkmataisanvoict2 = _item18.checkmataisanvoict2;

            // Lưu thay đổi
            _context53.next = 61;
            return _data14.save();
          case 61:
            _context53.next = 71;
            break;
          case 63:
            // Cập nhật các thông tin theo từng mục
            _data14.dongianhap2 = _item18.dongianhap2;
            _data14.dongianhapvat2 = _item18.dongianhapvat2;
            _data14.soluongdanhap2 = _item18.soluongdanhap2;
            _data14.checkhieuluc = _item18.checkhieuluc;
            _data14.checkmataisan = null;
            _data14.dacheckvoict2 = 1;
            //data.ngaykiemtra = ngaytao
            // Lưu thay đổi
            _context53.next = 71;
            return _data14.save();
          case 71:
            _context53.next = 76;
            break;
          case 73:
            _context53.prev = 73;
            _context53.t2 = _context53["catch"](52);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt PO c\xF3 id: ".concat(_item18.id), _context53.t2);
          case 76:
            _context53.next = 50;
            break;
          case 78:
            _context53.next = 83;
            break;
          case 80:
            _context53.prev = 80;
            _context53.t3 = _context53["catch"](48);
            _iterator25.e(_context53.t3);
          case 83:
            _context53.prev = 83;
            _iterator25.f();
            return _context53.finish(83);
          case 86:
            // Dò tìm và thêm id_data_hd từ gethd vào recordset
            recordset.forEach(function (record) {
              var found = gethd.find(function (hd) {
                return hd.nhacungcap_id === record.nhacungcap_id && hd.mataisan === record.mataisan;
              });
              if (found) {
                record.id_data_hd = found.id;
                record.dongianhap_check = found.dongianhap2;
                record.dongianhapvat_check = found.dongianhapvat2;
                record.hieuluc_check = found.checkhieuluc;
              }
            });
            //console.log('recordset2', recordset)

            //console.log('check_log_chungtu', check_log_chungtu)
            if (!(check_log_chungtu_hd.length > 0)) {
              _context53.next = 167;
              break;
            }
            _iterator26 = _createForOfIteratorHelper(check_log_chungtu_hd);
            _context53.prev = 89;
            _iterator26.s();
          case 91:
            if ((_step26 = _iterator26.n()).done) {
              _context53.next = 103;
              break;
            }
            record = _step26.value;
            _context53.prev = 93;
            _context53.next = 96;
            return _index["default"].Check_Data_ChungTu_Hd_Log.destroy({
              where: {
                id: record.id
              }
            });
          case 96:
            _context53.next = 101;
            break;
          case 98:
            _context53.prev = 98;
            _context53.t4 = _context53["catch"](93);
            console.error("L\u1ED7i khi x\xF3a d\u1EEF li\u1EC7u v\u1EDBi ID ".concat(record.id, ":"), _context53.t4);
          case 101:
            _context53.next = 91;
            break;
          case 103:
            _context53.next = 108;
            break;
          case 105:
            _context53.prev = 105;
            _context53.t5 = _context53["catch"](89);
            _iterator26.e(_context53.t5);
          case 108:
            _context53.prev = 108;
            _iterator26.f();
            return _context53.finish(108);
          case 111:
            // insert lại thông tin mới    
            _iterator27 = _createForOfIteratorHelper(recordset);
            _context53.prev = 112;
            _iterator27.s();
          case 114:
            if ((_step27 = _iterator27.n()).done) {
              _context53.next = 120;
              break;
            }
            _item14 = _step27.value;
            _context53.next = 118;
            return _index["default"].Check_Data_ChungTu_Hd_Log.create(_defineProperty(_defineProperty(_defineProperty({
              machungtu: _item14.machungtu,
              mataisan: _item14.mataisan,
              tentaisan: _item14.tentaisan,
              dongianhap_check: _item14.dongianhap_check,
              dongianhapvat_check: _item14.dongianhapvat_check,
              hieuluc_check: _item14.hieuluc_check,
              id_data_hd: _item14.id_data_hd,
              nhacungcap_id: _item14.nhacungcap_id,
              tennhacungcap: _item14.tennhacungcap,
              chungtu_id: _item14.chungtu_id,
              ngaychungtu: _item14.ngaychungtu,
              khonhap: _item14.khonhap,
              nguoinhap: _item14.nguoinhap,
              soluongnhap: _item14.soluongnhap,
              dongianhap: _item14.dongianhap,
              dongianhapvat: _item14.dongianhapvat,
              vatnhap: _item14.vatnhap,
              thanhtiennhap: _item14.soluongnhap * _item14.dongianhap,
              thanhtiennhapvat: _item14.soluongnhap * _item14.dongianhapvat
            }, "nguoinhap", _item14.nguoinhap), "nguoikiemtra_id", UserId), "ngaykiemtra", ngaytao));
          case 118:
            _context53.next = 114;
            break;
          case 120:
            _context53.next = 125;
            break;
          case 122:
            _context53.prev = 122;
            _context53.t6 = _context53["catch"](112);
            _iterator27.e(_context53.t6);
          case 125:
            _context53.prev = 125;
            _iterator27.f();
            return _context53.finish(125);
          case 128:
            //SO SÁNH LẦN CHECK LOG HD 1 VÀ CHECK LOG HD 2 ĐỀ TÌM RA KHÁC NHAU
            _require5 = require('sequelize'), Op = _require5.Op;
            _context53.next = 131;
            return _index["default"].Check_Data_ChungTu_Hd_Log.findAll({
              attributes: ['id', 'id_data_hd', 'mataisan', 'dongianhap_check', 'dongianhapvat_check'],
              where: {
                machungtu: data.machungtu,
                id_data_hd: _defineProperty({}, Op.ne, 0)
              },
              raw: true
            });
          case 131:
            data_check_log_chungtu = _context53.sent;
            _context53.next = 134;
            return _index["default"].Data_ChungTu_Hd_Log.findAll({
              attributes: ['id_data_hd', 'mataisan', 'dongianhap_check', 'dongianhapvat_check'],
              where: {
                machungtu: data.machungtu,
                id_data_hd: _defineProperty({}, Op.ne, 0)
              },
              raw: true
            });
          case 134:
            data_log_chungtu = _context53.sent;
            //console.log('data_check_log_chungtu', data_check_log_chungtu)
            //console.log('data_log_chungtu', data_log_chungtu)
            result = data_check_log_chungtu.map(function (itemCheck) {
              var matchedItem = data_log_chungtu.find(function (itemLog) {
                return itemLog.id_data_hd === itemCheck.id_data_hd && itemLog.mataisan === itemCheck.mataisan;
              });
              if (matchedItem) {
                return {
                  id: itemCheck.id,
                  id_data_hd: itemCheck.id_data_hd,
                  mataisan: itemCheck.mataisan,
                  check_dongianhap: itemCheck.dongianhap_check === matchedItem.dongianhap_check ? 1 : 0,
                  check_dongianhapvat: itemCheck.dongianhapvat_check === matchedItem.dongianhapvat_check ? 1 : 0
                };
              }
              return null;
            }).filter(function (item) {
              return item !== null;
            }); //console.log('result', result);
            _iterator28 = _createForOfIteratorHelper(result);
            _context53.prev = 137;
            _iterator28.s();
          case 139:
            if ((_step28 = _iterator28.n()).done) {
              _context53.next = 157;
              break;
            }
            _item15 = _step28.value;
            _context53.prev = 141;
            _context53.next = 144;
            return _index["default"].Check_Data_ChungTu_Hd_Log.findOne({
              where: {
                id: _item15.id
              },
              raw: false
            });
          case 144:
            _data12 = _context53.sent;
            if (!_data12) {
              _context53.next = 150;
              break;
            }
            // Cập nhật các thông tin theo từng mục
            _data12.check_dongianhap = _item15.check_dongianhap;
            _data12.check_dongianhapvat = _item15.check_dongianhapvat;
            // Lưu thay đổi
            _context53.next = 150;
            return _data12.save();
          case 150:
            _context53.next = 155;
            break;
          case 152:
            _context53.prev = 152;
            _context53.t7 = _context53["catch"](141);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt PO c\xF3 id: ".concat(_item15.id), _context53.t7);
          case 155:
            _context53.next = 139;
            break;
          case 157:
            _context53.next = 162;
            break;
          case 159:
            _context53.prev = 159;
            _context53.t8 = _context53["catch"](137);
            _iterator28.e(_context53.t8);
          case 162:
            _context53.prev = 162;
            _iterator28.f();
            return _context53.finish(162);
          case 165:
            _context53.next = 227;
            break;
          case 167:
            _context53.prev = 167;
            _iterator29 = _createForOfIteratorHelper(recordset);
            _context53.prev = 169;
            _iterator29.s();
          case 171:
            if ((_step29 = _iterator29.n()).done) {
              _context53.next = 177;
              break;
            }
            _item16 = _step29.value;
            _context53.next = 175;
            return _index["default"].Check_Data_ChungTu_Hd_Log.create(_defineProperty(_defineProperty(_defineProperty({
              machungtu: _item16.machungtu,
              mataisan: _item16.mataisan,
              tentaisan: _item16.tentaisan,
              dongianhap_check: _item16.dongianhap_check,
              dongianhapvat_check: _item16.dongianhapvat_check,
              hieuluc_check: _item16.hieuluc_check,
              id_data_hd: _item16.id_data_hd,
              nhacungcap_id: _item16.nhacungcap_id,
              tennhacungcap: _item16.tennhacungcap,
              chungtu_id: _item16.chungtu_id,
              ngaychungtu: _item16.ngaychungtu,
              khonhap: _item16.khonhap,
              nguoinhap: _item16.nguoinhap,
              soluongnhap: _item16.soluongnhap,
              dongianhap: _item16.dongianhap,
              dongianhapvat: _item16.dongianhapvat,
              vatnhap: _item16.vatnhap,
              thanhtiennhap: _item16.soluongnhap * _item16.dongianhap,
              thanhtiennhapvat: _item16.soluongnhap * _item16.dongianhapvat
            }, "nguoinhap", _item16.nguoinhap), "nguoikiemtra_id", UserId), "ngaykiemtra", ngaytao));
          case 175:
            _context53.next = 171;
            break;
          case 177:
            _context53.next = 182;
            break;
          case 179:
            _context53.prev = 179;
            _context53.t9 = _context53["catch"](169);
            _iterator29.e(_context53.t9);
          case 182:
            _context53.prev = 182;
            _iterator29.f();
            return _context53.finish(182);
          case 185:
            _context53.next = 190;
            break;
          case 187:
            _context53.prev = 187;
            _context53.t10 = _context53["catch"](167);
            console.error("Lỗi khi insert vào DB:", _context53.t10);
          case 190:
            //SO SÁNH LẦN CHECK LOG HD 1 VÀ CHECK LOG HD 2 ĐỀ TÌM RA KHÁC NHAU
            _require6 = require('sequelize'), _Op = _require6.Op;
            _context53.next = 193;
            return _index["default"].Check_Data_ChungTu_Hd_Log.findAll({
              attributes: ['id', 'id_data_hd', 'mataisan', 'dongianhap_check', 'dongianhapvat_check'],
              where: {
                machungtu: data.machungtu,
                id_data_hd: _defineProperty({}, _Op.ne, 0)
              },
              raw: true
            });
          case 193:
            _data_check_log_chungtu = _context53.sent;
            _context53.next = 196;
            return _index["default"].Data_ChungTu_Hd_Log.findAll({
              attributes: ['id_data_hd', 'mataisan', 'dongianhap_check', 'dongianhapvat_check'],
              where: {
                machungtu: data.machungtu,
                id_data_hd: _defineProperty({}, _Op.ne, 0)
              },
              raw: true
            });
          case 196:
            _data_log_chungtu = _context53.sent;
            //console.log('data_check_log_chungtu', data_check_log_chungtu)
            //console.log('data_log_chungtu', data_log_chungtu)
            _result = _data_check_log_chungtu.map(function (itemCheck) {
              var matchedItem = _data_log_chungtu.find(function (itemLog) {
                return itemLog.id_data_hd === itemCheck.id_data_hd && itemLog.mataisan === itemCheck.mataisan;
              });
              if (matchedItem) {
                return {
                  id: itemCheck.id,
                  id_data_hd: itemCheck.id_data_hd,
                  mataisan: itemCheck.mataisan,
                  check_dongianhap: itemCheck.dongianhap_check === matchedItem.dongianhap_check ? 1 : 0,
                  check_dongianhapvat: itemCheck.dongianhapvat_check === matchedItem.dongianhapvat_check ? 1 : 0
                };
              }
              return null;
            }).filter(function (item) {
              return item !== null;
            }); //console.log('result', result);
            _iterator30 = _createForOfIteratorHelper(_result);
            _context53.prev = 199;
            _iterator30.s();
          case 201:
            if ((_step30 = _iterator30.n()).done) {
              _context53.next = 219;
              break;
            }
            _item17 = _step30.value;
            _context53.prev = 203;
            _context53.next = 206;
            return _index["default"].Check_Data_ChungTu_Hd_Log.findOne({
              where: {
                id: _item17.id
              },
              raw: false
            });
          case 206:
            _data13 = _context53.sent;
            if (!_data13) {
              _context53.next = 212;
              break;
            }
            // Cập nhật các thông tin theo từng mục
            _data13.check_dongianhap = _item17.check_dongianhap;
            _data13.check_dongianhapvat = _item17.check_dongianhapvat;
            // Lưu thay đổi
            _context53.next = 212;
            return _data13.save();
          case 212:
            _context53.next = 217;
            break;
          case 214:
            _context53.prev = 214;
            _context53.t11 = _context53["catch"](203);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt PO c\xF3 id: ".concat(_item17.id), _context53.t11);
          case 217:
            _context53.next = 201;
            break;
          case 219:
            _context53.next = 224;
            break;
          case 221:
            _context53.prev = 221;
            _context53.t12 = _context53["catch"](199);
            _iterator30.e(_context53.t12);
          case 224:
            _context53.prev = 224;
            _iterator30.f();
            return _context53.finish(224);
          case 227:
            resolve({
              errCode: 0,
              errMessage: 'Kiểm tra dữ liệu thành công'
            });
            _context53.next = 231;
            break;
          case 230:
            resolve({
              errCode: 1,
              errMessage: 'Chứng từ chưa nhập kho'
            });
          case 231:
            _context53.next = 234;
            break;
          case 233:
            resolve({
              errCode: 1,
              errMessage: 'Mã chứng từ không tồn tại..'
            });
          case 234:
            _context53.next = 239;
            break;
          case 236:
            _context53.prev = 236;
            _context53.t13 = _context53["catch"](0);
            reject(_context53.t13);
          case 239:
          case "end":
            return _context53.stop();
        }
      }, _callee53, null, [[0, 236], [14, 35, 38, 41], [18, 28], [48, 80, 83, 86], [52, 73], [89, 105, 108, 111], [93, 98], [112, 122, 125, 128], [137, 159, 162, 165], [141, 152], [167, 187], [169, 179, 182, 185], [199, 221, 224, 227], [203, 214]]);
    }));
    return function (_x105, _x106) {
      return _ref54.apply(this, arguments);
    };
  }());
};
var getMaChungTu = function getMaChungTu(machungtu, UserId) {
  return new Promise(/*#__PURE__*/function () {
    var _ref55 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee54(resolve, reject) {
      var ngaytao, request, getdata, recordset, data, check_log_chungtu, check_log_hopdong, data_chungtu, soPO, _iterator31, _step31, logItem, getpodata, getpo, _iterator32, _step32, _item21, _data15, _iterator33, _step33, record, _iterator34, _step34, item, _iterator35, _step35, _item19, _iterator36, _step36, _item20;
      return _regeneratorRuntime().wrap(function _callee54$(_context54) {
        while (1) switch (_context54.prev = _context54.next) {
          case 0:
            _context54.prev = 0;
            ngaytao = new Date();
            request = _index["default"].sqlhis2Connection.request();
            request.input('machungtu', mssql.NVarChar(50), machungtu);
            _context54.next = 6;
            return request.execute('[sp_QLPO_GETCHUNGTUNHAPNCC]');
          case 6:
            getdata = _context54.sent;
            // Lấy dữ liệu từ recordset
            recordset = getdata.recordset;
            data = recordset[0]; // // KIỂM TRA XEM CÓ LOG HAY KHÔNG. NẾU CÓ LOG MÃ CHỨNG TỪ ĐÃ CHECK TRƯỚC ĐÓ THÌ CẬP NHẬP LẠI 
            // // SỐ LƯỢNG ĐÃ NHẬP Ở DATA HĐ
            // if (check_log_chungtu.length > 0) {
            //     for (const item of check_log_chungtu) {
            //         try {
            //             // Tìm bản ghi trong Data_HD theo id
            //             let data = await db.Data_PO.findOne({ where: { id: item.id_data_po }, raw: false });
            //             if (data) {
            //                 data.soluongdanhap = data.soluongdanhap - item.soluongnhap;
            //                 data.soluongnhap = data.soluongnhap - item.soluongnhap;
            //                 // Lưu thay đổi
            //                 await data.save();
            //             }
            //         } catch (error) {
            //             console.error(`Lỗi khi cập nhật PO có id: ${item.id}`, error);
            //         }
            //     }
            // }
            if (!(recordset.length > 0)) {
              _context54.next = 202;
              break;
            }
            _context54.next = 12;
            return _index["default"].Data_ChungTu_Log.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                machungtu: data.machungtu
              },
              raw: true
            });
          case 12:
            check_log_chungtu = _context54.sent;
            _context54.next = 15;
            return _index["default"].Data_ChungTu_Hd_Log.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                machungtu: data.machungtu
              },
              raw: true
            });
          case 15:
            check_log_hopdong = _context54.sent;
            _context54.next = 18;
            return _index["default"].Data_ChungTu.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                machungtu: machungtu
              },
              raw: true
            });
          case 18:
            data_chungtu = _context54.sent;
            if (!(data.trangthai !== 'PNDNK')) {
              _context54.next = 199;
              break;
            }
            if (!(data.sopo === null)) {
              _context54.next = 24;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Kiểm tra lại phiếu nhập NCC chưa có số PO'
            });
            _context54.next = 197;
            break;
          case 24:
            if (!(check_log_chungtu.length === 0 && check_log_hopdong.length === 0)) {
              _context54.next = 196;
              break;
            }
            soPO = data.sopo; //GỌI HÀM GETCHUNGTU ĐỂ check HĐ VỚI CHỨNG TỪ
            _context54.next = 28;
            return getSoPO(soPO, UserId);
          case 28:
            //XÓA DATA CHỨNG TỪ TRƯỚC KHI INSRT LẠI
            _iterator31 = _createForOfIteratorHelper(data_chungtu);
            _context54.prev = 29;
            _iterator31.s();
          case 31:
            if ((_step31 = _iterator31.n()).done) {
              _context54.next = 43;
              break;
            }
            logItem = _step31.value;
            _context54.prev = 33;
            _context54.next = 36;
            return _index["default"].Data_ChungTu.destroy({
              where: {
                machungtu: logItem.machungtu
              }
            });
          case 36:
            _context54.next = 41;
            break;
          case 38:
            _context54.prev = 38;
            _context54.t0 = _context54["catch"](33);
            console.error("Error deleting record with", _context54.t0);
          case 41:
            _context54.next = 31;
            break;
          case 43:
            _context54.next = 48;
            break;
          case 45:
            _context54.prev = 45;
            _context54.t1 = _context54["catch"](29);
            _iterator31.e(_context54.t1);
          case 48:
            _context54.prev = 48;
            _iterator31.f();
            return _context54.finish(48);
          case 51:
            _context54.next = 53;
            return _index["default"].Data_PO.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                sopo: data.sopo
              },
              raw: true
            });
          case 53:
            getpodata = _context54.sent;
            //console.log('getpo', getpo)
            // Sử dụng reduce để nhóm theo mataisan và sopo, sau đó tính tổng soluongpo
            getpo = Object.values(getpodata.reduce(function (acc, item) {
              var key = "".concat(item.mataisan, "-").concat(item.sopo); // Tạo khóa dựa trên mataisan và sopo
              if (!acc[key]) {
                acc[key] = _objectSpread(_objectSpread({}, item), {}, {
                  soluongpo: 0
                }); // Khởi tạo đối tượng trong nhóm
              }
              acc[key].soluongpo += item.soluongpo; // Tính tổng soluongpo
              return acc;
            }, {})); //console.log('result', result);
            // Vòng lặp tìm các phần tử trùng khớp giữa recordset và getpo
            getpo = getpo.map(function (poItem) {
              var recordItem = recordset.find(function (record) {
                return record.sopo === poItem.sopo && record.mataisan === poItem.mataisan;
              });
              if (recordItem) {
                poItem.soluongdanhap = poItem.soluongdanhap !== null ? poItem.soluongdanhap : 0;
                // Tính toán sự chênh lệch
                poItem.soluongnhap = recordItem.soluongnhap + poItem.soluongdanhap - poItem.soluongpo;
                poItem.dongianhap = recordItem.dongianhap - poItem.dongiapo;
                poItem.dongiavatnhap = recordItem.dongianhapvat - poItem.dongiapovat;
                poItem.soluongdanhap = recordItem.soluongnhap + poItem.soluongdanhap;
                poItem.checkmataisanvoict = null;
              } else {
                // Điều kiện thứ nhất: Trùng sopo nhưng khác mataisan
                var recordWithSameSopo = recordset.find(function (record) {
                  return record.sopo === poItem.sopo && record.mataisan !== poItem.mataisan;
                });

                // Điều kiện thứ hai: mataisan không có trong recordset
                var recordWithDifferentMataisan = !recordset.find(function (record) {
                  return record.sopo === poItem.sopo && record.mataisan === poItem.mataisan;
                });

                // Nếu có record trùng sopo nhưng khác mataisan hoặc mataisan không có trong recordset
                if (recordWithSameSopo || recordWithDifferentMataisan) {
                  poItem.checkmataisanvoict = 1;
                }
              }
              return poItem;
            }); //.filter(poItem => poItem.soluongnhap !== null && poItem.dongianhap !== null && poItem.dongiavatnhap !== null);

            //console.log('getpo', getpo);
            _iterator32 = _createForOfIteratorHelper(getpo);
            _context54.prev = 57;
            _iterator32.s();
          case 59:
            if ((_step32 = _iterator32.n()).done) {
              _context54.next = 87;
              break;
            }
            _item21 = _step32.value;
            _context54.prev = 61;
            _context54.next = 64;
            return _index["default"].Data_PO.findOne({
              where: {
                id: _item21.id
              },
              raw: false
            });
          case 64:
            _data15 = _context54.sent;
            if (!_data15) {
              _context54.next = 80;
              break;
            }
            if (!(_item21.checkmataisanvoict === 1 && _item21.checkma !== null)) {
              _context54.next = 72;
              break;
            }
            // Chỉ cập nhật trường check
            _data15.checkmataisanvoict = _item21.checkmataisanvoict;

            // Lưu thay đổi
            _context54.next = 70;
            return _data15.save();
          case 70:
            _context54.next = 80;
            break;
          case 72:
            // Cập nhật các thông tin theo từng mục
            _data15.soluongnhap = _item21.soluongnhap;
            _data15.dongianhap = _item21.dongianhap;
            _data15.dongiavatnhap = _item21.dongiavatnhap;
            _data15.soluongdanhap = _item21.soluongdanhap;
            _data15.checkmataisanvoict = null;
            _data15.dacheckvoict = 1;
            //data.ngaykiemtra = ngaytao

            // Lưu thay đổi
            _context54.next = 80;
            return _data15.save();
          case 80:
            _context54.next = 85;
            break;
          case 82:
            _context54.prev = 82;
            _context54.t2 = _context54["catch"](61);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt PO c\xF3 id: ".concat(_item21.id), _context54.t2);
          case 85:
            _context54.next = 59;
            break;
          case 87:
            _context54.next = 92;
            break;
          case 89:
            _context54.prev = 89;
            _context54.t3 = _context54["catch"](57);
            _iterator32.e(_context54.t3);
          case 92:
            _context54.prev = 92;
            _iterator32.f();
            return _context54.finish(92);
          case 95:
            // Dò tìm và thêm id_data_hd từ gethd vào recordset
            recordset.forEach(function (record) {
              var found = getpo.find(function (po) {
                return po.sopo === record.sopo && po.mataisan === record.mataisan;
              });
              if (found) {
                record.id_data_po = found.id;
                record.soluongnhap_check = found.soluongnhap;
                record.dongianhap_check = found.dongianhap;
                record.dongianhapvat_check = found.dongiavatnhap;
              }
            });

            //console.log('check_log_chungtu', check_log_chungtu)
            if (!(check_log_chungtu.length > 0)) {
              _context54.next = 145;
              break;
            }
            _iterator33 = _createForOfIteratorHelper(check_log_chungtu);
            _context54.prev = 98;
            _iterator33.s();
          case 100:
            if ((_step33 = _iterator33.n()).done) {
              _context54.next = 112;
              break;
            }
            record = _step33.value;
            _context54.prev = 102;
            _context54.next = 105;
            return _index["default"].Data_ChungTu_Log.destroy({
              where: {
                id: record.id
              }
            });
          case 105:
            _context54.next = 110;
            break;
          case 107:
            _context54.prev = 107;
            _context54.t4 = _context54["catch"](102);
            console.error("L\u1ED7i khi x\xF3a d\u1EEF li\u1EC7u v\u1EDBi ID ".concat(record.id, ":"), _context54.t4);
          case 110:
            _context54.next = 100;
            break;
          case 112:
            _context54.next = 117;
            break;
          case 114:
            _context54.prev = 114;
            _context54.t5 = _context54["catch"](98);
            _iterator33.e(_context54.t5);
          case 117:
            _context54.prev = 117;
            _iterator33.f();
            return _context54.finish(117);
          case 120:
            _context54.prev = 120;
            // insert lại thông tin mới    
            _iterator34 = _createForOfIteratorHelper(recordset);
            _context54.prev = 122;
            _iterator34.s();
          case 124:
            if ((_step34 = _iterator34.n()).done) {
              _context54.next = 130;
              break;
            }
            item = _step34.value;
            _context54.next = 128;
            return _index["default"].Data_ChungTu_Log.create(_defineProperty(_defineProperty(_defineProperty({
              id_data_po: item.id_data_po,
              mataisan: item.mataisan,
              tentaisan: item.tentaisan,
              soluongnhap_check: item.soluongnhap_check,
              dongianhap_check: item.dongianhap_check,
              dongianhapvat_check: item.dongianhapvat_check,
              machungtu: item.machungtu,
              sopo: item.sopo,
              trangthai: item.trangthai,
              nhacungcap_id: item.nhacungcap_id,
              tennhacungcap: item.tennhacungcap,
              chungtu_id: item.chungtu_id,
              ngaychungtu: item.ngaychungtu,
              khonhap: item.khonhap,
              nguoinhap: item.nguoinhap,
              soluongnhap: item.soluongnhap,
              dongianhap: item.dongianhap,
              dongianhapvat: item.dongianhapvat,
              vatnhap: item.vatnhap,
              thanhtiennhap: item.soluongnhap * item.dongianhap,
              thanhtiennhapvat: item.soluongnhap * item.dongianhapvat
            }, "nguoinhap", item.nguoinhap), "nguoikiemtra_id", UserId), "ngaykiemtra", ngaytao));
          case 128:
            _context54.next = 124;
            break;
          case 130:
            _context54.next = 135;
            break;
          case 132:
            _context54.prev = 132;
            _context54.t6 = _context54["catch"](122);
            _iterator34.e(_context54.t6);
          case 135:
            _context54.prev = 135;
            _iterator34.f();
            return _context54.finish(135);
          case 138:
            _context54.next = 143;
            break;
          case 140:
            _context54.prev = 140;
            _context54.t7 = _context54["catch"](120);
            console.error("Lỗi khi insert vào DB:", _context54.t7);
          case 143:
            _context54.next = 168;
            break;
          case 145:
            _context54.prev = 145;
            _iterator35 = _createForOfIteratorHelper(recordset);
            _context54.prev = 147;
            _iterator35.s();
          case 149:
            if ((_step35 = _iterator35.n()).done) {
              _context54.next = 155;
              break;
            }
            _item19 = _step35.value;
            _context54.next = 153;
            return _index["default"].Data_ChungTu_Log.create(_defineProperty(_defineProperty(_defineProperty({
              id_data_po: _item19.id_data_po,
              mataisan: _item19.mataisan,
              tentaisan: _item19.tentaisan,
              soluongnhap_check: _item19.soluongnhap_check,
              dongianhap_check: _item19.dongianhap_check,
              dongianhapvat_check: _item19.dongianhapvat_check,
              machungtu: _item19.machungtu,
              sopo: _item19.sopo,
              trangthai: _item19.trangthai,
              nhacungcap_id: _item19.nhacungcap_id,
              tennhacungcap: _item19.tennhacungcap,
              chungtu_id: _item19.chungtu_id,
              ngaychungtu: _item19.ngaychungtu,
              khonhap: _item19.khonhap,
              nguoinhap: _item19.nguoinhap,
              soluongnhap: _item19.soluongnhap,
              dongianhap: _item19.dongianhap,
              dongianhapvat: _item19.dongianhapvat,
              vatnhap: _item19.vatnhap,
              thanhtiennhap: _item19.soluongnhap * _item19.dongianhap,
              thanhtiennhapvat: _item19.soluongnhap * _item19.dongianhapvat
            }, "nguoinhap", _item19.nguoinhap), "nguoikiemtra_id", UserId), "ngaykiemtra", ngaytao));
          case 153:
            _context54.next = 149;
            break;
          case 155:
            _context54.next = 160;
            break;
          case 157:
            _context54.prev = 157;
            _context54.t8 = _context54["catch"](147);
            _iterator35.e(_context54.t8);
          case 160:
            _context54.prev = 160;
            _iterator35.f();
            return _context54.finish(160);
          case 163:
            _context54.next = 168;
            break;
          case 165:
            _context54.prev = 165;
            _context54.t9 = _context54["catch"](145);
            console.error("Lỗi khi insert vào DB:", _context54.t9);
          case 168:
            _context54.prev = 168;
            _iterator36 = _createForOfIteratorHelper(recordset);
            _context54.prev = 170;
            _iterator36.s();
          case 172:
            if ((_step36 = _iterator36.n()).done) {
              _context54.next = 178;
              break;
            }
            _item20 = _step36.value;
            _context54.next = 176;
            return _index["default"].Data_ChungTu.create({
              chungtu_id: _item20.chungtu_id,
              machungtu: _item20.machungtu,
              ngaychungtu: _item20.ngaychungtu,
              mataisan: _item20.mataisan,
              tentaisan: _item20.tentaisan,
              donvitinh: _item20.donvitinh,
              soluongnhap: _item20.soluongnhap,
              dongianhap: _item20.dongianhap,
              thanhtiennhap: _item20.soluongnhap * _item20.dongianhap,
              vatnhap: _item20.vatnhap,
              dongianhapvat: _item20.dongianhapvat,
              thanhtiennhapvat: _item20.soluongnhap * _item20.dongianhapvat,
              nhacungcap_id: _item20.nhacungcap_id,
              tennhacungcap: _item20.tennhacungcap,
              khonhap: _item20.khonhap,
              nguoinhap: _item20.nguoinhap,
              sopo: _item20.sopo,
              trangthai: _item20.trangthai
            });
          case 176:
            _context54.next = 172;
            break;
          case 178:
            _context54.next = 183;
            break;
          case 180:
            _context54.prev = 180;
            _context54.t10 = _context54["catch"](170);
            _iterator36.e(_context54.t10);
          case 183:
            _context54.prev = 183;
            _iterator36.f();
            return _context54.finish(183);
          case 186:
            _context54.next = 191;
            break;
          case 188:
            _context54.prev = 188;
            _context54.t11 = _context54["catch"](168);
            console.error("Lỗi khi insert vào DB:", _context54.t11);
          case 191:
            _context54.next = 193;
            return getChungTu(machungtu, UserId);
          case 193:
            resolve({
              errCode: 0,
              errMessage: 'Kiểm tra dữ liệu thành công'
            });
            _context54.next = 197;
            break;
          case 196:
            resolve({
              errCode: 1,
              errMessage: 'Chứng từ đã kiểm tra, vui lòng xóa log để kiểm tra lại'
            });
          case 197:
            _context54.next = 200;
            break;
          case 199:
            resolve({
              errCode: 1,
              errMessage: 'Chứng từ đã nhập kho'
            });
          case 200:
            _context54.next = 203;
            break;
          case 202:
            resolve({
              errCode: 1,
              errMessage: 'Mã chứng từ không tồn tại'
            });
          case 203:
            _context54.next = 208;
            break;
          case 205:
            _context54.prev = 205;
            _context54.t12 = _context54["catch"](0);
            reject(_context54.t12);
          case 208:
          case "end":
            return _context54.stop();
        }
      }, _callee54, null, [[0, 205], [29, 45, 48, 51], [33, 38], [57, 89, 92, 95], [61, 82], [98, 114, 117, 120], [102, 107], [120, 140], [122, 132, 135, 138], [145, 165], [147, 157, 160, 163], [168, 188], [170, 180, 183, 186]]);
    }));
    return function (_x107, _x108) {
      return _ref55.apply(this, arguments);
    };
  }());
};
var getLichSuKiemKe = function getLichSuKiemKe(KhoTaiSan_Id, UserId) {
  return new Promise(/*#__PURE__*/function () {
    var _ref56 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee55(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee55$(_context55) {
        while (1) switch (_context55.prev = _context55.next) {
          case 0:
            _context55.prev = 0;
            _context55.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_lichsu_kiemke(:KhoTaiSan_Id)', {
              replacements: {
                KhoTaiSan_Id: KhoTaiSan_Id
              },
              raw: false
            });
          case 3:
            data = _context55.sent;
            //console.log('data', data)
            resolve({
              errCode: 0,
              //errMessage: 'Không thể insert data kiểm kê',
              data: data
            });
            _context55.next = 10;
            break;
          case 7:
            _context55.prev = 7;
            _context55.t0 = _context55["catch"](0);
            reject(_context55.t0);
          case 10:
          case "end":
            return _context55.stop();
        }
      }, _callee55, null, [[0, 7]]);
    }));
    return function (_x109, _x110) {
      return _ref56.apply(this, arguments);
    };
  }());
};
var getTaiSanTheoKhoLichSu = function getTaiSanTheoKhoLichSu(KhoTaiSan_Id, KhoQuanLy, UserId, DotKiemKe_Id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref57 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee56(resolve, reject) {
      var DotKiemKe_Id_Int, datakiemke;
      return _regeneratorRuntime().wrap(function _callee56$(_context56) {
        while (1) switch (_context56.prev = _context56.next) {
          case 0:
            //console.log('DotKiemKe_Id', KhoTaiSan_Id, KhoQuanLy, DotKiemKe_Id)
            DotKiemKe_Id_Int = Number(DotKiemKe_Id);
            _context56.prev = 1;
            _context56.next = 4;
            return _index["default"].sequelize.query('CALL sp_get_data_kiemke_lichsu(:KhoTaiSan_Id,:KhoQuanLy,:DotKiemKe_Id_Int)', {
              replacements: {
                KhoTaiSan_Id: KhoTaiSan_Id,
                KhoQuanLy: KhoQuanLy,
                DotKiemKe_Id_Int: DotKiemKe_Id_Int
              },
              raw: false
            });
          case 4:
            datakiemke = _context56.sent;
            resolve({
              errCode: 0,
              //errMessage: 'Không thể insert data kiểm kê',
              data: datakiemke
            });
            _context56.next = 11;
            break;
          case 8:
            _context56.prev = 8;
            _context56.t0 = _context56["catch"](1);
            reject(_context56.t0);
          case 11:
          case "end":
            return _context56.stop();
        }
      }, _callee56, null, [[1, 8]]);
    }));
    return function (_x111, _x112) {
      return _ref57.apply(this, arguments);
    };
  }());
};
var getTaiSanXacNhanTheoKhoLichSu = function getTaiSanXacNhanTheoKhoLichSu(KhoTaiSan_Id, KhoQuanLy, UserId, DotKiemKe_Id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref58 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee57(resolve, reject) {
      var DotKiemKe_Id_Int, datakiemke;
      return _regeneratorRuntime().wrap(function _callee57$(_context57) {
        while (1) switch (_context57.prev = _context57.next) {
          case 0:
            //console.log('DotKiemKe_Id', KhoTaiSan_Id, KhoQuanLy, DotKiemKe_Id)
            DotKiemKe_Id_Int = Number(DotKiemKe_Id);
            _context57.prev = 1;
            _context57.next = 4;
            return _index["default"].sequelize.query('CALL sp_get_data_xacnhan_kiemke_lichsu(:KhoTaiSan_Id,:KhoQuanLy)', {
              replacements: {
                KhoTaiSan_Id: KhoTaiSan_Id,
                KhoQuanLy: KhoQuanLy
              },
              raw: false
            });
          case 4:
            datakiemke = _context57.sent;
            resolve({
              errCode: 0,
              //errMessage: 'Không thể insert data kiểm kê',
              data: datakiemke
            });
            _context57.next = 11;
            break;
          case 8:
            _context57.prev = 8;
            _context57.t0 = _context57["catch"](1);
            reject(_context57.t0);
          case 11:
          case "end":
            return _context57.stop();
        }
      }, _callee57, null, [[1, 8]]);
    }));
    return function (_x113, _x114) {
      return _ref58.apply(this, arguments);
    };
  }());
};
var getTaiSanXacNhanAllKhoLichSu = function getTaiSanXacNhanAllKhoLichSu(KhoTaiSan_Id, UserId, DotKiemKe_Id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref59 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee58(resolve, reject) {
      var datakiemke;
      return _regeneratorRuntime().wrap(function _callee58$(_context58) {
        while (1) switch (_context58.prev = _context58.next) {
          case 0:
            _context58.prev = 0;
            _context58.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_data_xacnhan_allkho_kiemke_lichsu(:KhoTaiSan_Id)', {
              replacements: {
                KhoTaiSan_Id: KhoTaiSan_Id
              },
              raw: false
            });
          case 3:
            datakiemke = _context58.sent;
            resolve({
              errCode: 0,
              //errMessage: 'Không thể insert data kiểm kê',
              data: datakiemke
            });
            _context58.next = 10;
            break;
          case 7:
            _context58.prev = 7;
            _context58.t0 = _context58["catch"](0);
            reject(_context58.t0);
          case 10:
          case "end":
            return _context58.stop();
        }
      }, _callee58, null, [[0, 7]]);
    }));
    return function (_x115, _x116) {
      return _ref59.apply(this, arguments);
    };
  }());
};
var getTaiSanXacNhanToanVienKhoLichSu = function getTaiSanXacNhanToanVienKhoLichSu(TimKiemKhoQuanLy, UserId) {
  return new Promise(/*#__PURE__*/function () {
    var _ref60 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee59(resolve, reject) {
      var datakiemke;
      return _regeneratorRuntime().wrap(function _callee59$(_context59) {
        while (1) switch (_context59.prev = _context59.next) {
          case 0:
            _context59.prev = 0;
            _context59.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_data_xacnhan_toanvien_kho_kiemke_lichsu(:TimKiemKhoQuanLy)', {
              replacements: {
                TimKiemKhoQuanLy: TimKiemKhoQuanLy
              },
              raw: false
            });
          case 3:
            datakiemke = _context59.sent;
            resolve({
              errCode: 0,
              //errMessage: 'Không thể insert data kiểm kê',
              data: datakiemke
            });
            _context59.next = 10;
            break;
          case 7:
            _context59.prev = 7;
            _context59.t0 = _context59["catch"](0);
            reject(_context59.t0);
          case 10:
          case "end":
            return _context59.stop();
        }
      }, _callee59, null, [[0, 7]]);
    }));
    return function (_x117, _x118) {
      return _ref60.apply(this, arguments);
    };
  }());
};
var getTaiSanTheoKho = function getTaiSanTheoKho(KhoTaiSan_Id, KhoQuanLy, UserId, DotKiemKe_Id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref61 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee60(resolve, reject) {
      var ngaytao, NamKiemKe, request, getdata, data, _checklankiem$2, checklankiem, LanKiemKe, DotKiemKe_Id_Int, datakiemke, _getDotKiemKe$, _request, getkhoduoc, khoduoc, _iterator37, _step37, _item22, getDotKiemKe, _DotKiemKe_Id, _iterator38, _step38, item, _getdata, getduocdakiem, plaingetdata, plaingetduocdakiem, int_plaingetdata, int_plaingetduocdakiem, ketqua, _iterator39, _step39, dataItem, _data16, getdatanew, _getDotKiemKe$2, _getDotKiemKe, GetDotKiemKe_Id, _DotKiemKe_Id_Int, _getdata2, _getduocdakiem, _plaingetdata, _plaingetduocdakiem, _int_plaingetdata, _int_plaingetduocdakiem, _ketqua, _iterator40, _step40, _dataItem, _data17, _getdatanew, _getDotKiemKe2$, _request2, _getkhoduoc, _khoduoc, _iterator41, _step41, _item23, _getDotKiemKe2, _GetDotKiemKe_Id, _iterator42, _step42, _item24, _getdata3, _getduocdakiem2, _plaingetdata2, _plaingetduocdakiem2, _int_plaingetdata2, _int_plaingetduocdakiem2, _ketqua2, _iterator43, _step43, _dataItem2, _data18, _getdatanew2, _getDotKiemKe3$, _getDotKiemKe3, _GetDotKiemKe_Id2, _DotKiemKe_Id_Int2, _getdata4, _getduocdakiem3, _plaingetdata3, _plaingetduocdakiem3, _int_plaingetdata3, _int_plaingetduocdakiem3, _ketqua3, _iterator44, _step44, _dataItem3, _data19, _getdatanew3;
      return _regeneratorRuntime().wrap(function _callee60$(_context60) {
        while (1) switch (_context60.prev = _context60.next) {
          case 0:
            _context60.prev = 0;
            if (!(KhoQuanLy === null && KhoTaiSan_Id !== null)) {
              _context60.next = 5;
              break;
            }
            //console.log('KhoQuanLy null')
            resolve({
              errCode: 1,
              errMessage: 'Vui lòng chọn kho quản lý'
            });
            _context60.next = 379;
            break;
          case 5:
            if (!(KhoQuanLy !== null && KhoTaiSan_Id !== null)) {
              _context60.next = 379;
              break;
            }
            //console.log('KhoQuanLy not null')
            ngaytao = new Date();
            NamKiemKe = ngaytao.getFullYear();
            request = _index["default"].sqlhis2Connection.request();
            request.input('KhoTaiSan_Id', mssql.Int, KhoTaiSan_Id);
            request.input('KhoQuanLy', mssql.NVarChar, KhoQuanLy);
            request.queryTimeout = 60000;
            _context60.next = 14;
            return request.execute('[sp_QLPO_GETTAISANTHEOKHO]');
          case 14:
            getdata = _context60.sent;
            //console.log('KhoTaiSan_Id', KhoTaiSan_Id, KhoQuanLy)
            //console.log('data', data,)
            // Lấy dữ liệu từ recordset
            data = getdata.recordset;
            if (!(data.length === 0)) {
              _context60.next = 20;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Khoa phòng không có loại tài sản này'
            });
            _context60.next = 379;
            break;
          case 20:
            _context60.next = 22;
            return _index["default"].sequelize.query('CALL sp_checklan_kiemke(:KhoTaiSan_Id,:KhoQuanLy)', {
              replacements: {
                KhoTaiSan_Id: KhoTaiSan_Id,
                KhoQuanLy: KhoQuanLy
              },
              raw: false
            });
          case 22:
            checklankiem = _context60.sent;
            LanKiemKe = (_checklankiem$2 = checklankiem[0]) === null || _checklankiem$2 === void 0 ? void 0 : _checklankiem$2.LanKiemKe;
            DotKiemKe_Id_Int = Number(DotKiemKe_Id);
            _context60.next = 27;
            return _index["default"].sequelize.query('CALL sp_get_data_kiemke(:KhoTaiSan_Id,:KhoQuanLy,:DotKiemKe_Id_Int)', {
              replacements: {
                KhoTaiSan_Id: KhoTaiSan_Id,
                KhoQuanLy: KhoQuanLy,
                DotKiemKe_Id_Int: DotKiemKe_Id_Int
              },
              raw: false
            });
          case 27:
            datakiemke = _context60.sent;
            if (!(datakiemke.length === 0)) {
              _context60.next = 378;
              break;
            }
            if (!(LanKiemKe >= 1)) {
              _context60.next = 204;
              break;
            }
            //onsole.log('LanKiemKe > 1')
            _request = _index["default"].sqlhis2Connection.request();
            _request.input('KhoTaiSan_Id', mssql.Int, KhoTaiSan_Id);
            _request.queryTimeout = 60000;
            _context60.next = 35;
            return _request.execute('[sp_QLPO_GETALL_KHO_ID]');
          case 35:
            getkhoduoc = _context60.sent;
            khoduoc = getkhoduoc.recordset;
            _iterator37 = _createForOfIteratorHelper(khoduoc);
            _context60.prev = 38;
            _iterator37.s();
          case 40:
            if ((_step37 = _iterator37.n()).done) {
              _context60.next = 53;
              break;
            }
            _item22 = _step37.value;
            _context60.prev = 42;
            _context60.next = 45;
            return _index["default"].Data_DotKiemKe.create({
              KhoDuoc_Id: _item22.KhoTaiSan_Id,
              KhoaPhongSuDung: _item22.TenKho,
              KhoaQuanLy: KhoQuanLy,
              NguoiTao: UserId,
              LanKiemKe: LanKiemKe + 1
            });
          case 45:
            _context60.next = 51;
            break;
          case 47:
            _context60.prev = 47;
            _context60.t0 = _context60["catch"](42);
            // Nếu xảy ra lỗi, gửi thông báo lỗi về React
            console.error("Error converting ngaypo:", _context60.t0.message);
            resolve({
              errCode: 1,
              errMessage: 'Không thể insert data kiểm kê'
            });
          case 51:
            _context60.next = 40;
            break;
          case 53:
            _context60.next = 58;
            break;
          case 55:
            _context60.prev = 55;
            _context60.t1 = _context60["catch"](38);
            _iterator37.e(_context60.t1);
          case 58:
            _context60.prev = 58;
            _iterator37.f();
            return _context60.finish(58);
          case 61:
            _context60.next = 63;
            return _index["default"].sequelize.query('CALL sp_get_dot_kiemke(:KhoTaiSan_Id,:KhoQuanLy,:LanKiemKe)', {
              replacements: {
                KhoTaiSan_Id: KhoTaiSan_Id,
                KhoQuanLy: KhoQuanLy,
                LanKiemKe: LanKiemKe + 1
              },
              raw: false
            });
          case 63:
            getDotKiemKe = _context60.sent;
            _DotKiemKe_Id = (_getDotKiemKe$ = getDotKiemKe[0]) === null || _getDotKiemKe$ === void 0 ? void 0 : _getDotKiemKe$.id;
            _context60.prev = 65;
            // Lặp qua từng phần tử trong mảng data để insert data kiểm kê
            _iterator38 = _createForOfIteratorHelper(data);
            _context60.prev = 67;
            _iterator38.s();
          case 69:
            if ((_step38 = _iterator38.n()).done) {
              _context60.next = 82;
              break;
            }
            item = _step38.value;
            _context60.prev = 71;
            _context60.next = 74;
            return _index["default"].Data_KiemKe.create({
              STT: item.STT || 0,
              DotKiemKe_Id: _DotKiemKe_Id,
              MaTaiSan: item.MaTaiSan,
              MaTaiSanNew: item.MaTaiSanNew,
              BenhVien: item.BenhVien,
              PhanLoai: item.PhanLoai,
              TenTaiSan: item.TenTaiSan,
              Model: item.Model,
              Serial: item.Serial,
              ThoiGianDuaVao: item.ThoiGianDuaVao,
              NguyenGia: item.NguyenGia,
              Duoc_Id: item.Duoc_Id,
              SoLoNhap_Id: item.SoLoNhap_Id,
              KhoDuoc_Id: item.KhoDuoc_Id,
              ViTri_Id: item.ViTri_Id,
              SoLuong: item.SoLuong,
              TrangThaiKiemKe: 0,
              IsCheckKiemKe: 0,
              KhoaPhongSuDung: item.KhoaPhongSuDung,
              NguoiSuDung_Id: item.NguoiSuDung_Id,
              NguoiSuDung: item.NguoiSuDung,
              ViTri: item.ViTri,
              GhiChu: item.GhiChu,
              KhoaQuanLy: item.KhoaQuanLy,
              TenDonViTinh: item.TenDonViTinh,
              CheckMaTaiSan: item.CheckMaTaiSan,
              NguoiTao: UserId,
              NamKiemKe: NamKiemKe,
              LanKiemKe: LanKiemKe + 1
            });
          case 74:
            _context60.next = 80;
            break;
          case 76:
            _context60.prev = 76;
            _context60.t2 = _context60["catch"](71);
            // Nếu xảy ra lỗi, gửi thông báo lỗi về React
            console.error("Error converting ngaypo:", _context60.t2.message);
            resolve({
              errCode: 1,
              errMessage: 'Không thể insert data kiểm kê'
            });
          case 80:
            _context60.next = 69;
            break;
          case 82:
            _context60.next = 87;
            break;
          case 84:
            _context60.prev = 84;
            _context60.t3 = _context60["catch"](67);
            _iterator38.e(_context60.t3);
          case 87:
            _context60.prev = 87;
            _iterator38.f();
            return _context60.finish(87);
          case 90:
            _context60.next = 96;
            break;
          case 92:
            _context60.prev = 92;
            _context60.t4 = _context60["catch"](65);
            console.error(_context60.t4);
            return _context60.abrupt("return", res.status(500).json({
              errCode: 500,
              errMessage: 'Internal Server Error'
            }));
          case 96:
            if (!DotKiemKe_Id_Int) {
              _context60.next = 148;
              break;
            }
            _context60.next = 99;
            return _index["default"].sequelize.query('CALL sp_get_data_kiemke(:KhoTaiSan_Id,:KhoQuanLy,:DotKiemKe_Id_Int)', {
              replacements: {
                KhoTaiSan_Id: KhoTaiSan_Id,
                KhoQuanLy: KhoQuanLy,
                DotKiemKe_Id_Int: DotKiemKe_Id_Int
              },
              raw: false
            });
          case 99:
            _getdata = _context60.sent;
            _context60.next = 102;
            return _index["default"].sequelize.query('CALL sp_get_duocda_kiemke(:KhoQuanLy,:LanKiemKe,:DotKiemKe_Id_Int)', {
              replacements: {
                KhoQuanLy: KhoQuanLy,
                DotKiemKe_Id_Int: DotKiemKe_Id_Int,
                LanKiemKe: LanKiemKe + 1
              },
              raw: true
            });
          case 102:
            getduocdakiem = _context60.sent;
            plaingetdata = JSON.parse(JSON.stringify(_getdata));
            plaingetduocdakiem = JSON.parse(JSON.stringify(getduocdakiem)); // Chuẩn hóa dữ liệu trong cả hai mảng
            int_plaingetdata = plaingetdata.map(function (item) {
              return _objectSpread(_objectSpread({}, item), {}, {
                Duoc_Id: parseInt(item.Duoc_Id, 10),
                // Chuyển Duoc_Id thành số
                LanKiemKe: parseInt(item.LanKiemKe, 10) // Chuyển LanKiemKe thành số
              });
            });
            int_plaingetduocdakiem = plaingetduocdakiem.map(function (item) {
              return _objectSpread(_objectSpread({}, item), {}, {
                Duoc_Id: parseInt(item.Duoc_Id, 10),
                // Chuyển Duoc_Id thành số
                LanKiemKe: parseInt(item.LanKiemKe, 10) // Chuyển LanKiemKe thành số
              });
            });
            ketqua = int_plaingetdata.filter(function (dataItem) {
              return int_plaingetduocdakiem.some(function (checkedItem) {
                return dataItem.Duoc_Id === checkedItem.Duoc_Id && dataItem.LanKiemKe === checkedItem.LanKiemKe;
              });
            });
            if (!(ketqua.length > 0)) {
              _context60.next = 145;
              break;
            }
            _iterator39 = _createForOfIteratorHelper(ketqua);
            _context60.prev = 110;
            _iterator39.s();
          case 112:
            if ((_step39 = _iterator39.n()).done) {
              _context60.next = 131;
              break;
            }
            dataItem = _step39.value;
            _context60.prev = 114;
            _context60.next = 117;
            return _index["default"].Data_KiemKe.findOne({
              where: {
                id: dataItem.id
              },
              raw: false
            });
          case 117:
            _data16 = _context60.sent;
            if (!_data16) {
              _context60.next = 124;
              break;
            }
            _data16.TrangThaiChuyen = 1;
            _context60.next = 122;
            return _data16.save();
          case 122:
            _context60.next = 124;
            break;
          case 124:
            _context60.next = 129;
            break;
          case 126:
            _context60.prev = 126;
            _context60.t5 = _context60["catch"](114);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt id: ".concat(dataItem.id), _context60.t5);
          case 129:
            _context60.next = 112;
            break;
          case 131:
            _context60.next = 136;
            break;
          case 133:
            _context60.prev = 133;
            _context60.t6 = _context60["catch"](110);
            _iterator39.e(_context60.t6);
          case 136:
            _context60.prev = 136;
            _iterator39.f();
            return _context60.finish(136);
          case 139:
            _context60.next = 141;
            return _index["default"].sequelize.query('CALL sp_get_data_kiemke(:KhoTaiSan_Id,:KhoQuanLy,:DotKiemKe_Id_Int)', {
              replacements: {
                KhoTaiSan_Id: KhoTaiSan_Id,
                KhoQuanLy: KhoQuanLy,
                DotKiemKe_Id_Int: DotKiemKe_Id_Int
              },
              raw: false
            });
          case 141:
            getdatanew = _context60.sent;
            resolve({
              errCode: 0,
              errMessage: 'Đã đồng bộ tồn tài sản theo kho thành công',
              data: getdatanew
            });
            _context60.next = 146;
            break;
          case 145:
            resolve({
              errCode: 0,
              errMessage: 'Đã đồng bộ tồn tài sản theo kho thành công',
              data: _getdata
            });
          case 146:
            _context60.next = 202;
            break;
          case 148:
            _context60.next = 150;
            return _index["default"].sequelize.query('CALL sp_get_dot_kiemke(:KhoTaiSan_Id,:KhoQuanLy,:LanKiemKe)', {
              replacements: {
                KhoTaiSan_Id: KhoTaiSan_Id,
                KhoQuanLy: KhoQuanLy,
                LanKiemKe: LanKiemKe + 1
              },
              raw: false
            });
          case 150:
            _getDotKiemKe = _context60.sent;
            GetDotKiemKe_Id = (_getDotKiemKe$2 = _getDotKiemKe[0]) === null || _getDotKiemKe$2 === void 0 ? void 0 : _getDotKiemKe$2.id;
            _DotKiemKe_Id_Int = GetDotKiemKe_Id; //console.log('không có đợt', DotKiemKe_Id_Int, KhoTaiSan_Id, KhoQuanLy)
            _context60.next = 155;
            return _index["default"].sequelize.query('CALL sp_get_data_kiemke_khongcodotkiemke(:KhoTaiSan_Id,:KhoQuanLy,:DotKiemKe_Id_Int)', {
              replacements: {
                KhoTaiSan_Id: KhoTaiSan_Id,
                KhoQuanLy: KhoQuanLy,
                DotKiemKe_Id_Int: _DotKiemKe_Id_Int
              },
              raw: false
            });
          case 155:
            _getdata2 = _context60.sent;
            _context60.next = 158;
            return _index["default"].sequelize.query('CALL sp_get_duocda_kiemke(:KhoQuanLy,:LanKiemKe,:DotKiemKe_Id_Int)', {
              replacements: {
                KhoQuanLy: KhoQuanLy,
                DotKiemKe_Id_Int: _DotKiemKe_Id_Int,
                LanKiemKe: LanKiemKe + 1
              },
              raw: true
            });
          case 158:
            _getduocdakiem = _context60.sent;
            _plaingetdata = JSON.parse(JSON.stringify(_getdata2));
            _plaingetduocdakiem = JSON.parse(JSON.stringify(_getduocdakiem)); // Chuẩn hóa dữ liệu trong cả hai mảng
            _int_plaingetdata = _plaingetdata.map(function (item) {
              return _objectSpread(_objectSpread({}, item), {}, {
                Duoc_Id: parseInt(item.Duoc_Id, 10),
                // Chuyển Duoc_Id thành số
                LanKiemKe: parseInt(item.LanKiemKe, 10) // Chuyển LanKiemKe thành số
              });
            });
            _int_plaingetduocdakiem = _plaingetduocdakiem.map(function (item) {
              return _objectSpread(_objectSpread({}, item), {}, {
                Duoc_Id: parseInt(item.Duoc_Id, 10),
                // Chuyển Duoc_Id thành số
                LanKiemKe: parseInt(item.LanKiemKe, 10) // Chuyển LanKiemKe thành số
              });
            });
            _ketqua = _int_plaingetdata.filter(function (dataItem) {
              return _int_plaingetduocdakiem.some(function (checkedItem) {
                return dataItem.Duoc_Id === checkedItem.Duoc_Id && dataItem.LanKiemKe === checkedItem.LanKiemKe;
              });
            });
            if (!(_ketqua.length > 0)) {
              _context60.next = 201;
              break;
            }
            _iterator40 = _createForOfIteratorHelper(_ketqua);
            _context60.prev = 166;
            _iterator40.s();
          case 168:
            if ((_step40 = _iterator40.n()).done) {
              _context60.next = 187;
              break;
            }
            _dataItem = _step40.value;
            _context60.prev = 170;
            _context60.next = 173;
            return _index["default"].Data_KiemKe.findOne({
              where: {
                id: _dataItem.id
              },
              raw: false
            });
          case 173:
            _data17 = _context60.sent;
            if (!_data17) {
              _context60.next = 180;
              break;
            }
            _data17.TrangThaiChuyen = 1;
            _context60.next = 178;
            return _data17.save();
          case 178:
            _context60.next = 180;
            break;
          case 180:
            _context60.next = 185;
            break;
          case 182:
            _context60.prev = 182;
            _context60.t7 = _context60["catch"](170);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt id: ".concat(_dataItem.id), _context60.t7);
          case 185:
            _context60.next = 168;
            break;
          case 187:
            _context60.next = 192;
            break;
          case 189:
            _context60.prev = 189;
            _context60.t8 = _context60["catch"](166);
            _iterator40.e(_context60.t8);
          case 192:
            _context60.prev = 192;
            _iterator40.f();
            return _context60.finish(192);
          case 195:
            _context60.next = 197;
            return _index["default"].sequelize.query('CALL sp_get_data_kiemke_khongcodotkiemke(:KhoTaiSan_Id,:KhoQuanLy,:DotKiemKe_Id_Int)', {
              replacements: {
                KhoTaiSan_Id: KhoTaiSan_Id,
                KhoQuanLy: KhoQuanLy,
                DotKiemKe_Id_Int: _DotKiemKe_Id_Int
              },
              raw: false
            });
          case 197:
            _getdatanew = _context60.sent;
            resolve({
              errCode: 0,
              errMessage: 'Đã đồng bộ tồn tài sản theo kho thành công',
              data: _getdatanew
            });
            _context60.next = 202;
            break;
          case 201:
            resolve({
              errCode: 0,
              errMessage: 'Đã đồng bộ tồn tài sản theo kho thành công',
              data: _getdata2
            });
          case 202:
            _context60.next = 376;
            break;
          case 204:
            _context60.prev = 204;
            _request2 = _index["default"].sqlhis2Connection.request();
            _request2.input('KhoTaiSan_Id', mssql.Int, KhoTaiSan_Id);
            _request2.queryTimeout = 60000;
            _context60.next = 210;
            return _request2.execute('[sp_QLPO_GETALL_KHO_ID]');
          case 210:
            _getkhoduoc = _context60.sent;
            _khoduoc = _getkhoduoc.recordset;
            _iterator41 = _createForOfIteratorHelper(_khoduoc);
            _context60.prev = 213;
            _iterator41.s();
          case 215:
            if ((_step41 = _iterator41.n()).done) {
              _context60.next = 228;
              break;
            }
            _item23 = _step41.value;
            _context60.prev = 217;
            _context60.next = 220;
            return _index["default"].Data_DotKiemKe.create({
              KhoDuoc_Id: _item23.KhoTaiSan_Id,
              KhoaPhongSuDung: _item23.TenKho,
              KhoaQuanLy: KhoQuanLy,
              NguoiTao: UserId,
              LanKiemKe: 1
            });
          case 220:
            _context60.next = 226;
            break;
          case 222:
            _context60.prev = 222;
            _context60.t9 = _context60["catch"](217);
            // Nếu xảy ra lỗi, gửi thông báo lỗi về React
            console.error("Error converting ngaypo:", _context60.t9.message);
            resolve({
              errCode: 1,
              errMessage: 'Không thể insert data kiểm kê'
            });
          case 226:
            _context60.next = 215;
            break;
          case 228:
            _context60.next = 233;
            break;
          case 230:
            _context60.prev = 230;
            _context60.t10 = _context60["catch"](213);
            _iterator41.e(_context60.t10);
          case 233:
            _context60.prev = 233;
            _iterator41.f();
            return _context60.finish(233);
          case 236:
            _context60.next = 238;
            return _index["default"].sequelize.query('CALL sp_get_dot_kiemke(:KhoTaiSan_Id,:KhoQuanLy,:LanKiemKe)', {
              replacements: {
                KhoTaiSan_Id: KhoTaiSan_Id,
                KhoQuanLy: KhoQuanLy,
                LanKiemKe: 1
              },
              raw: false
            });
          case 238:
            _getDotKiemKe2 = _context60.sent;
            _GetDotKiemKe_Id = (_getDotKiemKe2$ = _getDotKiemKe2[0]) === null || _getDotKiemKe2$ === void 0 ? void 0 : _getDotKiemKe2$.id; //console.log('getDotKiemKe', getDotKiemKe)
            //console.log('DotKiemKe_Id', DotKiemKe_Id)
            // Lặp qua từng phần tử trong mảng data để insert data kiểm kê
            _iterator42 = _createForOfIteratorHelper(data);
            _context60.prev = 241;
            _iterator42.s();
          case 243:
            if ((_step42 = _iterator42.n()).done) {
              _context60.next = 256;
              break;
            }
            _item24 = _step42.value;
            _context60.prev = 245;
            _context60.next = 248;
            return _index["default"].Data_KiemKe.create({
              STT: _item24.STT || 0,
              DotKiemKe_Id: _GetDotKiemKe_Id,
              MaTaiSan: _item24.MaTaiSan,
              MaTaiSanNew: _item24.MaTaiSanNew,
              BenhVien: _item24.BenhVien,
              PhanLoai: _item24.PhanLoai,
              TenTaiSan: _item24.TenTaiSan,
              Model: _item24.Model,
              Serial: _item24.Serial,
              ThoiGianDuaVao: _item24.ThoiGianDuaVao,
              NguyenGia: _item24.NguyenGia,
              Duoc_Id: _item24.Duoc_Id,
              SoLoNhap_Id: _item24.SoLoNhap_Id,
              KhoDuoc_Id: _item24.KhoDuoc_Id,
              ViTri_Id: _item24.ViTri_Id,
              SoLuong: _item24.SoLuong,
              TrangThaiKiemKe: 0,
              IsCheckKiemKe: 0,
              KhoaPhongSuDung: _item24.KhoaPhongSuDung,
              NguoiSuDung_Id: _item24.NguoiSuDung_Id,
              NguoiSuDung: _item24.NguoiSuDung,
              ViTri: _item24.ViTri,
              GhiChu: _item24.GhiChu,
              KhoaQuanLy: _item24.KhoaQuanLy,
              TenDonViTinh: _item24.TenDonViTinh,
              CheckMaTaiSan: _item24.CheckMaTaiSan,
              NguoiTao: UserId,
              NamKiemKe: NamKiemKe,
              LanKiemKe: 1
            });
          case 248:
            _context60.next = 254;
            break;
          case 250:
            _context60.prev = 250;
            _context60.t11 = _context60["catch"](245);
            // Nếu xảy ra lỗi, gửi thông báo lỗi về React
            console.error("Error converting ngaypo:", _context60.t11.message);
            resolve({
              errCode: 1,
              errMessage: 'Không thể insert data kiểm kê'
            });
          case 254:
            _context60.next = 243;
            break;
          case 256:
            _context60.next = 261;
            break;
          case 258:
            _context60.prev = 258;
            _context60.t12 = _context60["catch"](241);
            _iterator42.e(_context60.t12);
          case 261:
            _context60.prev = 261;
            _iterator42.f();
            return _context60.finish(261);
          case 264:
            _context60.next = 270;
            break;
          case 266:
            _context60.prev = 266;
            _context60.t13 = _context60["catch"](204);
            console.error(_context60.t13);
            return _context60.abrupt("return", res.status(500).json({
              errCode: 500,
              errMessage: 'Internal Server Error'
            }));
          case 270:
            if (!DotKiemKe_Id_Int) {
              _context60.next = 322;
              break;
            }
            _context60.next = 273;
            return _index["default"].sequelize.query('CALL sp_get_data_kiemke(:KhoTaiSan_Id,:KhoQuanLy,:DotKiemKe_Id_Int)', {
              replacements: {
                KhoTaiSan_Id: KhoTaiSan_Id,
                KhoQuanLy: KhoQuanLy,
                DotKiemKe_Id_Int: DotKiemKe_Id_Int
              },
              raw: false
            });
          case 273:
            _getdata3 = _context60.sent;
            _context60.next = 276;
            return _index["default"].sequelize.query('CALL sp_get_duocda_kiemke(:KhoQuanLy,:LanKiemKe,:DotKiemKe_Id_Int)', {
              replacements: {
                KhoQuanLy: KhoQuanLy,
                DotKiemKe_Id_Int: DotKiemKe_Id_Int,
                LanKiemKe: 1
              },
              raw: true
            });
          case 276:
            _getduocdakiem2 = _context60.sent;
            _plaingetdata2 = JSON.parse(JSON.stringify(_getdata3));
            _plaingetduocdakiem2 = JSON.parse(JSON.stringify(_getduocdakiem2)); // Chuẩn hóa dữ liệu trong cả hai mảng
            _int_plaingetdata2 = _plaingetdata2.map(function (item) {
              return _objectSpread(_objectSpread({}, item), {}, {
                Duoc_Id: parseInt(item.Duoc_Id, 10),
                // Chuyển Duoc_Id thành số
                LanKiemKe: parseInt(item.LanKiemKe, 10) // Chuyển LanKiemKe thành số
              });
            });
            _int_plaingetduocdakiem2 = _plaingetduocdakiem2.map(function (item) {
              return _objectSpread(_objectSpread({}, item), {}, {
                Duoc_Id: parseInt(item.Duoc_Id, 10),
                // Chuyển Duoc_Id thành số
                LanKiemKe: parseInt(item.LanKiemKe, 10) // Chuyển LanKiemKe thành số
              });
            });
            _ketqua2 = _int_plaingetdata2.filter(function (dataItem) {
              return _int_plaingetduocdakiem2.some(function (checkedItem) {
                return dataItem.Duoc_Id === checkedItem.Duoc_Id && dataItem.LanKiemKe === checkedItem.LanKiemKe;
              });
            });
            if (!(_ketqua2.length > 0)) {
              _context60.next = 319;
              break;
            }
            _iterator43 = _createForOfIteratorHelper(_ketqua2);
            _context60.prev = 284;
            _iterator43.s();
          case 286:
            if ((_step43 = _iterator43.n()).done) {
              _context60.next = 305;
              break;
            }
            _dataItem2 = _step43.value;
            _context60.prev = 288;
            _context60.next = 291;
            return _index["default"].Data_KiemKe.findOne({
              where: {
                id: _dataItem2.id
              },
              raw: false
            });
          case 291:
            _data18 = _context60.sent;
            if (!_data18) {
              _context60.next = 298;
              break;
            }
            _data18.TrangThaiChuyen = 1;
            _context60.next = 296;
            return _data18.save();
          case 296:
            _context60.next = 298;
            break;
          case 298:
            _context60.next = 303;
            break;
          case 300:
            _context60.prev = 300;
            _context60.t14 = _context60["catch"](288);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt id: ".concat(_dataItem2.id), _context60.t14);
          case 303:
            _context60.next = 286;
            break;
          case 305:
            _context60.next = 310;
            break;
          case 307:
            _context60.prev = 307;
            _context60.t15 = _context60["catch"](284);
            _iterator43.e(_context60.t15);
          case 310:
            _context60.prev = 310;
            _iterator43.f();
            return _context60.finish(310);
          case 313:
            _context60.next = 315;
            return _index["default"].sequelize.query('CALL sp_get_data_kiemke(:KhoTaiSan_Id,:KhoQuanLy,:DotKiemKe_Id_Int)', {
              replacements: {
                KhoTaiSan_Id: KhoTaiSan_Id,
                KhoQuanLy: KhoQuanLy,
                DotKiemKe_Id_Int: DotKiemKe_Id_Int
              },
              raw: false
            });
          case 315:
            _getdatanew2 = _context60.sent;
            resolve({
              errCode: 0,
              errMessage: 'Đã đồng bộ tồn tài sản theo kho thành công',
              data: _getdatanew2
            });
            _context60.next = 320;
            break;
          case 319:
            resolve({
              errCode: 0,
              errMessage: 'Đã đồng bộ tồn tài sản theo kho thành công',
              data: _getdata3
            });
          case 320:
            _context60.next = 376;
            break;
          case 322:
            _context60.next = 324;
            return _index["default"].sequelize.query('CALL sp_get_dot_kiemke(:KhoTaiSan_Id,:KhoQuanLy,:LanKiemKe)', {
              replacements: {
                KhoTaiSan_Id: KhoTaiSan_Id,
                KhoQuanLy: KhoQuanLy,
                LanKiemKe: 1
              },
              raw: false
            });
          case 324:
            _getDotKiemKe3 = _context60.sent;
            _GetDotKiemKe_Id2 = (_getDotKiemKe3$ = _getDotKiemKe3[0]) === null || _getDotKiemKe3$ === void 0 ? void 0 : _getDotKiemKe3$.id;
            _DotKiemKe_Id_Int2 = _GetDotKiemKe_Id2; //console.log('không có đợt', DotKiemKe_Id_Int, KhoTaiSan_Id, KhoQuanLy)
            _context60.next = 329;
            return _index["default"].sequelize.query('CALL sp_get_data_kiemke_khongcodotkiemke(:KhoTaiSan_Id,:KhoQuanLy,:DotKiemKe_Id_Int)', {
              replacements: {
                KhoTaiSan_Id: KhoTaiSan_Id,
                KhoQuanLy: KhoQuanLy,
                DotKiemKe_Id_Int: _DotKiemKe_Id_Int2
              },
              raw: false
            });
          case 329:
            _getdata4 = _context60.sent;
            _context60.next = 332;
            return _index["default"].sequelize.query('CALL sp_get_duocda_kiemke(:KhoQuanLy,:LanKiemKe,:DotKiemKe_Id_Int)', {
              replacements: {
                KhoQuanLy: KhoQuanLy,
                DotKiemKe_Id_Int: _DotKiemKe_Id_Int2,
                LanKiemKe: 1
              },
              raw: true
            });
          case 332:
            _getduocdakiem3 = _context60.sent;
            _plaingetdata3 = JSON.parse(JSON.stringify(_getdata4));
            _plaingetduocdakiem3 = JSON.parse(JSON.stringify(_getduocdakiem3)); // Chuẩn hóa dữ liệu trong cả hai mảng
            _int_plaingetdata3 = _plaingetdata3.map(function (item) {
              return _objectSpread(_objectSpread({}, item), {}, {
                Duoc_Id: parseInt(item.Duoc_Id, 10),
                // Chuyển Duoc_Id thành số
                LanKiemKe: parseInt(item.LanKiemKe, 10) // Chuyển LanKiemKe thành số
              });
            });
            _int_plaingetduocdakiem3 = _plaingetduocdakiem3.map(function (item) {
              return _objectSpread(_objectSpread({}, item), {}, {
                Duoc_Id: parseInt(item.Duoc_Id, 10),
                // Chuyển Duoc_Id thành số
                LanKiemKe: parseInt(item.LanKiemKe, 10) // Chuyển LanKiemKe thành số
              });
            });
            _ketqua3 = _int_plaingetdata3.filter(function (dataItem) {
              return _int_plaingetduocdakiem3.some(function (checkedItem) {
                return dataItem.Duoc_Id === checkedItem.Duoc_Id && dataItem.LanKiemKe === checkedItem.LanKiemKe;
              });
            });
            if (!(_ketqua3.length > 0)) {
              _context60.next = 375;
              break;
            }
            _iterator44 = _createForOfIteratorHelper(_ketqua3);
            _context60.prev = 340;
            _iterator44.s();
          case 342:
            if ((_step44 = _iterator44.n()).done) {
              _context60.next = 361;
              break;
            }
            _dataItem3 = _step44.value;
            _context60.prev = 344;
            _context60.next = 347;
            return _index["default"].Data_KiemKe.findOne({
              where: {
                id: _dataItem3.id
              },
              raw: false
            });
          case 347:
            _data19 = _context60.sent;
            if (!_data19) {
              _context60.next = 354;
              break;
            }
            _data19.TrangThaiChuyen = 1;
            _context60.next = 352;
            return _data19.save();
          case 352:
            _context60.next = 354;
            break;
          case 354:
            _context60.next = 359;
            break;
          case 356:
            _context60.prev = 356;
            _context60.t16 = _context60["catch"](344);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt id: ".concat(_dataItem3.id), _context60.t16);
          case 359:
            _context60.next = 342;
            break;
          case 361:
            _context60.next = 366;
            break;
          case 363:
            _context60.prev = 363;
            _context60.t17 = _context60["catch"](340);
            _iterator44.e(_context60.t17);
          case 366:
            _context60.prev = 366;
            _iterator44.f();
            return _context60.finish(366);
          case 369:
            _context60.next = 371;
            return _index["default"].sequelize.query('CALL sp_get_data_kiemke_khongcodotkiemke(:KhoTaiSan_Id,:KhoQuanLy,:DotKiemKe_Id_Int)', {
              replacements: {
                KhoTaiSan_Id: KhoTaiSan_Id,
                KhoQuanLy: KhoQuanLy,
                DotKiemKe_Id_Int: _DotKiemKe_Id_Int2
              },
              raw: false
            });
          case 371:
            _getdatanew3 = _context60.sent;
            resolve({
              errCode: 0,
              errMessage: 'Đã đồng bộ tồn tài sản theo kho thành công',
              data: _getdatanew3
            });
            _context60.next = 376;
            break;
          case 375:
            resolve({
              errCode: 0,
              errMessage: 'Đã đồng bộ tồn tài sản theo kho thành công',
              data: _getdata4
            });
          case 376:
            _context60.next = 379;
            break;
          case 378:
            //console.log('chạy ử đây')
            resolve({
              errCode: 0,
              errMessage: 'Đã load tồn tài sản theo kho thành công',
              data: datakiemke
            });
            //resolve(datakiemke);
          case 379:
            _context60.next = 384;
            break;
          case 381:
            _context60.prev = 381;
            _context60.t18 = _context60["catch"](0);
            reject(_context60.t18);
          case 384:
          case "end":
            return _context60.stop();
        }
      }, _callee60, null, [[0, 381], [38, 55, 58, 61], [42, 47], [65, 92], [67, 84, 87, 90], [71, 76], [110, 133, 136, 139], [114, 126], [166, 189, 192, 195], [170, 182], [204, 266], [213, 230, 233, 236], [217, 222], [241, 258, 261, 264], [245, 250], [284, 307, 310, 313], [288, 300], [340, 363, 366, 369], [344, 356]]);
    }));
    return function (_x119, _x120) {
      return _ref61.apply(this, arguments);
    };
  }());
};
var getTaiSanTheoKhoQL = function getTaiSanTheoKhoQL(KhoSuDung, KhoQuanLy, DotKiemKe_Id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref62 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee61(resolve, reject) {
      var DotKiemKe_Id_Int, datakiemke;
      return _regeneratorRuntime().wrap(function _callee61$(_context61) {
        while (1) switch (_context61.prev = _context61.next) {
          case 0:
            _context61.prev = 0;
            //console.log('DotKiemKe_Id', DotKiemKe_Id)
            DotKiemKe_Id_Int = Number(DotKiemKe_Id); //console.log('DotKiemKe_Id_Int', DotKiemKe_Id_Int)
            _context61.next = 4;
            return _index["default"].sequelize.query('CALL sp_get_data_kiemke_theokhoaql(:KhoSuDung,:KhoQuanLy,:DotKiemKe_Id_Int)', {
              replacements: {
                KhoSuDung: KhoSuDung,
                KhoQuanLy: KhoQuanLy,
                DotKiemKe_Id_Int: DotKiemKe_Id_Int
              },
              raw: false
            });
          case 4:
            datakiemke = _context61.sent;
            //console.log('datakiemke', datakiemke)
            resolve({
              errCode: 0,
              errMessage: 'ok',
              data: datakiemke
            });
            //resolve(datakiemke);
            _context61.next = 11;
            break;
          case 8:
            _context61.prev = 8;
            _context61.t0 = _context61["catch"](0);
            reject(_context61.t0);
          case 11:
          case "end":
            return _context61.stop();
        }
      }, _callee61, null, [[0, 8]]);
    }));
    return function (_x121, _x122) {
      return _ref62.apply(this, arguments);
    };
  }());
};
var getMaTaiSanKiemKe = function getMaTaiSanKiemKe(MaTaiSan, KhoTaiSan_Id, KhoQuanLy, UserId, DotKiemKe_Id, KhoaPhongHienTai) {
  return new Promise(/*#__PURE__*/function () {
    var _ref63 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee62(resolve, reject) {
      var _check_khoaphonghient, currentTime, data, check_khoaphonghientai, KhoaPhongHienTaiNew, _data$, _checkdakiem_khackhoa, LanKiemKe, checkdakiem_khackhoa, MessageKhoaPhongSuDung, _iterator45, _step45, item, _data20, checkdakiem_theokhoa, _check_dotkiemke$, check_dotkiemke, _KhoaPhongHienTaiNew, _checklankiem$3, _checkdakiem_khackhoa3, ngaytao, NamKiemKe, request, getdata, _data21, checklankiem, _LanKiemKe, _checkdakiem_khackhoa2, _MessageKhoaPhongSuDung, _iterator46, _step46, _item25, DotKiemKe_Id_Int, _getdata5, getduocdakiem, plaingetdata, plaingetduocdakiem, int_plaingetdata, int_plaingetduocdakiem, ketqua, _iterator47, _step47, dataItem, _data22;
      return _regeneratorRuntime().wrap(function _callee62$(_context62) {
        while (1) switch (_context62.prev = _context62.next) {
          case 0:
            _context62.prev = 0;
            //console.log('MaTaiSan', MaTaiSan,KhoTaiSan_Id,KhoQuanLy)
            currentTime = new Date();
            _context62.next = 4;
            return _index["default"].sequelize.query('CALL sp_get_data_kiemke_theomataisan(:MaTaiSan,:KhoTaiSan_Id,:KhoQuanLy,:DotKiemKe_Id)', {
              replacements: {
                MaTaiSan: MaTaiSan,
                KhoTaiSan_Id: KhoTaiSan_Id,
                KhoQuanLy: KhoQuanLy,
                DotKiemKe_Id: DotKiemKe_Id
              },
              raw: false
            });
          case 4:
            data = _context62.sent;
            _context62.next = 7;
            return _index["default"].sequelize.query('CALL sp_check_dotkiemke(:DotKiemKe_Id)', {
              replacements: {
                DotKiemKe_Id: DotKiemKe_Id
              },
              raw: false
            });
          case 7:
            check_khoaphonghientai = _context62.sent;
            KhoaPhongHienTaiNew = (_check_khoaphonghient = check_khoaphonghientai[0]) === null || _check_khoaphonghient === void 0 ? void 0 : _check_khoaphonghient.KhoaPhongSuDung; //console.log('data.length', data.length)
            if (!(data.length > 0)) {
              _context62.next = 54;
              break;
            }
            LanKiemKe = (_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.LanKiemKe; //console.log('checklankiem', checklankiem, KhoTaiSan_Id)
            //console.log('checkdakiem_khackhoa', MaTaiSan, LanKiemKe == null ? 1 : LanKiemKe + 1, KhoQuanLy)
            _context62.next = 13;
            return _index["default"].sequelize.query('CALL sp_check_ma_dakiem_khackhoa(:MaTaiSan,:LanKiemKe,:KhoQuanLy)', {
              replacements: {
                MaTaiSan: MaTaiSan,
                LanKiemKe: LanKiemKe == null ? 1 : LanKiemKe,
                KhoQuanLy: KhoQuanLy
              },
              raw: false
            });
          case 13:
            checkdakiem_khackhoa = _context62.sent;
            MessageKhoaPhongSuDung = (_checkdakiem_khackhoa = checkdakiem_khackhoa[0]) === null || _checkdakiem_khackhoa === void 0 ? void 0 : _checkdakiem_khackhoa.KhoaPhongHienTai;
            if (!(checkdakiem_khackhoa.length > 0)) {
              _context62.next = 19;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "T\xE0i s\u1EA3n \u0111\xE3 \u0111\u01B0\u1EE3c ki\u1EC3m k\xEA t\u1EA1i khoa/ph\xF2ng ".concat(MessageKhoaPhongSuDung || '')
            });
            _context62.next = 52;
            break;
          case 19:
            _iterator45 = _createForOfIteratorHelper(data);
            _context62.prev = 20;
            _iterator45.s();
          case 22:
            if ((_step45 = _iterator45.n()).done) {
              _context62.next = 44;
              break;
            }
            item = _step45.value;
            _context62.prev = 24;
            _context62.next = 27;
            return _index["default"].Data_KiemKe.findOne({
              where: {
                id: item.id
              },
              raw: false
            });
          case 27:
            _data20 = _context62.sent;
            if (!_data20) {
              _context62.next = 36;
              break;
            }
            _data20.IsCheckKiemKe = 1;
            _data20.SoLuongThucTe = 1;
            _data20.ChenhLech = 1 - item.SoLuong;
            _data20.KhoaPhongHienTai = KhoaPhongHienTaiNew;
            _data20.NgayKiemKe = currentTime;
            // Lưu thay đổi
            _context62.next = 36;
            return _data20.save();
          case 36:
            resolve({
              errCode: 0,
              data: _data20,
              errMessage: 'Đã load mã tài sản thành công'
            });
            _context62.next = 42;
            break;
          case 39:
            _context62.prev = 39;
            _context62.t0 = _context62["catch"](24);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt PO c\xF3 id: ".concat(item.id), _context62.t0);
          case 42:
            _context62.next = 22;
            break;
          case 44:
            _context62.next = 49;
            break;
          case 46:
            _context62.prev = 46;
            _context62.t1 = _context62["catch"](20);
            _iterator45.e(_context62.t1);
          case 49:
            _context62.prev = 49;
            _iterator45.f();
            return _context62.finish(49);
          case 52:
            _context62.next = 164;
            break;
          case 54:
            _context62.next = 56;
            return _index["default"].sequelize.query('CALL sp_check_ma_dakiem_theokhoa(:MaTaiSan,:KhoTaiSan_Id,:KhoQuanLy,:DotKiemKe_Id)', {
              replacements: {
                MaTaiSan: MaTaiSan,
                KhoTaiSan_Id: KhoTaiSan_Id,
                KhoQuanLy: KhoQuanLy,
                DotKiemKe_Id: DotKiemKe_Id
              },
              raw: false
            });
          case 56:
            checkdakiem_theokhoa = _context62.sent;
            if (!(checkdakiem_theokhoa.length > 0)) {
              _context62.next = 61;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Tài sản đã được kiêm kê tại khoa'
            });
            _context62.next = 164;
            break;
          case 61:
            _context62.next = 63;
            return _index["default"].sequelize.query('CALL sp_check_dotkiemke(:DotKiemKe_Id)', {
              replacements: {
                DotKiemKe_Id: DotKiemKe_Id
              },
              raw: false
            });
          case 63:
            check_dotkiemke = _context62.sent;
            _KhoaPhongHienTaiNew = (_check_dotkiemke$ = check_dotkiemke[0]) === null || _check_dotkiemke$ === void 0 ? void 0 : _check_dotkiemke$.KhoaPhongSuDung; // KIỂM TRA ĐỢT KIỂM KÊ CÒN KHÔNG CHO TRƯỜNG HỢP ĐÃ XÓA
            if (!(check_dotkiemke.length > 0)) {
              _context62.next = 163;
              break;
            }
            //console.log('tìm kiếm khác kho')
            ngaytao = new Date();
            NamKiemKe = ngaytao.getFullYear();
            request = _index["default"].sqlhis2Connection.request();
            request.input('MaTaiSan', mssql.NVarChar(50), MaTaiSan);
            request.queryTimeout = 60000;
            _context62.next = 73;
            return request.execute('[sp_QLPO_GETTAISAN_SAIVITRI]');
          case 73:
            getdata = _context62.sent;
            // Lấy dữ liệu từ recordset
            _data21 = getdata.recordset;
            _context62.next = 77;
            return _index["default"].sequelize.query('CALL sp_checklan_kiemke(:KhoTaiSan_Id,:KhoQuanLy)', {
              replacements: {
                KhoTaiSan_Id: KhoTaiSan_Id,
                KhoQuanLy: KhoQuanLy
              },
              raw: false
            });
          case 77:
            checklankiem = _context62.sent;
            _LanKiemKe = (_checklankiem$3 = checklankiem[0]) === null || _checklankiem$3 === void 0 ? void 0 : _checklankiem$3.LanKiemKe; //console.log('checklankiem', checklankiem, KhoTaiSan_Id)
            //console.log('checkdakiem_khackhoa', MaTaiSan, LanKiemKe == null ? 1 : LanKiemKe + 1, KhoQuanLy)
            _context62.next = 81;
            return _index["default"].sequelize.query('CALL sp_check_ma_dakiem_khackhoa(:MaTaiSan,:LanKiemKe,:KhoQuanLy)', {
              replacements: {
                MaTaiSan: MaTaiSan,
                LanKiemKe: _LanKiemKe == null ? 1 : _LanKiemKe + 1,
                KhoQuanLy: KhoQuanLy
              },
              raw: false
            });
          case 81:
            _checkdakiem_khackhoa2 = _context62.sent;
            _MessageKhoaPhongSuDung = (_checkdakiem_khackhoa3 = _checkdakiem_khackhoa2[0]) === null || _checkdakiem_khackhoa3 === void 0 ? void 0 : _checkdakiem_khackhoa3.KhoaPhongHienTai;
            if (!(_checkdakiem_khackhoa2.length > 0)) {
              _context62.next = 87;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "T\xE0i s\u1EA3n \u0111\xE3 \u0111\u01B0\u1EE3c ki\u1EC3m k\xEA t\u1EA1i khoa/ph\xF2ng ".concat(_MessageKhoaPhongSuDung || '')
            });
            _context62.next = 161;
            break;
          case 87:
            if (!(_data21.length > 0)) {
              _context62.next = 160;
              break;
            }
            // Lặp qua từng phần tử trong mảng data để insert data kiểm kê
            _iterator46 = _createForOfIteratorHelper(_data21);
            _context62.prev = 89;
            _iterator46.s();
          case 91:
            if ((_step46 = _iterator46.n()).done) {
              _context62.next = 103;
              break;
            }
            _item25 = _step46.value;
            _context62.prev = 93;
            _context62.next = 96;
            return _index["default"].Data_KiemKe.create({
              STT: _item25.STT || 0,
              DotKiemKe_Id: DotKiemKe_Id,
              MaTaiSan: _item25.MaTaiSan,
              MaTaiSanNew: _item25.MaTaiSanNew,
              BenhVien: _item25.BenhVien,
              PhanLoai: _item25.PhanLoai,
              TenTaiSan: _item25.TenTaiSan,
              Model: _item25.Model,
              Serial: _item25.Serial,
              ThoiGianDuaVao: _item25.ThoiGianDuaVao,
              NguyenGia: _item25.NguyenGia,
              Duoc_Id: _item25.Duoc_Id,
              SoLoNhap_Id: _item25.SoLoNhap_Id,
              KhoDuoc_Id: _item25.KhoDuoc_Id,
              KhoDuocSaiViTri_Id: KhoTaiSan_Id,
              ViTri_Id: _item25.ViTri_Id,
              SoLuong: _item25.SoLuong,
              SoLuongThucTe: _item25.SoLuong,
              ChenhLech: 1 - _item25.SoLuong,
              TrangThaiKiemKe: 0,
              IsCheckKiemKe: 1,
              KhoaPhongSuDung: _item25.KhoaPhongSuDung,
              NguoiSuDung_Id: _item25.NguoiSuDung_Id,
              NguoiSuDung: _item25.NguoiSuDung,
              KhoaPhongHienTai: _KhoaPhongHienTaiNew,
              ViTri: _item25.ViTri,
              GhiChu: _item25.GhiChu,
              KhoaQuanLy: _item25.KhoaQuanLy,
              TenDonViTinh: _item25.TenDonViTinh,
              CheckMaTaiSan: _item25.CheckMaTaiSan,
              NamKiemKe: NamKiemKe,
              NgayKiemKe: currentTime,
              LanKiemKe: _LanKiemKe == null ? 1 : _LanKiemKe + 1,
              NguoiTao: UserId
            });
          case 96:
            _context62.next = 101;
            break;
          case 98:
            _context62.prev = 98;
            _context62.t2 = _context62["catch"](93);
            // Nếu xảy ra lỗi, gửi thông báo lỗi về React
            //console.error("Error converting ngaypo:", error.message);
            resolve({
              errCode: 1,
              errMessage: 'Không thể insert data kiểm kê'
            });
          case 101:
            _context62.next = 91;
            break;
          case 103:
            _context62.next = 108;
            break;
          case 105:
            _context62.prev = 105;
            _context62.t3 = _context62["catch"](89);
            _iterator46.e(_context62.t3);
          case 108:
            _context62.prev = 108;
            _iterator46.f();
            return _context62.finish(108);
          case 111:
            // TÌM XEM MÃ DƯỢC THUỘC PHÒNG BAN NÀO ĐỂ CẬP NHẠP LẠI TRẠNG THÁI CHUYỂN
            DotKiemKe_Id_Int = Number(DotKiemKe_Id);
            _context62.next = 114;
            return _index["default"].sequelize.query('CALL sp_get_data_kiemke(:KhoTaiSan_Id,:KhoQuanLy,:DotKiemKe_Id_Int)', {
              replacements: {
                KhoTaiSan_Id: KhoTaiSan_Id,
                KhoQuanLy: KhoQuanLy,
                DotKiemKe_Id_Int: DotKiemKe_Id_Int
              },
              raw: false
            });
          case 114:
            _getdata5 = _context62.sent;
            _context62.next = 117;
            return _index["default"].sequelize.query('CALL sp_get_duocda_kiemke(:KhoQuanLy,:LanKiemKe,:DotKiemKe_Id_Int)', {
              replacements: {
                KhoQuanLy: KhoQuanLy,
                DotKiemKe_Id_Int: DotKiemKe_Id_Int,
                LanKiemKe: _LanKiemKe == null ? 1 : _LanKiemKe + 1
              },
              raw: true
            });
          case 117:
            getduocdakiem = _context62.sent;
            plaingetdata = JSON.parse(JSON.stringify(_getdata5));
            plaingetduocdakiem = JSON.parse(JSON.stringify(getduocdakiem)); // Chuẩn hóa dữ liệu trong cả hai mảng
            int_plaingetdata = plaingetdata.map(function (item) {
              return _objectSpread(_objectSpread({}, item), {}, {
                Duoc_Id: parseInt(item.Duoc_Id, 10),
                // Chuyển Duoc_Id thành số
                LanKiemKe: parseInt(item.LanKiemKe, 10) // Chuyển LanKiemKe thành số
              });
            });
            int_plaingetduocdakiem = plaingetduocdakiem.map(function (item) {
              return _objectSpread(_objectSpread({}, item), {}, {
                Duoc_Id: parseInt(item.Duoc_Id, 10),
                // Chuyển Duoc_Id thành số
                LanKiemKe: parseInt(item.LanKiemKe, 10) // Chuyển LanKiemKe thành số
              });
            });
            ketqua = int_plaingetduocdakiem.filter(function (dataItem) {
              return int_plaingetdata.some(function (checkedItem) {
                return dataItem.Duoc_Id === checkedItem.Duoc_Id && dataItem.LanKiemKe === checkedItem.LanKiemKe;
              });
            });
            if (!(ketqua.length > 0)) {
              _context62.next = 157;
              break;
            }
            _iterator47 = _createForOfIteratorHelper(ketqua);
            _context62.prev = 125;
            _iterator47.s();
          case 127:
            if ((_step47 = _iterator47.n()).done) {
              _context62.next = 146;
              break;
            }
            dataItem = _step47.value;
            _context62.prev = 129;
            _context62.next = 132;
            return _index["default"].Data_KiemKe.findOne({
              where: {
                id: dataItem.id
              },
              raw: false
            });
          case 132:
            _data22 = _context62.sent;
            if (!_data22) {
              _context62.next = 139;
              break;
            }
            _data22.TrangThaiChuyen = 1;
            _context62.next = 137;
            return _data22.save();
          case 137:
            _context62.next = 139;
            break;
          case 139:
            _context62.next = 144;
            break;
          case 141:
            _context62.prev = 141;
            _context62.t4 = _context62["catch"](129);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt id: ".concat(dataItem.id), _context62.t4);
          case 144:
            _context62.next = 127;
            break;
          case 146:
            _context62.next = 151;
            break;
          case 148:
            _context62.prev = 148;
            _context62.t5 = _context62["catch"](125);
            _iterator47.e(_context62.t5);
          case 151:
            _context62.prev = 151;
            _iterator47.f();
            return _context62.finish(151);
          case 154:
            resolve({
              errCode: 0,
              data: _data21,
              errMessage: 'Đã load mã tài sản thành công'
            });
            _context62.next = 158;
            break;
          case 157:
            resolve({
              errCode: 0,
              data: _data21,
              errMessage: 'Đã load mã tài sản thành công'
            });
          case 158:
            _context62.next = 161;
            break;
          case 160:
            resolve({
              errCode: 1,
              data: _data21,
              errMessage: 'Không tìm thấy mã tài sản'
            });
          case 161:
            _context62.next = 164;
            break;
          case 163:
            resolve({
              errCode: 1,
              errMessage: 'Đợt kiểm kê đã xóa. Vui lòng load lại dữ liệu mới'
            });
          case 164:
            _context62.next = 169;
            break;
          case 166:
            _context62.prev = 166;
            _context62.t6 = _context62["catch"](0);
            reject(_context62.t6);
          case 169:
          case "end":
            return _context62.stop();
        }
      }, _callee62, null, [[0, 166], [20, 46, 49, 52], [24, 39], [89, 105, 108, 111], [93, 98], [125, 148, 151, 154], [129, 141]]);
    }));
    return function (_x123, _x124) {
      return _ref63.apply(this, arguments);
    };
  }());
};
var getSerialKiemKe = function getSerialKiemKe(Serial, KhoTaiSan_Id, KhoQuanLy, UserId, DotKiemKe_Id, KhoaPhongHienTai) {
  return new Promise(/*#__PURE__*/function () {
    var _ref64 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee63(resolve, reject) {
      var _check_khoaphonghient2, currentTime, currentYear, data, check_khoaphonghientai, KhoaPhongHienTaiNew, _data$2, _checkdakiem_khackhoa4, LanKiemKe, checkdakiem_khackhoa, MessageKhoaPhongSuDung, _iterator48, _step48, item, _data23, checkdakiem_theokhoa, _check_dotkiemke$2, check_dotkiemke, _KhoaPhongHienTaiNew2, _checklankiem$4, _checkdakiem_khackhoa6, ngaytao, request, getdata, _data24, checklankiem, _LanKiemKe2, _checkdakiem_khackhoa5, _MessageKhoaPhongSuDung2, _iterator49, _step49, _item26, DotKiemKe_Id_Int, _getdata6, getduocdakiem, plaingetdata, plaingetduocdakiem, int_plaingetdata, int_plaingetduocdakiem, ketqua, _iterator50, _step50, dataItem, _data25;
      return _regeneratorRuntime().wrap(function _callee63$(_context63) {
        while (1) switch (_context63.prev = _context63.next) {
          case 0:
            _context63.prev = 0;
            //console.log('MaTaiSan', Serial, KhoTaiSan_Id, KhoQuanLy, UserId, DotKiemKe_Id)
            currentTime = new Date();
            currentYear = currentTime.getFullYear();
            _context63.next = 5;
            return _index["default"].sequelize.query('CALL sp_get_data_kiemke_theoserial(:Serial,:KhoTaiSan_Id,:KhoQuanLy,:DotKiemKe_Id)', {
              replacements: {
                Serial: Serial,
                KhoTaiSan_Id: KhoTaiSan_Id,
                KhoQuanLy: KhoQuanLy,
                DotKiemKe_Id: DotKiemKe_Id
              },
              raw: false
            });
          case 5:
            data = _context63.sent;
            _context63.next = 8;
            return _index["default"].sequelize.query('CALL sp_check_dotkiemke(:DotKiemKe_Id)', {
              replacements: {
                DotKiemKe_Id: DotKiemKe_Id
              },
              raw: false
            });
          case 8:
            check_khoaphonghientai = _context63.sent;
            KhoaPhongHienTaiNew = (_check_khoaphonghient2 = check_khoaphonghientai[0]) === null || _check_khoaphonghient2 === void 0 ? void 0 : _check_khoaphonghient2.KhoaPhongSuDung; //console.log('data.length', data.length)
            if (!(data.length > 0)) {
              _context63.next = 55;
              break;
            }
            LanKiemKe = (_data$2 = data[0]) === null || _data$2 === void 0 ? void 0 : _data$2.LanKiemKe; //console.log('checklankiem', checklankiem, KhoTaiSan_Id)
            //console.log('checkdakiem_khackhoa', MaTaiSan, LanKiemKe == null ? 1 : LanKiemKe + 1, KhoQuanLy)
            _context63.next = 14;
            return _index["default"].sequelize.query('CALL sp_check_serial_dakiem_khackhoa(:Serial,:LanKiemKe,:KhoQuanLy)', {
              replacements: {
                Serial: Serial,
                LanKiemKe: LanKiemKe == null ? 1 : LanKiemKe,
                KhoQuanLy: KhoQuanLy
              },
              raw: false
            });
          case 14:
            checkdakiem_khackhoa = _context63.sent;
            MessageKhoaPhongSuDung = (_checkdakiem_khackhoa4 = checkdakiem_khackhoa[0]) === null || _checkdakiem_khackhoa4 === void 0 ? void 0 : _checkdakiem_khackhoa4.KhoaPhongHienTai;
            if (!(checkdakiem_khackhoa.length > 0)) {
              _context63.next = 20;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "T\xE0i s\u1EA3n \u0111\xE3 \u0111\u01B0\u1EE3c ki\u1EC3m k\xEA t\u1EA1i khoa/ph\xF2ng ".concat(MessageKhoaPhongSuDung || '')
            });
            _context63.next = 53;
            break;
          case 20:
            _iterator48 = _createForOfIteratorHelper(data);
            _context63.prev = 21;
            _iterator48.s();
          case 23:
            if ((_step48 = _iterator48.n()).done) {
              _context63.next = 45;
              break;
            }
            item = _step48.value;
            _context63.prev = 25;
            _context63.next = 28;
            return _index["default"].Data_KiemKe.findOne({
              where: {
                id: item.id
              },
              raw: false
            });
          case 28:
            _data23 = _context63.sent;
            if (!_data23) {
              _context63.next = 37;
              break;
            }
            _data23.IsCheckKiemKe = 1;
            _data23.SoLuongThucTe = 1;
            _data23.ChenhLech = 1 - item.SoLuong;
            _data23.KhoaPhongHienTai = KhoaPhongHienTaiNew;
            _data23.NgayKiemKe = currentTime;
            // Lưu thay đổi
            _context63.next = 37;
            return _data23.save();
          case 37:
            resolve({
              errCode: 0,
              data: _data23,
              errMessage: 'Đã load Serial tài sản thành công'
            });
            _context63.next = 43;
            break;
          case 40:
            _context63.prev = 40;
            _context63.t0 = _context63["catch"](25);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt PO c\xF3 id: ".concat(item.id), _context63.t0);
          case 43:
            _context63.next = 23;
            break;
          case 45:
            _context63.next = 50;
            break;
          case 47:
            _context63.prev = 47;
            _context63.t1 = _context63["catch"](21);
            _iterator48.e(_context63.t1);
          case 50:
            _context63.prev = 50;
            _iterator48.f();
            return _context63.finish(50);
          case 53:
            _context63.next = 164;
            break;
          case 55:
            _context63.next = 57;
            return _index["default"].sequelize.query('CALL sp_check_serial_dakiem_theokhoa(:Serial,:KhoTaiSan_Id,:KhoQuanLy,:DotKiemKe_Id)', {
              replacements: {
                Serial: Serial,
                KhoTaiSan_Id: KhoTaiSan_Id,
                KhoQuanLy: KhoQuanLy,
                DotKiemKe_Id: DotKiemKe_Id
              },
              raw: false
            });
          case 57:
            checkdakiem_theokhoa = _context63.sent;
            if (!(checkdakiem_theokhoa.length > 0)) {
              _context63.next = 62;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Tài sản đã được kiểm kê tại khoa'
            });
            _context63.next = 164;
            break;
          case 62:
            _context63.next = 64;
            return _index["default"].sequelize.query('CALL sp_check_dotkiemke(:DotKiemKe_Id)', {
              replacements: {
                DotKiemKe_Id: DotKiemKe_Id
              },
              raw: false
            });
          case 64:
            check_dotkiemke = _context63.sent;
            _KhoaPhongHienTaiNew2 = (_check_dotkiemke$2 = check_dotkiemke[0]) === null || _check_dotkiemke$2 === void 0 ? void 0 : _check_dotkiemke$2.KhoaPhongSuDung;
            if (!(check_dotkiemke.length > 0)) {
              _context63.next = 163;
              break;
            }
            ngaytao = new Date();
            request = _index["default"].sqlhis2Connection.request();
            request.input('Serial', mssql.NVarChar(50), Serial);
            request.queryTimeout = 60000;
            _context63.next = 73;
            return request.execute('[sp_QLPO_GETTAISAN_SAIVITRI_THEO_SERIAL]');
          case 73:
            getdata = _context63.sent;
            // Lấy dữ liệu từ recordset
            _data24 = getdata.recordset;
            _context63.next = 77;
            return _index["default"].sequelize.query('CALL sp_checklan_kiemke(:KhoTaiSan_Id,:KhoQuanLy)', {
              replacements: {
                KhoTaiSan_Id: KhoTaiSan_Id,
                KhoQuanLy: KhoQuanLy
              },
              raw: false
            });
          case 77:
            checklankiem = _context63.sent;
            _LanKiemKe2 = (_checklankiem$4 = checklankiem[0]) === null || _checklankiem$4 === void 0 ? void 0 : _checklankiem$4.LanKiemKe; //console.log('checklankiem', checklankiem, KhoTaiSan_Id)
            //console.log('checkdakiem_khackhoa', MaTaiSan, LanKiemKe == null ? 1 : LanKiemKe + 1, KhoQuanLy)
            _context63.next = 81;
            return _index["default"].sequelize.query('CALL sp_check_serial_dakiem_khackhoa(:Serial,:LanKiemKe,:KhoQuanLy)', {
              replacements: {
                Serial: Serial,
                LanKiemKe: _LanKiemKe2 == null ? 1 : _LanKiemKe2,
                KhoQuanLy: KhoQuanLy
              },
              raw: false
            });
          case 81:
            _checkdakiem_khackhoa5 = _context63.sent;
            _MessageKhoaPhongSuDung2 = (_checkdakiem_khackhoa6 = _checkdakiem_khackhoa5[0]) === null || _checkdakiem_khackhoa6 === void 0 ? void 0 : _checkdakiem_khackhoa6.KhoaPhongHienTai;
            if (!(_checkdakiem_khackhoa5.length > 0)) {
              _context63.next = 87;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "T\xE0i s\u1EA3n \u0111\xE3 \u0111\u01B0\u1EE3c ki\u1EC3m k\xEA t\u1EA1i khoa/ph\xF2ng ".concat(_MessageKhoaPhongSuDung2 || '')
            });
            _context63.next = 161;
            break;
          case 87:
            if (!(_data24.length > 0)) {
              _context63.next = 160;
              break;
            }
            // Lặp qua từng phần tử trong mảng data để insert data kiểm kê
            _iterator49 = _createForOfIteratorHelper(_data24);
            _context63.prev = 89;
            _iterator49.s();
          case 91:
            if ((_step49 = _iterator49.n()).done) {
              _context63.next = 103;
              break;
            }
            _item26 = _step49.value;
            _context63.prev = 93;
            _context63.next = 96;
            return _index["default"].Data_KiemKe.create({
              STT: _item26.STT || 0,
              DotKiemKe_Id: DotKiemKe_Id,
              MaTaiSan: _item26.MaTaiSan,
              MaTaiSanNew: _item26.MaTaiSanNew,
              BenhVien: _item26.BenhVien,
              PhanLoai: _item26.PhanLoai,
              TenTaiSan: _item26.TenTaiSan,
              Model: _item26.Model,
              Serial: _item26.Serial,
              ThoiGianDuaVao: _item26.ThoiGianDuaVao,
              NguyenGia: _item26.NguyenGia,
              Duoc_Id: _item26.Duoc_Id,
              SoLoNhap_Id: _item26.SoLoNhap_Id,
              KhoDuoc_Id: _item26.KhoDuoc_Id,
              KhoDuocSaiViTri_Id: KhoTaiSan_Id,
              ViTri_Id: _item26.ViTri_Id,
              SoLuong: _item26.SoLuong,
              TrangThaiKiemKe: 0,
              IsCheckKiemKe: 1,
              KhoaPhongSuDung: _item26.KhoaPhongSuDung,
              NguoiSuDung_Id: _item26.NguoiSuDung_Id,
              NguoiSuDung: _item26.NguoiSuDung,
              KhoaPhongHienTai: _KhoaPhongHienTaiNew2,
              ViTri: _item26.ViTri,
              GhiChu: _item26.GhiChu,
              KhoaQuanLy: _item26.KhoaQuanLy,
              TenDonViTinh: _item26.TenDonViTinh,
              CheckMaTaiSan: _item26.CheckMaTaiSan,
              SoLuongThucTe: 1,
              ChenhLech: 1 - _item26.SoLuong,
              NgayKiemKe: currentTime,
              NamKiemKe: currentYear,
              LanKiemKe: _LanKiemKe2 == null ? 1 : _LanKiemKe2 + 1,
              NguoiTao: UserId
            });
          case 96:
            _context63.next = 101;
            break;
          case 98:
            _context63.prev = 98;
            _context63.t2 = _context63["catch"](93);
            resolve({
              errCode: 1,
              errMessage: 'Không thể insert data kiểm kê'
            });
          case 101:
            _context63.next = 91;
            break;
          case 103:
            _context63.next = 108;
            break;
          case 105:
            _context63.prev = 105;
            _context63.t3 = _context63["catch"](89);
            _iterator49.e(_context63.t3);
          case 108:
            _context63.prev = 108;
            _iterator49.f();
            return _context63.finish(108);
          case 111:
            // TÌM XEM MÃ DƯỢC THUỘC PHÒNG BAN NÀO ĐỂ CẬP NHẠP LẠI TRẠNG THÁI CHUYỂN
            DotKiemKe_Id_Int = Number(DotKiemKe_Id);
            _context63.next = 114;
            return _index["default"].sequelize.query('CALL sp_get_data_kiemke(:KhoTaiSan_Id,:KhoQuanLy,:DotKiemKe_Id_Int)', {
              replacements: {
                KhoTaiSan_Id: KhoTaiSan_Id,
                KhoQuanLy: KhoQuanLy,
                DotKiemKe_Id_Int: DotKiemKe_Id_Int
              },
              raw: false
            });
          case 114:
            _getdata6 = _context63.sent;
            _context63.next = 117;
            return _index["default"].sequelize.query('CALL sp_get_duocda_kiemke(:KhoQuanLy,:LanKiemKe,:DotKiemKe_Id_Int)', {
              replacements: {
                KhoQuanLy: KhoQuanLy,
                DotKiemKe_Id_Int: DotKiemKe_Id_Int,
                LanKiemKe: _LanKiemKe2 == null ? 1 : _LanKiemKe2 + 1
              },
              raw: true
            });
          case 117:
            getduocdakiem = _context63.sent;
            plaingetdata = JSON.parse(JSON.stringify(_getdata6));
            plaingetduocdakiem = JSON.parse(JSON.stringify(getduocdakiem)); // Chuẩn hóa dữ liệu trong cả hai mảng
            int_plaingetdata = plaingetdata.map(function (item) {
              return _objectSpread(_objectSpread({}, item), {}, {
                Duoc_Id: parseInt(item.Duoc_Id, 10),
                // Chuyển Duoc_Id thành số
                LanKiemKe: parseInt(item.LanKiemKe, 10) // Chuyển LanKiemKe thành số
              });
            });
            int_plaingetduocdakiem = plaingetduocdakiem.map(function (item) {
              return _objectSpread(_objectSpread({}, item), {}, {
                Duoc_Id: parseInt(item.Duoc_Id, 10),
                // Chuyển Duoc_Id thành số
                LanKiemKe: parseInt(item.LanKiemKe, 10) // Chuyển LanKiemKe thành số
              });
            });
            ketqua = int_plaingetduocdakiem.filter(function (dataItem) {
              return int_plaingetdata.some(function (checkedItem) {
                return dataItem.Duoc_Id === checkedItem.Duoc_Id && dataItem.LanKiemKe === checkedItem.LanKiemKe;
              });
            });
            if (!(ketqua.length > 0)) {
              _context63.next = 157;
              break;
            }
            _iterator50 = _createForOfIteratorHelper(ketqua);
            _context63.prev = 125;
            _iterator50.s();
          case 127:
            if ((_step50 = _iterator50.n()).done) {
              _context63.next = 146;
              break;
            }
            dataItem = _step50.value;
            _context63.prev = 129;
            _context63.next = 132;
            return _index["default"].Data_KiemKe.findOne({
              where: {
                id: dataItem.id
              },
              raw: false
            });
          case 132:
            _data25 = _context63.sent;
            if (!_data25) {
              _context63.next = 139;
              break;
            }
            _data25.TrangThaiChuyen = 1;
            _context63.next = 137;
            return _data25.save();
          case 137:
            _context63.next = 139;
            break;
          case 139:
            _context63.next = 144;
            break;
          case 141:
            _context63.prev = 141;
            _context63.t4 = _context63["catch"](129);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt id: ".concat(dataItem.id), _context63.t4);
          case 144:
            _context63.next = 127;
            break;
          case 146:
            _context63.next = 151;
            break;
          case 148:
            _context63.prev = 148;
            _context63.t5 = _context63["catch"](125);
            _iterator50.e(_context63.t5);
          case 151:
            _context63.prev = 151;
            _iterator50.f();
            return _context63.finish(151);
          case 154:
            resolve({
              errCode: 0,
              data: _data24,
              errMessage: 'Đã load mã tài sản thành công'
            });
            _context63.next = 158;
            break;
          case 157:
            resolve({
              errCode: 0,
              data: _data24,
              errMessage: 'Đã load mã tài sản thành công'
            });
          case 158:
            _context63.next = 161;
            break;
          case 160:
            resolve({
              errCode: 1,
              data: _data24,
              errMessage: 'Không tìm thấy Serial tài sản'
            });
          case 161:
            _context63.next = 164;
            break;
          case 163:
            resolve({
              errCode: 1,
              errMessage: 'Đợt kiểm kê đã xóa. Vui lòng load lại dữ liệu mới'
            });
          case 164:
            _context63.next = 169;
            break;
          case 166:
            _context63.prev = 166;
            _context63.t6 = _context63["catch"](0);
            reject(_context63.t6);
          case 169:
          case "end":
            return _context63.stop();
        }
      }, _callee63, null, [[0, 166], [21, 47, 50, 53], [25, 40], [89, 105, 108, 111], [93, 98], [125, 148, 151, 154], [129, 141]]);
    }));
    return function (_x125, _x126) {
      return _ref64.apply(this, arguments);
    };
  }());
};

// xử lý check lại nhập ncc đã đúng chưa
var getCheckMaChungTu = function getCheckMaChungTu(machungtu, UserId) {
  return new Promise(/*#__PURE__*/function () {
    var _ref65 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee64(resolve, reject) {
      var ngaytao, request, getdata, recordset, data, check_log_chungtu, check_log_hopdong, data_chungtu, soPO, _iterator51, _step51, logItem, getpodata, getpo, _iterator52, _step52, _item31, _data28, _iterator53, _step53, record, _iterator54, _step54, item, _require7, Op, data_check_log_chungtu, data_log_chungtu, result, _iterator55, _step55, _item27, _data26, _iterator56, _step56, _item28, _require8, _Op2, _data_check_log_chungtu2, _data_log_chungtu2, _result2, _iterator57, _step57, _item29, _data27, _iterator58, _step58, _item30;
      return _regeneratorRuntime().wrap(function _callee64$(_context64) {
        while (1) switch (_context64.prev = _context64.next) {
          case 0:
            _context64.prev = 0;
            ngaytao = new Date();
            request = _index["default"].sqlhis2Connection.request();
            request.input('machungtu', mssql.NVarChar(50), machungtu);
            _context64.next = 6;
            return request.execute('[sp_QLPO_GETCHUNGTUNHAPNCC_DNK]');
          case 6:
            getdata = _context64.sent;
            // Lấy dữ liệu từ recordset
            recordset = getdata.recordset;
            data = recordset[0];
            if (!(recordset.length > 0)) {
              _context64.next = 276;
              break;
            }
            _context64.next = 12;
            return _index["default"].Check_Data_ChungTu_Log.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                machungtu: data.machungtu
              },
              raw: true
            });
          case 12:
            check_log_chungtu = _context64.sent;
            _context64.next = 15;
            return _index["default"].Check_Data_ChungTu_Hd_Log.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                machungtu: data.machungtu
              },
              raw: true
            });
          case 15:
            check_log_hopdong = _context64.sent;
            _context64.next = 18;
            return _index["default"].Check_Data_ChungTu.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                machungtu: machungtu
              },
              raw: true
            });
          case 18:
            data_chungtu = _context64.sent;
            if (!(data.trangthai !== 'PNCNK')) {
              _context64.next = 273;
              break;
            }
            if (!(data.sopo === null)) {
              _context64.next = 24;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Kiểm tra lại phiếu nhập NCC chưa có số PO'
            });
            _context64.next = 271;
            break;
          case 24:
            if (!(check_log_chungtu.length === 0 && check_log_hopdong.length === 0)) {
              _context64.next = 270;
              break;
            }
            soPO = data.sopo; //GỌI HÀM getSoPO kiểm tra PO-PR
            //await getSoPO(soPO, UserId);
            //XÓA DATA CHỨNG TỪ TRƯỚC KHI INSRT LẠI
            _iterator51 = _createForOfIteratorHelper(data_chungtu);
            _context64.prev = 27;
            _iterator51.s();
          case 29:
            if ((_step51 = _iterator51.n()).done) {
              _context64.next = 41;
              break;
            }
            logItem = _step51.value;
            _context64.prev = 31;
            _context64.next = 34;
            return _index["default"].Check_Data_ChungTu.destroy({
              where: {
                machungtu: logItem.machungtu
              }
            });
          case 34:
            _context64.next = 39;
            break;
          case 36:
            _context64.prev = 36;
            _context64.t0 = _context64["catch"](31);
            console.error("Error deleting record with", _context64.t0);
          case 39:
            _context64.next = 29;
            break;
          case 41:
            _context64.next = 46;
            break;
          case 43:
            _context64.prev = 43;
            _context64.t1 = _context64["catch"](27);
            _iterator51.e(_context64.t1);
          case 46:
            _context64.prev = 46;
            _iterator51.f();
            return _context64.finish(46);
          case 49:
            _context64.next = 51;
            return _index["default"].Data_PO.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                sopo: data.sopo
              },
              raw: true
            });
          case 51:
            getpodata = _context64.sent;
            // Sử dụng reduce để nhóm theo mataisan và sopo, sau đó tính tổng soluongpo
            getpo = Object.values(getpodata.reduce(function (acc, item) {
              var key = "".concat(item.mataisan, "-").concat(item.sopo); // Tạo khóa dựa trên mataisan và sopo
              if (!acc[key]) {
                acc[key] = _objectSpread(_objectSpread({}, item), {}, {
                  soluongpo: 0
                }); // Khởi tạo đối tượng trong nhóm
              }
              acc[key].soluongpo += item.soluongpo; // Tính tổng soluongpo
              return acc;
            }, {})); // Vòng lặp tìm các phần tử trùng khớp giữa recordset và getpo
            getpo = getpo.map(function (poItem) {
              var recordItem = recordset.find(function (record) {
                return record.sopo === poItem.sopo && record.mataisan === poItem.mataisan;
              });
              if (recordItem) {
                poItem.soluongdanhap2 = poItem.soluongdanhap2 !== null ? poItem.soluongdanhap2 : 0;
                // Tính toán sự chênh lệch
                poItem.soluongnhap2 = recordItem.soluongnhap + poItem.soluongdanhap2 - poItem.soluongpo;
                poItem.dongianhap2 = recordItem.dongianhap - poItem.dongiapo;
                poItem.dongiavatnhap2 = recordItem.dongianhapvat - poItem.dongiapovat;
                poItem.soluongdanhap2 = recordItem.soluongnhap + poItem.soluongdanhap2;
                poItem.checkmataisanvoict2 = null;
              } else {
                // Điều kiện thứ nhất: Trùng sopo nhưng khác mataisan
                var recordWithSameSopo = recordset.find(function (record) {
                  return record.sopo === poItem.sopo && record.mataisan !== poItem.mataisan;
                });

                // Điều kiện thứ hai: mataisan không có trong recordset
                var recordWithDifferentMataisan = !recordset.find(function (record) {
                  return record.sopo === poItem.sopo && record.mataisan === poItem.mataisan;
                });

                // Nếu có record trùng sopo nhưng khác mataisan hoặc mataisan không có trong recordset
                if (recordWithSameSopo || recordWithDifferentMataisan) {
                  poItem.checkmataisanvoict2 = 1;
                }
              }
              return poItem;
            }); //.filter(poItem => poItem.soluongnhap !== null && poItem.dongianhap !== null && poItem.dongiavatnhap !== null);

            //console.log('getpo', getpo);
            _iterator52 = _createForOfIteratorHelper(getpo);
            _context64.prev = 55;
            _iterator52.s();
          case 57:
            if ((_step52 = _iterator52.n()).done) {
              _context64.next = 85;
              break;
            }
            _item31 = _step52.value;
            _context64.prev = 59;
            _context64.next = 62;
            return _index["default"].Data_PO.findOne({
              where: {
                id: _item31.id
              },
              raw: false
            });
          case 62:
            _data28 = _context64.sent;
            if (!_data28) {
              _context64.next = 78;
              break;
            }
            if (!(_item31.checkmataisanvoict2 === 1 && _item31.checkma !== null)) {
              _context64.next = 70;
              break;
            }
            // Chỉ cập nhật trường check
            _data28.checkmataisanvoict2 = _item31.checkmataisanvoict2;

            // Lưu thay đổi
            _context64.next = 68;
            return _data28.save();
          case 68:
            _context64.next = 78;
            break;
          case 70:
            // Cập nhật các thông tin theo từng mục
            _data28.soluongnhap2 = _item31.soluongnhap2;
            _data28.dongianhap2 = _item31.dongianhap2;
            _data28.dongiavatnhap2 = _item31.dongiavatnhap2;
            _data28.soluongdanhap2 = _item31.soluongdanhap2;
            _data28.checkmataisanvoict2 = null;
            _data28.dacheckvoict2 = 1;
            //data.ngaykiemtra = ngaytao

            // Lưu thay đổi
            _context64.next = 78;
            return _data28.save();
          case 78:
            _context64.next = 83;
            break;
          case 80:
            _context64.prev = 80;
            _context64.t2 = _context64["catch"](59);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt PO c\xF3 id: ".concat(_item31.id), _context64.t2);
          case 83:
            _context64.next = 57;
            break;
          case 85:
            _context64.next = 90;
            break;
          case 87:
            _context64.prev = 87;
            _context64.t3 = _context64["catch"](55);
            _iterator52.e(_context64.t3);
          case 90:
            _context64.prev = 90;
            _iterator52.f();
            return _context64.finish(90);
          case 93:
            // Dò tìm và thêm id_data_hd từ gethd vào recordset
            recordset.forEach(function (record) {
              var found = getpo.find(function (po) {
                return po.sopo === record.sopo && po.mataisan === record.mataisan;
              });
              if (found) {
                record.id_data_po = found.id;
                record.soluongnhap_check = found.soluongnhap2;
                record.dongianhap_check = found.dongianhap2;
                record.dongianhapvat_check = found.dongiavatnhap2;
              }
            });

            //console.log('check_log_chungtu', check_log_chungtu)
            if (!(check_log_chungtu.length > 0)) {
              _context64.next = 181;
              break;
            }
            _iterator53 = _createForOfIteratorHelper(check_log_chungtu);
            _context64.prev = 96;
            _iterator53.s();
          case 98:
            if ((_step53 = _iterator53.n()).done) {
              _context64.next = 110;
              break;
            }
            record = _step53.value;
            _context64.prev = 100;
            _context64.next = 103;
            return _index["default"].Check_Data_ChungTu_Log.destroy({
              where: {
                id: record.id
              }
            });
          case 103:
            _context64.next = 108;
            break;
          case 105:
            _context64.prev = 105;
            _context64.t4 = _context64["catch"](100);
            console.error("L\u1ED7i khi x\xF3a d\u1EEF li\u1EC7u v\u1EDBi ID ".concat(record.id, ":"), _context64.t4);
          case 108:
            _context64.next = 98;
            break;
          case 110:
            _context64.next = 115;
            break;
          case 112:
            _context64.prev = 112;
            _context64.t5 = _context64["catch"](96);
            _iterator53.e(_context64.t5);
          case 115:
            _context64.prev = 115;
            _iterator53.f();
            return _context64.finish(115);
          case 118:
            _context64.prev = 118;
            // insert lại thông tin mới    
            _iterator54 = _createForOfIteratorHelper(recordset);
            _context64.prev = 120;
            _iterator54.s();
          case 122:
            if ((_step54 = _iterator54.n()).done) {
              _context64.next = 128;
              break;
            }
            item = _step54.value;
            _context64.next = 126;
            return _index["default"].Check_Data_ChungTu_Log.create(_defineProperty(_defineProperty(_defineProperty({
              id_data_po: item.id_data_po,
              mataisan: item.mataisan,
              tentaisan: item.tentaisan,
              soluongnhap_check: item.soluongnhap_check,
              dongianhap_check: item.dongianhap_check,
              dongianhapvat_check: item.dongianhapvat_check,
              machungtu: item.machungtu,
              sopo: item.sopo,
              trangthai: item.trangthai,
              nhacungcap_id: item.nhacungcap_id,
              tennhacungcap: item.tennhacungcap,
              chungtu_id: item.chungtu_id,
              ngaychungtu: item.ngaychungtu,
              khonhap: item.khonhap,
              nguoinhap: item.nguoinhap,
              soluongnhap: item.soluongnhap,
              dongianhap: item.dongianhap,
              dongianhapvat: item.dongianhapvat,
              vatnhap: item.vatnhap,
              thanhtiennhap: item.soluongnhap * item.dongianhap,
              thanhtiennhapvat: item.soluongnhap * item.dongianhapvat
            }, "nguoinhap", item.nguoinhap), "nguoikiemtra_id", UserId), "ngaykiemtra", ngaytao));
          case 126:
            _context64.next = 122;
            break;
          case 128:
            _context64.next = 133;
            break;
          case 130:
            _context64.prev = 130;
            _context64.t6 = _context64["catch"](120);
            _iterator54.e(_context64.t6);
          case 133:
            _context64.prev = 133;
            _iterator54.f();
            return _context64.finish(133);
          case 136:
            _context64.next = 141;
            break;
          case 138:
            _context64.prev = 138;
            _context64.t7 = _context64["catch"](118);
            console.error("Lỗi khi insert vào DB:", _context64.t7);
          case 141:
            //SO SÁNH LẦN CHECK LOG CT 1 VÀ CHECK LOG CT 2 ĐỀ TÌM RA KHÁC NHAU
            _require7 = require('sequelize'), Op = _require7.Op;
            _context64.next = 144;
            return _index["default"].Check_Data_ChungTu_Log.findAll({
              attributes: ['id', 'id_data_po', 'mataisan', 'soluongnhap_check', 'dongianhap_check', 'dongianhapvat_check'],
              where: {
                machungtu: data.machungtu,
                id_data_po: _defineProperty({}, Op.ne, null)
              },
              raw: true
            });
          case 144:
            data_check_log_chungtu = _context64.sent;
            _context64.next = 147;
            return _index["default"].Data_ChungTu_Log.findAll({
              attributes: ['id_data_po', 'mataisan', 'soluongnhap_check', 'dongianhap_check', 'dongianhapvat_check'],
              where: {
                machungtu: data.machungtu,
                id_data_po: _defineProperty({}, Op.ne, null)
              },
              raw: true
            });
          case 147:
            data_log_chungtu = _context64.sent;
            //console.log('data_check_log_chungtu', data_check_log_chungtu)
            //console.log('data_log_chungtu', data_log_chungtu)
            result = data_check_log_chungtu.map(function (itemCheck) {
              var matchedItem = data_log_chungtu.find(function (itemLog) {
                return itemLog.id_data_po === itemCheck.id_data_po && itemLog.mataisan === itemCheck.mataisan;
              });
              if (matchedItem) {
                return {
                  id: itemCheck.id,
                  id_data_po: itemCheck.id_data_po,
                  mataisan: itemCheck.mataisan,
                  check_soluongnhap: itemCheck.soluongnhap_check === matchedItem.soluongnhap_check ? 1 : 0,
                  check_dongianhap: itemCheck.dongianhap_check === matchedItem.dongianhap_check ? 1 : 0,
                  check_dongianhapvat: itemCheck.dongianhapvat_check === matchedItem.dongianhapvat_check ? 1 : 0
                };
              }
              return null;
            }).filter(function (item) {
              return item !== null;
            }); //console.log('result', result);
            _iterator55 = _createForOfIteratorHelper(result);
            _context64.prev = 150;
            _iterator55.s();
          case 152:
            if ((_step55 = _iterator55.n()).done) {
              _context64.next = 171;
              break;
            }
            _item27 = _step55.value;
            _context64.prev = 154;
            _context64.next = 157;
            return _index["default"].Check_Data_ChungTu_Log.findOne({
              where: {
                id: _item27.id
              },
              raw: false
            });
          case 157:
            _data26 = _context64.sent;
            if (!_data26) {
              _context64.next = 164;
              break;
            }
            // Cập nhật các thông tin theo từng mục
            _data26.check_soluongnhap = _item27.check_soluongnhap;
            _data26.check_dongianhap = _item27.check_dongianhap;
            _data26.check_dongianhapvat = _item27.check_dongianhapvat;
            // Lưu thay đổi
            _context64.next = 164;
            return _data26.save();
          case 164:
            _context64.next = 169;
            break;
          case 166:
            _context64.prev = 166;
            _context64.t8 = _context64["catch"](154);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt PO c\xF3 id: ".concat(_item27.id), _context64.t8);
          case 169:
            _context64.next = 152;
            break;
          case 171:
            _context64.next = 176;
            break;
          case 173:
            _context64.prev = 173;
            _context64.t9 = _context64["catch"](150);
            _iterator55.e(_context64.t9);
          case 176:
            _context64.prev = 176;
            _iterator55.f();
            return _context64.finish(176);
          case 179:
            _context64.next = 242;
            break;
          case 181:
            _context64.prev = 181;
            _iterator56 = _createForOfIteratorHelper(recordset);
            _context64.prev = 183;
            _iterator56.s();
          case 185:
            if ((_step56 = _iterator56.n()).done) {
              _context64.next = 191;
              break;
            }
            _item28 = _step56.value;
            _context64.next = 189;
            return _index["default"].Check_Data_ChungTu_Log.create(_defineProperty(_defineProperty(_defineProperty({
              id_data_po: _item28.id_data_po,
              mataisan: _item28.mataisan,
              tentaisan: _item28.tentaisan,
              soluongnhap_check: _item28.soluongnhap_check,
              dongianhap_check: _item28.dongianhap_check,
              dongianhapvat_check: _item28.dongianhapvat_check,
              machungtu: _item28.machungtu,
              sopo: _item28.sopo,
              trangthai: _item28.trangthai,
              nhacungcap_id: _item28.nhacungcap_id,
              tennhacungcap: _item28.tennhacungcap,
              chungtu_id: _item28.chungtu_id,
              ngaychungtu: _item28.ngaychungtu,
              khonhap: _item28.khonhap,
              nguoinhap: _item28.nguoinhap,
              soluongnhap: _item28.soluongnhap,
              dongianhap: _item28.dongianhap,
              dongianhapvat: _item28.dongianhapvat,
              vatnhap: _item28.vatnhap,
              thanhtiennhap: _item28.soluongnhap * _item28.dongianhap,
              thanhtiennhapvat: _item28.soluongnhap * _item28.dongianhapvat
            }, "nguoinhap", _item28.nguoinhap), "nguoikiemtra_id", UserId), "ngaykiemtra", ngaytao));
          case 189:
            _context64.next = 185;
            break;
          case 191:
            _context64.next = 196;
            break;
          case 193:
            _context64.prev = 193;
            _context64.t10 = _context64["catch"](183);
            _iterator56.e(_context64.t10);
          case 196:
            _context64.prev = 196;
            _iterator56.f();
            return _context64.finish(196);
          case 199:
            _context64.next = 204;
            break;
          case 201:
            _context64.prev = 201;
            _context64.t11 = _context64["catch"](181);
            console.error("Lỗi khi insert vào DB:", _context64.t11);
          case 204:
            //SO SÁNH LẦN CHECK LOG CT 1 VÀ CHECK LOG CT 2 ĐỀ TÌM RA KHÁC NHAU
            _require8 = require('sequelize'), _Op2 = _require8.Op;
            _context64.next = 207;
            return _index["default"].Check_Data_ChungTu_Log.findAll({
              attributes: ['id', 'id_data_po', 'mataisan', 'soluongnhap_check', 'dongianhap_check', 'dongianhapvat_check'],
              where: {
                machungtu: data.machungtu,
                id_data_po: _defineProperty({}, _Op2.ne, null)
              },
              raw: true
            });
          case 207:
            _data_check_log_chungtu2 = _context64.sent;
            _context64.next = 210;
            return _index["default"].Data_ChungTu_Log.findAll({
              attributes: ['id_data_po', 'mataisan', 'soluongnhap_check', 'dongianhap_check', 'dongianhapvat_check'],
              where: {
                machungtu: data.machungtu,
                id_data_po: _defineProperty({}, _Op2.ne, null)
              },
              raw: true
            });
          case 210:
            _data_log_chungtu2 = _context64.sent;
            //console.log('data_check_log_chungtu', data_check_log_chungtu)
            //console.log('data_log_chungtu', data_log_chungtu)
            _result2 = _data_check_log_chungtu2.map(function (itemCheck) {
              var matchedItem = _data_log_chungtu2.find(function (itemLog) {
                return itemLog.id_data_po === itemCheck.id_data_po && itemLog.mataisan === itemCheck.mataisan;
              });
              if (matchedItem) {
                return {
                  id: itemCheck.id,
                  id_data_po: itemCheck.id_data_po,
                  mataisan: itemCheck.mataisan,
                  check_soluongnhap: itemCheck.soluongnhap_check === matchedItem.soluongnhap_check ? 1 : 0,
                  check_dongianhap: itemCheck.dongianhap_check === matchedItem.dongianhap_check ? 1 : 0,
                  check_dongianhapvat: itemCheck.dongianhapvat_check === matchedItem.dongianhapvat_check ? 1 : 0
                };
              }
              return null;
            }).filter(function (item) {
              return item !== null;
            }); //console.log('result', result);
            _iterator57 = _createForOfIteratorHelper(_result2);
            _context64.prev = 213;
            _iterator57.s();
          case 215:
            if ((_step57 = _iterator57.n()).done) {
              _context64.next = 234;
              break;
            }
            _item29 = _step57.value;
            _context64.prev = 217;
            _context64.next = 220;
            return _index["default"].Check_Data_ChungTu_Log.findOne({
              where: {
                id: _item29.id
              },
              raw: false
            });
          case 220:
            _data27 = _context64.sent;
            if (!_data27) {
              _context64.next = 227;
              break;
            }
            // Cập nhật các thông tin theo từng mục
            _data27.check_soluongnhap = _item29.check_soluongnhap;
            _data27.check_dongianhap = _item29.check_dongianhap;
            _data27.check_dongianhapvat = _item29.check_dongianhapvat;
            // Lưu thay đổi
            _context64.next = 227;
            return _data27.save();
          case 227:
            _context64.next = 232;
            break;
          case 229:
            _context64.prev = 229;
            _context64.t12 = _context64["catch"](217);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt PO c\xF3 id: ".concat(_item29.id), _context64.t12);
          case 232:
            _context64.next = 215;
            break;
          case 234:
            _context64.next = 239;
            break;
          case 236:
            _context64.prev = 236;
            _context64.t13 = _context64["catch"](213);
            _iterator57.e(_context64.t13);
          case 239:
            _context64.prev = 239;
            _iterator57.f();
            return _context64.finish(239);
          case 242:
            _context64.prev = 242;
            _iterator58 = _createForOfIteratorHelper(recordset);
            _context64.prev = 244;
            _iterator58.s();
          case 246:
            if ((_step58 = _iterator58.n()).done) {
              _context64.next = 252;
              break;
            }
            _item30 = _step58.value;
            _context64.next = 250;
            return _index["default"].Check_Data_ChungTu.create({
              chungtu_id: _item30.chungtu_id,
              machungtu: _item30.machungtu,
              ngaychungtu: _item30.ngaychungtu,
              mataisan: _item30.mataisan,
              tentaisan: _item30.tentaisan,
              donvitinh: _item30.donvitinh,
              soluongnhap: _item30.soluongnhap,
              dongianhap: _item30.dongianhap,
              thanhtiennhap: _item30.soluongnhap * _item30.dongianhap,
              vatnhap: _item30.vatnhap,
              dongianhapvat: _item30.dongianhapvat,
              thanhtiennhapvat: _item30.soluongnhap * _item30.dongianhapvat,
              nhacungcap_id: _item30.nhacungcap_id,
              tennhacungcap: _item30.tennhacungcap,
              khonhap: _item30.khonhap,
              nguoinhap: _item30.nguoinhap,
              sopo: _item30.sopo,
              trangthai: _item30.trangthai
            });
          case 250:
            _context64.next = 246;
            break;
          case 252:
            _context64.next = 257;
            break;
          case 254:
            _context64.prev = 254;
            _context64.t14 = _context64["catch"](244);
            _iterator58.e(_context64.t14);
          case 257:
            _context64.prev = 257;
            _iterator58.f();
            return _context64.finish(257);
          case 260:
            _context64.next = 265;
            break;
          case 262:
            _context64.prev = 262;
            _context64.t15 = _context64["catch"](242);
            console.error("Lỗi khi insert vào DB:", _context64.t15);
          case 265:
            _context64.next = 267;
            return getCheckChungTu(machungtu, UserId);
          case 267:
            resolve({
              errCode: 0,
              errMessage: 'Kiểm tra dữ liệu thành công'
            });
            _context64.next = 271;
            break;
          case 270:
            resolve({
              errCode: 1,
              errMessage: 'Chứng từ đã kiểm tra, vui lòng xóa log để kiểm tra lại'
            });
          case 271:
            _context64.next = 274;
            break;
          case 273:
            resolve({
              errCode: 1,
              errMessage: 'Chứng từ chưa nhập kho'
            });
          case 274:
            _context64.next = 277;
            break;
          case 276:
            resolve({
              errCode: 1,
              errMessage: 'Mã chứng từ không tồn tại'
            });
          case 277:
            _context64.next = 282;
            break;
          case 279:
            _context64.prev = 279;
            _context64.t16 = _context64["catch"](0);
            reject(_context64.t16);
          case 282:
          case "end":
            return _context64.stop();
        }
      }, _callee64, null, [[0, 279], [27, 43, 46, 49], [31, 36], [55, 87, 90, 93], [59, 80], [96, 112, 115, 118], [100, 105], [118, 138], [120, 130, 133, 136], [150, 173, 176, 179], [154, 166], [181, 201], [183, 193, 196, 199], [213, 236, 239, 242], [217, 229], [242, 262], [244, 254, 257, 260]]);
    }));
    return function (_x127, _x128) {
      return _ref65.apply(this, arguments);
    };
  }());
};
var updateMaTaiSan = function updateMaTaiSan(mataisan, nhacungcap_id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref66 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee65(resolve, reject) {
      var check_mataisan_dm;
      return _regeneratorRuntime().wrap(function _callee65$(_context65) {
        while (1) switch (_context65.prev = _context65.next) {
          case 0:
            _context65.prev = 0;
            _context65.next = 3;
            return _index["default"].Data_HD.findAll({
              where: {
                mataisan: mataisan,
                nhacungcap_id: nhacungcap_id,
                checkten: 1
              },
              raw: true
            });
          case 3:
            check_mataisan_dm = _context65.sent;
            resolve(check_mataisan_dm);
            //console.log('check_mataisan_dm', check_mataisan_dm)
            _context65.next = 10;
            break;
          case 7:
            _context65.prev = 7;
            _context65.t0 = _context65["catch"](0);
            reject(_context65.t0);
          case 10:
          case "end":
            return _context65.stop();
        }
      }, _callee65, null, [[0, 7]]);
    }));
    return function (_x129, _x130) {
      return _ref66.apply(this, arguments);
    };
  }());
};
var updateMaVaTenHD = function updateMaVaTenHD(mataisan, nhacungcap_id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref67 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee66(resolve, reject) {
      var check_mataisan_dm;
      return _regeneratorRuntime().wrap(function _callee66$(_context66) {
        while (1) switch (_context66.prev = _context66.next) {
          case 0:
            _context66.prev = 0;
            _context66.next = 3;
            return _index["default"].Data_HD.findAll({
              where: {
                mataisan: mataisan,
                nhacungcap_id: nhacungcap_id
              },
              raw: true
            });
          case 3:
            check_mataisan_dm = _context66.sent;
            resolve(check_mataisan_dm);
            //console.log('check_mataisan_dm', check_mataisan_dm)
            _context66.next = 10;
            break;
          case 7:
            _context66.prev = 7;
            _context66.t0 = _context66["catch"](0);
            reject(_context66.t0);
          case 10:
          case "end":
            return _context66.stop();
        }
      }, _callee66, null, [[0, 7]]);
    }));
    return function (_x131, _x132) {
      return _ref67.apply(this, arguments);
    };
  }());
};
var updateMaTaiSanPR = function updateMaTaiSanPR(mataisan, sopr) {
  return new Promise(/*#__PURE__*/function () {
    var _ref68 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee67(resolve, reject) {
      var _require9, Op, check_mataisan_dm;
      return _regeneratorRuntime().wrap(function _callee67$(_context67) {
        while (1) switch (_context67.prev = _context67.next) {
          case 0:
            _context67.prev = 0;
            _require9 = require("sequelize"), Op = _require9.Op;
            _context67.next = 4;
            return _index["default"].Data_PR.findAll({
              where: _defineProperty({
                mataisan: mataisan,
                sopr: sopr
              }, Op.or, [{
                checkten: 1
              }, {
                checkten: 0
              }]),
              raw: true
            });
          case 4:
            check_mataisan_dm = _context67.sent;
            //console.log('check_mataisan_dm', check_mataisan_dm)
            resolve(check_mataisan_dm);
            _context67.next = 11;
            break;
          case 8:
            _context67.prev = 8;
            _context67.t0 = _context67["catch"](0);
            reject(_context67.t0);
          case 11:
          case "end":
            return _context67.stop();
        }
      }, _callee67, null, [[0, 8]]);
    }));
    return function (_x133, _x134) {
      return _ref68.apply(this, arguments);
    };
  }());
};
var updateMaTaiSanPRNew = function updateMaTaiSanPRNew(mataisan, sopr) {
  return new Promise(/*#__PURE__*/function () {
    var _ref69 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee68(resolve, reject) {
      var _require10, Op, check_mataisan_dm;
      return _regeneratorRuntime().wrap(function _callee68$(_context68) {
        while (1) switch (_context68.prev = _context68.next) {
          case 0:
            _context68.prev = 0;
            _require10 = require("sequelize"), Op = _require10.Op;
            _context68.next = 4;
            return _index["default"].Data_PR.findAll({
              where: {
                mataisan: mataisan,
                sopr: sopr,
                checkten: 1
              },
              raw: true
            });
          case 4:
            check_mataisan_dm = _context68.sent;
            //console.log('check_mataisan_dm', check_mataisan_dm)
            resolve(check_mataisan_dm);
            _context68.next = 11;
            break;
          case 8:
            _context68.prev = 8;
            _context68.t0 = _context68["catch"](0);
            reject(_context68.t0);
          case 11:
          case "end":
            return _context68.stop();
        }
      }, _callee68, null, [[0, 8]]);
    }));
    return function (_x135, _x136) {
      return _ref69.apply(this, arguments);
    };
  }());
};
var updateMaVaTenPR = function updateMaVaTenPR(mataisan, sopr) {
  return new Promise(/*#__PURE__*/function () {
    var _ref70 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee69(resolve, reject) {
      var check_mataisan_dm;
      return _regeneratorRuntime().wrap(function _callee69$(_context69) {
        while (1) switch (_context69.prev = _context69.next) {
          case 0:
            _context69.prev = 0;
            _context69.next = 3;
            return _index["default"].Data_PR.findAll({
              where: {
                mataisan: mataisan,
                sopr: sopr
              },
              raw: true
            });
          case 3:
            check_mataisan_dm = _context69.sent;
            //console.log('check_mataisan_dm', check_mataisan_dm)
            resolve(check_mataisan_dm);
            _context69.next = 10;
            break;
          case 7:
            _context69.prev = 7;
            _context69.t0 = _context69["catch"](0);
            reject(_context69.t0);
          case 10:
          case "end":
            return _context69.stop();
        }
      }, _callee69, null, [[0, 7]]);
    }));
    return function (_x137, _x138) {
      return _ref70.apply(this, arguments);
    };
  }());
};
var updateMaTaiSanPO = function updateMaTaiSanPO(mataisan, sopo) {
  return new Promise(/*#__PURE__*/function () {
    var _ref71 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee70(resolve, reject) {
      var _require11, Op, check_mataisan_dm;
      return _regeneratorRuntime().wrap(function _callee70$(_context70) {
        while (1) switch (_context70.prev = _context70.next) {
          case 0:
            _context70.prev = 0;
            _require11 = require("sequelize"), Op = _require11.Op;
            _context70.next = 4;
            return _index["default"].Data_PO.findAll({
              where: _defineProperty({
                mataisan: mataisan,
                sopo: sopo
              }, Op.or, [{
                checkten: 1
              }, {
                checkten: 0
              }]),
              raw: true
            });
          case 4:
            check_mataisan_dm = _context70.sent;
            //console.log('check_mataisan_dm', check_mataisan_dm)
            resolve(check_mataisan_dm);
            _context70.next = 11;
            break;
          case 8:
            _context70.prev = 8;
            _context70.t0 = _context70["catch"](0);
            reject(_context70.t0);
          case 11:
          case "end":
            return _context70.stop();
        }
      }, _callee70, null, [[0, 8]]);
    }));
    return function (_x139, _x140) {
      return _ref71.apply(this, arguments);
    };
  }());
};
var updateMaTaiSanNewPO = function updateMaTaiSanNewPO(mataisan, sopo) {
  return new Promise(/*#__PURE__*/function () {
    var _ref72 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee71(resolve, reject) {
      var _require12, Op, check_mataisan_dm;
      return _regeneratorRuntime().wrap(function _callee71$(_context71) {
        while (1) switch (_context71.prev = _context71.next) {
          case 0:
            _context71.prev = 0;
            _require12 = require("sequelize"), Op = _require12.Op;
            _context71.next = 4;
            return _index["default"].Data_PO.findAll({
              where: {
                mataisan: mataisan,
                sopo: sopo,
                checkten: 1
              },
              raw: true
            });
          case 4:
            check_mataisan_dm = _context71.sent;
            //console.log('check_mataisan_dm', check_mataisan_dm)
            resolve(check_mataisan_dm);
            _context71.next = 11;
            break;
          case 8:
            _context71.prev = 8;
            _context71.t0 = _context71["catch"](0);
            reject(_context71.t0);
          case 11:
          case "end":
            return _context71.stop();
        }
      }, _callee71, null, [[0, 8]]);
    }));
    return function (_x141, _x142) {
      return _ref72.apply(this, arguments);
    };
  }());
};
var updateMaVaTenPO = function updateMaVaTenPO(mataisan, sopo) {
  return new Promise(/*#__PURE__*/function () {
    var _ref73 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee72(resolve, reject) {
      var check_mataisan_dm;
      return _regeneratorRuntime().wrap(function _callee72$(_context72) {
        while (1) switch (_context72.prev = _context72.next) {
          case 0:
            _context72.prev = 0;
            _context72.next = 3;
            return _index["default"].Data_PO.findAll({
              where: {
                mataisan: mataisan,
                sopo: sopo
                //checkten: 1,
              },
              raw: true
            });
          case 3:
            check_mataisan_dm = _context72.sent;
            //console.log('check_mataisan_dm', check_mataisan_dm)
            resolve(check_mataisan_dm);
            _context72.next = 10;
            break;
          case 7:
            _context72.prev = 7;
            _context72.t0 = _context72["catch"](0);
            reject(_context72.t0);
          case 10:
          case "end":
            return _context72.stop();
        }
      }, _callee72, null, [[0, 7]]);
    }));
    return function (_x143, _x144) {
      return _ref73.apply(this, arguments);
    };
  }());
};
var updateTenTaiSan = function updateTenTaiSan(tentaisan, nhacungcap_id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref74 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee73(resolve, reject) {
      var check_tentaisan_dm;
      return _regeneratorRuntime().wrap(function _callee73$(_context73) {
        while (1) switch (_context73.prev = _context73.next) {
          case 0:
            _context73.prev = 0;
            _context73.next = 3;
            return _index["default"].Data_HD.findAll({
              where: {
                tentaisan: tentaisan,
                nhacungcap_id: nhacungcap_id
              },
              raw: true
            });
          case 3:
            check_tentaisan_dm = _context73.sent;
            resolve(check_tentaisan_dm);
            //console.log('check_mataisan_dm', check_mataisan_dm)
            _context73.next = 10;
            break;
          case 7:
            _context73.prev = 7;
            _context73.t0 = _context73["catch"](0);
            reject(_context73.t0);
          case 10:
          case "end":
            return _context73.stop();
        }
      }, _callee73, null, [[0, 7]]);
    }));
    return function (_x145, _x146) {
      return _ref74.apply(this, arguments);
    };
  }());
};
var updateTenTaiSanPR = function updateTenTaiSanPR(tentaisan, sopr) {
  return new Promise(/*#__PURE__*/function () {
    var _ref75 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee74(resolve, reject) {
      var check_tentaisan_dm;
      return _regeneratorRuntime().wrap(function _callee74$(_context74) {
        while (1) switch (_context74.prev = _context74.next) {
          case 0:
            _context74.prev = 0;
            _context74.next = 3;
            return _index["default"].Data_PR.findAll({
              where: {
                tentaisan: tentaisan,
                sopr: sopr
              },
              raw: true
            });
          case 3:
            check_tentaisan_dm = _context74.sent;
            resolve(check_tentaisan_dm);
            //console.log('check_mataisan_dm', check_mataisan_dm)
            _context74.next = 10;
            break;
          case 7:
            _context74.prev = 7;
            _context74.t0 = _context74["catch"](0);
            reject(_context74.t0);
          case 10:
          case "end":
            return _context74.stop();
        }
      }, _callee74, null, [[0, 7]]);
    }));
    return function (_x147, _x148) {
      return _ref75.apply(this, arguments);
    };
  }());
};
var updateTenTaiSanPO = function updateTenTaiSanPO(tentaisan, sopo) {
  return new Promise(/*#__PURE__*/function () {
    var _ref76 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee75(resolve, reject) {
      var check_tentaisan_dm;
      return _regeneratorRuntime().wrap(function _callee75$(_context75) {
        while (1) switch (_context75.prev = _context75.next) {
          case 0:
            _context75.prev = 0;
            _context75.next = 3;
            return _index["default"].Data_PO.findAll({
              where: {
                tentaisan: tentaisan,
                sopo: sopo
              },
              raw: true
            });
          case 3:
            check_tentaisan_dm = _context75.sent;
            resolve(check_tentaisan_dm);
            //console.log('check_mataisan_dm', check_mataisan_dm)
            _context75.next = 10;
            break;
          case 7:
            _context75.prev = 7;
            _context75.t0 = _context75["catch"](0);
            reject(_context75.t0);
          case 10:
          case "end":
            return _context75.stop();
        }
      }, _callee75, null, [[0, 7]]);
    }));
    return function (_x149, _x150) {
      return _ref76.apply(this, arguments);
    };
  }());
};
var editMaTaiSanNew = function editMaTaiSanNew(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref77 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee76(resolve, reject) {
      var currentTime, checkedit, result_editma, request, mataisan, getdata, recordset, dataedit, _result_editma, updateCheckMataisan, updatedCheckMataisan, _iterator59, _step59, item, _data29, _checkedit, _result_editma2, _request3, _mataisan, _getdata7, _recordset, _dataedit, _result_editma3, _updateCheckMataisan, _updatedCheckMataisan, _iterator60, _step60, _item32, _data30, _checkedit2, _result_editma4, _request4, _mataisan2, _getdata8, _recordset2, _updateCheckMataisan2, _dataedit2, _result_editma5, _updatedCheckMataisan2, _iterator61, _step61, _item33, _data31;
      return _regeneratorRuntime().wrap(function _callee76$(_context76) {
        while (1) switch (_context76.prev = _context76.next) {
          case 0:
            _context76.prev = 0;
            currentTime = new Date();
            if (!(data.loai === 'PO')) {
              _context76.next = 74;
              break;
            }
            if (!(data.colma === 'MA')) {
              _context76.next = 72;
              break;
            }
            _context76.next = 6;
            return _index["default"].Data_PO.findOne({
              where: {
                id: data.rowId,
                dacheckvoict: 1
              },
              raw: true
            });
          case 6:
            checkedit = _context76.sent;
            if (!(checkedit === null)) {
              _context76.next = 71;
              break;
            }
            _context76.next = 10;
            return updateMaTaiSanNewPO(data.mataisanNew, data.sopo);
          case 10:
            result_editma = _context76.sent;
            if (!(result_editma.length === 1)) {
              _context76.next = 14;
              break;
            }
            _context76.next = 69;
            break;
          case 14:
            request = _index["default"].sqlhis2Connection.request();
            mataisan = data.mataisanNew;
            request.input('mataisan', mssql.NVarChar(50), mataisan);
            _context76.next = 19;
            return request.execute('[sp_QLPO_DANHMUC_VPP_MA]');
          case 19:
            getdata = _context76.sent;
            recordset = getdata.recordset; //KIỂM TRA NẾU TRONG DANH MỤC KHÔNG TỒN TẠI MÃ THÌ GỬI THÔNG BÁO
            if (!(recordset.length === 0)) {
              _context76.next = 25;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Mã tài sản không tồn tại trong danh mục tài sản.'
            });
            _context76.next = 69;
            break;
          case 25:
            _context76.next = 27;
            return _index["default"].Data_PO.findOne({
              where: {
                id: data.rowId
              },
              raw: false
            });
          case 27:
            dataedit = _context76.sent;
            if (!dataedit) {
              _context76.next = 32;
              break;
            }
            dataedit.mataisan = data.mataisanNew;
            // Lưu thay đổi
            _context76.next = 32;
            return dataedit.save();
          case 32:
            _context76.next = 34;
            return updateMaVaTenPO(data.mataisanNew, data.sopo);
          case 34:
            _result_editma = _context76.sent;
            //console.log('result_editma', result_editma)
            //console.log('recordset', data.mataisanNew, data.sopo)
            // Hàm dò tìm và cập nhật checkmataisan
            updateCheckMataisan = function updateCheckMataisan(recordset, result_editma) {
              // Dò tìm từng phần tử trong check_mataisan_dm
              result_editma.forEach(function (item) {
                // Tìm trong recordset xem có phần tử nào khớp với mataisan và tentaisan
                var foundByMa = recordset.find(function (record) {
                  return record.MaVPP === item.mataisan;
                });

                // Nếu tìm thấy khớp với MaVPP, cập nhật checkma = 1, ngược lại = 0
                item.checkma = foundByMa ? 1 : 0;
                // Cập nhật tentaisan nếu tìm thấy
                if (foundByMa) {
                  item.tentaisan = foundByMa.TenVPP; // Sử dụng đúng thuộc tính TenVPP
                }
              });
              return result_editma;
            }; // Gọi hàm updateCheckMataisan
            updatedCheckMataisan = updateCheckMataisan(recordset, _result_editma); //console.log('updatedCheckMataisan', updatedCheckMataisan)
            if (!(updatedCheckMataisan.length > 0)) {
              _context76.next = 68;
              break;
            }
            _iterator59 = _createForOfIteratorHelper(updatedCheckMataisan);
            _context76.prev = 39;
            _iterator59.s();
          case 41:
            if ((_step59 = _iterator59.n()).done) {
              _context76.next = 60;
              break;
            }
            item = _step59.value;
            _context76.prev = 43;
            _context76.next = 46;
            return _index["default"].Data_PO.findOne({
              where: {
                id: item.id
              },
              raw: false
            });
          case 46:
            _data29 = _context76.sent;
            if (!_data29) {
              _context76.next = 53;
              break;
            }
            _data29.checkma = item.checkma;
            _data29.tentaisan = item.tentaisan;
            _data29.checkten = 1;
            // Lưu thay đổi
            _context76.next = 53;
            return _data29.save();
          case 53:
            _context76.next = 58;
            break;
          case 55:
            _context76.prev = 55;
            _context76.t0 = _context76["catch"](43);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt PO c\xF3 id: ".concat(item.id), _context76.t0);
          case 58:
            _context76.next = 41;
            break;
          case 60:
            _context76.next = 65;
            break;
          case 62:
            _context76.prev = 62;
            _context76.t1 = _context76["catch"](39);
            _iterator59.e(_context76.t1);
          case 65:
            _context76.prev = 65;
            _iterator59.f();
            return _context76.finish(65);
          case 68:
            resolve({
              errCode: 0,
              errMessage: 'Cập nhập mã tài sản thành công'
            });
          case 69:
            _context76.next = 72;
            break;
          case 71:
            resolve({
              errCode: 1,
              errMessage: 'Đã phát sinh chứng từ kiểm tra, không được sửa'
            });
          case 72:
            _context76.next = 216;
            break;
          case 74:
            if (!(data.loai === 'PR')) {
              _context76.next = 146;
              break;
            }
            if (!(data.colma === 'MA')) {
              _context76.next = 144;
              break;
            }
            _context76.next = 78;
            return _index["default"].Data_PR.findOne({
              where: {
                id: data.rowId,
                dacheckvoict: 1
              },
              raw: true
            });
          case 78:
            _checkedit = _context76.sent;
            if (!(_checkedit === null)) {
              _context76.next = 143;
              break;
            }
            _context76.next = 82;
            return updateMaTaiSanPRNew(data.mataisanNew, data.sopr);
          case 82:
            _result_editma2 = _context76.sent;
            if (!(_result_editma2.length === 1)) {
              _context76.next = 86;
              break;
            }
            _context76.next = 141;
            break;
          case 86:
            _request3 = _index["default"].sqlhis2Connection.request();
            _mataisan = data.mataisanNew;
            _request3.input('mataisan', mssql.NVarChar(50), _mataisan);
            _context76.next = 91;
            return _request3.execute('[sp_QLPO_DANHMUC_VPP_MA]');
          case 91:
            _getdata7 = _context76.sent;
            _recordset = _getdata7.recordset; //KIỂM TRA NẾU TRONG DANH MỤC KHÔNG TỒN TẠI MÃ THÌ GỬI THÔNG BÁO
            if (!(_recordset.length === 0)) {
              _context76.next = 97;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Mã tài sản không tồn tại trong danh mục tài sản.'
            });
            _context76.next = 141;
            break;
          case 97:
            _context76.next = 99;
            return _index["default"].Data_PR.findOne({
              where: {
                id: data.rowId
              },
              raw: false
            });
          case 99:
            _dataedit = _context76.sent;
            if (!_dataedit) {
              _context76.next = 104;
              break;
            }
            _dataedit.mataisan = data.mataisanNew;
            // Lưu thay đổi
            _context76.next = 104;
            return _dataedit.save();
          case 104:
            _context76.next = 106;
            return updateMaVaTenPR(data.mataisanNew, data.sopr);
          case 106:
            _result_editma3 = _context76.sent;
            // Hàm dò tìm và cập nhật checkmataisan
            _updateCheckMataisan = function _updateCheckMataisan(recordset, result_editma) {
              // Dò tìm từng phần tử trong check_mataisan_dm
              result_editma.forEach(function (item) {
                // Tìm trong recordset xem có phần tử nào khớp với mataisan và tentaisan
                var foundByMa = recordset.find(function (record) {
                  return record.MaVPP === item.mataisan;
                });

                // Nếu tìm thấy khớp với MaVPP, cập nhật checkma = 1, ngược lại = 0
                item.checkma = foundByMa ? 1 : 0;
                // Cập nhật tentaisan nếu tìm thấy
                if (foundByMa) {
                  item.tentaisan = foundByMa.TenVPP; // Sử dụng đúng thuộc tính TenVPP
                }
              });
              return result_editma;
            }; // Gọi hàm updateCheckMataisan
            _updatedCheckMataisan = _updateCheckMataisan(_recordset, _result_editma3); //console.log('updatedCheckMataisan', updatedCheckMataisan)
            if (!(_updatedCheckMataisan.length > 0)) {
              _context76.next = 140;
              break;
            }
            _iterator60 = _createForOfIteratorHelper(_updatedCheckMataisan);
            _context76.prev = 111;
            _iterator60.s();
          case 113:
            if ((_step60 = _iterator60.n()).done) {
              _context76.next = 132;
              break;
            }
            _item32 = _step60.value;
            _context76.prev = 115;
            _context76.next = 118;
            return _index["default"].Data_PR.findOne({
              where: {
                id: _item32.id
              },
              raw: false
            });
          case 118:
            _data30 = _context76.sent;
            if (!_data30) {
              _context76.next = 125;
              break;
            }
            _data30.checkma = _item32.checkma;
            _data30.tentaisan = _item32.tentaisan;
            _data30.checkten = 1;
            // Lưu thay đổi
            _context76.next = 125;
            return _data30.save();
          case 125:
            _context76.next = 130;
            break;
          case 127:
            _context76.prev = 127;
            _context76.t2 = _context76["catch"](115);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt PO c\xF3 id: ".concat(_item32.id), _context76.t2);
          case 130:
            _context76.next = 113;
            break;
          case 132:
            _context76.next = 137;
            break;
          case 134:
            _context76.prev = 134;
            _context76.t3 = _context76["catch"](111);
            _iterator60.e(_context76.t3);
          case 137:
            _context76.prev = 137;
            _iterator60.f();
            return _context76.finish(137);
          case 140:
            resolve({
              errCode: 0,
              errMessage: 'Cập nhập mã tài sản thành công'
            });
          case 141:
            _context76.next = 144;
            break;
          case 143:
            resolve({
              errCode: 1,
              errMessage: 'Đã phát sinh chứng từ kiểm tra, không được sửa'
            });
          case 144:
            _context76.next = 216;
            break;
          case 146:
            if (!(data.loai === 'HD')) {
              _context76.next = 216;
              break;
            }
            if (!(data.colma === 'MA')) {
              _context76.next = 216;
              break;
            }
            _context76.next = 150;
            return _index["default"].Data_HD.findOne({
              where: {
                id: data.rowId,
                dacheckvoict: 1
              },
              raw: true
            });
          case 150:
            _checkedit2 = _context76.sent;
            if (!(_checkedit2 === null)) {
              _context76.next = 215;
              break;
            }
            _context76.next = 154;
            return updateMaTaiSan(data.mataisanNew, data.nhacungcap_id);
          case 154:
            _result_editma4 = _context76.sent;
            if (!(_result_editma4.length === 1)) {
              _context76.next = 158;
              break;
            }
            _context76.next = 213;
            break;
          case 158:
            _request4 = _index["default"].sqlhis2Connection.request();
            _mataisan2 = data.mataisanNew;
            _request4.input('mataisan', mssql.NVarChar(50), _mataisan2);
            _context76.next = 163;
            return _request4.execute('[sp_QLPO_DANHMUC_VPP_MA]');
          case 163:
            _getdata8 = _context76.sent;
            _recordset2 = _getdata8.recordset; // Hàm dò tìm và cập nhật checkmataisan
            _updateCheckMataisan2 = function _updateCheckMataisan2(recordset, result_editma) {
              // Dò tìm từng phần tử trong check_mataisan_dm
              result_editma.forEach(function (item) {
                // Tìm trong recordset xem có phần tử nào khớp với mataisan và tentaisan
                var foundByMa = recordset.find(function (record) {
                  return record.MaVPP === item.mataisan;
                });

                // Nếu tìm thấy khớp với MaVPP, cập nhật checkma = 1, ngược lại = 0
                item.checkma = foundByMa ? 1 : 0;
                // Cập nhật tentaisan nếu tìm thấy
                if (foundByMa) {
                  item.tentaisan = foundByMa.TenVPP; // Sử dụng đúng thuộc tính TenVPP
                }
              });
              return result_editma;
            }; //KIỂM TRA NẾU TRONG DANH MỤC KHÔNG TỒN TẠI MÃ THÌ GỬI THÔNG BÁO
            if (!(_recordset2.length === 0)) {
              _context76.next = 170;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Mã tài sản không tồn tại trong danh mục tài sản.'
            });
            _context76.next = 213;
            break;
          case 170:
            _context76.next = 172;
            return _index["default"].Data_HD.findOne({
              where: {
                id: data.rowId
              },
              raw: false
            });
          case 172:
            _dataedit2 = _context76.sent;
            if (!_dataedit2) {
              _context76.next = 177;
              break;
            }
            _dataedit2.mataisan = data.mataisanNew;
            // Lưu thay đổi
            _context76.next = 177;
            return _dataedit2.save();
          case 177:
            _context76.next = 179;
            return updateMaVaTenHD(data.mataisanNew, data.nhacungcap_id);
          case 179:
            _result_editma5 = _context76.sent;
            // Gọi hàm updateCheckMataisan
            _updatedCheckMataisan2 = _updateCheckMataisan2(_recordset2, _result_editma5); //console.log('updatedCheckMataisan', updatedCheckMataisan)
            if (!(_updatedCheckMataisan2.length > 0)) {
              _context76.next = 212;
              break;
            }
            _iterator61 = _createForOfIteratorHelper(_updatedCheckMataisan2);
            _context76.prev = 183;
            _iterator61.s();
          case 185:
            if ((_step61 = _iterator61.n()).done) {
              _context76.next = 204;
              break;
            }
            _item33 = _step61.value;
            _context76.prev = 187;
            _context76.next = 190;
            return _index["default"].Data_HD.findOne({
              where: {
                id: _item33.id
              },
              raw: false
            });
          case 190:
            _data31 = _context76.sent;
            if (!_data31) {
              _context76.next = 197;
              break;
            }
            _data31.checkma = _item33.checkma;
            _data31.tentaisan = _item33.tentaisan;
            _data31.checkten = 1;
            // Lưu thay đổi
            _context76.next = 197;
            return _data31.save();
          case 197:
            _context76.next = 202;
            break;
          case 199:
            _context76.prev = 199;
            _context76.t4 = _context76["catch"](187);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt PO c\xF3 id: ".concat(_item33.id), _context76.t4);
          case 202:
            _context76.next = 185;
            break;
          case 204:
            _context76.next = 209;
            break;
          case 206:
            _context76.prev = 206;
            _context76.t5 = _context76["catch"](183);
            _iterator61.e(_context76.t5);
          case 209:
            _context76.prev = 209;
            _iterator61.f();
            return _context76.finish(209);
          case 212:
            resolve({
              errCode: 0,
              errMessage: 'Cập nhập mã tài sản thành công'
            });
          case 213:
            _context76.next = 216;
            break;
          case 215:
            resolve({
              errCode: 1,
              errMessage: 'Tài sản đã phát sinh chứng từ kiểm tra, không được sửa'
            });
          case 216:
            _context76.next = 221;
            break;
          case 218:
            _context76.prev = 218;
            _context76.t6 = _context76["catch"](0);
            reject(_context76.t6);
          case 221:
          case "end":
            return _context76.stop();
        }
      }, _callee76, null, [[0, 218], [39, 62, 65, 68], [43, 55], [111, 134, 137, 140], [115, 127], [183, 206, 209, 212], [187, 199]]);
    }));
    return function (_x151, _x152) {
      return _ref77.apply(this, arguments);
    };
  }());
};
var editKhoaPhongHienTai = function editKhoaPhongHienTai(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref78 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee77(resolve, reject) {
      var dataArray, _iterator62, _step62, item, _data32, _dataArray, _iterator63, _step63, _item34, _data33, _dataArray2, _iterator64, _step64, _item35, _data34, _dataArray3, _iterator65, _step65, _item36, _data35;
      return _regeneratorRuntime().wrap(function _callee77$(_context77) {
        while (1) switch (_context77.prev = _context77.next) {
          case 0:
            _context77.prev = 0;
            if (!(data.col === 'KhoaPhongHienTai')) {
              _context77.next = 35;
              break;
            }
            dataArray = [data];
            if (!(dataArray.length > 0)) {
              _context77.next = 32;
              break;
            }
            //console.log('check data dataArray', dataArray)
            _iterator62 = _createForOfIteratorHelper(dataArray);
            _context77.prev = 5;
            _iterator62.s();
          case 7:
            if ((_step62 = _iterator62.n()).done) {
              _context77.next = 24;
              break;
            }
            item = _step62.value;
            _context77.prev = 9;
            _context77.next = 12;
            return _index["default"].Data_KiemKe.findOne({
              where: {
                id: item.rowId
              },
              raw: false
            });
          case 12:
            _data32 = _context77.sent;
            if (!_data32) {
              _context77.next = 17;
              break;
            }
            _data32.KhoaPhongHienTai = item.KhoaPhongHienTai;
            // Lưu thay đổi
            _context77.next = 17;
            return _data32.save();
          case 17:
            _context77.next = 22;
            break;
          case 19:
            _context77.prev = 19;
            _context77.t0 = _context77["catch"](9);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt Data ki\u1EC3m k\xEA c\xF3 id: ".concat(item.id), _context77.t0);
          case 22:
            _context77.next = 7;
            break;
          case 24:
            _context77.next = 29;
            break;
          case 26:
            _context77.prev = 26;
            _context77.t1 = _context77["catch"](5);
            _iterator62.e(_context77.t1);
          case 29:
            _context77.prev = 29;
            _iterator62.f();
            return _context77.finish(29);
          case 32:
            resolve({
              errCode: 0,
              errMessage: 'Cập nhập Khoa phòng hiện tại thành công'
            });
            _context77.next = 135;
            break;
          case 35:
            if (!(data.col === 'ViTriHienTai')) {
              _context77.next = 69;
              break;
            }
            _dataArray = [data];
            if (!(_dataArray.length > 0)) {
              _context77.next = 66;
              break;
            }
            //console.log('check data dataArray', dataArray)
            _iterator63 = _createForOfIteratorHelper(_dataArray);
            _context77.prev = 39;
            _iterator63.s();
          case 41:
            if ((_step63 = _iterator63.n()).done) {
              _context77.next = 58;
              break;
            }
            _item34 = _step63.value;
            _context77.prev = 43;
            _context77.next = 46;
            return _index["default"].Data_KiemKe.findOne({
              where: {
                id: _item34.rowId
              },
              raw: false
            });
          case 46:
            _data33 = _context77.sent;
            if (!_data33) {
              _context77.next = 51;
              break;
            }
            _data33.ViTriHienTai = _item34.ViTriHienTai;
            // Lưu thay đổi
            _context77.next = 51;
            return _data33.save();
          case 51:
            _context77.next = 56;
            break;
          case 53:
            _context77.prev = 53;
            _context77.t2 = _context77["catch"](43);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt Data ki\u1EC3m k\xEA c\xF3 id: ".concat(_item34.id), _context77.t2);
          case 56:
            _context77.next = 41;
            break;
          case 58:
            _context77.next = 63;
            break;
          case 60:
            _context77.prev = 60;
            _context77.t3 = _context77["catch"](39);
            _iterator63.e(_context77.t3);
          case 63:
            _context77.prev = 63;
            _iterator63.f();
            return _context77.finish(63);
          case 66:
            resolve({
              errCode: 0,
              errMessage: 'Cập nhập Vị trí hiện tại thành công'
            });
            _context77.next = 135;
            break;
          case 69:
            if (!(data.col === 'GhiChuHienTai')) {
              _context77.next = 103;
              break;
            }
            _dataArray2 = [data];
            if (!(_dataArray2.length > 0)) {
              _context77.next = 100;
              break;
            }
            //console.log('check data dataArray', dataArray)
            _iterator64 = _createForOfIteratorHelper(_dataArray2);
            _context77.prev = 73;
            _iterator64.s();
          case 75:
            if ((_step64 = _iterator64.n()).done) {
              _context77.next = 92;
              break;
            }
            _item35 = _step64.value;
            _context77.prev = 77;
            _context77.next = 80;
            return _index["default"].Data_KiemKe.findOne({
              where: {
                id: _item35.rowId
              },
              raw: false
            });
          case 80:
            _data34 = _context77.sent;
            if (!_data34) {
              _context77.next = 85;
              break;
            }
            _data34.GhiChuHienTai = _item35.GhiChuHienTai;
            // Lưu thay đổi
            _context77.next = 85;
            return _data34.save();
          case 85:
            _context77.next = 90;
            break;
          case 87:
            _context77.prev = 87;
            _context77.t4 = _context77["catch"](77);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt Data ki\u1EC3m k\xEA c\xF3 id: ".concat(_item35.id), _context77.t4);
          case 90:
            _context77.next = 75;
            break;
          case 92:
            _context77.next = 97;
            break;
          case 94:
            _context77.prev = 94;
            _context77.t5 = _context77["catch"](73);
            _iterator64.e(_context77.t5);
          case 97:
            _context77.prev = 97;
            _iterator64.f();
            return _context77.finish(97);
          case 100:
            resolve({
              errCode: 0,
              errMessage: 'Cập nhập Ghi chú hiện tại thành công'
            });
            _context77.next = 135;
            break;
          case 103:
            if (!(data.col === 'TinhTrang')) {
              _context77.next = 135;
              break;
            }
            _dataArray3 = [data];
            if (!(_dataArray3.length > 0)) {
              _context77.next = 134;
              break;
            }
            //console.log('check data dataArray', dataArray)
            _iterator65 = _createForOfIteratorHelper(_dataArray3);
            _context77.prev = 107;
            _iterator65.s();
          case 109:
            if ((_step65 = _iterator65.n()).done) {
              _context77.next = 126;
              break;
            }
            _item36 = _step65.value;
            _context77.prev = 111;
            _context77.next = 114;
            return _index["default"].Data_KiemKe.findOne({
              where: {
                id: _item36.rowId
              },
              raw: false
            });
          case 114:
            _data35 = _context77.sent;
            if (!_data35) {
              _context77.next = 119;
              break;
            }
            _data35.TinhTrang = _item36.TinhTrang;
            // Lưu thay đổi
            _context77.next = 119;
            return _data35.save();
          case 119:
            _context77.next = 124;
            break;
          case 121:
            _context77.prev = 121;
            _context77.t6 = _context77["catch"](111);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt Data ki\u1EC3m k\xEA c\xF3 id: ".concat(_item36.id), _context77.t6);
          case 124:
            _context77.next = 109;
            break;
          case 126:
            _context77.next = 131;
            break;
          case 128:
            _context77.prev = 128;
            _context77.t7 = _context77["catch"](107);
            _iterator65.e(_context77.t7);
          case 131:
            _context77.prev = 131;
            _iterator65.f();
            return _context77.finish(131);
          case 134:
            resolve({
              errCode: 0,
              errMessage: 'Cập nhập Tình trạng thành công'
            });
          case 135:
            _context77.next = 140;
            break;
          case 137:
            _context77.prev = 137;
            _context77.t8 = _context77["catch"](0);
            reject(_context77.t8);
          case 140:
          case "end":
            return _context77.stop();
        }
      }, _callee77, null, [[0, 137], [5, 26, 29, 32], [9, 19], [39, 60, 63, 66], [43, 53], [73, 94, 97, 100], [77, 87], [107, 128, 131, 134], [111, 121]]);
    }));
    return function (_x153, _x154) {
      return _ref78.apply(this, arguments);
    };
  }());
};
var editMaTaiSan = function editMaTaiSan(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref79 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee78(resolve, reject) {
      var currentTime, checkedit, result_editma, request, mataisan, getdata, recordset, dataedit, _result_editma6, updateCheckMataisan, updatedCheckMataisan, _iterator66, _step66, item, _data36, _checkedit3, result_editten, _request5, tentaisan, _getdata9, _recordset3, _dataedit3, _result_editten, updateCheckTentaisan, updatedCheckTentaisan, _iterator67, _step67, _item37, _data37, _checkedit4, _dataedit4, _checkedit5, _dataedit5, _checkedit6, _dataedit6, _checkedit7, _result_editma7, _request6, _mataisan3, _getdata10, _recordset4, _dataedit7, _result_editma8, _updateCheckMataisan3, _updatedCheckMataisan3, _iterator68, _step68, _item38, _data38, _checkedit8, _result_editten2, _request7, _tentaisan, _getdata11, _recordset5, _dataedit8, _result_editten3, _updateCheckTentaisan, _updatedCheckTentaisan, _iterator69, _step69, _item39, _data39, _checkedit9, _result_editma9, _request8, _mataisan4, _getdata12, _recordset6, _updateCheckMataisan4, _dataedit9, _result_editma10, _updatedCheckMataisan4, _iterator70, _step70, _item40, _data40, _checkedit10, _result_editten4, _request9, _tentaisan2, _getdata13, _recordset7, _dataedit10, _result_editten5, _updateCheckTentaisan2, _updatedCheckTentaisan2, _iterator71, _step71, _item41, _data41, _checkedit11, _request10, nhacungcap_id, _getdata14, _recordset8, datancc, _dataedit11;
      return _regeneratorRuntime().wrap(function _callee78$(_context78) {
        while (1) switch (_context78.prev = _context78.next) {
          case 0:
            _context78.prev = 0;
            //console.log('editMaTaiSan', data)
            currentTime = new Date();
            if (!(data.loai === 'PO')) {
              _context78.next = 206;
              break;
            }
            if (!(data.colma === 'MA')) {
              _context78.next = 75;
              break;
            }
            _context78.next = 6;
            return _index["default"].Data_PO.findOne({
              where: {
                id: data.rowId,
                dacheckvoict: 1
              },
              raw: true
            });
          case 6:
            checkedit = _context78.sent;
            if (!(checkedit === null)) {
              _context78.next = 72;
              break;
            }
            _context78.next = 10;
            return updateMaTaiSanPO(data.mataisanNew, data.sopo);
          case 10:
            result_editma = _context78.sent;
            if (!(result_editma.length === 1)) {
              _context78.next = 15;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Một PO không thể có hơn 2 mã tài sản giống nhau.'
            });
            _context78.next = 70;
            break;
          case 15:
            request = _index["default"].sqlhis2Connection.request();
            mataisan = data.mataisanNew;
            request.input('mataisan', mssql.NVarChar(50), mataisan);
            _context78.next = 20;
            return request.execute('[sp_QLPO_DANHMUC_VPP_MA]');
          case 20:
            getdata = _context78.sent;
            recordset = getdata.recordset; //KIỂM TRA NẾU TRONG DANH MỤC KHÔNG TỒN TẠI MÃ THÌ GỬI THÔNG BÁO
            if (!(recordset.length === 0)) {
              _context78.next = 26;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Mã tài sản không tồn tại trong danh mục tài sản.'
            });
            _context78.next = 70;
            break;
          case 26:
            _context78.next = 28;
            return _index["default"].Data_PO.findOne({
              where: {
                id: data.rowId
              },
              raw: false
            });
          case 28:
            dataedit = _context78.sent;
            if (!dataedit) {
              _context78.next = 33;
              break;
            }
            dataedit.mataisan = data.mataisanNew;
            // Lưu thay đổi
            _context78.next = 33;
            return dataedit.save();
          case 33:
            _context78.next = 35;
            return updateMaTaiSanPO(data.mataisanNew, data.sopo);
          case 35:
            _result_editma6 = _context78.sent;
            //console.log('result_editma', result_editma)
            //console.log('recordset', recordset)
            // Hàm dò tìm và cập nhật checkmataisan
            updateCheckMataisan = function updateCheckMataisan(recordset, result_editma) {
              // Dò tìm từng phần tử trong check_mataisan_dm
              result_editma.forEach(function (item) {
                // Tìm trong recordset xem có phần tử nào khớp với mataisan và tentaisan
                var foundByMa = recordset.find(function (record) {
                  return record.MaVPP === item.mataisan;
                });

                // Nếu tìm thấy khớp với MaVPP, cập nhật checkma = 1, ngược lại = 0
                item.checkma = foundByMa ? 1 : 0;
                // Cập nhật tentaisan nếu tìm thấy
                if (foundByMa) {
                  item.tentaisan = foundByMa.TenVPP; // Sử dụng đúng thuộc tính TenVPP
                }
              });
              return result_editma;
            }; // Gọi hàm updateCheckMataisan
            updatedCheckMataisan = updateCheckMataisan(recordset, _result_editma6); //console.log('updatedCheckMataisan', updatedCheckMataisan)
            if (!(updatedCheckMataisan.length > 0)) {
              _context78.next = 69;
              break;
            }
            _iterator66 = _createForOfIteratorHelper(updatedCheckMataisan);
            _context78.prev = 40;
            _iterator66.s();
          case 42:
            if ((_step66 = _iterator66.n()).done) {
              _context78.next = 61;
              break;
            }
            item = _step66.value;
            _context78.prev = 44;
            _context78.next = 47;
            return _index["default"].Data_PO.findOne({
              where: {
                id: item.id
              },
              raw: false
            });
          case 47:
            _data36 = _context78.sent;
            if (!_data36) {
              _context78.next = 54;
              break;
            }
            _data36.checkma = item.checkma;
            _data36.tentaisan = item.tentaisan;
            _data36.checkten = 1;
            // Lưu thay đổi
            _context78.next = 54;
            return _data36.save();
          case 54:
            _context78.next = 59;
            break;
          case 56:
            _context78.prev = 56;
            _context78.t0 = _context78["catch"](44);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt PO c\xF3 id: ".concat(item.id), _context78.t0);
          case 59:
            _context78.next = 42;
            break;
          case 61:
            _context78.next = 66;
            break;
          case 63:
            _context78.prev = 63;
            _context78.t1 = _context78["catch"](40);
            _iterator66.e(_context78.t1);
          case 66:
            _context78.prev = 66;
            _iterator66.f();
            return _context78.finish(66);
          case 69:
            resolve({
              errCode: 0,
              errMessage: 'Cập nhập mã tài sản thành công'
            });
          case 70:
            _context78.next = 73;
            break;
          case 72:
            resolve({
              errCode: 1,
              errMessage: 'Đã phát sinh chứng từ kiểm tra, không được sửa'
            });
          case 73:
            _context78.next = 204;
            break;
          case 75:
            if (!(data.colten === 'TEN')) {
              _context78.next = 145;
              break;
            }
            _context78.next = 78;
            return _index["default"].Data_PO.findOne({
              where: {
                id: data.rowId,
                dacheckvoict: 1
              },
              raw: true
            });
          case 78:
            _checkedit3 = _context78.sent;
            if (!(_checkedit3 === null)) {
              _context78.next = 142;
              break;
            }
            _context78.next = 82;
            return updateTenTaiSanPO(data.tentaisanNew, data.sopo);
          case 82:
            result_editten = _context78.sent;
            if (!(result_editten.length === 1)) {
              _context78.next = 87;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Một PO không thể có hơn 2 tên tài sản giống nhau.'
            });
            _context78.next = 140;
            break;
          case 87:
            _request5 = _index["default"].sqlhis2Connection.request();
            tentaisan = data.tentaisanNew;
            _request5.input('tentaisan', mssql.NVarChar(500), tentaisan);
            _context78.next = 92;
            return _request5.execute('[sp_QLPO_DANHMUC_VPP_TEN]');
          case 92:
            _getdata9 = _context78.sent;
            _recordset3 = _getdata9.recordset; //console.log('recordset', recordset)
            if (!(_recordset3.length === 0)) {
              _context78.next = 98;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Tên tài sản không tồn tại trong danh mục tài sản.'
            });
            _context78.next = 140;
            break;
          case 98:
            _context78.next = 100;
            return _index["default"].Data_PO.findOne({
              where: {
                id: data.rowId
              },
              raw: false
            });
          case 100:
            _dataedit3 = _context78.sent;
            if (!_dataedit3) {
              _context78.next = 105;
              break;
            }
            _dataedit3.tentaisan = data.tentaisanNew;
            // Lưu thay đổi
            _context78.next = 105;
            return _dataedit3.save();
          case 105:
            _context78.next = 107;
            return updateTenTaiSanPO(data.tentaisanNew, data.sopo);
          case 107:
            _result_editten = _context78.sent;
            // Hàm dò tìm và cập nhật checkmataisan
            updateCheckTentaisan = function updateCheckTentaisan(recordset, result_editten) {
              // Dò tìm từng phần tử trong check_mataisan_dm
              result_editten.forEach(function (item) {
                // Tìm trong recordset xem có phần tử nào khớp với mataisan và tentaisan
                var foundByTen = recordset.find(function (record) {
                  return record.TenVPP === item.tentaisan;
                });
                // Nếu tìm thấy khớp với MaVPP, cập nhật checkma = 1, ngược lại = 0
                item.checkten = foundByTen ? 1 : 0;
              });
              return result_editten;
            }; // Gọi hàm updateCheckMataisan
            updatedCheckTentaisan = updateCheckTentaisan(_recordset3, _result_editten);
            if (!(updatedCheckTentaisan.length > 0)) {
              _context78.next = 139;
              break;
            }
            _iterator67 = _createForOfIteratorHelper(updatedCheckTentaisan);
            _context78.prev = 112;
            _iterator67.s();
          case 114:
            if ((_step67 = _iterator67.n()).done) {
              _context78.next = 131;
              break;
            }
            _item37 = _step67.value;
            _context78.prev = 116;
            _context78.next = 119;
            return _index["default"].Data_PO.findOne({
              where: {
                id: _item37.id
              },
              raw: false
            });
          case 119:
            _data37 = _context78.sent;
            if (!_data37) {
              _context78.next = 124;
              break;
            }
            _data37.checkten = _item37.checkten;
            // Lưu thay đổi
            _context78.next = 124;
            return _data37.save();
          case 124:
            _context78.next = 129;
            break;
          case 126:
            _context78.prev = 126;
            _context78.t2 = _context78["catch"](116);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt PO c\xF3 id: ".concat(_item37.id), _context78.t2);
          case 129:
            _context78.next = 114;
            break;
          case 131:
            _context78.next = 136;
            break;
          case 133:
            _context78.prev = 133;
            _context78.t3 = _context78["catch"](112);
            _iterator67.e(_context78.t3);
          case 136:
            _context78.prev = 136;
            _iterator67.f();
            return _context78.finish(136);
          case 139:
            resolve({
              errCode: 0,
              errMessage: 'Cập nhập tên tài sản thành công'
            });
          case 140:
            _context78.next = 143;
            break;
          case 142:
            resolve({
              errCode: 1,
              errMessage: 'Đã phát sinh chứng từ kiểm tra, không được sửa'
            });
          case 143:
            _context78.next = 204;
            break;
          case 145:
            if (!(data.colsl === 'SL')) {
              _context78.next = 165;
              break;
            }
            _context78.next = 148;
            return _index["default"].Data_PO.findOne({
              where: {
                id: data.rowId,
                dacheckvoict: 1
              },
              raw: true
            });
          case 148:
            _checkedit4 = _context78.sent;
            if (!(_checkedit4 === null)) {
              _context78.next = 162;
              break;
            }
            _context78.next = 152;
            return _index["default"].Data_PO.findOne({
              where: {
                id: data.rowId
              },
              raw: false
            });
          case 152:
            _dataedit4 = _context78.sent;
            if (!_dataedit4) {
              _context78.next = 159;
              break;
            }
            _dataedit4.soluongpo = data.soluongpo;
            _dataedit4.thanhtien = _dataedit4.dongiapo * data.soluongpo;
            _dataedit4.thanhtienvat = _dataedit4.dongiapovat * data.soluongpo;
            // Lưu thay đổi
            _context78.next = 159;
            return _dataedit4.save();
          case 159:
            resolve({
              errCode: 0,
              errMessage: 'Cập nhập số lượng thành công'
            });
            _context78.next = 163;
            break;
          case 162:
            resolve({
              errCode: 1,
              errMessage: 'Đã phát sinh chứng từ kiểm tra, không được sửa'
            });
          case 163:
            _context78.next = 204;
            break;
          case 165:
            if (!(data.coldg === 'DG')) {
              _context78.next = 186;
              break;
            }
            _context78.next = 168;
            return _index["default"].Data_PO.findOne({
              where: {
                id: data.rowId,
                dacheckvoict: 1
              },
              raw: true
            });
          case 168:
            _checkedit5 = _context78.sent;
            if (!(_checkedit5 === null)) {
              _context78.next = 183;
              break;
            }
            _context78.next = 172;
            return _index["default"].Data_PO.findOne({
              where: {
                id: data.rowId
              },
              raw: false
            });
          case 172:
            _dataedit5 = _context78.sent;
            if (!_dataedit5) {
              _context78.next = 180;
              break;
            }
            _dataedit5.dongiapo = data.dongiapo;
            _dataedit5.dongiapovat = data.dongiapo * (_dataedit5.vat / 100) + data.dongiapo;
            _dataedit5.thanhtien = _dataedit5.soluongpo * data.dongiapo;
            _dataedit5.thanhtienvat = data.dongiapo * (_dataedit5.vat / 100) + data.dongiapo * _dataedit5.soluongpo;
            // Lưu thay đổi
            _context78.next = 180;
            return _dataedit5.save();
          case 180:
            resolve({
              errCode: 0,
              errMessage: 'Cập nhập đơn giá thành công'
            });
            _context78.next = 184;
            break;
          case 183:
            resolve({
              errCode: 1,
              errMessage: 'Đã phát sinh chứng từ kiểm tra, không được sửa'
            });
          case 184:
            _context78.next = 204;
            break;
          case 186:
            if (!(data.colvat === 'VAT')) {
              _context78.next = 204;
              break;
            }
            _context78.next = 189;
            return _index["default"].Data_PO.findOne({
              where: {
                id: data.rowId,
                dacheckvoict: 1
              },
              raw: true
            });
          case 189:
            _checkedit6 = _context78.sent;
            if (!(_checkedit6 === null)) {
              _context78.next = 203;
              break;
            }
            _context78.next = 193;
            return _index["default"].Data_PO.findOne({
              where: {
                id: data.rowId
              },
              raw: false
            });
          case 193:
            _dataedit6 = _context78.sent;
            if (!_dataedit6) {
              _context78.next = 200;
              break;
            }
            _dataedit6.vat = data.vat;
            _dataedit6.dongiapovat = data.vat / 100 * _dataedit6.dongiapo + _dataedit6.dongiapo;
            _dataedit6.thanhtienvat = (data.vat / 100 * _dataedit6.dongiapo + _dataedit6.dongiapo) * _dataedit6.soluongpo;
            // Lưu thay đổi
            _context78.next = 200;
            return _dataedit6.save();
          case 200:
            resolve({
              errCode: 0,
              errMessage: 'Cập nhập VAT thành công'
            });
            _context78.next = 204;
            break;
          case 203:
            resolve({
              errCode: 1,
              errMessage: 'Đã phát sinh chứng từ kiểm tra, không được sửa'
            });
          case 204:
            _context78.next = 522;
            break;
          case 206:
            if (!(data.loai === 'PR')) {
              _context78.next = 349;
              break;
            }
            if (!(data.colma === 'MA')) {
              _context78.next = 279;
              break;
            }
            _context78.next = 210;
            return _index["default"].Data_PR.findOne({
              where: {
                id: data.rowId,
                dacheckvoict: 1
              },
              raw: true
            });
          case 210:
            _checkedit7 = _context78.sent;
            if (!(_checkedit7 === null)) {
              _context78.next = 276;
              break;
            }
            _context78.next = 214;
            return updateMaTaiSanPR(data.mataisanNew, data.sopr);
          case 214:
            _result_editma7 = _context78.sent;
            if (!(_result_editma7.length === 1)) {
              _context78.next = 219;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Một PR không thể có hơn 2 mã tài sản giống nhau.'
            });
            _context78.next = 274;
            break;
          case 219:
            _request6 = _index["default"].sqlhis2Connection.request();
            _mataisan3 = data.mataisanNew;
            _request6.input('mataisan', mssql.NVarChar(50), _mataisan3);
            _context78.next = 224;
            return _request6.execute('[sp_QLPO_DANHMUC_VPP_MA]');
          case 224:
            _getdata10 = _context78.sent;
            _recordset4 = _getdata10.recordset; //KIỂM TRA NẾU TRONG DANH MỤC KHÔNG TỒN TẠI MÃ THÌ GỬI THÔNG BÁO
            if (!(_recordset4.length === 0)) {
              _context78.next = 230;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Mã tài sản không tồn tại trong danh mục tài sản.'
            });
            _context78.next = 274;
            break;
          case 230:
            _context78.next = 232;
            return _index["default"].Data_PR.findOne({
              where: {
                id: data.rowId
              },
              raw: false
            });
          case 232:
            _dataedit7 = _context78.sent;
            if (!_dataedit7) {
              _context78.next = 237;
              break;
            }
            _dataedit7.mataisan = data.mataisanNew;
            // Lưu thay đổi
            _context78.next = 237;
            return _dataedit7.save();
          case 237:
            _context78.next = 239;
            return updateMaTaiSanPR(data.mataisanNew, data.sopr);
          case 239:
            _result_editma8 = _context78.sent;
            // Hàm dò tìm và cập nhật checkmataisan
            _updateCheckMataisan3 = function _updateCheckMataisan3(recordset, result_editma) {
              // Dò tìm từng phần tử trong check_mataisan_dm
              result_editma.forEach(function (item) {
                // Tìm trong recordset xem có phần tử nào khớp với mataisan và tentaisan
                var foundByMa = recordset.find(function (record) {
                  return record.MaVPP === item.mataisan;
                });

                // Nếu tìm thấy khớp với MaVPP, cập nhật checkma = 1, ngược lại = 0
                item.checkma = foundByMa ? 1 : 0;
                // Cập nhật tentaisan nếu tìm thấy
                if (foundByMa) {
                  item.tentaisan = foundByMa.TenVPP; // Sử dụng đúng thuộc tính TenVPP
                }
              });
              return result_editma;
            }; // Gọi hàm updateCheckMataisan
            _updatedCheckMataisan3 = _updateCheckMataisan3(_recordset4, _result_editma8);
            if (!(_updatedCheckMataisan3.length > 0)) {
              _context78.next = 273;
              break;
            }
            _iterator68 = _createForOfIteratorHelper(_updatedCheckMataisan3);
            _context78.prev = 244;
            _iterator68.s();
          case 246:
            if ((_step68 = _iterator68.n()).done) {
              _context78.next = 265;
              break;
            }
            _item38 = _step68.value;
            _context78.prev = 248;
            _context78.next = 251;
            return _index["default"].Data_PR.findOne({
              where: {
                id: _item38.id
              },
              raw: false
            });
          case 251:
            _data38 = _context78.sent;
            if (!_data38) {
              _context78.next = 258;
              break;
            }
            _data38.checkma = _item38.checkma;
            _data38.tentaisan = _item38.tentaisan;
            _data38.checkten = 1;
            // Lưu thay đổi
            _context78.next = 258;
            return _data38.save();
          case 258:
            _context78.next = 263;
            break;
          case 260:
            _context78.prev = 260;
            _context78.t4 = _context78["catch"](248);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt PO c\xF3 id: ".concat(_item38.id), _context78.t4);
          case 263:
            _context78.next = 246;
            break;
          case 265:
            _context78.next = 270;
            break;
          case 267:
            _context78.prev = 267;
            _context78.t5 = _context78["catch"](244);
            _iterator68.e(_context78.t5);
          case 270:
            _context78.prev = 270;
            _iterator68.f();
            return _context78.finish(270);
          case 273:
            resolve({
              errCode: 0,
              errMessage: 'Cập nhập mã tài sản thành công'
            });
          case 274:
            _context78.next = 277;
            break;
          case 276:
            resolve({
              errCode: 1,
              errMessage: 'Đã phát sinh chứng từ kiểm tra, không được sửa'
            });
          case 277:
            _context78.next = 347;
            break;
          case 279:
            if (!(data.colten === 'TEN')) {
              _context78.next = 347;
              break;
            }
            _context78.next = 282;
            return _index["default"].Data_PR.findOne({
              where: {
                id: data.rowId,
                dacheckvoict: 1
              },
              raw: true
            });
          case 282:
            _checkedit8 = _context78.sent;
            if (!(_checkedit8 === null)) {
              _context78.next = 346;
              break;
            }
            _context78.next = 286;
            return updateTenTaiSanPR(data.tentaisanNew, data.sopr);
          case 286:
            _result_editten2 = _context78.sent;
            if (!(_result_editten2.length === 1)) {
              _context78.next = 291;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Một PR không thể có hơn 2 tên tài sản giống nhau.'
            });
            _context78.next = 344;
            break;
          case 291:
            _request7 = _index["default"].sqlhis2Connection.request();
            _tentaisan = data.tentaisanNew;
            _request7.input('tentaisan', mssql.NVarChar(50), _tentaisan);
            _context78.next = 296;
            return _request7.execute('[sp_QLPO_DANHMUC_VPP_TEN]');
          case 296:
            _getdata11 = _context78.sent;
            _recordset5 = _getdata11.recordset;
            if (!(_recordset5.length === 0)) {
              _context78.next = 302;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Tên tài sản không tồn tại trong danh mục tài sản.'
            });
            _context78.next = 344;
            break;
          case 302:
            _context78.next = 304;
            return _index["default"].Data_PR.findOne({
              where: {
                id: data.rowId
              },
              raw: false
            });
          case 304:
            _dataedit8 = _context78.sent;
            if (!_dataedit8) {
              _context78.next = 309;
              break;
            }
            _dataedit8.tentaisan = data.tentaisanNew;
            // Lưu thay đổi
            _context78.next = 309;
            return _dataedit8.save();
          case 309:
            _context78.next = 311;
            return updateTenTaiSanPR(data.tentaisanNew, data.sopr);
          case 311:
            _result_editten3 = _context78.sent;
            // Hàm dò tìm và cập nhật checkmataisan
            _updateCheckTentaisan = function _updateCheckTentaisan(recordset, result_editten) {
              // Dò tìm từng phần tử trong check_mataisan_dm
              result_editten.forEach(function (item) {
                // Tìm trong recordset xem có phần tử nào khớp với mataisan và tentaisan
                var foundByTen = recordset.find(function (record) {
                  return record.TenVPP === item.tentaisan;
                });
                // Nếu tìm thấy khớp với MaVPP, cập nhật checkma = 1, ngược lại = 0
                item.checkten = foundByTen ? 1 : 0;
              });
              return result_editten;
            }; // Gọi hàm updateCheckMataisan
            _updatedCheckTentaisan = _updateCheckTentaisan(_recordset5, _result_editten3);
            if (!(_updatedCheckTentaisan.length > 0)) {
              _context78.next = 343;
              break;
            }
            _iterator69 = _createForOfIteratorHelper(_updatedCheckTentaisan);
            _context78.prev = 316;
            _iterator69.s();
          case 318:
            if ((_step69 = _iterator69.n()).done) {
              _context78.next = 335;
              break;
            }
            _item39 = _step69.value;
            _context78.prev = 320;
            _context78.next = 323;
            return _index["default"].Data_PR.findOne({
              where: {
                id: _item39.id
              },
              raw: false
            });
          case 323:
            _data39 = _context78.sent;
            if (!_data39) {
              _context78.next = 328;
              break;
            }
            _data39.checkten = _item39.checkten;
            // Lưu thay đổi
            _context78.next = 328;
            return _data39.save();
          case 328:
            _context78.next = 333;
            break;
          case 330:
            _context78.prev = 330;
            _context78.t6 = _context78["catch"](320);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt PO c\xF3 id: ".concat(_item39.id), _context78.t6);
          case 333:
            _context78.next = 318;
            break;
          case 335:
            _context78.next = 340;
            break;
          case 337:
            _context78.prev = 337;
            _context78.t7 = _context78["catch"](316);
            _iterator69.e(_context78.t7);
          case 340:
            _context78.prev = 340;
            _iterator69.f();
            return _context78.finish(340);
          case 343:
            resolve({
              errCode: 0,
              errMessage: 'Cập nhập tên tài sản thành công'
            });
          case 344:
            _context78.next = 347;
            break;
          case 346:
            resolve({
              errCode: 1,
              errMessage: 'Đã phát sinh chứng từ kiểm tra, không được sửa'
            });
          case 347:
            _context78.next = 522;
            break;
          case 349:
            if (!(data.loai === 'HD')) {
              _context78.next = 522;
              break;
            }
            if (!(data.colma === 'MA')) {
              _context78.next = 422;
              break;
            }
            _context78.next = 353;
            return _index["default"].Data_HD.findOne({
              where: {
                id: data.rowId,
                dacheckvoict: 1
              },
              raw: true
            });
          case 353:
            _checkedit9 = _context78.sent;
            if (!(_checkedit9 === null)) {
              _context78.next = 419;
              break;
            }
            _context78.next = 357;
            return updateMaTaiSan(data.mataisanNew, data.nhacungcap_id);
          case 357:
            _result_editma9 = _context78.sent;
            if (!(_result_editma9.length === 1)) {
              _context78.next = 362;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Một hợp đồng không thể có hơn 2 mã tài sản giống nhau.'
            });
            _context78.next = 417;
            break;
          case 362:
            _request8 = _index["default"].sqlhis2Connection.request();
            _mataisan4 = data.mataisanNew;
            _request8.input('mataisan', mssql.NVarChar(50), _mataisan4);
            _context78.next = 367;
            return _request8.execute('[sp_QLPO_DANHMUC_VPP_MA]');
          case 367:
            _getdata12 = _context78.sent;
            _recordset6 = _getdata12.recordset; // Hàm dò tìm và cập nhật checkmataisan
            _updateCheckMataisan4 = function _updateCheckMataisan4(recordset, result_editma) {
              // Dò tìm từng phần tử trong check_mataisan_dm
              result_editma.forEach(function (item) {
                // Tìm trong recordset xem có phần tử nào khớp với mataisan và tentaisan
                var foundByMa = recordset.find(function (record) {
                  return record.MaVPP === item.mataisan;
                });

                // Nếu tìm thấy khớp với MaVPP, cập nhật checkma = 1, ngược lại = 0
                item.checkma = foundByMa ? 1 : 0;
                // Cập nhật tentaisan nếu tìm thấy
                if (foundByMa) {
                  item.tentaisan = foundByMa.TenVPP; // Sử dụng đúng thuộc tính TenVPP
                }
              });
              return result_editma;
            }; //KIỂM TRA NẾU TRONG DANH MỤC KHÔNG TỒN TẠI MÃ THÌ GỬI THÔNG BÁO
            if (!(_recordset6.length === 0)) {
              _context78.next = 374;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Mã tài sản không tồn tại trong danh mục tài sản.'
            });
            _context78.next = 417;
            break;
          case 374:
            _context78.next = 376;
            return _index["default"].Data_HD.findOne({
              where: {
                id: data.rowId
              },
              raw: false
            });
          case 376:
            _dataedit9 = _context78.sent;
            if (!_dataedit9) {
              _context78.next = 381;
              break;
            }
            _dataedit9.mataisan = data.mataisanNew;
            // Lưu thay đổi
            _context78.next = 381;
            return _dataedit9.save();
          case 381:
            _context78.next = 383;
            return updateMaTaiSan(data.mataisanNew, data.nhacungcap_id);
          case 383:
            _result_editma10 = _context78.sent;
            // Gọi hàm updateCheckMataisan
            _updatedCheckMataisan4 = _updateCheckMataisan4(_recordset6, _result_editma10);
            if (!(_updatedCheckMataisan4.length > 0)) {
              _context78.next = 416;
              break;
            }
            _iterator70 = _createForOfIteratorHelper(_updatedCheckMataisan4);
            _context78.prev = 387;
            _iterator70.s();
          case 389:
            if ((_step70 = _iterator70.n()).done) {
              _context78.next = 408;
              break;
            }
            _item40 = _step70.value;
            _context78.prev = 391;
            _context78.next = 394;
            return _index["default"].Data_HD.findOne({
              where: {
                id: _item40.id
              },
              raw: false
            });
          case 394:
            _data40 = _context78.sent;
            if (!_data40) {
              _context78.next = 401;
              break;
            }
            _data40.checkma = _item40.checkma;
            _data40.tentaisan = _item40.tentaisan;
            _data40.checkten = 1;
            // Lưu thay đổi
            _context78.next = 401;
            return _data40.save();
          case 401:
            _context78.next = 406;
            break;
          case 403:
            _context78.prev = 403;
            _context78.t8 = _context78["catch"](391);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt PO c\xF3 id: ".concat(_item40.id), _context78.t8);
          case 406:
            _context78.next = 389;
            break;
          case 408:
            _context78.next = 413;
            break;
          case 410:
            _context78.prev = 410;
            _context78.t9 = _context78["catch"](387);
            _iterator70.e(_context78.t9);
          case 413:
            _context78.prev = 413;
            _iterator70.f();
            return _context78.finish(413);
          case 416:
            resolve({
              errCode: 0,
              errMessage: 'Cập nhập mã tài sản thành công'
            });
          case 417:
            _context78.next = 420;
            break;
          case 419:
            resolve({
              errCode: 1,
              errMessage: 'Tài sản đã phát sinh chứng từ kiểm tra, không được sửa'
            });
          case 420:
            _context78.next = 522;
            break;
          case 422:
            if (!(data.colten === 'TEN')) {
              _context78.next = 492;
              break;
            }
            _context78.next = 425;
            return _index["default"].Data_HD.findOne({
              where: {
                id: data.rowId,
                dacheckvoict: 1
              },
              raw: true
            });
          case 425:
            _checkedit10 = _context78.sent;
            if (!(_checkedit10 === null)) {
              _context78.next = 489;
              break;
            }
            _context78.next = 429;
            return updateTenTaiSan(data.tentaisanNew, data.nhacungcap_id);
          case 429:
            _result_editten4 = _context78.sent;
            if (!(_result_editten4.length === 1)) {
              _context78.next = 434;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Một hợp đồng không thể có hơn 2 tên tài sản giống nhau.'
            });
            _context78.next = 487;
            break;
          case 434:
            _request9 = _index["default"].sqlhis2Connection.request();
            _tentaisan2 = data.tentaisanNew; //console.log('const data = recordset[0];', tentaisan)
            _request9.input('tentaisan', mssql.NVarChar(50), _tentaisan2);
            _context78.next = 439;
            return _request9.execute('[sp_QLPO_DANHMUC_VPP_TEN]');
          case 439:
            _getdata13 = _context78.sent;
            _recordset7 = _getdata13.recordset; // const data = recordset[0];
            //console.log('const data = recordset[0];', recordset)
            if (!(_recordset7.length === 0)) {
              _context78.next = 445;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Tên tài sản không tồn tại trong danh mục tài sản.'
            });
            _context78.next = 487;
            break;
          case 445:
            _context78.next = 447;
            return _index["default"].Data_HD.findOne({
              where: {
                id: data.rowId
              },
              raw: false
            });
          case 447:
            _dataedit10 = _context78.sent;
            if (!_dataedit10) {
              _context78.next = 452;
              break;
            }
            _dataedit10.tentaisan = data.tentaisanNew;
            // Lưu thay đổi
            _context78.next = 452;
            return _dataedit10.save();
          case 452:
            _context78.next = 454;
            return updateTenTaiSan(data.tentaisanNew, data.nhacungcap_id);
          case 454:
            _result_editten5 = _context78.sent;
            // Hàm dò tìm và cập nhật checkmataisan
            _updateCheckTentaisan2 = function _updateCheckTentaisan2(recordset, result_editten) {
              // Dò tìm từng phần tử trong check_mataisan_dm
              result_editten.forEach(function (item) {
                // Tìm trong recordset xem có phần tử nào khớp với mataisan và tentaisan
                var foundByTen = recordset.find(function (record) {
                  return record.TenVPP === item.tentaisan;
                });
                // Nếu tìm thấy khớp với MaVPP, cập nhật checkma = 1, ngược lại = 0
                item.checkten = foundByTen ? 1 : 0;
              });
              return result_editten;
            }; // Gọi hàm updateCheckMataisan
            _updatedCheckTentaisan2 = _updateCheckTentaisan2(_recordset7, _result_editten5);
            if (!(_updatedCheckTentaisan2.length > 0)) {
              _context78.next = 486;
              break;
            }
            _iterator71 = _createForOfIteratorHelper(_updatedCheckTentaisan2);
            _context78.prev = 459;
            _iterator71.s();
          case 461:
            if ((_step71 = _iterator71.n()).done) {
              _context78.next = 478;
              break;
            }
            _item41 = _step71.value;
            _context78.prev = 463;
            _context78.next = 466;
            return _index["default"].Data_HD.findOne({
              where: {
                id: _item41.id
              },
              raw: false
            });
          case 466:
            _data41 = _context78.sent;
            if (!_data41) {
              _context78.next = 471;
              break;
            }
            _data41.checkten = _item41.checkten;
            // Lưu thay đổi
            _context78.next = 471;
            return _data41.save();
          case 471:
            _context78.next = 476;
            break;
          case 473:
            _context78.prev = 473;
            _context78.t10 = _context78["catch"](463);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt PO c\xF3 id: ".concat(_item41.id), _context78.t10);
          case 476:
            _context78.next = 461;
            break;
          case 478:
            _context78.next = 483;
            break;
          case 480:
            _context78.prev = 480;
            _context78.t11 = _context78["catch"](459);
            _iterator71.e(_context78.t11);
          case 483:
            _context78.prev = 483;
            _iterator71.f();
            return _context78.finish(483);
          case 486:
            resolve({
              errCode: 0,
              errMessage: 'Cập nhập tên tài sản thành công'
            });
          case 487:
            _context78.next = 490;
            break;
          case 489:
            resolve({
              errCode: 1,
              errMessage: 'Đã phát sinh chứng từ kiểm tra, không được sửa tên'
            });
          case 490:
            _context78.next = 522;
            break;
          case 492:
            if (!(data.colncc === 'NCC')) {
              _context78.next = 522;
              break;
            }
            _context78.next = 495;
            return _index["default"].Data_HD.findOne({
              where: {
                id: data.rowId,
                dacheckvoict: 1
              },
              raw: true
            });
          case 495:
            _checkedit11 = _context78.sent;
            if (!(_checkedit11 === null)) {
              _context78.next = 521;
              break;
            }
            _request10 = _index["default"].sqlhis2Connection.request();
            nhacungcap_id = data.nhacungcap_id;
            _request10.input('nhacungcap_id', mssql.Int, nhacungcap_id);
            _context78.next = 502;
            return _request10.execute('[sp_QLPO_DANHMUC_NCC]');
          case 502:
            _getdata14 = _context78.sent;
            _recordset8 = _getdata14.recordset;
            datancc = _recordset8[0];
            if (!(_recordset8.length === 0)) {
              _context78.next = 509;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Tên nhà cung cấp không tồn tại trong danh mục.'
            });
            _context78.next = 519;
            break;
          case 509:
            _context78.next = 511;
            return _index["default"].Data_HD.findOne({
              where: {
                id: data.rowId
              },
              raw: false
            });
          case 511:
            _dataedit11 = _context78.sent;
            if (!_dataedit11) {
              _context78.next = 518;
              break;
            }
            _dataedit11.nhacungcap_id = data.nhacungcap_id;
            _dataedit11.checknhacungcap = 1;
            _dataedit11.tennhacungcap = datancc.tennhacungcap;
            // Lưu thay đổi
            _context78.next = 518;
            return _dataedit11.save();
          case 518:
            // let result_editten = await updateTenTaiSan(data.tentaisanNew, data.nhacungcap_id);
            // // Hàm dò tìm và cập nhật checkmataisan
            // const updateCheckTentaisan = (recordset, result_editten) => {
            //     // Dò tìm từng phần tử trong check_mataisan_dm
            //     result_editten.forEach((item) => {
            //         // Tìm trong recordset xem có phần tử nào khớp với mataisan và tentaisan
            //         const foundByTen = recordset.find((record) =>
            //             record.TenVPP === item.tentaisan
            //         );
            //         // Nếu tìm thấy khớp với MaVPP, cập nhật checkma = 1, ngược lại = 0
            //         item.checkten = foundByTen ? 1 : 0;
            //     });
            //     return result_editten;

            // };

            // // Gọi hàm updateCheckMataisan
            // const updatedCheckTentaisan = updateCheckTentaisan(recordset, result_editten);
            // if (updatedCheckTentaisan.length > 0) {
            //     for (const item of updatedCheckTentaisan) {
            //         try {
            //             // Tìm bản ghi trong Data_HD theo id
            //             let data = await db.Data_HD.findOne({ where: { id: item.id }, raw: false });
            //             if (data) {
            //                 data.checkten = item.checkten;
            //                 // Lưu thay đổi
            //                 await data.save();
            //             }
            //         } catch (error) {
            //             console.error(`Lỗi khi cập nhật PO có id: ${item.id}`, error);
            //         }
            //     }
            // }
            resolve({
              errCode: 0,
              errMessage: 'Cập nhập nhà cung cấp thành công'
            });
          case 519:
            _context78.next = 522;
            break;
          case 521:
            resolve({
              errCode: 1,
              errMessage: 'Đã phát sinh chứng từ kiểm tra, không được sửa'
            });
          case 522:
            _context78.next = 527;
            break;
          case 524:
            _context78.prev = 524;
            _context78.t12 = _context78["catch"](0);
            reject(_context78.t12);
          case 527:
          case "end":
            return _context78.stop();
        }
      }, _callee78, null, [[0, 524], [40, 63, 66, 69], [44, 56], [112, 133, 136, 139], [116, 126], [244, 267, 270, 273], [248, 260], [316, 337, 340, 343], [320, 330], [387, 410, 413, 416], [391, 403], [459, 480, 483, 486], [463, 473]]);
    }));
    return function (_x155, _x156) {
      return _ref79.apply(this, arguments);
    };
  }());
};
var getOnePo = function getOnePo(machungtu) {
  return new Promise(/*#__PURE__*/function () {
    var _ref80 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee79(resolve, reject) {
      var request, getdata, recordset, datachungtu, sopo, data;
      return _regeneratorRuntime().wrap(function _callee79$(_context79) {
        while (1) switch (_context79.prev = _context79.next) {
          case 0:
            _context79.prev = 0;
            request = _index["default"].sqlhis2Connection.request();
            request.input('machungtu', mssql.NVarChar(50), machungtu);
            _context79.next = 5;
            return request.execute('[sp_QLPO_GETCHUNGTUNHAPNCC]');
          case 5:
            getdata = _context79.sent;
            // Lấy dữ liệu từ recordset
            recordset = getdata.recordset;
            datachungtu = recordset[0];
            if (!(recordset.length > 0)) {
              _context79.next = 14;
              break;
            }
            sopo = datachungtu.sopo;
            _context79.next = 12;
            return _index["default"].sequelize.query('CALL sp_get_one_po(:sopo)', {
              replacements: {
                sopo: sopo
              },
              raw: false
            });
          case 12:
            data = _context79.sent;
            //console.log('data new', data)
            resolve(data);
          case 14:
            _context79.next = 19;
            break;
          case 16:
            _context79.prev = 16;
            _context79.t0 = _context79["catch"](0);
            reject(_context79.t0);
          case 19:
          case "end":
            return _context79.stop();
        }
      }, _callee79, null, [[0, 16]]);
    }));
    return function (_x157, _x158) {
      return _ref80.apply(this, arguments);
    };
  }());
};
var getOneCT = function getOneCT(machungtu) {
  return new Promise(/*#__PURE__*/function () {
    var _ref81 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee80(resolve, reject) {
      var request, getdata, recordset, datachungtu, sopo, data;
      return _regeneratorRuntime().wrap(function _callee80$(_context80) {
        while (1) switch (_context80.prev = _context80.next) {
          case 0:
            _context80.prev = 0;
            request = _index["default"].sqlhis2Connection.request();
            request.input('machungtu', mssql.NVarChar(50), machungtu);
            _context80.next = 5;
            return request.execute('[sp_QLPO_GETCHUNGTUNHAPNCC]');
          case 5:
            getdata = _context80.sent;
            // Lấy dữ liệu từ recordset
            recordset = getdata.recordset;
            datachungtu = recordset[0];
            if (!(recordset.length > 0)) {
              _context80.next = 14;
              break;
            }
            sopo = datachungtu.sopo;
            _context80.next = 12;
            return _index["default"].sequelize.query('CALL sp_get_one_ct(:sopo)', {
              replacements: {
                sopo: sopo
              },
              raw: false
            });
          case 12:
            data = _context80.sent;
            //console.log('data new', data)
            resolve(data);
          case 14:
            _context80.next = 19;
            break;
          case 16:
            _context80.prev = 16;
            _context80.t0 = _context80["catch"](0);
            reject(_context80.t0);
          case 19:
          case "end":
            return _context80.stop();
        }
      }, _callee80, null, [[0, 16]]);
    }));
    return function (_x159, _x160) {
      return _ref81.apply(this, arguments);
    };
  }());
};
var getCheckOneCT = function getCheckOneCT(machungtu) {
  return new Promise(/*#__PURE__*/function () {
    var _ref82 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee81(resolve, reject) {
      var request, getdata, recordset, datachungtu, sopo, data;
      return _regeneratorRuntime().wrap(function _callee81$(_context81) {
        while (1) switch (_context81.prev = _context81.next) {
          case 0:
            _context81.prev = 0;
            request = _index["default"].sqlhis2Connection.request();
            request.input('machungtu', mssql.NVarChar(50), machungtu);
            _context81.next = 5;
            return request.execute('[sp_QLPO_GETCHUNGTUNHAPNCC_DNK]');
          case 5:
            getdata = _context81.sent;
            // Lấy dữ liệu từ recordset
            recordset = getdata.recordset;
            datachungtu = recordset[0];
            if (!(recordset.length > 0)) {
              _context81.next = 14;
              break;
            }
            sopo = datachungtu.sopo;
            _context81.next = 12;
            return _index["default"].sequelize.query('CALL sp_get_check_one_ct(:sopo)', {
              replacements: {
                sopo: sopo
              },
              raw: false
            });
          case 12:
            data = _context81.sent;
            //console.log('data new', data)
            resolve(data);
          case 14:
            _context81.next = 19;
            break;
          case 16:
            _context81.prev = 16;
            _context81.t0 = _context81["catch"](0);
            reject(_context81.t0);
          case 19:
          case "end":
            return _context81.stop();
        }
      }, _callee81, null, [[0, 16]]);
    }));
    return function (_x161, _x162) {
      return _ref82.apply(this, arguments);
    };
  }());
};
var getOneHD = function getOneHD(machungtu) {
  return new Promise(/*#__PURE__*/function () {
    var _ref83 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee82(resolve, reject) {
      var request, getdata, recordset, datachungtu, nhacungcap_id, data;
      return _regeneratorRuntime().wrap(function _callee82$(_context82) {
        while (1) switch (_context82.prev = _context82.next) {
          case 0:
            _context82.prev = 0;
            request = _index["default"].sqlhis2Connection.request();
            request.input('machungtu', mssql.NVarChar(50), machungtu);
            _context82.next = 5;
            return request.execute('[sp_QLPO_GETCHUNGTUNHAPNCC]');
          case 5:
            getdata = _context82.sent;
            // Lấy dữ liệu từ recordset
            recordset = getdata.recordset;
            datachungtu = recordset[0];
            if (!(recordset.length > 0)) {
              _context82.next = 14;
              break;
            }
            nhacungcap_id = datachungtu.nhacungcap_id;
            _context82.next = 12;
            return _index["default"].sequelize.query('CALL sp_get_one_hd(:nhacungcap_id)', {
              replacements: {
                nhacungcap_id: nhacungcap_id
              },
              raw: false
            });
          case 12:
            data = _context82.sent;
            //console.log('data new', data)
            resolve(data);
          case 14:
            _context82.next = 19;
            break;
          case 16:
            _context82.prev = 16;
            _context82.t0 = _context82["catch"](0);
            reject(_context82.t0);
          case 19:
          case "end":
            return _context82.stop();
        }
      }, _callee82, null, [[0, 16]]);
    }));
    return function (_x163, _x164) {
      return _ref83.apply(this, arguments);
    };
  }());
};
var getOnePR = function getOnePR(sopo) {
  return new Promise(/*#__PURE__*/function () {
    var _ref84 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee83(resolve, reject) {
      var datapo, sopr, data;
      return _regeneratorRuntime().wrap(function _callee83$(_context83) {
        while (1) switch (_context83.prev = _context83.next) {
          case 0:
            _context83.prev = 0;
            _context83.next = 3;
            return _index["default"].Data_PO.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                sopo: sopo
              },
              raw: true
            });
          case 3:
            datapo = _context83.sent;
            if (!(datapo.length > 0)) {
              _context83.next = 10;
              break;
            }
            sopr = datapo[0].sopr;
            _context83.next = 8;
            return _index["default"].sequelize.query('CALL sp_get_one_pr(:sopr)', {
              replacements: {
                sopr: sopr
              },
              raw: false
            });
          case 8:
            data = _context83.sent;
            //console.log('data new', data)
            resolve(data);
          case 10:
            _context83.next = 15;
            break;
          case 12:
            _context83.prev = 12;
            _context83.t0 = _context83["catch"](0);
            reject(_context83.t0);
          case 15:
          case "end":
            return _context83.stop();
        }
      }, _callee83, null, [[0, 12]]);
    }));
    return function (_x165, _x166) {
      return _ref84.apply(this, arguments);
    };
  }());
};
var getDataDaKiemKe = function getDataDaKiemKe(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref85 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee84(resolve, reject) {
      var validationRules, errorMessage, _i, _validationRules, rule, tungay, denngay, KhoTaiSan_Id, DotKiemKe_Id_React, DotKiemKe_Id_Array, DotKiemKe_Id, query, data_kiemke, flatData, uniqueData, datakiemke, _tungay, _denngay, _KhoTaiSan_Id, TimKiemKhoQuanLy, DotKiemKe_Id_Int, _DotKiemKe_Id2, _datakiemke, _tungay2, _denngay2, _TimKiemKhoQuanLy, _DotKiemKe_Id_React, _DotKiemKe_Id_Array, _DotKiemKe_Id3, _query, _data_kiemke, _flatData, _uniqueData, _datakiemke2;
      return _regeneratorRuntime().wrap(function _callee84$(_context84) {
        while (1) switch (_context84.prev = _context84.next) {
          case 0:
            _context84.prev = 0;
            //console.log('data', data)
            validationRules = [{
              field: 'TuNgay',
              message: 'Vui lòng chọn Từ ngày.'
            }, {
              field: 'DenNgay',
              message: 'Vui lòng chọn Đến ngày.'
            }];
            errorMessage = '';
            _i = 0, _validationRules = validationRules;
          case 4:
            if (!(_i < _validationRules.length)) {
              _context84.next = 12;
              break;
            }
            rule = _validationRules[_i];
            if (data[rule.field]) {
              _context84.next = 9;
              break;
            }
            errorMessage = rule.message;
            return _context84.abrupt("break", 12);
          case 9:
            _i++;
            _context84.next = 4;
            break;
          case 12:
            if (!errorMessage) {
              _context84.next = 16;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: errorMessage
            });
            _context84.next = 60;
            break;
          case 16:
            if (!data.TimKiemKhoTaiSan_Id) {
              _context84.next = 46;
              break;
            }
            if (!(data.TimKiemKhoQuanLy === 'TẤT CẢ KHO')) {
              _context84.next = 34;
              break;
            }
            tungay = new Date(data.TuNgay).toISOString().split('T')[0];
            denngay = new Date(data.DenNgay).toISOString().split('T')[0];
            KhoTaiSan_Id = data.TimKiemKhoTaiSan_Id;
            DotKiemKe_Id_React = data.DotKiemKe_Id; // console.log('DotKiemKe_Id', DotKiemKe_Id)
            // Tách thành mảng số nguyên
            DotKiemKe_Id_Array = DotKiemKe_Id_React.split(",").map(Number); // Chuyển mảng thành chuỗi dùng trong MySQL
            DotKiemKe_Id = DotKiemKe_Id_Array.join(","); // let datakiemke = await db.sequelize.query('CALL sp_get_timkiem_data_kiemke_tatca_theokhoa_sudung(:KhoTaiSan_Id,:DotKiemKe_Id,:tungay, :denngay)',
            //     {
            //         replacements: { KhoTaiSan_Id: KhoTaiSan_Id, DotKiemKe_Id: DotKiemKe_Id, tungay: tungay, denngay: denngay },
            //         raw: true
            //     }
            // );
            query = "\n                            SELECT  \n                                kk.STT,\n                                kk.id,\n                                kk.DotKiemKe_Id,\n                                kk.KhoDuocSaiViTri_Id,\n                                kk.MaTaiSan,\n                                kk.LanKiemKe,\n                                kk.XacNhanKiemKe,\n                                kk.MaTaiSanNew,\n                                kk.BenhVien,\n                                kk.PhanLoai,\n                                kk.TenTaiSan,\n                                kk.Model,\n                                kk.Serial,\n                                kk.TenDonViTinh,\n                                kk.ThoiGianDuaVao,\n                                kk.NguyenGia,\n                                kk.Duoc_Id,\n                                kk.SoLoNhap_Id,\n                                kk.KhoDuoc_Id,\n                                kk.ViTri_Id,\n                                kk.SoLuong,\n                                kk.TrangThaiKiemKe,\n                                kk.IsCheckKiemKe,\n                                kk.KhoaPhongSuDung,\n                                kk.ViTri,\n                                kk.GhiChu,\n                                kk.KhoaQuanLy,\n                                kk.SoLuongThucTe,\n                                kk.ChenhLech,\n                                kk.KhoaPhongHienTai,\n                                kk.ViTriHienTai,\n                                kk.GhiChuHienTai,\n                                kk.TinhTrang,\n                                CASE WHEN kk.CheckMaTaiSan = 1 THEN 'YES' ELSE 'NO' END AS CheckMaTaiSan,\n                                nv.TenNhanVien AS NguoiTao,\n                                nv.ChucDanh,\n                                kk.createdAt AS NgayTao,\n                                kk.NgayKiemKe,\n                                kk.NamKiemKe,\n                                (SELECT DISTINCT MIN(HOUR(NgayKiemKe)) AS GioBatDau FROM data_kiemkes WHERE \n                                    (XacNhanKiemKe = 1 AND KhoDuoc_Id = ".concat(KhoTaiSan_Id, " AND NgayKiemKe IS NOT NULL \n                                        AND DATE(NgayXacNhanKiemKe) BETWEEN '").concat(tungay, "' AND '").concat(denngay, "' AND DotKiemKe_Id IN (").concat(DotKiemKe_Id, ") ) \n                                        OR (XacNhanKiemKe = 1 AND KhoDuocSaiViTri_Id = ").concat(KhoTaiSan_Id, " AND NgayKiemKe IS NOT NULL \n                                        AND DATE(NgayXacNhanKiemKe) BETWEEN '").concat(tungay, "' AND '").concat(denngay, "' AND DotKiemKe_Id IN (").concat(DotKiemKe_Id, "))\n                                ) AS GioBatDau,\n                                (SELECT DISTINCT MIN(DAY(NgayKiemKe)) AS Ngay FROM data_kiemkes WHERE \n                                    (XacNhanKiemKe = 1 AND KhoDuoc_Id = ").concat(KhoTaiSan_Id, " AND NgayKiemKe IS NOT NULL\n                                        AND DATE(NgayXacNhanKiemKe) BETWEEN '").concat(tungay, "' AND '").concat(denngay, "' AND DotKiemKe_Id IN (").concat(DotKiemKe_Id, "))\n                                        OR (XacNhanKiemKe = 1 AND KhoDuocSaiViTri_Id = ").concat(KhoTaiSan_Id, " AND NgayKiemKe IS NOT NULL\n                                        AND DATE(NgayXacNhanKiemKe) BETWEEN '").concat(tungay, "' AND '").concat(denngay, "' AND DotKiemKe_Id IN (").concat(DotKiemKe_Id, "))\n                                ) AS TuNgayKK,\n                                (SELECT DISTINCT  MAX(DAY(NgayXacNhanKiemKe)) AS Ngay FROM data_kiemkes \n                                    WHERE (XacNhanKiemKe = 1 AND KhoDuoc_Id =  ").concat(KhoTaiSan_Id, " AND NgayXacNhanKiemKe IS NOT null\n                                                AND DATE(NgayXacNhanKiemKe) BETWEEN '").concat(tungay, "' AND '").concat(denngay, "' AND DotKiemKe_Id IN (").concat(DotKiemKe_Id, ")) \n                                        OR (XacNhanKiemKe = 1 AND KhoDuocSaiViTri_Id =  ").concat(KhoTaiSan_Id, " AND NgayXacNhanKiemKe IS NOT null\n                                        AND DATE(NgayXacNhanKiemKe) BETWEEN '").concat(tungay, "' AND '").concat(denngay, "' AND DotKiemKe_Id IN (").concat(DotKiemKe_Id, ")) \n                                ) AS DenNgayKK,\n                                (SELECT DISTINCT MIN(MONTH(NgayKiemKe)) AS Thang FROM data_kiemkes WHERE \n                                    (XacNhanKiemKe = 1 AND KhoDuoc_Id = ").concat(KhoTaiSan_Id, " AND NgayKiemKe IS NOT NULL \n                                        AND DATE(NgayXacNhanKiemKe) BETWEEN '").concat(tungay, "' AND '").concat(denngay, "' AND DotKiemKe_Id IN (").concat(DotKiemKe_Id, "))\n                                        OR (XacNhanKiemKe = 1 AND KhoDuocSaiViTri_Id = ").concat(KhoTaiSan_Id, " AND NgayKiemKe IS NOT NULL \n                                        AND DATE(NgayXacNhanKiemKe) BETWEEN '").concat(tungay, "' AND '").concat(denngay, "' AND DotKiemKe_Id IN (").concat(DotKiemKe_Id, "))\n                                ) AS TuThangKK,\n                                (SELECT DISTINCT  MAX(MONTH(NgayXacNhanKiemKe)) AS Thang FROM data_kiemkes \n                                WHERE (XacNhanKiemKe = 1 AND KhoDuoc_Id = ").concat(KhoTaiSan_Id, " AND NgayXacNhanKiemKe IS NOT null\n                                        AND DATE(NgayXacNhanKiemKe) BETWEEN '").concat(tungay, "' AND '").concat(denngay, "' AND DotKiemKe_Id IN (").concat(DotKiemKe_Id, ")) \n                                        OR (XacNhanKiemKe = 1 AND KhoDuocSaiViTri_Id = ").concat(KhoTaiSan_Id, " AND NgayXacNhanKiemKe IS NOT null\n                                            AND DATE(NgayXacNhanKiemKe) BETWEEN '").concat(tungay, "' AND '").concat(denngay, "' AND DotKiemKe_Id IN (").concat(DotKiemKe_Id, "))  \n                                ) AS DenThangKK,\n                                (SELECT DISTINCT MIN(YEAR(NgayKiemKe)) AS Nam FROM data_kiemkes WHERE \n                                    (XacNhanKiemKe = 1 AND KhoDuoc_Id = ").concat(KhoTaiSan_Id, " AND NgayKiemKe IS NOT NULL \n                                        AND DATE(NgayXacNhanKiemKe) BETWEEN '").concat(tungay, "' AND '").concat(denngay, "' AND DotKiemKe_Id IN (").concat(DotKiemKe_Id, "))\n                                        OR (XacNhanKiemKe = 1 AND KhoDuocSaiViTri_Id = ").concat(KhoTaiSan_Id, " AND NgayKiemKe IS NOT NULL \n                                        AND DATE(NgayXacNhanKiemKe) BETWEEN '").concat(tungay, "' AND '").concat(denngay, "' AND DotKiemKe_Id IN (").concat(DotKiemKe_Id, "))\n                                ) AS TuNamKK,\n                                (SELECT DISTINCT  MAX(YEAR(NgayXacNhanKiemKe)) AS Nam FROM data_kiemkes \n                                WHERE (XacNhanKiemKe = 1 AND KhoDuoc_Id = ").concat(KhoTaiSan_Id, " AND NgayXacNhanKiemKe IS NOT null\n                                        AND DATE(NgayXacNhanKiemKe) BETWEEN '").concat(tungay, "' AND '").concat(denngay, "' AND DotKiemKe_Id IN (").concat(DotKiemKe_Id, ")) \n                                        OR (XacNhanKiemKe = 1 AND KhoDuocSaiViTri_Id = ").concat(KhoTaiSan_Id, " AND NgayXacNhanKiemKe IS NOT null\n                                        AND DATE(NgayXacNhanKiemKe) BETWEEN '").concat(tungay, "' AND '").concat(denngay, "' AND DotKiemKe_Id IN (").concat(DotKiemKe_Id, "))   \n                                ) AS DenNamKK,\n                                (SELECT COUNT(*) FROM data_kiemkes \n                                    WHERE (KhoDuoc_Id = ").concat(KhoTaiSan_Id, " AND XacNhanKiemKe = 1  AND KhoDuocSaiViTri_Id IS null\n                                            AND DATE(NgayXacNhanKiemKe) BETWEEN '").concat(tungay, "' AND '").concat(denngay, "' AND DotKiemKe_Id IN (").concat(DotKiemKe_Id, ")\n                                            ) \n                                    OR (KhoDuocSaiViTri_Id = ").concat(KhoTaiSan_Id, " AND XacNhanKiemKe = 1 \n                                    AND DATE(NgayXacNhanKiemKe) BETWEEN '").concat(tungay, "' AND '").concat(denngay, "' AND DotKiemKe_Id IN (").concat(DotKiemKe_Id, ")\n                                        ) \n                                ) as TongSo,\n                                (SELECT COUNT(*) FROM data_kiemkes \n                                    WHERE (KhoDuoc_Id = ").concat(KhoTaiSan_Id, " AND IsCheckKiemKe = 1 AND XacNhanKiemKe = 1  AND KhoDuocSaiViTri_Id IS null\n                                            AND DATE(NgayXacNhanKiemKe) BETWEEN '").concat(tungay, "' AND '").concat(denngay, "' AND DotKiemKe_Id IN (").concat(DotKiemKe_Id, ")\n                                            ) \n                                    OR (KhoDuocSaiViTri_Id = ").concat(KhoTaiSan_Id, " AND IsCheckKiemKe = 1 AND XacNhanKiemKe = 1\n                                    AND DATE(NgayXacNhanKiemKe) BETWEEN '").concat(tungay, "' AND '").concat(denngay, "' AND DotKiemKe_Id IN (").concat(DotKiemKe_Id, ")\n                                        )\n                                ) AS DaKiem,\n                                ((SELECT COUNT(*) FROM data_kiemkes \n                                    WHERE (KhoDuoc_Id = ").concat(KhoTaiSan_Id, " AND XacNhanKiemKe = 1   AND KhoDuocSaiViTri_Id IS null\n                                            AND DATE(NgayXacNhanKiemKe) BETWEEN  '").concat(tungay, "' AND '").concat(denngay, "' AND DotKiemKe_Id IN (").concat(DotKiemKe_Id, ")\n                                            ) \n                                        OR (KhoDuocSaiViTri_Id = ").concat(KhoTaiSan_Id, " AND XacNhanKiemKe = 1 \n                                        AND DATE(NgayXacNhanKiemKe) BETWEEN  '").concat(tungay, "' AND '").concat(denngay, "' AND DotKiemKe_Id IN (").concat(DotKiemKe_Id, ")\n                                        ) ) -\n                                    (SELECT COUNT(*) FROM data_kiemkes \n                                    WHERE (KhoDuoc_Id = ").concat(KhoTaiSan_Id, " AND IsCheckKiemKe = 1 AND XacNhanKiemKe = 1   AND KhoDuocSaiViTri_Id IS null\n                                            AND DATE(NgayXacNhanKiemKe) BETWEEN  '").concat(tungay, "' AND '").concat(denngay, "' AND DotKiemKe_Id IN (").concat(DotKiemKe_Id, ")\n                                            )  \n                                        OR (KhoDuocSaiViTri_Id = ").concat(KhoTaiSan_Id, " AND IsCheckKiemKe = 1 AND XacNhanKiemKe = 1 \n                                        AND DATE(NgayXacNhanKiemKe) BETWEEN  '").concat(tungay, "' AND '").concat(denngay, "' AND DotKiemKe_Id IN (").concat(DotKiemKe_Id, ")\n                                        ))\n                                ) AS ConLai\n                            FROM data_kiemkes kk\n                            LEFT JOIN users u ON u.id = kk.NguoiTao\n                            LEFT JOIN dm_nhanviens nv ON nv.id = u.nhanvien_id\n                            WHERE \n                            (kk.KhoDuoc_Id = ").concat(KhoTaiSan_Id, " \n                            AND kk.XacNhanKiemKe = 1 \n                            AND kk.KhoDuocSaiViTri_Id IS null\n                            AND DATE(kk.NgayXacNhanKiemKe) BETWEEN '").concat(tungay, "' AND '").concat(denngay, "' \n                            AND kk.DotKiemKe_Id IN (").concat(DotKiemKe_Id, ") \n                            ) \n                            OR (kk.KhoDuocSaiViTri_Id = ").concat(KhoTaiSan_Id, "\n                                AND kk.XacNhanKiemKe = 1 \n                                AND DATE(kk.NgayXacNhanKiemKe) BETWEEN '").concat(tungay, "' AND '").concat(denngay, "'\n                                AND kk.DotKiemKe_Id IN (").concat(DotKiemKe_Id, ") \n                                )\n                            ORDER BY kk.IsCheckKiemKe DESC, kk.NgayKiemKe DESC ;\n                        ");
            _context84.next = 27;
            return _index["default"].sequelize.query(query, {
              raw: false
            });
          case 27:
            data_kiemke = _context84.sent;
            // Làm phẳng mảng và loại bỏ trùng lặp
            flatData = data_kiemke.flat();
            uniqueData = flatData.filter(function (value, index, self) {
              return index === self.findIndex(function (t) {
                return t.id === value.id;
              });
            });
            datakiemke = JSON.parse(JSON.stringify(uniqueData)); //console.log('datakiemke', datakiemke.length, DotKiemKe_Id, data.TimKiemKhoQuanLy)
            if (datakiemke.length === 0) {
              resolve({
                errCode: 1,
                errMessage: 'Không tìm thấy dữ liệu',
                data: datakiemke
              });
            } else {
              resolve({
                errCode: 0,
                errMessage: 'Tìm kiếm thành công',
                data: datakiemke
              });
            }
            _context84.next = 44;
            break;
          case 34:
            _tungay = new Date(data.TuNgay).toISOString().split('T')[0];
            _denngay = new Date(data.DenNgay).toISOString().split('T')[0];
            _KhoTaiSan_Id = data.TimKiemKhoTaiSan_Id;
            TimKiemKhoQuanLy = data.TimKiemKhoQuanLy;
            DotKiemKe_Id_Int = data.DotKiemKe_Id;
            _DotKiemKe_Id2 = Number(DotKiemKe_Id_Int); //console.log('getTaiSanXacNhanTheoKhoLichSu', KhoTaiSan_Id, TimKiemKhoQuanLy, DotKiemKe_Id, tungay, denngay)
            _context84.next = 42;
            return _index["default"].sequelize.query('CALL sp_get_timkiem_data_kiemke_theokhoasudung(:KhoTaiSan_Id,:TimKiemKhoQuanLy,:DotKiemKe_Id,:tungay, :denngay)', {
              replacements: {
                KhoTaiSan_Id: _KhoTaiSan_Id,
                TimKiemKhoQuanLy: TimKiemKhoQuanLy,
                DotKiemKe_Id: _DotKiemKe_Id2,
                tungay: _tungay,
                denngay: _denngay
              },
              raw: true
            });
          case 42:
            _datakiemke = _context84.sent;
            //console.log('datakiemke', DotKiemKe_Id)
            if (_datakiemke.length === 0) {
              resolve({
                errCode: 1,
                errMessage: 'Không tìm thấy dữ liệu',
                data: _datakiemke
              });
            } else {
              resolve({
                errCode: 0,
                errMessage: 'Tìm kiếm thành công',
                data: _datakiemke
              });
            }
          case 44:
            _context84.next = 60;
            break;
          case 46:
            //console.log('chạy b')
            _tungay2 = data.TuNgay;
            _denngay2 = data.DenNgay;
            _TimKiemKhoQuanLy = data.TimKiemKhoQuanLy; // let datakiemke = await db.sequelize.query('CALL sp_get_timkiem_data_kiemke_theokhoaquanly_toanvien(:TimKiemKhoQuanLy,:tungay, :denngay)',
            //     {
            //         replacements: { TimKiemKhoQuanLy: TimKiemKhoQuanLy, tungay: tungay, denngay: denngay },
            //         raw: true
            //     }
            // );
            //console.log('TimKiemKhoQuanLy', TimKiemKhoQuanLy)
            _DotKiemKe_Id_React = data.DotKiemKe_Id; // console.log('DotKiemKe_Id', DotKiemKe_Id)
            // Tách thành mảng số nguyên
            _DotKiemKe_Id_Array = _DotKiemKe_Id_React.split(",").map(Number); // Chuyển mảng thành chuỗi dùng trong MySQL
            _DotKiemKe_Id3 = _DotKiemKe_Id_Array.join(",");
            _query = "\n                            SELECT  \n                                kk.STT,\n                                kk.id,\n                                kk.DotKiemKe_Id,\n                                kk.KhoDuocSaiViTri_Id,\n                                kk.MaTaiSan,\n                                kk.LanKiemKe,\n                                kk.XacNhanKiemKe,\n                                kk.MaTaiSanNew,\n                                kk.BenhVien,\n                                kk.PhanLoai,\n                                kk.TenTaiSan,\n                                kk.Model,\n                                kk.Serial,\n                                kk.TenDonViTinh,\n                                kk.ThoiGianDuaVao,\n                                kk.NguyenGia,\n                                kk.Duoc_Id,\n                                kk.SoLoNhap_Id,\n                                kk.KhoDuoc_Id,\n                                kk.ViTri_Id,\n                                kk.SoLuong,\n                                kk.TrangThaiKiemKe,\n                                kk.IsCheckKiemKe,\n                                kk.KhoaPhongSuDung,\n                                kk.ViTri,\n                                kk.GhiChu,\n                                kk.KhoaQuanLy,\n                                kk.SoLuongThucTe,\n                                kk.ChenhLech,\n                                kk.KhoaPhongHienTai,\n                                kk.ViTriHienTai,\n                                kk.GhiChuHienTai,\n                                kk.TinhTrang,\n                                CASE WHEN kk.CheckMaTaiSan = 1 THEN 'YES' ELSE 'NO' END AS CheckMaTaiSan,\n                                nv.TenNhanVien AS NguoiTao,\n                                nv.ChucDanh,\n                                kk.createdAt AS NgayTao,\n                                kk.NgayKiemKe,\n                                kk.NamKiemKe,\n                                (SELECT DISTINCT MIN(HOUR(kk.NgayKiemKe)) AS GioBatDau FROM data_kiemkes kk\n                                    WHERE (kk.XacNhanKiemKe = 1 AND kk.KhoaQuanLy = '".concat(_TimKiemKhoQuanLy, "' AND kk.NgayKiemKe IS NOT null\n                                    AND DATE(kk.NgayXacNhanKiemKe) BETWEEN '").concat(_tungay2, "' AND '").concat(_denngay2, "' AND kk.DotKiemKe_Id IN (").concat(_DotKiemKe_Id3, ")) \n                                ) AS GioBatDau,\n                                (SELECT DISTINCT  MIN(DAY(kk.NgayKiemKe)) AS Ngay FROM data_kiemkes kk\n                                            WHERE (kk.XacNhanKiemKe = 1 AND kk.KhoaQuanLy = '").concat(_TimKiemKhoQuanLy, "' AND kk.NgayKiemKe IS NOT null\n                                            AND DATE(kk.NgayXacNhanKiemKe) BETWEEN '").concat(_tungay2, "' AND '").concat(_denngay2, "' AND kk.DotKiemKe_Id IN (").concat(_DotKiemKe_Id3, "))\n                                ) AS TuNgayKK,\n                                (SELECT DISTINCT MIN(MONTH(kk.NgayKiemKe)) AS Thang FROM data_kiemkes kk\n                                            WHERE (kk.XacNhanKiemKe = 1 AND kk.KhoaQuanLy = '").concat(_TimKiemKhoQuanLy, "' AND kk.NgayKiemKe IS NOT null\n                                            AND DATE(kk.NgayXacNhanKiemKe) BETWEEN '").concat(_tungay2, "' AND '").concat(_denngay2, "' AND kk.DotKiemKe_Id IN (").concat(_DotKiemKe_Id3, "))\n                                ) AS TuThangKK,\n                                (SELECT DISTINCT  MIN(YEAR(kk.NgayKiemKe)) AS Nam FROM data_kiemkes kk\n                                    WHERE (kk.XacNhanKiemKe = 1 AND kk.KhoaQuanLy = '").concat(_TimKiemKhoQuanLy, "' AND kk.NgayKiemKe IS NOT null\n                                    AND DATE(kk.NgayXacNhanKiemKe) BETWEEN '").concat(_tungay2, "' AND '").concat(_denngay2, "' AND kk.DotKiemKe_Id IN (").concat(_DotKiemKe_Id3, "))\n                                ) AS TuNamKK,\n                                (SELECT DISTINCT  MAX(DAY(kk.NgayXacNhanKiemKe)) AS Ngay FROM data_kiemkes kk\n                                    WHERE (kk.XacNhanKiemKe = 1 AND kk.KhoaQuanLy = '").concat(_TimKiemKhoQuanLy, "' AND kk.NgayXacNhanKiemKe IS NOT null\n                                    AND DATE(kk.NgayXacNhanKiemKe) BETWEEN '").concat(_tungay2, "' AND '").concat(_denngay2, "' AND kk.DotKiemKe_Id IN (").concat(_DotKiemKe_Id3, "))\n                                ) AS DenNgayKK,\n                                (SELECT DISTINCT  MAX(MONTH(kk.NgayXacNhanKiemKe)) AS Thang FROM data_kiemkes kk\n                                    WHERE (kk.XacNhanKiemKe = 1 AND kk.KhoaQuanLy = '").concat(_TimKiemKhoQuanLy, "' AND kk.NgayXacNhanKiemKe IS NOT null\n                                        AND DATE(kk.NgayXacNhanKiemKe) BETWEEN '").concat(_tungay2, "' AND '").concat(_denngay2, "' AND kk.DotKiemKe_Id IN (").concat(_DotKiemKe_Id3, "))\n                                ) AS DenThangKK,\n                                (SELECT DISTINCT  MAX(YEAR(kk.NgayXacNhanKiemKe)) AS Nam FROM data_kiemkes kk\n                                    WHERE (kk.XacNhanKiemKe = 1 AND kk.KhoaQuanLy = '").concat(_TimKiemKhoQuanLy, "' AND kk.NgayXacNhanKiemKe IS NOT null\n                                        AND DATE(kk.NgayXacNhanKiemKe) BETWEEN '").concat(_tungay2, "' AND '").concat(_denngay2, "' AND kk.DotKiemKe_Id IN (").concat(_DotKiemKe_Id3, "))\n                                ) AS DenNamKK,\n                                (SELECT COUNT(*) FROM data_kiemkes kk\n                                    WHERE kk.XacNhanKiemKe = 1 AND kk.KhoaQuanLy = '").concat(_TimKiemKhoQuanLy, "'\n                                    AND DATE(kk.NgayXacNhanKiemKe) BETWEEN '").concat(_tungay2, "' AND '").concat(_denngay2, "' AND kk.DotKiemKe_Id IN (").concat(_DotKiemKe_Id3, ")\n                                ) AS TongSo,\n                                (SELECT COUNT(*) FROM data_kiemkes kk\n                                    WHERE kk.XacNhanKiemKe = 1 AND IsCheckKiemKe = 1 AND kk.KhoaQuanLy = '").concat(_TimKiemKhoQuanLy, "'\n                                    AND DATE(kk.NgayXacNhanKiemKe) BETWEEN '").concat(_tungay2, "' AND '").concat(_denngay2, "' AND kk.DotKiemKe_Id IN (").concat(_DotKiemKe_Id3, ")\n                                ) AS DaKiem,\n                                ((SELECT COUNT(*) FROM data_kiemkes kk\n                                    WHERE kk.XacNhanKiemKe = 1 AND kk.KhoaQuanLy = '").concat(_TimKiemKhoQuanLy, "'\n                                    AND DATE(kk.NgayXacNhanKiemKe) BETWEEN '").concat(_tungay2, "' AND '").concat(_denngay2, "' AND kk.DotKiemKe_Id IN (").concat(_DotKiemKe_Id3, ")\n                                    ) - \n                                    (SELECT COUNT(*) FROM data_kiemkes kk\n                                    WHERE kk.XacNhanKiemKe = 1 AND kk.IsCheckKiemKe = 1 AND kk.KhoaQuanLy ='").concat(_TimKiemKhoQuanLy, "'\n                                    AND DATE(kk.NgayXacNhanKiemKe) BETWEEN '").concat(_tungay2, "' AND '").concat(_denngay2, "' AND kk.DotKiemKe_Id IN (").concat(_DotKiemKe_Id3, ")\n                                )) AS ConLai\n            \n                            FROM data_kiemkes kk\n                            LEFT JOIN users u ON u.id = kk.NguoiTao\n                            LEFT JOIN dm_nhanviens nv ON nv.id = u.nhanvien_id\n\n                             WHERE  (kk.XacNhanKiemKe = 1 \n                                AND DATE(kk.NgayXacNhanKiemKe) BETWEEN '").concat(_tungay2, "' AND '").concat(_denngay2, "' \n                                AND kk.KhoaQuanLy = '").concat(_TimKiemKhoQuanLy, "' \n                                AND kk.DotKiemKe_Id IN (").concat(_DotKiemKe_Id3, ") \n                            ) \n                            ORDER BY kk.IsCheckKiemKe DESC, kk.NgayKiemKe DESC ;\n                        ");
            _context84.next = 55;
            return _index["default"].sequelize.query(_query, {
              raw: false
            });
          case 55:
            _data_kiemke = _context84.sent;
            // Làm phẳng mảng và loại bỏ trùng lặp
            _flatData = _data_kiemke.flat();
            _uniqueData = _flatData.filter(function (value, index, self) {
              return index === self.findIndex(function (t) {
                return t.id === value.id;
              });
            });
            _datakiemke2 = JSON.parse(JSON.stringify(_uniqueData));
            if (_datakiemke2.length === 0) {
              resolve({
                errCode: 1,
                errMessage: 'Không tìm thấy dữ liệu',
                data: _datakiemke2
              });
            } else {
              resolve({
                errCode: 0,
                errMessage: 'Tìm kiếm thành công',
                data: _datakiemke2
              });
            }
          case 60:
            _context84.next = 65;
            break;
          case 62:
            _context84.prev = 62;
            _context84.t0 = _context84["catch"](0);
            reject(_context84.t0);
          case 65:
          case "end":
            return _context84.stop();
        }
      }, _callee84, null, [[0, 62]]);
    }));
    return function (_x167, _x168) {
      return _ref85.apply(this, arguments);
    };
  }());
};
/////////////////

module.exports = {
  importPO: importPO,
  getAllPO: getAllPO,
  getMaChungTu: getMaChungTu,
  editMaTaiSan: editMaTaiSan,
  getOnePo: getOnePo,
  getAllPR: getAllPR,
  importPR: importPR,
  getOnePR: getOnePR,
  getSoPO: getSoPO,
  importHD: importHD,
  getAllHD: getAllHD,
  getChungTu: getChungTu,
  getOneHD: getOneHD,
  getAllLogChungTuHopDong: getAllLogChungTuHopDong,
  getCheckHopDong: getCheckHopDong,
  getAllLogChungTuPO: getAllLogChungTuPO,
  getCheckPO: getCheckPO,
  getAllLogPOPR: getAllLogPOPR,
  getCheckPR: getCheckPR,
  checkMaChungTuHD: checkMaChungTuHD,
  checkMaChungTuPO: checkMaChungTuPO,
  checkPOPR: checkPOPR,
  getAllCT: getAllCT,
  getOneCT: getOneCT,
  updateMaTaiSan: updateMaTaiSan,
  checkXoaChungTu: checkXoaChungTu,
  editMaTaiSanNew: editMaTaiSanNew,
  getCheckEditMaTaiSanPO: getCheckEditMaTaiSanPO,
  getCheckEditMaTaiSanPR: getCheckEditMaTaiSanPR,
  getCheckEditSoLuongPO: getCheckEditSoLuongPO,
  getCheckAllCT: getCheckAllCT,
  getCheckOneCT: getCheckOneCT,
  getCheckMaChungTu: getCheckMaChungTu,
  getCheckChungTu: getCheckChungTu,
  getCheckAllLogChungTuPO: getCheckAllLogChungTuPO,
  getCheckAllLogChungTuHopDong: getCheckAllLogChungTuHopDong,
  checkXoaCheckChungTu: checkXoaCheckChungTu,
  getCheckAll: getCheckAll,
  getLogPOPR: getLogPOPR,
  getAllTaiSan: getAllTaiSan,
  getAllDVT: getAllDVT,
  getAllBV: getAllBV,
  getAllPL: getAllPL,
  getAllTGBH: getAllTGBH,
  getAllTGKH: getAllTGKH,
  editTaiSan: editTaiSan,
  newTaiSan: newTaiSan,
  checkXoaTS: checkXoaTS,
  getAllKho: getAllKho,
  getTaiSanTheoKho: getTaiSanTheoKho,
  getAllKhoQL: getAllKhoQL,
  getTaiSanTheoKhoQL: getTaiSanTheoKhoQL,
  getMaTaiSanKiemKe: getMaTaiSanKiemKe,
  editKhoaPhongHienTai: editKhoaPhongHienTai,
  getAllViTri: getAllViTri,
  getAllTinhTrang: getAllTinhTrang,
  getAllKhoEdit: getAllKhoEdit,
  getDataDaKiemKe: getDataDaKiemKe,
  getSerialKiemKe: getSerialKiemKe,
  getAllNhanVien: getAllNhanVien,
  getAllNhanVienPhong: getAllNhanVienPhong,
  getAllKhoQLTK: getAllKhoQLTK,
  getAllTenTaiSan: getAllTenTaiSan,
  xacNhanThemTaiSan: xacNhanThemTaiSan,
  getAllNguoiLap: getAllNguoiLap,
  getKeToanTruong: getKeToanTruong,
  getKeToanTaiSan: getKeToanTaiSan,
  getGiamDoc: getGiamDoc,
  getLichSuKiemKe: getLichSuKiemKe,
  getTaiSanTheoKhoLichSu: getTaiSanTheoKhoLichSu,
  checkDataChuaXacNhan: checkDataChuaXacNhan,
  getTaiSanXacNhanTheoKhoLichSu: getTaiSanXacNhanTheoKhoLichSu,
  getTaiSanXacNhanAllKhoLichSu: getTaiSanXacNhanAllKhoLichSu,
  getTaiSanXacNhanToanVienKhoLichSu: getTaiSanXacNhanToanVienKhoLichSu
};