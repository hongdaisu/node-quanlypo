"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _importService = _interopRequireDefault(require("../services/importService"));
var _bodyParser = require("body-parser");
var _index = _interopRequireDefault(require("../models/index"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var fs = require('fs');
var path = require('path');
var mssql = require('mssql');
require('dotenv').config();
var _require = require('exceljs'),
  Workbook = _require.Workbook;
var handleGetAllPO = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _importService["default"].getAllPO();
        case 3:
          data = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          return _context.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function handleGetAllPO(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var handleGetAllTaiSan = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _importService["default"].getAllTaiSan();
        case 3:
          data = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          return _context2.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function handleGetAllTaiSan(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// let handleGetAllTenTaiSan = async (req, res) => {
//     try {
//         let data = await importService.getAllTenTaiSan();
//         return res.status(200).json({
//             errCode: 0,
//             errMessage: 'ok',
//             data
//         })
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ errCode: 500, errMessage: 'Internal Server Error' });
//     }
// }

var handleGetAllTenTaiSan = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var query, parsedQuery, searchTerm, offset, data;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          // // Lấy các tham số từ query parameters
          // const searchTerm = req.query.search || ''; // Mặc định là chuỗi rỗng nếu không có tham số tìm kiếm
          // const offset = parseInt(req.query.offset, 10) || 0; // Mặc định là 0 nếu không có tham số offset
          query = req.query.search; // Kiểm tra và parse JSON
          parsedQuery = {};
          if (query) {
            try {
              parsedQuery = JSON.parse(query);
            } catch (error) {
              console.error("Invalid JSON in query:", error);
            }
          }
          searchTerm = parsedQuery.searchTerm || ''; // Lấy ra searchTerm
          offset = parsedQuery.offset || 0; // Lấy ra offset (mặc định là 0 nếu không có)
          //console.log('searchTerm controller', searchTerm)
          _context3.prev = 5;
          _context3.next = 8;
          return _importService["default"].getAllTenTaiSan({
            searchTerm: searchTerm,
            offset: offset
          });
        case 8:
          data = _context3.sent;
          if (!(data instanceof Promise)) {
            _context3.next = 13;
            break;
          }
          _context3.next = 12;
          return data;
        case 12:
          data = _context3.sent;
        case 13:
          return _context3.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](5);
          console.error(_context3.t0);
          return _context3.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 20:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[5, 16]]);
  }));
  return function handleGetAllTenTaiSan(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var handleXacNhanThemTaiSan = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$body, KhoTaiSan_Id, tenTaiSan, nhapTenTaiSan, KhoQuanLy, UserId, DotKiemKe_Id, KhoaPhongHienTai;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _req$body = req.body, KhoTaiSan_Id = _req$body.KhoTaiSan_Id, tenTaiSan = _req$body.tenTaiSan, nhapTenTaiSan = _req$body.nhapTenTaiSan, KhoQuanLy = _req$body.KhoQuanLy, UserId = _req$body.UserId, DotKiemKe_Id = _req$body.DotKiemKe_Id, KhoaPhongHienTai = _req$body.KhoaPhongHienTai;
          return _context5.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
              var message;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.prev = 0;
                    _context4.next = 3;
                    return _importService["default"].xacNhanThemTaiSan(KhoTaiSan_Id, tenTaiSan, nhapTenTaiSan, KhoQuanLy, UserId, DotKiemKe_Id, KhoaPhongHienTai);
                  case 3:
                    message = _context4.sent;
                    return _context4.abrupt("return", res.status(200).json(message));
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
            return function (_x9, _x10) {
              return _ref5.apply(this, arguments);
            };
          }()));
        case 2:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function handleXacNhanThemTaiSan(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var handleCheckDataChuaXacNhan = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$body2, KhoTaiSan_Id, KhoQuanLy;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _req$body2 = req.body, KhoTaiSan_Id = _req$body2.KhoTaiSan_Id, KhoQuanLy = _req$body2.KhoQuanLy;
          return _context7.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
              var message;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.prev = 0;
                    _context6.next = 3;
                    return _importService["default"].checkDataChuaXacNhan(KhoTaiSan_Id, KhoQuanLy);
                  case 3:
                    message = _context6.sent;
                    return _context6.abrupt("return", res.status(200).json(message));
                  case 7:
                    _context6.prev = 7;
                    _context6.t0 = _context6["catch"](0);
                    reject(_context6.t0);
                  case 10:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, null, [[0, 7]]);
            }));
            return function (_x13, _x14) {
              return _ref7.apply(this, arguments);
            };
          }()));
        case 2:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function handleCheckDataChuaXacNhan(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var handleGetAllDVT = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return _importService["default"].getAllDVT();
        case 3:
          data = _context8.sent;
          return _context8.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](0);
          console.error(_context8.t0);
          return _context8.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 11:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 7]]);
  }));
  return function handleGetAllDVT(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var handleGetAllNhanVien = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return _importService["default"].getAllNhanVien();
        case 3:
          data = _context9.sent;
          return _context9.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 7:
          _context9.prev = 7;
          _context9.t0 = _context9["catch"](0);
          console.error(_context9.t0);
          return _context9.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 11:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 7]]);
  }));
  return function handleGetAllNhanVien(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var handleGetAllNguoiLap = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return _importService["default"].getAllNguoiLap();
        case 3:
          data = _context10.sent;
          return _context10.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 7:
          _context10.prev = 7;
          _context10.t0 = _context10["catch"](0);
          console.error(_context10.t0);
          return _context10.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 11:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 7]]);
  }));
  return function handleGetAllNguoiLap(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
var handleGetKeToanTaiSan = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return _importService["default"].getKeToanTaiSan();
        case 3:
          data = _context11.sent;
          return _context11.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 7:
          _context11.prev = 7;
          _context11.t0 = _context11["catch"](0);
          console.error(_context11.t0);
          return _context11.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 11:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 7]]);
  }));
  return function handleGetKeToanTaiSan(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
var handleGetKeToanTruong = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _context12.next = 3;
          return _importService["default"].getKeToanTruong();
        case 3:
          data = _context12.sent;
          return _context12.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 7:
          _context12.prev = 7;
          _context12.t0 = _context12["catch"](0);
          console.error(_context12.t0);
          return _context12.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 11:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 7]]);
  }));
  return function handleGetKeToanTruong(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
var handleGetGiamDoc = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return _importService["default"].getGiamDoc();
        case 3:
          data = _context13.sent;
          return _context13.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 7:
          _context13.prev = 7;
          _context13.t0 = _context13["catch"](0);
          console.error(_context13.t0);
          return _context13.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 11:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 7]]);
  }));
  return function handleGetGiamDoc(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
var handleGetAllNhanVienPhong = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          _context14.next = 3;
          return _importService["default"].getAllNhanVienPhong();
        case 3:
          data = _context14.sent;
          return _context14.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 7:
          _context14.prev = 7;
          _context14.t0 = _context14["catch"](0);
          console.error(_context14.t0);
          return _context14.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 11:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 7]]);
  }));
  return function handleGetAllNhanVienPhong(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();
var handleGetAllBV = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          _context15.next = 3;
          return _importService["default"].getAllBV();
        case 3:
          data = _context15.sent;
          return _context15.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 7:
          _context15.prev = 7;
          _context15.t0 = _context15["catch"](0);
          console.error(_context15.t0);
          return _context15.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 11:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 7]]);
  }));
  return function handleGetAllBV(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();
var handleGetAllKho = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          _context16.next = 3;
          return _importService["default"].getAllKho();
        case 3:
          data = _context16.sent;
          return _context16.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 7:
          _context16.prev = 7;
          _context16.t0 = _context16["catch"](0);
          console.error(_context16.t0);
          return _context16.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 11:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[0, 7]]);
  }));
  return function handleGetAllKho(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();
var handleGetLanKiemKe = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          _context17.next = 3;
          return _importService["default"].getLanKiemKe();
        case 3:
          data = _context17.sent;
          return _context17.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 7:
          _context17.prev = 7;
          _context17.t0 = _context17["catch"](0);
          console.error(_context17.t0);
          return _context17.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 11:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[0, 7]]);
  }));
  return function handleGetLanKiemKe(_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}();
var handleGetAllKhoQLTK = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          _context18.next = 3;
          return _importService["default"].getAllKhoQLTK();
        case 3:
          data = _context18.sent;
          return _context18.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 7:
          _context18.prev = 7;
          _context18.t0 = _context18["catch"](0);
          console.error(_context18.t0);
          return _context18.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 11:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[0, 7]]);
  }));
  return function handleGetAllKhoQLTK(_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}();
var handleGetAllKhoEdit = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          _context19.next = 3;
          return _importService["default"].getAllKhoEdit();
        case 3:
          data = _context19.sent;
          return _context19.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 7:
          _context19.prev = 7;
          _context19.t0 = _context19["catch"](0);
          console.error(_context19.t0);
          return _context19.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 11:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[0, 7]]);
  }));
  return function handleGetAllKhoEdit(_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}();
var handleGetAllViTri = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _context20.prev = 0;
          _context20.next = 3;
          return _importService["default"].getAllViTri();
        case 3:
          data = _context20.sent;
          return _context20.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 7:
          _context20.prev = 7;
          _context20.t0 = _context20["catch"](0);
          console.error(_context20.t0);
          return _context20.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 11:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[0, 7]]);
  }));
  return function handleGetAllViTri(_x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}();
var handleGetAllNguoiSuDung = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.prev = 0;
          _context21.next = 3;
          return _importService["default"].getAllNguoiSuDung();
        case 3:
          data = _context21.sent;
          return _context21.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 7:
          _context21.prev = 7;
          _context21.t0 = _context21["catch"](0);
          console.error(_context21.t0);
          return _context21.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 11:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[0, 7]]);
  }));
  return function handleGetAllNguoiSuDung(_x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}();
var handleCheckDongBo = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    var _req$body3, LanKiemKe, NamKiemKe, message;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.prev = 0;
          _req$body3 = req.body, LanKiemKe = _req$body3.LanKiemKe, NamKiemKe = _req$body3.NamKiemKe; //console.log('LanKiemKe', LanKiemKe)
          _context22.next = 4;
          return _importService["default"].getCheckDongBo(LanKiemKe, NamKiemKe);
        case 4:
          message = _context22.sent;
          return _context22.abrupt("return", res.status(200).json(message));
        case 8:
          _context22.prev = 8;
          _context22.t0 = _context22["catch"](0);
          console.error(_context22.t0);
          return _context22.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context22.stop();
      }
    }, _callee22, null, [[0, 8]]);
  }));
  return function handleCheckDongBo(_x43, _x44) {
    return _ref22.apply(this, arguments);
  };
}();
var handleGetAllTinhTrang = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.prev = 0;
          _context23.next = 3;
          return _importService["default"].getAllTinhTrang();
        case 3:
          data = _context23.sent;
          return _context23.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 7:
          _context23.prev = 7;
          _context23.t0 = _context23["catch"](0);
          console.error(_context23.t0);
          return _context23.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 11:
        case "end":
          return _context23.stop();
      }
    }, _callee23, null, [[0, 7]]);
  }));
  return function handleGetAllTinhTrang(_x45, _x46) {
    return _ref23.apply(this, arguments);
  };
}();

// let handleGetAllKhoQL = async (req, res) => {
//     try {
//         let { KhoTaiSan_Id } = req.body;
//         //console.log('KhoTaiSan_Id', KhoTaiSan_Id, UserId)
//         let data = await importService.getAllKhoQL(KhoTaiSan_Id);
//         return res.status(200).json({
//             errCode: 0,
//             errMessage: 'ok',
//             data
//         })
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ errCode: 500, errMessage: 'Internal Server Error' });
//     }
// }

var handleGetAllKhoQL = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _context24.prev = 0;
          _context24.next = 3;
          return _importService["default"].getAllKhoQL();
        case 3:
          data = _context24.sent;
          return _context24.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 7:
          _context24.prev = 7;
          _context24.t0 = _context24["catch"](0);
          console.error(_context24.t0);
          return _context24.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 11:
        case "end":
          return _context24.stop();
      }
    }, _callee24, null, [[0, 7]]);
  }));
  return function handleGetAllKhoQL(_x47, _x48) {
    return _ref24.apply(this, arguments);
  };
}();
var handleGetAllPL = /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          _context25.prev = 0;
          _context25.next = 3;
          return _importService["default"].getAllPL();
        case 3:
          data = _context25.sent;
          return _context25.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 7:
          _context25.prev = 7;
          _context25.t0 = _context25["catch"](0);
          console.error(_context25.t0);
          return _context25.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 11:
        case "end":
          return _context25.stop();
      }
    }, _callee25, null, [[0, 7]]);
  }));
  return function handleGetAllPL(_x49, _x50) {
    return _ref25.apply(this, arguments);
  };
}();
var handleGetAllTGBH = /*#__PURE__*/function () {
  var _ref26 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          _context26.prev = 0;
          _context26.next = 3;
          return _importService["default"].getAllTGBH();
        case 3:
          data = _context26.sent;
          return _context26.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 7:
          _context26.prev = 7;
          _context26.t0 = _context26["catch"](0);
          console.error(_context26.t0);
          return _context26.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 11:
        case "end":
          return _context26.stop();
      }
    }, _callee26, null, [[0, 7]]);
  }));
  return function handleGetAllTGBH(_x51, _x52) {
    return _ref26.apply(this, arguments);
  };
}();
var handleGetAllTGKH = /*#__PURE__*/function () {
  var _ref27 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          _context27.prev = 0;
          _context27.next = 3;
          return _importService["default"].getAllTGKH();
        case 3:
          data = _context27.sent;
          return _context27.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 7:
          _context27.prev = 7;
          _context27.t0 = _context27["catch"](0);
          console.error(_context27.t0);
          return _context27.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 11:
        case "end":
          return _context27.stop();
      }
    }, _callee27, null, [[0, 7]]);
  }));
  return function handleGetAllTGKH(_x53, _x54) {
    return _ref27.apply(this, arguments);
  };
}();
var handleEditTaiSan = /*#__PURE__*/function () {
  var _ref28 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee28(req, res) {
    var data, message;
    return _regeneratorRuntime().wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          _context28.prev = 0;
          data = req.body; //console.log('data', data)
          _context28.next = 4;
          return _importService["default"].editTaiSan(data);
        case 4:
          message = _context28.sent;
          return _context28.abrupt("return", res.status(200).json(message));
        case 8:
          _context28.prev = 8;
          _context28.t0 = _context28["catch"](0);
          return _context28.abrupt("return", res.status(200).json({
            errCode: -1,
            errMessage: "Error from server"
          }));
        case 11:
        case "end":
          return _context28.stop();
      }
    }, _callee28, null, [[0, 8]]);
  }));
  return function handleEditTaiSan(_x55, _x56) {
    return _ref28.apply(this, arguments);
  };
}();
var handleNewTaiSan = /*#__PURE__*/function () {
  var _ref29 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee29(req, res) {
    var data, message;
    return _regeneratorRuntime().wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          _context29.prev = 0;
          data = req.body; //console.log('data', data)
          _context29.next = 4;
          return _importService["default"].newTaiSan(data);
        case 4:
          message = _context29.sent;
          return _context29.abrupt("return", res.status(200).json(message));
        case 8:
          _context29.prev = 8;
          _context29.t0 = _context29["catch"](0);
          return _context29.abrupt("return", res.status(200).json({
            errCode: -1,
            errMessage: "Error from server"
          }));
        case 11:
        case "end":
          return _context29.stop();
      }
    }, _callee29, null, [[0, 8]]);
  }));
  return function handleNewTaiSan(_x57, _x58) {
    return _ref29.apply(this, arguments);
  };
}();
var handleCheckXoaTS = /*#__PURE__*/function () {
  var _ref30 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee31(req, res) {
    var Duoc_Id;
    return _regeneratorRuntime().wrap(function _callee31$(_context31) {
      while (1) switch (_context31.prev = _context31.next) {
        case 0:
          Duoc_Id = req.params.Duoc_Id; // console.log('id', id)
          return _context31.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref31 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee30(resolve, reject) {
              var message;
              return _regeneratorRuntime().wrap(function _callee30$(_context30) {
                while (1) switch (_context30.prev = _context30.next) {
                  case 0:
                    _context30.prev = 0;
                    _context30.next = 3;
                    return _importService["default"].checkXoaTS(Duoc_Id);
                  case 3:
                    message = _context30.sent;
                    return _context30.abrupt("return", res.status(200).json(message));
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
            return function (_x61, _x62) {
              return _ref31.apply(this, arguments);
            };
          }()));
        case 2:
        case "end":
          return _context31.stop();
      }
    }, _callee31);
  }));
  return function handleCheckXoaTS(_x59, _x60) {
    return _ref30.apply(this, arguments);
  };
}();
var handleGetAllCT = /*#__PURE__*/function () {
  var _ref32 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee32(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee32$(_context32) {
      while (1) switch (_context32.prev = _context32.next) {
        case 0:
          _context32.prev = 0;
          _context32.next = 3;
          return _importService["default"].getAllCT();
        case 3:
          data = _context32.sent;
          return _context32.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 7:
          _context32.prev = 7;
          _context32.t0 = _context32["catch"](0);
          console.error(_context32.t0);
          return _context32.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 11:
        case "end":
          return _context32.stop();
      }
    }, _callee32, null, [[0, 7]]);
  }));
  return function handleGetAllCT(_x63, _x64) {
    return _ref32.apply(this, arguments);
  };
}();
var handleGetCheckAllCT = /*#__PURE__*/function () {
  var _ref33 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee33(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee33$(_context33) {
      while (1) switch (_context33.prev = _context33.next) {
        case 0:
          _context33.prev = 0;
          _context33.next = 3;
          return _importService["default"].getCheckAllCT();
        case 3:
          data = _context33.sent;
          return _context33.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 7:
          _context33.prev = 7;
          _context33.t0 = _context33["catch"](0);
          console.error(_context33.t0);
          return _context33.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 11:
        case "end":
          return _context33.stop();
      }
    }, _callee33, null, [[0, 7]]);
  }));
  return function handleGetCheckAllCT(_x65, _x66) {
    return _ref33.apply(this, arguments);
  };
}();
var handleGetCheckAll = /*#__PURE__*/function () {
  var _ref34 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee34(req, res) {
    var machungtu, data;
    return _regeneratorRuntime().wrap(function _callee34$(_context34) {
      while (1) switch (_context34.prev = _context34.next) {
        case 0:
          _context34.prev = 0;
          machungtu = req.body.machungtu; //console.log('machungtu', machungtu)
          _context34.next = 4;
          return _importService["default"].getCheckAll(machungtu);
        case 4:
          data = _context34.sent;
          return _context34.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 8:
          _context34.prev = 8;
          _context34.t0 = _context34["catch"](0);
          console.error(_context34.t0);
          return _context34.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context34.stop();
      }
    }, _callee34, null, [[0, 8]]);
  }));
  return function handleGetCheckAll(_x67, _x68) {
    return _ref34.apply(this, arguments);
  };
}();
var handleGetAllLogChungTuHopDong = /*#__PURE__*/function () {
  var _ref35 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee35(req, res) {
    var nhacungcap_id, data;
    return _regeneratorRuntime().wrap(function _callee35$(_context35) {
      while (1) switch (_context35.prev = _context35.next) {
        case 0:
          _context35.prev = 0;
          nhacungcap_id = req.body.nhacungcap_id;
          _context35.next = 4;
          return _importService["default"].getAllLogChungTuHopDong(nhacungcap_id);
        case 4:
          data = _context35.sent;
          return _context35.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 8:
          _context35.prev = 8;
          _context35.t0 = _context35["catch"](0);
          console.error(_context35.t0);
          return _context35.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context35.stop();
      }
    }, _callee35, null, [[0, 8]]);
  }));
  return function handleGetAllLogChungTuHopDong(_x69, _x70) {
    return _ref35.apply(this, arguments);
  };
}();
var handleGetTaiSanTheoKho = /*#__PURE__*/function () {
  var _ref36 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee36(req, res) {
    var _req$body4, KhoTaiSan_Id, KhoQuanLy, UserId, DotKiemKe_Id, data;
    return _regeneratorRuntime().wrap(function _callee36$(_context36) {
      while (1) switch (_context36.prev = _context36.next) {
        case 0:
          _context36.prev = 0;
          _req$body4 = req.body, KhoTaiSan_Id = _req$body4.KhoTaiSan_Id, KhoQuanLy = _req$body4.KhoQuanLy, UserId = _req$body4.UserId, DotKiemKe_Id = _req$body4.DotKiemKe_Id;
          _context36.next = 4;
          return _importService["default"].getTaiSanTheoKho(KhoTaiSan_Id, KhoQuanLy, UserId, DotKiemKe_Id);
        case 4:
          data = _context36.sent;
          return _context36.abrupt("return", res.status(200).json(data));
        case 8:
          _context36.prev = 8;
          _context36.t0 = _context36["catch"](0);
          console.error(_context36.t0);
          return _context36.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context36.stop();
      }
    }, _callee36, null, [[0, 8]]);
  }));
  return function handleGetTaiSanTheoKho(_x71, _x72) {
    return _ref36.apply(this, arguments);
  };
}();
var handleGetTaiSanTheoKhoLichSu = /*#__PURE__*/function () {
  var _ref37 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee37(req, res) {
    var _req$body5, KhoTaiSan_Id, KhoQuanLy, UserId, DotKiemKe_Id, data;
    return _regeneratorRuntime().wrap(function _callee37$(_context37) {
      while (1) switch (_context37.prev = _context37.next) {
        case 0:
          _context37.prev = 0;
          _req$body5 = req.body, KhoTaiSan_Id = _req$body5.KhoTaiSan_Id, KhoQuanLy = _req$body5.KhoQuanLy, UserId = _req$body5.UserId, DotKiemKe_Id = _req$body5.DotKiemKe_Id;
          _context37.next = 4;
          return _importService["default"].getTaiSanTheoKhoLichSu(KhoTaiSan_Id, KhoQuanLy, UserId, DotKiemKe_Id);
        case 4:
          data = _context37.sent;
          return _context37.abrupt("return", res.status(200).json(data));
        case 8:
          _context37.prev = 8;
          _context37.t0 = _context37["catch"](0);
          console.error(_context37.t0);
          return _context37.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context37.stop();
      }
    }, _callee37, null, [[0, 8]]);
  }));
  return function handleGetTaiSanTheoKhoLichSu(_x73, _x74) {
    return _ref37.apply(this, arguments);
  };
}();
var handleGetTaiSanXacNhanTheoKhoLichSu = /*#__PURE__*/function () {
  var _ref38 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee38(req, res) {
    var _req$body6, KhoTaiSan_Id, KhoQuanLy, UserId, DotKiemKe_Id, data;
    return _regeneratorRuntime().wrap(function _callee38$(_context38) {
      while (1) switch (_context38.prev = _context38.next) {
        case 0:
          _context38.prev = 0;
          _req$body6 = req.body, KhoTaiSan_Id = _req$body6.KhoTaiSan_Id, KhoQuanLy = _req$body6.KhoQuanLy, UserId = _req$body6.UserId, DotKiemKe_Id = _req$body6.DotKiemKe_Id;
          _context38.next = 4;
          return _importService["default"].getTaiSanXacNhanTheoKhoLichSu(KhoTaiSan_Id, KhoQuanLy, UserId, DotKiemKe_Id);
        case 4:
          data = _context38.sent;
          return _context38.abrupt("return", res.status(200).json(data));
        case 8:
          _context38.prev = 8;
          _context38.t0 = _context38["catch"](0);
          console.error(_context38.t0);
          return _context38.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context38.stop();
      }
    }, _callee38, null, [[0, 8]]);
  }));
  return function handleGetTaiSanXacNhanTheoKhoLichSu(_x75, _x76) {
    return _ref38.apply(this, arguments);
  };
}();
var handleGetTaiSanXacNhanAllKhoLichSu = /*#__PURE__*/function () {
  var _ref39 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee39(req, res) {
    var _req$body7, KhoTaiSan_Id, UserId, DotKiemKe_Id, data;
    return _regeneratorRuntime().wrap(function _callee39$(_context39) {
      while (1) switch (_context39.prev = _context39.next) {
        case 0:
          _context39.prev = 0;
          _req$body7 = req.body, KhoTaiSan_Id = _req$body7.KhoTaiSan_Id, UserId = _req$body7.UserId, DotKiemKe_Id = _req$body7.DotKiemKe_Id;
          _context39.next = 4;
          return _importService["default"].getTaiSanXacNhanAllKhoLichSu(KhoTaiSan_Id, UserId, DotKiemKe_Id);
        case 4:
          data = _context39.sent;
          return _context39.abrupt("return", res.status(200).json(data));
        case 8:
          _context39.prev = 8;
          _context39.t0 = _context39["catch"](0);
          console.error(_context39.t0);
          return _context39.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context39.stop();
      }
    }, _callee39, null, [[0, 8]]);
  }));
  return function handleGetTaiSanXacNhanAllKhoLichSu(_x77, _x78) {
    return _ref39.apply(this, arguments);
  };
}();
var handleGetTaiSanXacNhanToanVienKhoLichSu = /*#__PURE__*/function () {
  var _ref40 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee40(req, res) {
    var _req$body8, TimKiemKhoQuanLy, UserId, data;
    return _regeneratorRuntime().wrap(function _callee40$(_context40) {
      while (1) switch (_context40.prev = _context40.next) {
        case 0:
          _context40.prev = 0;
          _req$body8 = req.body, TimKiemKhoQuanLy = _req$body8.TimKiemKhoQuanLy, UserId = _req$body8.UserId;
          _context40.next = 4;
          return _importService["default"].getTaiSanXacNhanToanVienKhoLichSu(TimKiemKhoQuanLy, UserId);
        case 4:
          data = _context40.sent;
          return _context40.abrupt("return", res.status(200).json(data));
        case 8:
          _context40.prev = 8;
          _context40.t0 = _context40["catch"](0);
          console.error(_context40.t0);
          return _context40.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context40.stop();
      }
    }, _callee40, null, [[0, 8]]);
  }));
  return function handleGetTaiSanXacNhanToanVienKhoLichSu(_x79, _x80) {
    return _ref40.apply(this, arguments);
  };
}();
var handleGetLichSuKiemKe = /*#__PURE__*/function () {
  var _ref41 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee41(req, res) {
    var _req$body9, KhoTaiSan_Id, UserId, data;
    return _regeneratorRuntime().wrap(function _callee41$(_context41) {
      while (1) switch (_context41.prev = _context41.next) {
        case 0:
          _context41.prev = 0;
          _req$body9 = req.body, KhoTaiSan_Id = _req$body9.KhoTaiSan_Id, UserId = _req$body9.UserId;
          _context41.next = 4;
          return _importService["default"].getLichSuKiemKe(KhoTaiSan_Id, UserId);
        case 4:
          data = _context41.sent;
          return _context41.abrupt("return", res.status(200).json(data));
        case 8:
          _context41.prev = 8;
          _context41.t0 = _context41["catch"](0);
          console.error(_context41.t0);
          return _context41.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context41.stop();
      }
    }, _callee41, null, [[0, 8]]);
  }));
  return function handleGetLichSuKiemKe(_x81, _x82) {
    return _ref41.apply(this, arguments);
  };
}();
var handleGetTaiSanTheoKhoQL = /*#__PURE__*/function () {
  var _ref42 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee42(req, res) {
    var _req$body10, KhoSuDung, KhoQuanLy, DotKiemKe_Id, data;
    return _regeneratorRuntime().wrap(function _callee42$(_context42) {
      while (1) switch (_context42.prev = _context42.next) {
        case 0:
          _context42.prev = 0;
          _req$body10 = req.body, KhoSuDung = _req$body10.KhoSuDung, KhoQuanLy = _req$body10.KhoQuanLy, DotKiemKe_Id = _req$body10.DotKiemKe_Id; //console.log('KhoTaiSan_Id', KhoTaiSan_Id, UserId)
          _context42.next = 4;
          return _importService["default"].getTaiSanTheoKhoQL(KhoSuDung, KhoQuanLy, DotKiemKe_Id);
        case 4:
          data = _context42.sent;
          return _context42.abrupt("return", res.status(200).json(data));
        case 8:
          _context42.prev = 8;
          _context42.t0 = _context42["catch"](0);
          console.error(_context42.t0);
          return _context42.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context42.stop();
      }
    }, _callee42, null, [[0, 8]]);
  }));
  return function handleGetTaiSanTheoKhoQL(_x83, _x84) {
    return _ref42.apply(this, arguments);
  };
}();
var handleGetMaTaiSanKiemKe = /*#__PURE__*/function () {
  var _ref43 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee43(req, res) {
    var _req$body11, MaTaiSan, KhoTaiSan_Id, KhoQuanLy, UserId, DotKiemKe_Id, KhoaPhongHienTai, data;
    return _regeneratorRuntime().wrap(function _callee43$(_context43) {
      while (1) switch (_context43.prev = _context43.next) {
        case 0:
          _context43.prev = 0;
          _req$body11 = req.body, MaTaiSan = _req$body11.MaTaiSan, KhoTaiSan_Id = _req$body11.KhoTaiSan_Id, KhoQuanLy = _req$body11.KhoQuanLy, UserId = _req$body11.UserId, DotKiemKe_Id = _req$body11.DotKiemKe_Id, KhoaPhongHienTai = _req$body11.KhoaPhongHienTai; //console.log('handleGetMaTaiSanKiemKe', KhoTaiSan_Id, MaTaiSan)
          _context43.next = 4;
          return _importService["default"].getMaTaiSanKiemKe(MaTaiSan, KhoTaiSan_Id, KhoQuanLy, UserId, DotKiemKe_Id, KhoaPhongHienTai);
        case 4:
          data = _context43.sent;
          return _context43.abrupt("return", res.status(200).json(data));
        case 8:
          _context43.prev = 8;
          _context43.t0 = _context43["catch"](0);
          console.error(_context43.t0);
          return _context43.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context43.stop();
      }
    }, _callee43, null, [[0, 8]]);
  }));
  return function handleGetMaTaiSanKiemKe(_x85, _x86) {
    return _ref43.apply(this, arguments);
  };
}();
var handleGetSerialKiemKe = /*#__PURE__*/function () {
  var _ref44 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee44(req, res) {
    var _req$body12, Serial, KhoTaiSan_Id, KhoQuanLy, UserId, DotKiemKe_Id, KhoaPhongHienTai, data;
    return _regeneratorRuntime().wrap(function _callee44$(_context44) {
      while (1) switch (_context44.prev = _context44.next) {
        case 0:
          _context44.prev = 0;
          _req$body12 = req.body, Serial = _req$body12.Serial, KhoTaiSan_Id = _req$body12.KhoTaiSan_Id, KhoQuanLy = _req$body12.KhoQuanLy, UserId = _req$body12.UserId, DotKiemKe_Id = _req$body12.DotKiemKe_Id, KhoaPhongHienTai = _req$body12.KhoaPhongHienTai; //console.log('handleGetMaTaiSanKiemKe', KhoTaiSan_Id, MaTaiSan)
          _context44.next = 4;
          return _importService["default"].getSerialKiemKe(Serial, KhoTaiSan_Id, KhoQuanLy, UserId, DotKiemKe_Id, KhoaPhongHienTai);
        case 4:
          data = _context44.sent;
          return _context44.abrupt("return", res.status(200).json(data));
        case 8:
          _context44.prev = 8;
          _context44.t0 = _context44["catch"](0);
          console.error(_context44.t0);
          return _context44.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context44.stop();
      }
    }, _callee44, null, [[0, 8]]);
  }));
  return function handleGetSerialKiemKe(_x87, _x88) {
    return _ref44.apply(this, arguments);
  };
}();
var handleGetCheckAllLogChungTuHopDong = /*#__PURE__*/function () {
  var _ref45 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee45(req, res) {
    var nhacungcap_id, data;
    return _regeneratorRuntime().wrap(function _callee45$(_context45) {
      while (1) switch (_context45.prev = _context45.next) {
        case 0:
          _context45.prev = 0;
          nhacungcap_id = req.body.nhacungcap_id;
          _context45.next = 4;
          return _importService["default"].getCheckAllLogChungTuHopDong(nhacungcap_id);
        case 4:
          data = _context45.sent;
          return _context45.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 8:
          _context45.prev = 8;
          _context45.t0 = _context45["catch"](0);
          console.error(_context45.t0);
          return _context45.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context45.stop();
      }
    }, _callee45, null, [[0, 8]]);
  }));
  return function handleGetCheckAllLogChungTuHopDong(_x89, _x90) {
    return _ref45.apply(this, arguments);
  };
}();
var handleGetAllLogChungTuPO = /*#__PURE__*/function () {
  var _ref46 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee46(req, res) {
    var sopo, data;
    return _regeneratorRuntime().wrap(function _callee46$(_context46) {
      while (1) switch (_context46.prev = _context46.next) {
        case 0:
          _context46.prev = 0;
          sopo = req.body.sopo;
          _context46.next = 4;
          return _importService["default"].getAllLogChungTuPO(sopo);
        case 4:
          data = _context46.sent;
          return _context46.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 8:
          _context46.prev = 8;
          _context46.t0 = _context46["catch"](0);
          console.error(_context46.t0);
          return _context46.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context46.stop();
      }
    }, _callee46, null, [[0, 8]]);
  }));
  return function handleGetAllLogChungTuPO(_x91, _x92) {
    return _ref46.apply(this, arguments);
  };
}();
var handleGetCheckAllLogChungTuPO = /*#__PURE__*/function () {
  var _ref47 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee47(req, res) {
    var sopo, data;
    return _regeneratorRuntime().wrap(function _callee47$(_context47) {
      while (1) switch (_context47.prev = _context47.next) {
        case 0:
          _context47.prev = 0;
          sopo = req.body.sopo;
          _context47.next = 4;
          return _importService["default"].getCheckAllLogChungTuPO(sopo);
        case 4:
          data = _context47.sent;
          return _context47.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 8:
          _context47.prev = 8;
          _context47.t0 = _context47["catch"](0);
          console.error(_context47.t0);
          return _context47.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context47.stop();
      }
    }, _callee47, null, [[0, 8]]);
  }));
  return function handleGetCheckAllLogChungTuPO(_x93, _x94) {
    return _ref47.apply(this, arguments);
  };
}();
var handleGetAllLogPOPR = /*#__PURE__*/function () {
  var _ref48 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee48(req, res) {
    var sopr, data;
    return _regeneratorRuntime().wrap(function _callee48$(_context48) {
      while (1) switch (_context48.prev = _context48.next) {
        case 0:
          _context48.prev = 0;
          sopr = req.body.sopr;
          _context48.next = 4;
          return _importService["default"].getAllLogPOPR(sopr);
        case 4:
          data = _context48.sent;
          return _context48.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 8:
          _context48.prev = 8;
          _context48.t0 = _context48["catch"](0);
          console.error(_context48.t0);
          return _context48.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context48.stop();
      }
    }, _callee48, null, [[0, 8]]);
  }));
  return function handleGetAllLogPOPR(_x95, _x96) {
    return _ref48.apply(this, arguments);
  };
}();
var handleGetLogPOPR = /*#__PURE__*/function () {
  var _ref49 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee49(req, res) {
    var sopr, data;
    return _regeneratorRuntime().wrap(function _callee49$(_context49) {
      while (1) switch (_context49.prev = _context49.next) {
        case 0:
          _context49.prev = 0;
          sopr = req.body.sopr;
          _context49.next = 4;
          return _importService["default"].getLogPOPR(sopr);
        case 4:
          data = _context49.sent;
          return _context49.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 8:
          _context49.prev = 8;
          _context49.t0 = _context49["catch"](0);
          console.error(_context49.t0);
          return _context49.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context49.stop();
      }
    }, _callee49, null, [[0, 8]]);
  }));
  return function handleGetLogPOPR(_x97, _x98) {
    return _ref49.apply(this, arguments);
  };
}();
var handleGetCheckHopDong = /*#__PURE__*/function () {
  var _ref50 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee50(req, res) {
    var nhacungcap_id, data;
    return _regeneratorRuntime().wrap(function _callee50$(_context50) {
      while (1) switch (_context50.prev = _context50.next) {
        case 0:
          _context50.prev = 0;
          nhacungcap_id = req.body.nhacungcap_id;
          _context50.next = 4;
          return _importService["default"].getCheckHopDong(nhacungcap_id);
        case 4:
          data = _context50.sent;
          return _context50.abrupt("return", res.status(200).json(data));
        case 8:
          _context50.prev = 8;
          _context50.t0 = _context50["catch"](0);
          console.error(_context50.t0);
          return _context50.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context50.stop();
      }
    }, _callee50, null, [[0, 8]]);
  }));
  return function handleGetCheckHopDong(_x99, _x100) {
    return _ref50.apply(this, arguments);
  };
}();
var handleGetCheckPO = /*#__PURE__*/function () {
  var _ref51 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee51(req, res) {
    var sopo, data;
    return _regeneratorRuntime().wrap(function _callee51$(_context51) {
      while (1) switch (_context51.prev = _context51.next) {
        case 0:
          _context51.prev = 0;
          sopo = req.body.sopo;
          _context51.next = 4;
          return _importService["default"].getCheckPO(sopo);
        case 4:
          data = _context51.sent;
          return _context51.abrupt("return", res.status(200).json(data));
        case 8:
          _context51.prev = 8;
          _context51.t0 = _context51["catch"](0);
          console.error(_context51.t0);
          return _context51.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context51.stop();
      }
    }, _callee51, null, [[0, 8]]);
  }));
  return function handleGetCheckPO(_x101, _x102) {
    return _ref51.apply(this, arguments);
  };
}();
var handleGetCheckEditMaTaiSanPO = /*#__PURE__*/function () {
  var _ref52 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee52(req, res) {
    var _req$body13, sopo, mataisan, data;
    return _regeneratorRuntime().wrap(function _callee52$(_context52) {
      while (1) switch (_context52.prev = _context52.next) {
        case 0:
          _context52.prev = 0;
          _req$body13 = req.body, sopo = _req$body13.sopo, mataisan = _req$body13.mataisan;
          _context52.next = 4;
          return _importService["default"].getCheckEditMaTaiSanPO(sopo, mataisan);
        case 4:
          data = _context52.sent;
          return _context52.abrupt("return", res.status(200).json(data));
        case 8:
          _context52.prev = 8;
          _context52.t0 = _context52["catch"](0);
          console.error(_context52.t0);
          return _context52.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context52.stop();
      }
    }, _callee52, null, [[0, 8]]);
  }));
  return function handleGetCheckEditMaTaiSanPO(_x103, _x104) {
    return _ref52.apply(this, arguments);
  };
}();
var handleGetCheckEditSoLuongPO = /*#__PURE__*/function () {
  var _ref53 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee53(req, res) {
    var _req$body14, sopo, mataisan, data;
    return _regeneratorRuntime().wrap(function _callee53$(_context53) {
      while (1) switch (_context53.prev = _context53.next) {
        case 0:
          _context53.prev = 0;
          _req$body14 = req.body, sopo = _req$body14.sopo, mataisan = _req$body14.mataisan;
          _context53.next = 4;
          return _importService["default"].getCheckEditSoLuongPO(sopo, mataisan);
        case 4:
          data = _context53.sent;
          return _context53.abrupt("return", res.status(200).json(data));
        case 8:
          _context53.prev = 8;
          _context53.t0 = _context53["catch"](0);
          console.error(_context53.t0);
          return _context53.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context53.stop();
      }
    }, _callee53, null, [[0, 8]]);
  }));
  return function handleGetCheckEditSoLuongPO(_x105, _x106) {
    return _ref53.apply(this, arguments);
  };
}();
var handleGetCheckEditMaTaiSanPR = /*#__PURE__*/function () {
  var _ref54 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee54(req, res) {
    var _req$body15, sopr, mataisan, data;
    return _regeneratorRuntime().wrap(function _callee54$(_context54) {
      while (1) switch (_context54.prev = _context54.next) {
        case 0:
          _context54.prev = 0;
          _req$body15 = req.body, sopr = _req$body15.sopr, mataisan = _req$body15.mataisan;
          _context54.next = 4;
          return _importService["default"].getCheckEditMaTaiSanPR(sopr, mataisan);
        case 4:
          data = _context54.sent;
          return _context54.abrupt("return", res.status(200).json(data));
        case 8:
          _context54.prev = 8;
          _context54.t0 = _context54["catch"](0);
          console.error(_context54.t0);
          return _context54.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context54.stop();
      }
    }, _callee54, null, [[0, 8]]);
  }));
  return function handleGetCheckEditMaTaiSanPR(_x107, _x108) {
    return _ref54.apply(this, arguments);
  };
}();
var handleGetCheckPR = /*#__PURE__*/function () {
  var _ref55 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee55(req, res) {
    var sopr, data;
    return _regeneratorRuntime().wrap(function _callee55$(_context55) {
      while (1) switch (_context55.prev = _context55.next) {
        case 0:
          _context55.prev = 0;
          sopr = req.body.sopr;
          _context55.next = 4;
          return _importService["default"].getCheckPR(sopr);
        case 4:
          data = _context55.sent;
          return _context55.abrupt("return", res.status(200).json(data));
        case 8:
          _context55.prev = 8;
          _context55.t0 = _context55["catch"](0);
          console.error(_context55.t0);
          return _context55.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context55.stop();
      }
    }, _callee55, null, [[0, 8]]);
  }));
  return function handleGetCheckPR(_x109, _x110) {
    return _ref55.apply(this, arguments);
  };
}();
var handleGetAllHD = /*#__PURE__*/function () {
  var _ref56 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee56(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee56$(_context56) {
      while (1) switch (_context56.prev = _context56.next) {
        case 0:
          _context56.prev = 0;
          _context56.next = 3;
          return _importService["default"].getAllHD();
        case 3:
          data = _context56.sent;
          return _context56.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 7:
          _context56.prev = 7;
          _context56.t0 = _context56["catch"](0);
          console.error(_context56.t0);
          return _context56.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 11:
        case "end":
          return _context56.stop();
      }
    }, _callee56, null, [[0, 7]]);
  }));
  return function handleGetAllHD(_x111, _x112) {
    return _ref56.apply(this, arguments);
  };
}();
var handleGetAllPR = /*#__PURE__*/function () {
  var _ref57 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee57(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee57$(_context57) {
      while (1) switch (_context57.prev = _context57.next) {
        case 0:
          _context57.prev = 0;
          _context57.next = 3;
          return _importService["default"].getAllPR();
        case 3:
          data = _context57.sent;
          return _context57.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 7:
          _context57.prev = 7;
          _context57.t0 = _context57["catch"](0);
          console.error(_context57.t0);
          return _context57.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 11:
        case "end":
          return _context57.stop();
      }
    }, _callee57, null, [[0, 7]]);
  }));
  return function handleGetAllPR(_x113, _x114) {
    return _ref57.apply(this, arguments);
  };
}();
var handleImportPO = /*#__PURE__*/function () {
  var _ref58 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee59(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee59$(_context59) {
      while (1) switch (_context59.prev = _context59.next) {
        case 0:
          data = req.body;
          return _context59.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref59 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee58(resolve, reject) {
              var message;
              return _regeneratorRuntime().wrap(function _callee58$(_context58) {
                while (1) switch (_context58.prev = _context58.next) {
                  case 0:
                    _context58.prev = 0;
                    _context58.next = 3;
                    return _importService["default"].importPO(data);
                  case 3:
                    message = _context58.sent;
                    return _context58.abrupt("return", res.status(200).json(message));
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
            return function (_x117, _x118) {
              return _ref59.apply(this, arguments);
            };
          }()));
        case 2:
        case "end":
          return _context59.stop();
      }
    }, _callee59);
  }));
  return function handleImportPO(_x115, _x116) {
    return _ref58.apply(this, arguments);
  };
}();
var handleImportPR = /*#__PURE__*/function () {
  var _ref60 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee61(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee61$(_context61) {
      while (1) switch (_context61.prev = _context61.next) {
        case 0:
          data = req.body;
          return _context61.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref61 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee60(resolve, reject) {
              var message;
              return _regeneratorRuntime().wrap(function _callee60$(_context60) {
                while (1) switch (_context60.prev = _context60.next) {
                  case 0:
                    _context60.prev = 0;
                    _context60.next = 3;
                    return _importService["default"].importPR(data);
                  case 3:
                    message = _context60.sent;
                    return _context60.abrupt("return", res.status(200).json(message));
                  case 7:
                    _context60.prev = 7;
                    _context60.t0 = _context60["catch"](0);
                    reject(_context60.t0);
                  case 10:
                  case "end":
                    return _context60.stop();
                }
              }, _callee60, null, [[0, 7]]);
            }));
            return function (_x121, _x122) {
              return _ref61.apply(this, arguments);
            };
          }()));
        case 2:
        case "end":
          return _context61.stop();
      }
    }, _callee61);
  }));
  return function handleImportPR(_x119, _x120) {
    return _ref60.apply(this, arguments);
  };
}();
var handleImportHD = /*#__PURE__*/function () {
  var _ref62 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee63(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee63$(_context63) {
      while (1) switch (_context63.prev = _context63.next) {
        case 0:
          data = req.body;
          return _context63.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref63 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee62(resolve, reject) {
              var message;
              return _regeneratorRuntime().wrap(function _callee62$(_context62) {
                while (1) switch (_context62.prev = _context62.next) {
                  case 0:
                    _context62.prev = 0;
                    _context62.next = 3;
                    return _importService["default"].importHD(data);
                  case 3:
                    message = _context62.sent;
                    return _context62.abrupt("return", res.status(200).json(message));
                  case 7:
                    _context62.prev = 7;
                    _context62.t0 = _context62["catch"](0);
                    reject(_context62.t0);
                  case 10:
                  case "end":
                    return _context62.stop();
                }
              }, _callee62, null, [[0, 7]]);
            }));
            return function (_x125, _x126) {
              return _ref63.apply(this, arguments);
            };
          }()));
        case 2:
        case "end":
          return _context63.stop();
      }
    }, _callee63);
  }));
  return function handleImportHD(_x123, _x124) {
    return _ref62.apply(this, arguments);
  };
}();
var handleEditMaTaiSan = /*#__PURE__*/function () {
  var _ref64 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee65(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee65$(_context65) {
      while (1) switch (_context65.prev = _context65.next) {
        case 0:
          data = req.body;
          return _context65.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref65 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee64(resolve, reject) {
              var message;
              return _regeneratorRuntime().wrap(function _callee64$(_context64) {
                while (1) switch (_context64.prev = _context64.next) {
                  case 0:
                    _context64.prev = 0;
                    _context64.next = 3;
                    return _importService["default"].editMaTaiSan(data);
                  case 3:
                    message = _context64.sent;
                    return _context64.abrupt("return", res.status(200).json(message));
                  case 7:
                    _context64.prev = 7;
                    _context64.t0 = _context64["catch"](0);
                    reject(_context64.t0);
                  case 10:
                  case "end":
                    return _context64.stop();
                }
              }, _callee64, null, [[0, 7]]);
            }));
            return function (_x129, _x130) {
              return _ref65.apply(this, arguments);
            };
          }()));
        case 2:
        case "end":
          return _context65.stop();
      }
    }, _callee65);
  }));
  return function handleEditMaTaiSan(_x127, _x128) {
    return _ref64.apply(this, arguments);
  };
}();
var handleEditKhoaPhongHienTai = /*#__PURE__*/function () {
  var _ref66 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee67(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee67$(_context67) {
      while (1) switch (_context67.prev = _context67.next) {
        case 0:
          data = req.body;
          return _context67.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref67 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee66(resolve, reject) {
              var message;
              return _regeneratorRuntime().wrap(function _callee66$(_context66) {
                while (1) switch (_context66.prev = _context66.next) {
                  case 0:
                    _context66.prev = 0;
                    _context66.next = 3;
                    return _importService["default"].editKhoaPhongHienTai(data);
                  case 3:
                    message = _context66.sent;
                    return _context66.abrupt("return", res.status(200).json(message));
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
            return function (_x133, _x134) {
              return _ref67.apply(this, arguments);
            };
          }()));
        case 2:
        case "end":
          return _context67.stop();
      }
    }, _callee67);
  }));
  return function handleEditKhoaPhongHienTai(_x131, _x132) {
    return _ref66.apply(this, arguments);
  };
}();
var handleEditMaTaiSanNew = /*#__PURE__*/function () {
  var _ref68 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee69(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee69$(_context69) {
      while (1) switch (_context69.prev = _context69.next) {
        case 0:
          data = req.body;
          return _context69.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref69 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee68(resolve, reject) {
              var message;
              return _regeneratorRuntime().wrap(function _callee68$(_context68) {
                while (1) switch (_context68.prev = _context68.next) {
                  case 0:
                    _context68.prev = 0;
                    _context68.next = 3;
                    return _importService["default"].editMaTaiSanNew(data);
                  case 3:
                    message = _context68.sent;
                    return _context68.abrupt("return", res.status(200).json(message));
                  case 7:
                    _context68.prev = 7;
                    _context68.t0 = _context68["catch"](0);
                    reject(_context68.t0);
                  case 10:
                  case "end":
                    return _context68.stop();
                }
              }, _callee68, null, [[0, 7]]);
            }));
            return function (_x137, _x138) {
              return _ref69.apply(this, arguments);
            };
          }()));
        case 2:
        case "end":
          return _context69.stop();
      }
    }, _callee69);
  }));
  return function handleEditMaTaiSanNew(_x135, _x136) {
    return _ref68.apply(this, arguments);
  };
}();
var handleGetChungTu = /*#__PURE__*/function () {
  var _ref70 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee70(req, res) {
    var _req$body16, machungtu, UserId, data;
    return _regeneratorRuntime().wrap(function _callee70$(_context70) {
      while (1) switch (_context70.prev = _context70.next) {
        case 0:
          _context70.prev = 0;
          _req$body16 = req.body, machungtu = _req$body16.machungtu, UserId = _req$body16.UserId; //console.log('machungtu', machungtu, UserId)
          _context70.next = 4;
          return _importService["default"].getMaChungTu(machungtu, UserId);
        case 4:
          data = _context70.sent;
          return _context70.abrupt("return", res.status(200).json(data));
        case 8:
          _context70.prev = 8;
          _context70.t0 = _context70["catch"](0);
          console.error(_context70.t0);
          return _context70.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context70.stop();
      }
    }, _callee70, null, [[0, 8]]);
  }));
  return function handleGetChungTu(_x139, _x140) {
    return _ref70.apply(this, arguments);
  };
}();
var handleGetCheckChungTu = /*#__PURE__*/function () {
  var _ref71 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee71(req, res) {
    var _req$body17, machungtu, UserId, data;
    return _regeneratorRuntime().wrap(function _callee71$(_context71) {
      while (1) switch (_context71.prev = _context71.next) {
        case 0:
          _context71.prev = 0;
          _req$body17 = req.body, machungtu = _req$body17.machungtu, UserId = _req$body17.UserId; //console.log('machungtu', machungtu, UserId)
          _context71.next = 4;
          return _importService["default"].getCheckMaChungTu(machungtu, UserId);
        case 4:
          data = _context71.sent;
          return _context71.abrupt("return", res.status(200).json(data));
        case 8:
          _context71.prev = 8;
          _context71.t0 = _context71["catch"](0);
          console.error(_context71.t0);
          return _context71.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context71.stop();
      }
    }, _callee71, null, [[0, 8]]);
  }));
  return function handleGetCheckChungTu(_x141, _x142) {
    return _ref71.apply(this, arguments);
  };
}();
var handleGetMaChungTu = /*#__PURE__*/function () {
  var _ref72 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee72(req, res) {
    var _req$body18, machungtu, UserId, data;
    return _regeneratorRuntime().wrap(function _callee72$(_context72) {
      while (1) switch (_context72.prev = _context72.next) {
        case 0:
          _context72.prev = 0;
          _req$body18 = req.body, machungtu = _req$body18.machungtu, UserId = _req$body18.UserId; //console.log('machungtu', machungtu, UserId)
          _context72.next = 4;
          return _importService["default"].getChungTu(machungtu, UserId);
        case 4:
          data = _context72.sent;
          return _context72.abrupt("return", res.status(200).json(data));
        case 8:
          _context72.prev = 8;
          _context72.t0 = _context72["catch"](0);
          console.error(_context72.t0);
          return _context72.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context72.stop();
      }
    }, _callee72, null, [[0, 8]]);
  }));
  return function handleGetMaChungTu(_x143, _x144) {
    return _ref72.apply(this, arguments);
  };
}();
var handleCheckMaChungTuHD = /*#__PURE__*/function () {
  var _ref73 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee73(req, res) {
    var machungtu, data;
    return _regeneratorRuntime().wrap(function _callee73$(_context73) {
      while (1) switch (_context73.prev = _context73.next) {
        case 0:
          _context73.prev = 0;
          machungtu = req.body.machungtu; //console.log('machungtu', machungtu, UserId)
          _context73.next = 4;
          return _importService["default"].checkMaChungTuHD(machungtu);
        case 4:
          data = _context73.sent;
          return _context73.abrupt("return", res.status(200).json(data));
        case 8:
          _context73.prev = 8;
          _context73.t0 = _context73["catch"](0);
          console.error(_context73.t0);
          return _context73.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context73.stop();
      }
    }, _callee73, null, [[0, 8]]);
  }));
  return function handleCheckMaChungTuHD(_x145, _x146) {
    return _ref73.apply(this, arguments);
  };
}();
var handleCheckXoaChungTu = /*#__PURE__*/function () {
  var _ref74 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee74(req, res) {
    var machungtu, data;
    return _regeneratorRuntime().wrap(function _callee74$(_context74) {
      while (1) switch (_context74.prev = _context74.next) {
        case 0:
          _context74.prev = 0;
          machungtu = req.body.machungtu; //console.log('machungtu', machungtu, UserId)
          _context74.next = 4;
          return _importService["default"].checkXoaChungTu(machungtu);
        case 4:
          data = _context74.sent;
          return _context74.abrupt("return", res.status(200).json(data));
        case 8:
          _context74.prev = 8;
          _context74.t0 = _context74["catch"](0);
          console.error(_context74.t0);
          return _context74.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context74.stop();
      }
    }, _callee74, null, [[0, 8]]);
  }));
  return function handleCheckXoaChungTu(_x147, _x148) {
    return _ref74.apply(this, arguments);
  };
}();
var handleCheckXoaCheckChungTu = /*#__PURE__*/function () {
  var _ref75 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee75(req, res) {
    var machungtu, data;
    return _regeneratorRuntime().wrap(function _callee75$(_context75) {
      while (1) switch (_context75.prev = _context75.next) {
        case 0:
          _context75.prev = 0;
          machungtu = req.body.machungtu; //console.log('machungtu', machungtu, UserId)
          _context75.next = 4;
          return _importService["default"].checkXoaCheckChungTu(machungtu);
        case 4:
          data = _context75.sent;
          return _context75.abrupt("return", res.status(200).json(data));
        case 8:
          _context75.prev = 8;
          _context75.t0 = _context75["catch"](0);
          console.error(_context75.t0);
          return _context75.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context75.stop();
      }
    }, _callee75, null, [[0, 8]]);
  }));
  return function handleCheckXoaCheckChungTu(_x149, _x150) {
    return _ref75.apply(this, arguments);
  };
}();
var handleCheckMaChungTuPO = /*#__PURE__*/function () {
  var _ref76 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee76(req, res) {
    var machungtu, data;
    return _regeneratorRuntime().wrap(function _callee76$(_context76) {
      while (1) switch (_context76.prev = _context76.next) {
        case 0:
          _context76.prev = 0;
          machungtu = req.body.machungtu; //console.log('machungtu', machungtu, UserId)
          _context76.next = 4;
          return _importService["default"].checkMaChungTuPO(machungtu);
        case 4:
          data = _context76.sent;
          return _context76.abrupt("return", res.status(200).json(data));
        case 8:
          _context76.prev = 8;
          _context76.t0 = _context76["catch"](0);
          console.error(_context76.t0);
          return _context76.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context76.stop();
      }
    }, _callee76, null, [[0, 8]]);
  }));
  return function handleCheckMaChungTuPO(_x151, _x152) {
    return _ref76.apply(this, arguments);
  };
}();
var handleCheckPOPR = /*#__PURE__*/function () {
  var _ref77 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee77(req, res) {
    var sopo, data;
    return _regeneratorRuntime().wrap(function _callee77$(_context77) {
      while (1) switch (_context77.prev = _context77.next) {
        case 0:
          _context77.prev = 0;
          sopo = req.body.sopo; //console.log('machungtu', machungtu, UserId)
          _context77.next = 4;
          return _importService["default"].checkPOPR(sopo);
        case 4:
          data = _context77.sent;
          return _context77.abrupt("return", res.status(200).json(data));
        case 8:
          _context77.prev = 8;
          _context77.t0 = _context77["catch"](0);
          console.error(_context77.t0);
          return _context77.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context77.stop();
      }
    }, _callee77, null, [[0, 8]]);
  }));
  return function handleCheckPOPR(_x153, _x154) {
    return _ref77.apply(this, arguments);
  };
}();
var handleGetOnePo = /*#__PURE__*/function () {
  var _ref78 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee78(req, res) {
    var machungtu, data;
    return _regeneratorRuntime().wrap(function _callee78$(_context78) {
      while (1) switch (_context78.prev = _context78.next) {
        case 0:
          _context78.prev = 0;
          machungtu = req.body.machungtu;
          _context78.next = 4;
          return _importService["default"].getOnePo(machungtu);
        case 4:
          data = _context78.sent;
          return _context78.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 8:
          _context78.prev = 8;
          _context78.t0 = _context78["catch"](0);
          console.error(_context78.t0);
          return _context78.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context78.stop();
      }
    }, _callee78, null, [[0, 8]]);
  }));
  return function handleGetOnePo(_x155, _x156) {
    return _ref78.apply(this, arguments);
  };
}();
var handleGetOneCT = /*#__PURE__*/function () {
  var _ref79 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee79(req, res) {
    var machungtu, data;
    return _regeneratorRuntime().wrap(function _callee79$(_context79) {
      while (1) switch (_context79.prev = _context79.next) {
        case 0:
          _context79.prev = 0;
          machungtu = req.body.machungtu;
          _context79.next = 4;
          return _importService["default"].getOneCT(machungtu);
        case 4:
          data = _context79.sent;
          return _context79.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 8:
          _context79.prev = 8;
          _context79.t0 = _context79["catch"](0);
          console.error(_context79.t0);
          return _context79.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context79.stop();
      }
    }, _callee79, null, [[0, 8]]);
  }));
  return function handleGetOneCT(_x157, _x158) {
    return _ref79.apply(this, arguments);
  };
}();
var handleGetCheckOneCT = /*#__PURE__*/function () {
  var _ref80 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee80(req, res) {
    var machungtu, data;
    return _regeneratorRuntime().wrap(function _callee80$(_context80) {
      while (1) switch (_context80.prev = _context80.next) {
        case 0:
          _context80.prev = 0;
          machungtu = req.body.machungtu;
          _context80.next = 4;
          return _importService["default"].getCheckOneCT(machungtu);
        case 4:
          data = _context80.sent;
          return _context80.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 8:
          _context80.prev = 8;
          _context80.t0 = _context80["catch"](0);
          console.error(_context80.t0);
          return _context80.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context80.stop();
      }
    }, _callee80, null, [[0, 8]]);
  }));
  return function handleGetCheckOneCT(_x159, _x160) {
    return _ref80.apply(this, arguments);
  };
}();
var handleGetOnePR = /*#__PURE__*/function () {
  var _ref81 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee81(req, res) {
    var sopo, data;
    return _regeneratorRuntime().wrap(function _callee81$(_context81) {
      while (1) switch (_context81.prev = _context81.next) {
        case 0:
          _context81.prev = 0;
          sopo = req.body.sopo; //console.log('soPO handleGetOnePR', soPO)
          _context81.next = 4;
          return _importService["default"].getOnePR(sopo);
        case 4:
          data = _context81.sent;
          return _context81.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 8:
          _context81.prev = 8;
          _context81.t0 = _context81["catch"](0);
          console.error(_context81.t0);
          return _context81.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context81.stop();
      }
    }, _callee81, null, [[0, 8]]);
  }));
  return function handleGetOnePR(_x161, _x162) {
    return _ref81.apply(this, arguments);
  };
}();
var handleGetOneHD = /*#__PURE__*/function () {
  var _ref82 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee82(req, res) {
    var machungtu, data;
    return _regeneratorRuntime().wrap(function _callee82$(_context82) {
      while (1) switch (_context82.prev = _context82.next) {
        case 0:
          _context82.prev = 0;
          machungtu = req.body.machungtu; //console.log('soPO handleGetOnePR', soPO)
          _context82.next = 4;
          return _importService["default"].getOneHD(machungtu);
        case 4:
          data = _context82.sent;
          return _context82.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
          }));
        case 8:
          _context82.prev = 8;
          _context82.t0 = _context82["catch"](0);
          console.error(_context82.t0);
          return _context82.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context82.stop();
      }
    }, _callee82, null, [[0, 8]]);
  }));
  return function handleGetOneHD(_x163, _x164) {
    return _ref82.apply(this, arguments);
  };
}();
var handleDownloadDataPO = /*#__PURE__*/function () {
  var _ref83 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee83(req, res) {
    var filename, uploadsDir, data, workbook, worksheet, filePath, fileStream;
    return _regeneratorRuntime().wrap(function _callee83$(_context83) {
      while (1) switch (_context83.prev = _context83.next) {
        case 0:
          _context83.prev = 0;
          // const filename = req.params.filename; // Lấy tên file từ URL
          // // Lấy dữ liệu từ DB thông qua stored procedure
          // let data = await db.sequelize.query('CALL sp_get_all_po', { raw: false });
          // console.log('data:', data);
          // // Tạo workbook mới
          // const workbook = new Workbook();
          // const worksheet = workbook.addWorksheet('Data');
          filename = req.params.filename; // Lấy tên file từ URL
          uploadsDir = path.join(__dirname, '../uploads'); // Thay đổi quyền của thư mục uploads để cho phép ghi file
          _context83.next = 5;
          return fs.promises.chmod(uploadsDir, 493);
        case 5:
          _context83.next = 7;
          return _index["default"].sequelize.query('CALL sp_get_all_po', {
            raw: false
          });
        case 7:
          data = _context83.sent;
          //console.log('data:', data);
          // Tạo workbook mới
          workbook = new Workbook();
          worksheet = workbook.addWorksheet('Data'); // Thêm tiêu đề vào worksheet
          worksheet.columns = [{
            header: 'Mã Tài Sản',
            key: 'mataisan',
            width: 30
          }, {
            header: 'Check vói danh mục',
            key: 'checkmats',
            width: 30
          }, {
            header: 'Tên Tài Sản',
            key: 'tentaisan',
            width: 30
          }, {
            header: 'Check vói danh mục',
            key: 'checktents',
            width: 30
          }, {
            header: 'Đơn Vị Tính',
            key: 'donvitinh',
            width: 15
          }, {
            header: 'Số Lượng PO',
            key: 'soluongpo',
            width: 15
          }, {
            header: 'Đơn Giá PO',
            key: 'dongiapo',
            width: 15
          }, {
            header: 'VAT',
            key: 'vat',
            width: 15
          }, {
            header: 'Thành Tiền',
            key: 'thanhtien',
            width: 15
          }, {
            header: 'Số PR',
            key: 'sopr',
            width: 15
          }, {
            header: 'Số PO',
            key: 'sopo',
            width: 15
          }, {
            header: 'Người tạo',
            key: 'nguoitao',
            width: 15
          }, {
            header: 'Ngày Tạo',
            key: 'ngaytao',
            width: 20
          }, {
            header: 'Ngày PO',
            key: 'ngaypo',
            width: 20
          }
          // Thêm các cột khác ở đây nếu cần
          ];

          // Kiểm tra xem data có phải là một mảng không
          if (!Array.isArray(data)) {
            _context83.next = 15;
            break;
          }
          // Duyệt qua từng đối tượng trong mảng
          data.forEach(function (item) {
            var ngaypoFormatted = new Date(item.ngaypo).toLocaleDateString('en-GB');
            // Thêm các thuộc tính của item vào worksheet
            worksheet.addRow({
              //id: item.id,
              mataisan: item.mataisan,
              checkmats: item.checkmats,
              tentaisan: item.tentaisan,
              checktents: item.checktents,
              donvitinh: item.donvitinh,
              soluongpo: item.soluongpo,
              dongiapo: item.dongiapo,
              dongiapovat: item.dongiapovat,
              vat: item.vat,
              thanhtien: item.thanhtien,
              thanhtienvat: item.thanhtienvat,
              sopr: item.sopr,
              sopo: item.sopo,
              ngaypo: ngaypoFormatted,
              ngaytao: item.ngaytao,
              nguoitao: item.nguoitao,
              dacheckvoict: item.dacheckvoict
            });
          });
          _context83.next = 17;
          break;
        case 15:
          console.error('Dữ liệu không phải là một mảng:', data);
          return _context83.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Định dạng dữ liệu không đúng'
          }));
        case 17:
          // Đặt tên file để tải về
          filePath = path.join(__dirname, '../uploads', filename);
          _context83.next = 20;
          return workbook.xlsx.writeFile(filePath);
        case 20:
          // Ghi file Excel vào thư mục uploads

          // Gửi file cho client
          res.setHeader('Content-Disposition', "attachment; filename=\"".concat(filename, "\""));
          res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
          fileStream = fs.createReadStream(filePath);
          fileStream.pipe(res);
          _context83.next = 30;
          break;
        case 26:
          _context83.prev = 26;
          _context83.t0 = _context83["catch"](0);
          console.error('Error during file download:', _context83.t0);
          return _context83.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 30:
        case "end":
          return _context83.stop();
      }
    }, _callee83, null, [[0, 26]]);
  }));
  return function handleDownloadDataPO(_x165, _x166) {
    return _ref83.apply(this, arguments);
  };
}();
var handleDownloadDataPR = /*#__PURE__*/function () {
  var _ref84 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee84(req, res) {
    var filename, data, workbook, worksheet, filePath, fileStream;
    return _regeneratorRuntime().wrap(function _callee84$(_context84) {
      while (1) switch (_context84.prev = _context84.next) {
        case 0:
          _context84.prev = 0;
          filename = req.params.filename; // Lấy tên file từ URL
          // Lấy dữ liệu từ DB thông qua stored procedure
          _context84.next = 4;
          return _index["default"].sequelize.query('CALL sp_get_all_pr', {
            raw: false
          });
        case 4:
          data = _context84.sent;
          //console.log('data:', data);
          // Tạo workbook mới
          workbook = new Workbook();
          worksheet = workbook.addWorksheet('Data'); // Thêm tiêu đề vào worksheet
          worksheet.columns = [{
            header: 'Mã Tài Sản',
            key: 'mataisan',
            width: 30
          }, {
            header: 'Check vói danh mục',
            key: 'checkmats',
            width: 30
          }, {
            header: 'Tên Tài Sản',
            key: 'tentaisan',
            width: 30
          }, {
            header: 'Check vói danh mục',
            key: 'checktents',
            width: 30
          }, {
            header: 'Đơn Vị Tính',
            key: 'donvitinh',
            width: 15
          }, {
            header: 'Số Lượng PR',
            key: 'soluongpr',
            width: 15
          }, {
            header: 'Đơn Giá PR',
            key: 'dongiaprvat',
            width: 15
          }, {
            header: 'Thành Tiền',
            key: 'thanhtienprvat',
            width: 15
          }, {
            header: 'Ngày cần hàng',
            key: 'ngaycanhang',
            width: 15
          }, {
            header: 'Ghi chú',
            key: 'ghichu',
            width: 15
          }, {
            header: 'Số PR',
            key: 'sopr',
            width: 15
          }, {
            header: 'Người tạo',
            key: 'nguoitao',
            width: 15
          }, {
            header: 'Ngày Tạo',
            key: 'ngaytao',
            width: 20
          }
          // Thêm các cột khác ở đây nếu cần
          ];

          // Kiểm tra xem data có phải là một mảng không
          if (!Array.isArray(data)) {
            _context84.next = 12;
            break;
          }
          // Duyệt qua từng đối tượng trong mảng
          data.forEach(function (item) {
            var ngaycanhangFormatted = new Date(item.ngaycanhang).toLocaleDateString('en-GB');
            // Thêm các thuộc tính của item vào worksheet
            worksheet.addRow({
              id: item.id,
              mataisan: item.mataisan,
              checkmats: item.checkmats,
              tentaisan: item.tentaisan,
              checktents: item.checktents,
              donvitinh: item.donvitinh,
              soluongpr: item.soluongpr,
              dongiaprvat: item.dongiaprvat,
              thanhtienprvat: item.thanhtienprvat,
              sopr: item.sopr,
              ngaycanhang: ngaycanhangFormatted,
              ghichu: item.ghichu,
              ngaytao: item.ngaytao,
              nguoitao: item.nguoitao
            });
          });
          _context84.next = 14;
          break;
        case 12:
          console.error('Dữ liệu không phải là một mảng:', data);
          return _context84.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Định dạng dữ liệu không đúng'
          }));
        case 14:
          // Đặt tên file để tải về
          filePath = path.join(__dirname, '../uploads', filename);
          _context84.next = 17;
          return workbook.xlsx.writeFile(filePath);
        case 17:
          // Ghi file Excel vào thư mục uploads

          // Gửi file cho client
          res.setHeader('Content-Disposition', "attachment; filename=\"".concat(filename, "\""));
          res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
          fileStream = fs.createReadStream(filePath);
          fileStream.pipe(res);
          _context84.next = 27;
          break;
        case 23:
          _context84.prev = 23;
          _context84.t0 = _context84["catch"](0);
          console.error('Error during file download:', _context84.t0);
          return _context84.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 27:
        case "end":
          return _context84.stop();
      }
    }, _callee84, null, [[0, 23]]);
  }));
  return function handleDownloadDataPR(_x167, _x168) {
    return _ref84.apply(this, arguments);
  };
}();
var handleDownloadDataHD = /*#__PURE__*/function () {
  var _ref85 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee85(req, res) {
    var filename, data, workbook, worksheet, filePath, fileStream;
    return _regeneratorRuntime().wrap(function _callee85$(_context85) {
      while (1) switch (_context85.prev = _context85.next) {
        case 0:
          _context85.prev = 0;
          filename = req.params.filename; // Lấy tên file từ URL
          // Lấy dữ liệu từ DB thông qua stored procedure
          _context85.next = 4;
          return _index["default"].sequelize.query('CALL sp_get_all_hd', {
            raw: false
          });
        case 4:
          data = _context85.sent;
          //console.log('data:', data);
          // Tạo workbook mới
          workbook = new Workbook();
          worksheet = workbook.addWorksheet('Data'); // Thêm tiêu đề vào worksheet
          worksheet.columns = [{
            header: 'Nha cung cấp id',
            key: 'nhacungcap_id',
            width: 30
          }, {
            header: 'Check vói danh mục',
            key: 'checknhacungcapts',
            width: 30
          }, {
            header: 'Tên nhà cung cấp',
            key: 'tennhacungcap',
            width: 30
          }, {
            header: 'Mã Tài Sản',
            key: 'mataisan',
            width: 30
          }, {
            header: 'Check vói danh mục',
            key: 'checkmats',
            width: 30
          }, {
            header: 'Tên Tài Sản',
            key: 'tentaisan',
            width: 30
          }, {
            header: 'Check vói danh mục',
            key: 'checktents',
            width: 30
          }, {
            header: 'Đơn Vị Tính',
            key: 'donvitinh',
            width: 15
          }, {
            header: 'Đơn Giá HĐ',
            key: 'dongiahd',
            width: 15
          }, {
            header: 'VAT',
            key: 'vat',
            width: 15
          }, {
            header: 'Đơn giá VAT',
            key: 'dongiahdvat',
            width: 15
          }, {
            header: 'RN/Công Văn',
            key: 'rn',
            width: 15
          }, {
            header: 'Số HĐ',
            key: 'sohopdong',
            width: 15
          }, {
            header: 'Ngày hiệu lực',
            key: 'ngayhieuluc',
            width: 15
          }, {
            header: 'Ngày kết thúc',
            key: 'ngayketthuc',
            width: 15
          }, {
            header: 'Tài trợ',
            key: 'taitro',
            width: 15
          }, {
            header: 'Căn cứ tài trợ',
            key: 'tinhtaitro',
            width: 15
          }, {
            header: 'Người tạo',
            key: 'nguoitao',
            width: 15
          }, {
            header: 'Ngày Tạo',
            key: 'ngaytao',
            width: 20
          }
          // Thêm các cột khác ở đây nếu cần
          ];

          // Kiểm tra xem data có phải là một mảng không
          if (!Array.isArray(data)) {
            _context85.next = 12;
            break;
          }
          // Duyệt qua từng đối tượng trong mảng
          data.forEach(function (item) {
            var ngayhieulucFormatted = new Date(item.ngayhieuluc).toLocaleDateString('en-GB');
            var ngayketthucFormatted = new Date(item.ngayketthuc).toLocaleDateString('en-GB');
            // Thêm các thuộc tính của item vào worksheet
            worksheet.addRow({
              id: item.id,
              nhacungcap_id: item.nhacungcap_id,
              checknhacungcapts: item.checknhacungcapts,
              tennhacungcap: item.tennhacungcap,
              mataisan: item.mataisan,
              checkmats: item.checkmats,
              tentaisan: item.tentaisan,
              checktents: item.checktents,
              donvitinh: item.donvitinh,
              dongiahd: item.dongiahd,
              vat: item.vat,
              dongiahdvat: item.dongiahdvat,
              rn: item.rn,
              sohopdong: item.sohopdong,
              ngayhieuluc: ngayhieulucFormatted,
              ngayketthuc: ngayketthucFormatted,
              taitro: item.taitro,
              tinhtaitro: item.tinhtaitro,
              ngaytao: item.ngaytao,
              nguoitao: item.nguoitao
            });
          });
          _context85.next = 14;
          break;
        case 12:
          console.error('Dữ liệu không phải là một mảng:', data);
          return _context85.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Định dạng dữ liệu không đúng'
          }));
        case 14:
          // Đặt tên file để tải về
          filePath = path.join(__dirname, '../uploads', filename);
          _context85.next = 17;
          return workbook.xlsx.writeFile(filePath);
        case 17:
          // Ghi file Excel vào thư mục uploads

          // Gửi file cho client
          res.setHeader('Content-Disposition', "attachment; filename=\"".concat(filename, "\""));
          res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
          fileStream = fs.createReadStream(filePath);
          fileStream.pipe(res);
          _context85.next = 27;
          break;
        case 23:
          _context85.prev = 23;
          _context85.t0 = _context85["catch"](0);
          console.error('Error during file download:', _context85.t0);
          return _context85.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 27:
        case "end":
          return _context85.stop();
      }
    }, _callee85, null, [[0, 23]]);
  }));
  return function handleDownloadDataHD(_x169, _x170) {
    return _ref85.apply(this, arguments);
  };
}();
var handleDownloadFile = /*#__PURE__*/function () {
  var _ref86 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee86(req, res) {
    var filename, filePath, fileStream;
    return _regeneratorRuntime().wrap(function _callee86$(_context86) {
      while (1) switch (_context86.prev = _context86.next) {
        case 0:
          _context86.prev = 0;
          filename = req.params.filename; // Lấy tên file từ URL
          //console.log('Downloading file:', filename);
          filePath = path.join(__dirname, '../uploads', filename);
          if (!fs.existsSync(filePath)) {
            _context86.next = 10;
            break;
          }
          res.setHeader('Content-Disposition', "attachment; filename=\"".concat(filename, "\""));
          res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
          fileStream = fs.createReadStream(filePath);
          fileStream.pipe(res);
          _context86.next = 11;
          break;
        case 10:
          return _context86.abrupt("return", res.status(404).json({
            errCode: 404,
            errMessage: 'File not found'
          }));
        case 11:
          _context86.next = 17;
          break;
        case 13:
          _context86.prev = 13;
          _context86.t0 = _context86["catch"](0);
          console.error('Error during file download:', _context86.t0);
          return _context86.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 17:
        case "end":
          return _context86.stop();
      }
    }, _callee86, null, [[0, 13]]);
  }));
  return function handleDownloadFile(_x171, _x172) {
    return _ref86.apply(this, arguments);
  };
}();
var handleGetSoPO = /*#__PURE__*/function () {
  var _ref87 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee87(req, res) {
    var _req$body19, soPO, UserId, data;
    return _regeneratorRuntime().wrap(function _callee87$(_context87) {
      while (1) switch (_context87.prev = _context87.next) {
        case 0:
          _context87.prev = 0;
          _req$body19 = req.body, soPO = _req$body19.soPO, UserId = _req$body19.UserId; //console.log('machungtu', machungtu, UserId)
          _context87.next = 4;
          return _importService["default"].getSoPO(soPO, UserId);
        case 4:
          data = _context87.sent;
          return _context87.abrupt("return", res.status(200).json(data));
        case 8:
          _context87.prev = 8;
          _context87.t0 = _context87["catch"](0);
          console.error(_context87.t0);
          return _context87.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context87.stop();
      }
    }, _callee87, null, [[0, 8]]);
  }));
  return function handleGetSoPO(_x173, _x174) {
    return _ref87.apply(this, arguments);
  };
}();
var getDaTaKiemKe = /*#__PURE__*/function () {
  var _ref88 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee88(req, res) {
    var data, message;
    return _regeneratorRuntime().wrap(function _callee88$(_context88) {
      while (1) switch (_context88.prev = _context88.next) {
        case 0:
          _context88.prev = 0;
          data = req.body; //console.log('data', data)
          _context88.next = 4;
          return _importService["default"].getDataDaKiemKe(data);
        case 4:
          message = _context88.sent;
          return _context88.abrupt("return", res.status(200).json(message));
        case 8:
          _context88.prev = 8;
          _context88.t0 = _context88["catch"](0);
          console.error(_context88.t0);
          return _context88.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context88.stop();
      }
    }, _callee88, null, [[0, 8]]);
  }));
  return function getDaTaKiemKe(_x175, _x176) {
    return _ref88.apply(this, arguments);
  };
}();
module.exports = {
  handleImportPO: handleImportPO,
  handleGetAllPO: handleGetAllPO,
  handleGetChungTu: handleGetChungTu,
  handleEditMaTaiSan: handleEditMaTaiSan,
  handleGetOnePo: handleGetOnePo,
  handleDownloadFile: handleDownloadFile,
  handleGetAllPR: handleGetAllPR,
  handleImportPR: handleImportPR,
  handleGetOnePR: handleGetOnePR,
  handleGetSoPO: handleGetSoPO,
  handleImportHD: handleImportHD,
  handleGetAllHD: handleGetAllHD,
  handleGetMaChungTu: handleGetMaChungTu,
  handleGetOneHD: handleGetOneHD,
  handleGetAllLogChungTuHopDong: handleGetAllLogChungTuHopDong,
  handleGetCheckHopDong: handleGetCheckHopDong,
  handleGetAllLogChungTuPO: handleGetAllLogChungTuPO,
  handleGetCheckPO: handleGetCheckPO,
  handleGetAllLogPOPR: handleGetAllLogPOPR,
  handleGetCheckPR: handleGetCheckPR,
  handleCheckMaChungTuHD: handleCheckMaChungTuHD,
  handleCheckMaChungTuPO: handleCheckMaChungTuPO,
  handleCheckPOPR: handleCheckPOPR,
  handleGetAllCT: handleGetAllCT,
  handleGetOneCT: handleGetOneCT,
  handleCheckXoaChungTu: handleCheckXoaChungTu,
  handleEditMaTaiSanNew: handleEditMaTaiSanNew,
  handleDownloadDataPO: handleDownloadDataPO,
  handleDownloadDataPR: handleDownloadDataPR,
  handleDownloadDataHD: handleDownloadDataHD,
  handleGetCheckEditMaTaiSanPO: handleGetCheckEditMaTaiSanPO,
  handleGetCheckEditMaTaiSanPR: handleGetCheckEditMaTaiSanPR,
  handleGetCheckEditSoLuongPO: handleGetCheckEditSoLuongPO,
  handleGetCheckAllCT: handleGetCheckAllCT,
  handleGetCheckOneCT: handleGetCheckOneCT,
  handleGetCheckChungTu: handleGetCheckChungTu,
  handleGetCheckAllLogChungTuPO: handleGetCheckAllLogChungTuPO,
  handleGetCheckAllLogChungTuHopDong: handleGetCheckAllLogChungTuHopDong,
  handleCheckXoaCheckChungTu: handleCheckXoaCheckChungTu,
  handleGetCheckAll: handleGetCheckAll,
  handleGetLogPOPR: handleGetLogPOPR,
  handleGetAllTaiSan: handleGetAllTaiSan,
  handleGetAllDVT: handleGetAllDVT,
  handleGetAllBV: handleGetAllBV,
  handleGetAllPL: handleGetAllPL,
  handleGetAllTGBH: handleGetAllTGBH,
  handleGetAllTGKH: handleGetAllTGKH,
  handleEditTaiSan: handleEditTaiSan,
  handleNewTaiSan: handleNewTaiSan,
  handleCheckXoaTS: handleCheckXoaTS,
  handleGetAllKho: handleGetAllKho,
  handleGetTaiSanTheoKho: handleGetTaiSanTheoKho,
  handleGetAllKhoQL: handleGetAllKhoQL,
  handleGetTaiSanTheoKhoQL: handleGetTaiSanTheoKhoQL,
  handleGetMaTaiSanKiemKe: handleGetMaTaiSanKiemKe,
  handleEditKhoaPhongHienTai: handleEditKhoaPhongHienTai,
  handleGetAllViTri: handleGetAllViTri,
  handleGetAllTinhTrang: handleGetAllTinhTrang,
  handleGetAllKhoEdit: handleGetAllKhoEdit,
  getDaTaKiemKe: getDaTaKiemKe,
  handleGetSerialKiemKe: handleGetSerialKiemKe,
  handleGetAllNhanVien: handleGetAllNhanVien,
  handleGetAllNhanVienPhong: handleGetAllNhanVienPhong,
  handleGetAllKhoQLTK: handleGetAllKhoQLTK,
  handleGetAllTenTaiSan: handleGetAllTenTaiSan,
  handleXacNhanThemTaiSan: handleXacNhanThemTaiSan,
  handleGetAllNguoiLap: handleGetAllNguoiLap,
  handleGetKeToanTaiSan: handleGetKeToanTaiSan,
  handleGetKeToanTruong: handleGetKeToanTruong,
  handleGetGiamDoc: handleGetGiamDoc,
  handleGetLichSuKiemKe: handleGetLichSuKiemKe,
  handleGetTaiSanTheoKhoLichSu: handleGetTaiSanTheoKhoLichSu,
  handleCheckDataChuaXacNhan: handleCheckDataChuaXacNhan,
  handleGetTaiSanXacNhanTheoKhoLichSu: handleGetTaiSanXacNhanTheoKhoLichSu,
  handleGetTaiSanXacNhanAllKhoLichSu: handleGetTaiSanXacNhanAllKhoLichSu,
  handleGetTaiSanXacNhanToanVienKhoLichSu: handleGetTaiSanXacNhanToanVienKhoLichSu,
  handleGetAllNguoiSuDung: handleGetAllNguoiSuDung,
  handleCheckDongBo: handleCheckDongBo,
  handleGetLanKiemKe: handleGetLanKiemKe
};