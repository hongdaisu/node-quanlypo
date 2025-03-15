"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _index = _interopRequireDefault(require("../models/index"));
var _role = _interopRequireDefault(require("../models/role"));
var _JWTService = require("./JWTService");
var _JWTAction = require("../middleware/JWTAction");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; } // import { createJWT } from '../middleware/JWTAction';
require('dotenv').config();
var getAllMenuCon = function getAllMenuCon() {
  return new Promise(/*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      var menu, _menu;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            menu = '';
            _context.prev = 1;
            _context.next = 4;
            return _index["default"].sequelize.query('CALL sp_get_allmenu_con', {
              // replacements: { id: 2 },
              raw: false
            });
          case 4:
            _menu = _context.sent;
            //console.log('menu', menu)
            resolve(_menu);
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            reject(_context.t0);
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 8]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};
var getAllMenuCha = function getAllMenuCha() {
  return new Promise(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var menu, menu_cha;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            menu = '';
            _context2.prev = 1;
            _context2.next = 4;
            return _index["default"].sequelize.query('CALL sp_get_allmenu_cha', {
              // replacements: { id: 2 },
              raw: false
            });
          case 4:
            menu_cha = _context2.sent;
            //console.log('menu_cha', menu_cha)
            resolve(menu_cha);
            _context2.next = 11;
            break;
          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            reject(_context2.t0);
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 8]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};
var createNewMenuCha = function createNewMenuCha(data) {
  // console.log('data group', data)
  return new Promise(/*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var check;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return checkMenuCha(data.tenmenu_cha);
          case 3:
            check = _context3.sent;
            if (!(check === true)) {
              _context3.next = 8;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Tên munu cha đã tồn tại'
            });
            _context3.next = 10;
            break;
          case 8:
            _context3.next = 10;
            return _index["default"].Dm_Menu_Cha.create({
              tenmenu_cha: data.tenmenu_cha
            });
          case 10:
            resolve({
              errCode: 0,
              errMessage: 'Tạo menu cha thành công'
            });
            _context3.next = 16;
            break;
          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);
          case 16:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 13]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};
var checkMenuCha = function checkMenuCha(tenmenu_cha) {
  return new Promise(/*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      var menu;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _index["default"].Dm_Menu_Cha.findOne({
              where: {
                tenmenu_cha: tenmenu_cha
              }
            });
          case 3:
            menu = _context4.sent;
            if (menu) {
              resolve(true);
            } else {
              resolve(false);
            }
            _context4.next = 10;
            break;
          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            resolve(_context4.t0);
          case 10:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 7]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};
var deleteMenuCha = function deleteMenuCha(id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
      var check_menu;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _index["default"].Dm_Menu_Con.findAll({
              where: {
                menu_cha_id: id
              },
              raw: true
            });
          case 3:
            check_menu = _context5.sent;
            if (!(check_menu.length > 0)) {
              _context5.next = 8;
              break;
            }
            resolve({
              errCode: 2,
              errMessage: "Menu \u0111\xE3 s\u1EED d\u1EE5ng kh\xF4ng th\u1EC3 x\xF3a"
            });
            _context5.next = 11;
            break;
          case 8:
            _context5.next = 10;
            return _index["default"].Dm_Menu_Cha.destroy({
              where: {
                id: id
              }
            });
          case 10:
            resolve({
              errCode: 0,
              errMessage: "\u0110\xE3 x\xF3a th\xF4ng tin th\xE0nh c\xF4ng"
            });
          case 11:
            _context5.next = 17;
            break;
          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](0);
            console.error(_context5.t0);
            return _context5.abrupt("return", res.status(500).json({
              errCode: 500,
              errMessage: 'Internal Server Error'
            }));
          case 17:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 13]]);
    }));
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};
var editMenuCha = function editMenuCha(data) {
  // console.log('data', data)
  return new Promise(/*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
      var menu_cha;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            if (!data.id) {
              resolve({
                errCode: 2,
                errMessage: 'Vui lòng chọn thông tin cần cập nhập'
              });
            }
            _context6.next = 4;
            return _index["default"].Dm_Menu_Cha.findOne({
              where: {
                id: data.id
              },
              raw: false
            });
          case 4:
            menu_cha = _context6.sent;
            if (!menu_cha) {
              _context6.next = 12;
              break;
            }
            menu_cha.tenmenu_cha = data.tenmenu_cha;
            _context6.next = 9;
            return menu_cha.save();
          case 9:
            resolve({
              errCode: 0,
              errMessage: 'Sửa thông tin thành công'
            });
            _context6.next = 13;
            break;
          case 12:
            resolve({
              errCode: 1,
              errMessage: 'Không tìm thấy thông tin'
            });
          case 13:
            _context6.next = 18;
            break;
          case 15:
            _context6.prev = 15;
            _context6.t0 = _context6["catch"](0);
            reject(_context6.t0);
          case 18:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 15]]);
    }));
    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());
};
var getAllSelectMenuCha = function getAllSelectMenuCha() {
  return new Promise(/*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_all_menu_cha', {
              // replacements: { phongban_id: 20 },
              raw: true
            });
          case 3:
            data = _context7.sent;
            //console.log('data', data)
            resolve(data);
            _context7.next = 10;
            break;
          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            reject(_context7.t0);
          case 10:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 7]]);
    }));
    return function (_x13, _x14) {
      return _ref7.apply(this, arguments);
    };
  }());
};
var getAllGroup = function getAllGroup() {
  return new Promise(/*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject) {
      var group, _group;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            group = '';
            _context8.prev = 1;
            _context8.next = 4;
            return _index["default"].Group.findAll({
              attributes: ['id', 'Group', 'MoTa', 'MaGroup'],
              raw: true
            });
          case 4:
            _group = _context8.sent;
            //console.log('checkgroup', group)
            resolve(_group);
            _context8.next = 11;
            break;
          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](1);
            reject(_context8.t0);
          case 11:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[1, 8]]);
    }));
    return function (_x15, _x16) {
      return _ref8.apply(this, arguments);
    };
  }());
};
var createNewMenuCon = function createNewMenuCon(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
      var validationRules, errorMessage, _i, _validationRules, rule, fieldParts, fieldValue, _iterator, _step, part, menu, checkDuplicate, result;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            validationRules = [{
              field: 'link',
              message: 'Vui lòng nhập link.'
            }, {
              field: 'tenmenu_con',
              message: 'Vui lòng nhập tên menu con.'
            }, {
              field: 'menucha.id',
              message: 'Vui lòng chọn menu cha'
            }, {
              field: 'group',
              message: 'Vui lòng chọn nhóm quyền'
            }];
            errorMessage = ''; // Kiểm tra từng trường trong validationRules
            _i = 0, _validationRules = validationRules;
          case 4:
            if (!(_i < _validationRules.length)) {
              _context9.next = 35;
              break;
            }
            rule = _validationRules[_i];
            fieldParts = rule.field.split('.'); // Kiểm tra nếu trường là object (ví dụ: menucha.id)
            fieldValue = data; // Lấy giá trị thực tế từ data
            _iterator = _createForOfIteratorHelper(fieldParts);
            _context9.prev = 9;
            _iterator.s();
          case 11:
            if ((_step = _iterator.n()).done) {
              _context9.next = 21;
              break;
            }
            part = _step.value;
            if (!(fieldValue[part] !== undefined)) {
              _context9.next = 17;
              break;
            }
            fieldValue = fieldValue[part];
            _context9.next = 19;
            break;
          case 17:
            fieldValue = undefined;
            return _context9.abrupt("break", 21);
          case 19:
            _context9.next = 11;
            break;
          case 21:
            _context9.next = 26;
            break;
          case 23:
            _context9.prev = 23;
            _context9.t0 = _context9["catch"](9);
            _iterator.e(_context9.t0);
          case 26:
            _context9.prev = 26;
            _iterator.f();
            return _context9.finish(26);
          case 29:
            if (!(!fieldValue || Array.isArray(fieldValue) && fieldValue.length === 0)) {
              _context9.next = 32;
              break;
            }
            errorMessage = rule.message;
            return _context9.abrupt("break", 35);
          case 32:
            _i++;
            _context9.next = 4;
            break;
          case 35:
            if (!errorMessage) {
              _context9.next = 39;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: errorMessage
            });
            _context9.next = 51;
            break;
          case 39:
            _context9.next = 41;
            return _index["default"].sequelize.query('CALL sp_get_allmenu_con', {
              // replacements: { id: 2 },
              raw: false
            });
          case 41:
            menu = _context9.sent;
            //console.log('menu', menu)
            // Hàm để kiểm tra trùng lặp
            checkDuplicate = function checkDuplicate(data, menu) {
              // Kiểm tra trùng link
              var isLinkDuplicate = menu.some(function (item) {
                return item.link === data.link;
              });

              // Kiểm tra trùng tên menu con
              var isMenuConDuplicate = menu.some(function (item) {
                return item.tenmenu_con === data.tenmenu_con;
              });

              // Nếu trùng cả link hoặc tên menu con
              if (isLinkDuplicate && isMenuConDuplicate) {
                //console.log('Trùng cả link và tên menu con');
                return {
                  isDuplicate: true,
                  message: 'Link và tên menu con đã tồn tại.'
                };
              }
              if (isLinkDuplicate) {
                //console.log('Trùng link');
                return {
                  isDuplicate: true,
                  message: 'Link đã tồn tại.'
                };
              }
              if (isMenuConDuplicate) {
                //console.log('Trùng tên menu con');
                return {
                  isDuplicate: true,
                  message: 'Tên menu con đã tồn tại.'
                };
              }
              return {
                isDuplicate: false,
                message: ''
              };
            }; // Gọi hàm kiểm tra
            result = checkDuplicate(data, menu);
            if (!result.isDuplicate) {
              _context9.next = 48;
              break;
            }
            //console.warn(result.message); // Hiển thị cảnh báo
            resolve({
              errCode: 1,
              errMessage: result.message
            });
            _context9.next = 51;
            break;
          case 48:
            _context9.next = 50;
            return _index["default"].Dm_Menu_Con.create({
              link: data.link,
              tenmenu_con: data.tenmenu_con,
              menu_cha_id: data.menucha.id,
              group_id: data.group.join(',')
            });
          case 50:
            resolve({
              errCode: 0,
              errMessage: 'Tạo menu con thành công'
            });
          case 51:
            _context9.next = 56;
            break;
          case 53:
            _context9.prev = 53;
            _context9.t1 = _context9["catch"](0);
            reject(_context9.t1);
          case 56:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 53], [9, 23, 26, 29]]);
    }));
    return function (_x17, _x18) {
      return _ref9.apply(this, arguments);
    };
  }());
};
var deleteMenuCon = function deleteMenuCon(id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resolve, reject) {
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return _index["default"].Dm_Menu_Con.destroy({
              where: {
                id: id
              }
            });
          case 3:
            resolve({
              errCode: 0,
              errMessage: "\u0110\xE3 x\xF3a th\xF4ng tin th\xE0nh c\xF4ng"
            });
            _context10.next = 10;
            break;
          case 6:
            _context10.prev = 6;
            _context10.t0 = _context10["catch"](0);
            console.error(_context10.t0);
            return _context10.abrupt("return", res.status(500).json({
              errCode: 500,
              errMessage: 'Internal Server Error'
            }));
          case 10:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[0, 6]]);
    }));
    return function (_x19, _x20) {
      return _ref10.apply(this, arguments);
    };
  }());
};
var deleteHopDong = function deleteHopDong(id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(resolve, reject) {
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return _index["default"].Data_HD.destroy({
              where: {
                nhacungcap_id: id
              }
            });
          case 3:
            resolve({
              errCode: 0,
              errMessage: "\u0110\xE3 x\xF3a th\xF4ng tin th\xE0nh c\xF4ng"
            });
            _context11.next = 10;
            break;
          case 6:
            _context11.prev = 6;
            _context11.t0 = _context11["catch"](0);
            console.error(_context11.t0);
            return _context11.abrupt("return", res.status(500).json({
              errCode: 500,
              errMessage: 'Internal Server Error'
            }));
          case 10:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[0, 6]]);
    }));
    return function (_x21, _x22) {
      return _ref11.apply(this, arguments);
    };
  }());
};
var deletePO = function deletePO(sopo) {
  return new Promise(/*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(resolve, reject) {
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            _context12.next = 3;
            return _index["default"].Data_PO.destroy({
              where: {
                sopo: sopo
              }
            });
          case 3:
            resolve({
              errCode: 0,
              errMessage: "\u0110\xE3 x\xF3a th\xF4ng tin th\xE0nh c\xF4ng"
            });
            _context12.next = 10;
            break;
          case 6:
            _context12.prev = 6;
            _context12.t0 = _context12["catch"](0);
            console.error(_context12.t0);
            return _context12.abrupt("return", res.status(500).json({
              errCode: 500,
              errMessage: 'Internal Server Error'
            }));
          case 10:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[0, 6]]);
    }));
    return function (_x23, _x24) {
      return _ref12.apply(this, arguments);
    };
  }());
};
var deletePR = function deletePR(sopr) {
  return new Promise(/*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(resolve, reject) {
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            _context13.next = 3;
            return _index["default"].Data_PR.destroy({
              where: {
                sopr: sopr
              }
            });
          case 3:
            resolve({
              errCode: 0,
              errMessage: "\u0110\xE3 x\xF3a th\xF4ng tin th\xE0nh c\xF4ng"
            });
            _context13.next = 10;
            break;
          case 6:
            _context13.prev = 6;
            _context13.t0 = _context13["catch"](0);
            console.error(_context13.t0);
            return _context13.abrupt("return", res.status(500).json({
              errCode: 500,
              errMessage: 'Internal Server Error'
            }));
          case 10:
          case "end":
            return _context13.stop();
        }
      }, _callee13, null, [[0, 6]]);
    }));
    return function (_x25, _x26) {
      return _ref13.apply(this, arguments);
    };
  }());
};
var deleteLogCTHD = function deleteLogCTHD(machungtu, sopo) {
  return new Promise(/*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(resolve, reject) {
      var data_log, dataidhd, dataHD_OLD, _iterator2, _step2, id_data_hd, data, _iterator3, _step3, _loop, _iterator4, _step4, logItem;
      return _regeneratorRuntime().wrap(function _callee14$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            _context15.next = 3;
            return _index["default"].Data_ChungTu_Hd_Log.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                machungtu: machungtu
              },
              raw: true
            });
          case 3:
            data_log = _context15.sent;
            // Lấy ra tất cả id_data_hd 
            dataidhd = data_log.map(function (item) {
              return {
                id_data_hd: item.id_data_hd
              };
            }); //console.log('data_log', data_log)
            dataHD_OLD = [];
            _iterator2 = _createForOfIteratorHelper(dataidhd);
            _context15.prev = 7;
            _iterator2.s();
          case 9:
            if ((_step2 = _iterator2.n()).done) {
              _context15.next = 23;
              break;
            }
            id_data_hd = _step2.value.id_data_hd;
            _context15.prev = 11;
            _context15.next = 14;
            return _index["default"].Data_HD.findOne({
              where: {
                id: id_data_hd
              },
              raw: true
            });
          case 14:
            data = _context15.sent;
            if (data) {
              dataHD_OLD.push(data);
            }
            _context15.next = 21;
            break;
          case 18:
            _context15.prev = 18;
            _context15.t0 = _context15["catch"](11);
            console.error("Error finding data for ".concat(machungtu, ":"), _context15.t0);
          case 21:
            _context15.next = 9;
            break;
          case 23:
            _context15.next = 28;
            break;
          case 25:
            _context15.prev = 25;
            _context15.t1 = _context15["catch"](7);
            _iterator2.e(_context15.t1);
          case 28:
            _context15.prev = 28;
            _iterator2.f();
            return _context15.finish(28);
          case 31:
            _iterator3 = _createForOfIteratorHelper(data_log);
            _context15.prev = 32;
            _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
              var logItem, hdItem, soluongconlai, _data;
              return _regeneratorRuntime().wrap(function _loop$(_context14) {
                while (1) switch (_context14.prev = _context14.next) {
                  case 0:
                    logItem = _step3.value;
                    // Tìm item trong dataHD_OLD có cùng id và mataisan
                    hdItem = dataHD_OLD.find(function (item) {
                      return item.id === logItem.id_data_hd && item.mataisan === logItem.mataisan;
                    });
                    if (!hdItem) {
                      _context14.next = 25;
                      break;
                    }
                    // Thực hiện phép trừ soluongdanhap từ dataHD_OLD với soluongnhap từ data_log
                    soluongconlai = hdItem.soluongdanhap - logItem.soluongnhap; // Kiểm tra kết quả của phép trừ và cập nhật dacheck
                    if (soluongconlai === 0) {
                      hdItem.dongianhap = null;
                      hdItem.dongianhapvat = null;
                      hdItem.soluongdanhap = null;
                      hdItem.checkhieuluc = null;
                      hdItem.dacheckvoict = null;
                      hdItem.checkmataisanvoict = null;
                    } else if (soluongconlai > 0) {
                      hdItem.dacheckvoict = 1;
                      hdItem.checkmataisanvoict = 1;
                      hdItem.soluongdanhap = soluongconlai;
                    }

                    // Cập nhật vào cơ sở dữ liệu
                    _context14.prev = 5;
                    _context14.next = 8;
                    return _index["default"].Data_HD.findOne({
                      where: {
                        id: hdItem.id
                      },
                      raw: false
                    });
                  case 8:
                    _data = _context14.sent;
                    if (!_data) {
                      _context14.next = 20;
                      break;
                    }
                    // Cập nhật các giá trị
                    _data.dongianhap = hdItem.dongianhap;
                    _data.dongianhapvat = hdItem.dongianhapvat;
                    _data.soluongdanhap = hdItem.soluongdanhap;
                    _data.checkhieuluc = hdItem.checkhieuluc;
                    _data.dacheckvoict = hdItem.dacheckvoict;
                    _data.checkmataisanvoict = hdItem.checkmataisanvoict;

                    // Lưu thay đổi
                    _context14.next = 18;
                    return _data.save();
                  case 18:
                    _context14.next = 20;
                    break;
                  case 20:
                    _context14.next = 25;
                    break;
                  case 22:
                    _context14.prev = 22;
                    _context14.t0 = _context14["catch"](5);
                    console.error("Error updating record with id: ".concat(hdItem.id), _context14.t0);
                  case 25:
                  case "end":
                    return _context14.stop();
                }
              }, _loop, null, [[5, 22]]);
            });
            _iterator3.s();
          case 35:
            if ((_step3 = _iterator3.n()).done) {
              _context15.next = 39;
              break;
            }
            return _context15.delegateYield(_loop(), "t2", 37);
          case 37:
            _context15.next = 35;
            break;
          case 39:
            _context15.next = 44;
            break;
          case 41:
            _context15.prev = 41;
            _context15.t3 = _context15["catch"](32);
            _iterator3.e(_context15.t3);
          case 44:
            _context15.prev = 44;
            _iterator3.f();
            return _context15.finish(44);
          case 47:
            _iterator4 = _createForOfIteratorHelper(data_log);
            _context15.prev = 48;
            _iterator4.s();
          case 50:
            if ((_step4 = _iterator4.n()).done) {
              _context15.next = 62;
              break;
            }
            logItem = _step4.value;
            _context15.prev = 52;
            _context15.next = 55;
            return _index["default"].Data_ChungTu_Hd_Log.destroy({
              where: {
                id: logItem.id
              }
            });
          case 55:
            _context15.next = 60;
            break;
          case 57:
            _context15.prev = 57;
            _context15.t4 = _context15["catch"](52);
            console.error("Error deleting record with id_data_hd: ".concat(logItem.id_data_hd), _context15.t4);
          case 60:
            _context15.next = 50;
            break;
          case 62:
            _context15.next = 67;
            break;
          case 64:
            _context15.prev = 64;
            _context15.t5 = _context15["catch"](48);
            _iterator4.e(_context15.t5);
          case 67:
            _context15.prev = 67;
            _iterator4.f();
            return _context15.finish(67);
          case 70:
            // let data_dacheck = await db.sequelize.query('CALL sp_get_checkxoa_chungtu(:sopo)',
            //     {
            //         replacements: { sopo: sopo },
            //         raw: false
            //     }
            // );

            // console.log('data_dacheck', data_dacheck)

            resolve({
              errCode: 0,
              errMessage: "\u0110\xE3 x\xF3a th\xF4ng tin th\xE0nh c\xF4ng"
            });
            _context15.next = 77;
            break;
          case 73:
            _context15.prev = 73;
            _context15.t6 = _context15["catch"](0);
            console.error(_context15.t6);
            return _context15.abrupt("return", res.status(500).json({
              errCode: 500,
              errMessage: 'Internal Server Error'
            }));
          case 77:
          case "end":
            return _context15.stop();
        }
      }, _callee14, null, [[0, 73], [7, 25, 28, 31], [11, 18], [32, 41, 44, 47], [48, 64, 67, 70], [52, 57]]);
    }));
    return function (_x27, _x28) {
      return _ref14.apply(this, arguments);
    };
  }());
};
var deleteCheckLogCTHD = function deleteCheckLogCTHD(machungtu, sopo) {
  return new Promise(/*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(resolve, reject) {
      var data_log, dataidhd, dataHD_OLD, _iterator5, _step5, id_data_hd, data, _iterator6, _step6, _loop2, _iterator7, _step7, logItem;
      return _regeneratorRuntime().wrap(function _callee15$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            _context17.prev = 0;
            _context17.next = 3;
            return _index["default"].Check_Data_ChungTu_Hd_Log.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                machungtu: machungtu
              },
              raw: true
            });
          case 3:
            data_log = _context17.sent;
            // Lấy ra tất cả id_data_hd 
            dataidhd = data_log.map(function (item) {
              return {
                id_data_hd: item.id_data_hd
              };
            }); //console.log('data_log', data_log)
            dataHD_OLD = [];
            _iterator5 = _createForOfIteratorHelper(dataidhd);
            _context17.prev = 7;
            _iterator5.s();
          case 9:
            if ((_step5 = _iterator5.n()).done) {
              _context17.next = 23;
              break;
            }
            id_data_hd = _step5.value.id_data_hd;
            _context17.prev = 11;
            _context17.next = 14;
            return _index["default"].Data_HD.findOne({
              where: {
                id: id_data_hd
              },
              raw: true
            });
          case 14:
            data = _context17.sent;
            if (data) {
              dataHD_OLD.push(data);
            }
            _context17.next = 21;
            break;
          case 18:
            _context17.prev = 18;
            _context17.t0 = _context17["catch"](11);
            console.error("Error finding data for ".concat(machungtu, ":"), _context17.t0);
          case 21:
            _context17.next = 9;
            break;
          case 23:
            _context17.next = 28;
            break;
          case 25:
            _context17.prev = 25;
            _context17.t1 = _context17["catch"](7);
            _iterator5.e(_context17.t1);
          case 28:
            _context17.prev = 28;
            _iterator5.f();
            return _context17.finish(28);
          case 31:
            _iterator6 = _createForOfIteratorHelper(data_log);
            _context17.prev = 32;
            _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2() {
              var logItem, hdItem, soluongconlai, _data2;
              return _regeneratorRuntime().wrap(function _loop2$(_context16) {
                while (1) switch (_context16.prev = _context16.next) {
                  case 0:
                    logItem = _step6.value;
                    // Tìm item trong dataHD_OLD có cùng id và mataisan
                    hdItem = dataHD_OLD.find(function (item) {
                      return item.id === logItem.id_data_hd && item.mataisan === logItem.mataisan;
                    });
                    if (!hdItem) {
                      _context16.next = 25;
                      break;
                    }
                    // Thực hiện phép trừ soluongdanhap từ dataHD_OLD với soluongnhap từ data_log
                    soluongconlai = hdItem.soluongdanhap2 - logItem.soluongnhap; // Kiểm tra kết quả của phép trừ và cập nhật dacheck
                    if (soluongconlai === 0) {
                      hdItem.dongianhap2 = null;
                      hdItem.dongianhapvat2 = null;
                      hdItem.soluongdanhap2 = null;
                      hdItem.checkhieuluc = null;
                      hdItem.dacheckvoict2 = null;
                      hdItem.checkmataisanvoict2 = null;
                    } else if (soluongconlai > 0) {
                      hdItem.dacheckvoict2 = 1;
                      hdItem.checkmataisanvoict2 = 1;
                      hdItem.soluongdanhap2 = soluongconlai;
                    }

                    // Cập nhật vào cơ sở dữ liệu
                    _context16.prev = 5;
                    _context16.next = 8;
                    return _index["default"].Data_HD.findOne({
                      where: {
                        id: hdItem.id
                      },
                      raw: false
                    });
                  case 8:
                    _data2 = _context16.sent;
                    if (!_data2) {
                      _context16.next = 20;
                      break;
                    }
                    // Cập nhật các giá trị
                    _data2.dongianhap2 = hdItem.dongianhap2;
                    _data2.dongianhapvat2 = hdItem.dongianhapvat2;
                    _data2.soluongdanhap2 = hdItem.soluongdanhap2;
                    _data2.checkhieuluc = hdItem.checkhieuluc;
                    _data2.dacheckvoict2 = hdItem.dacheckvoict2;
                    _data2.checkmataisanvoict2 = hdItem.checkmataisanvoict2;

                    // Lưu thay đổi
                    _context16.next = 18;
                    return _data2.save();
                  case 18:
                    _context16.next = 20;
                    break;
                  case 20:
                    _context16.next = 25;
                    break;
                  case 22:
                    _context16.prev = 22;
                    _context16.t0 = _context16["catch"](5);
                    console.error("Error updating record with id: ".concat(hdItem.id), _context16.t0);
                  case 25:
                  case "end":
                    return _context16.stop();
                }
              }, _loop2, null, [[5, 22]]);
            });
            _iterator6.s();
          case 35:
            if ((_step6 = _iterator6.n()).done) {
              _context17.next = 39;
              break;
            }
            return _context17.delegateYield(_loop2(), "t2", 37);
          case 37:
            _context17.next = 35;
            break;
          case 39:
            _context17.next = 44;
            break;
          case 41:
            _context17.prev = 41;
            _context17.t3 = _context17["catch"](32);
            _iterator6.e(_context17.t3);
          case 44:
            _context17.prev = 44;
            _iterator6.f();
            return _context17.finish(44);
          case 47:
            _iterator7 = _createForOfIteratorHelper(data_log);
            _context17.prev = 48;
            _iterator7.s();
          case 50:
            if ((_step7 = _iterator7.n()).done) {
              _context17.next = 62;
              break;
            }
            logItem = _step7.value;
            _context17.prev = 52;
            _context17.next = 55;
            return _index["default"].Check_Data_ChungTu_Hd_Log.destroy({
              where: {
                id: logItem.id
              }
            });
          case 55:
            _context17.next = 60;
            break;
          case 57:
            _context17.prev = 57;
            _context17.t4 = _context17["catch"](52);
            console.error("Error deleting record with id_data_hd: ".concat(logItem.id_data_hd), _context17.t4);
          case 60:
            _context17.next = 50;
            break;
          case 62:
            _context17.next = 67;
            break;
          case 64:
            _context17.prev = 64;
            _context17.t5 = _context17["catch"](48);
            _iterator7.e(_context17.t5);
          case 67:
            _context17.prev = 67;
            _iterator7.f();
            return _context17.finish(67);
          case 70:
            // let data_dacheck = await db.sequelize.query('CALL sp_get_checkxoa_chungtu(:sopo)',
            //     {
            //         replacements: { sopo: sopo },
            //         raw: false
            //     }
            // );

            // console.log('data_dacheck', data_dacheck)

            resolve({
              errCode: 0,
              errMessage: "\u0110\xE3 x\xF3a th\xF4ng tin th\xE0nh c\xF4ng"
            });
            _context17.next = 77;
            break;
          case 73:
            _context17.prev = 73;
            _context17.t6 = _context17["catch"](0);
            console.error(_context17.t6);
            return _context17.abrupt("return", res.status(500).json({
              errCode: 500,
              errMessage: 'Internal Server Error'
            }));
          case 77:
          case "end":
            return _context17.stop();
        }
      }, _callee15, null, [[0, 73], [7, 25, 28, 31], [11, 18], [32, 41, 44, 47], [48, 64, 67, 70], [52, 57]]);
    }));
    return function (_x29, _x30) {
      return _ref15.apply(this, arguments);
    };
  }());
};
var deleteLogPOPR = function deleteLogPOPR(sopo) {
  return new Promise(/*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(resolve, reject) {
      var data_log, dataidpr, dataPR_OLD, _iterator8, _step8, id_data_pr, data, _iterator9, _step9, _loop3, _iterator10, _step10, logItem;
      return _regeneratorRuntime().wrap(function _callee16$(_context19) {
        while (1) switch (_context19.prev = _context19.next) {
          case 0:
            _context19.prev = 0;
            _context19.next = 3;
            return _index["default"].Data_Po_Pr_Log.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                sopo: sopo
              },
              raw: true
            });
          case 3:
            data_log = _context19.sent;
            // Lấy ra tất cả id_data_hd 
            dataidpr = data_log.map(function (item) {
              return {
                id_data_pr: item.id_data_pr
              };
            });
            dataPR_OLD = [];
            _iterator8 = _createForOfIteratorHelper(dataidpr);
            _context19.prev = 7;
            _iterator8.s();
          case 9:
            if ((_step8 = _iterator8.n()).done) {
              _context19.next = 23;
              break;
            }
            id_data_pr = _step8.value.id_data_pr;
            _context19.prev = 11;
            _context19.next = 14;
            return _index["default"].Data_PR.findOne({
              where: {
                id: id_data_pr
              },
              raw: true
            });
          case 14:
            data = _context19.sent;
            if (data) {
              dataPR_OLD.push(data);
            }
            _context19.next = 21;
            break;
          case 18:
            _context19.prev = 18;
            _context19.t0 = _context19["catch"](11);
            console.error("Error finding data for ".concat(machungtu, ":"), _context19.t0);
          case 21:
            _context19.next = 9;
            break;
          case 23:
            _context19.next = 28;
            break;
          case 25:
            _context19.prev = 25;
            _context19.t1 = _context19["catch"](7);
            _iterator8.e(_context19.t1);
          case 28:
            _context19.prev = 28;
            _iterator8.f();
            return _context19.finish(28);
          case 31:
            _iterator9 = _createForOfIteratorHelper(data_log);
            _context19.prev = 32;
            _loop3 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop3() {
              var logItem, prItem, soluongpoconlai, tongsoluongpoconlai, _data3;
              return _regeneratorRuntime().wrap(function _loop3$(_context18) {
                while (1) switch (_context18.prev = _context18.next) {
                  case 0:
                    logItem = _step9.value;
                    // Tìm item trong dataHD_OLD có cùng id và mataisan
                    prItem = dataPR_OLD.find(function (item) {
                      return item.id === logItem.id_data_pr && item.mataisan === logItem.mataisan;
                    });
                    if (!prItem) {
                      _context18.next = 25;
                      break;
                    }
                    // Thực hiện phép trừ soluongdanhap từ dataHD_OLD với soluongnhap từ data_log
                    //const soluongpoconlai = prItem.soluongpr - logItem.soluongpo - (prItem.soluongpo * -1);
                    soluongpoconlai = prItem.tongsoluongpo - logItem.soluongpo;
                    tongsoluongpoconlai = prItem.tongsoluongpo - logItem.soluongpo; // Kiểm tra kết quả của phép trừ và cập nhật dacheck
                    if (soluongpoconlai === 0) {
                      prItem.soluongpo = null;
                      prItem.tongsoluongpo = null;
                      prItem.dacheckvoipo = null;
                      prItem.checkmataisan = null;
                    } else if (soluongpoconlai > 0) {
                      prItem.dacheckvoipo = 1;
                      prItem.checkmataisan = 1;
                      prItem.soluongpo = tongsoluongpoconlai - prItem.soluongpr;
                      prItem.tongsoluongpo = tongsoluongpoconlai;
                    }

                    // Cập nhật vào cơ sở dữ liệu
                    _context18.prev = 6;
                    _context18.next = 9;
                    return _index["default"].Data_PR.findOne({
                      where: {
                        id: prItem.id
                      },
                      raw: false
                    });
                  case 9:
                    _data3 = _context18.sent;
                    if (!_data3) {
                      _context18.next = 19;
                      break;
                    }
                    // Cập nhật các giá trị
                    _data3.soluongpo = prItem.soluongpo;
                    _data3.tongsoluongpo = prItem.tongsoluongpo;
                    _data3.dacheckvoipo = prItem.dacheckvoipo;
                    _data3.checkmataisan = prItem.checkmataisan;

                    // Lưu thay đổi
                    _context18.next = 17;
                    return _data3.save();
                  case 17:
                    _context18.next = 20;
                    break;
                  case 19:
                    console.log("Record not found with id: ".concat(prItem.id));
                  case 20:
                    _context18.next = 25;
                    break;
                  case 22:
                    _context18.prev = 22;
                    _context18.t0 = _context18["catch"](6);
                    console.error("Error updating record with id: ".concat(prItem.id), _context18.t0);
                  case 25:
                  case "end":
                    return _context18.stop();
                }
              }, _loop3, null, [[6, 22]]);
            });
            _iterator9.s();
          case 35:
            if ((_step9 = _iterator9.n()).done) {
              _context19.next = 39;
              break;
            }
            return _context19.delegateYield(_loop3(), "t2", 37);
          case 37:
            _context19.next = 35;
            break;
          case 39:
            _context19.next = 44;
            break;
          case 41:
            _context19.prev = 41;
            _context19.t3 = _context19["catch"](32);
            _iterator9.e(_context19.t3);
          case 44:
            _context19.prev = 44;
            _iterator9.f();
            return _context19.finish(44);
          case 47:
            _iterator10 = _createForOfIteratorHelper(data_log);
            _context19.prev = 48;
            _iterator10.s();
          case 50:
            if ((_step10 = _iterator10.n()).done) {
              _context19.next = 62;
              break;
            }
            logItem = _step10.value;
            _context19.prev = 52;
            _context19.next = 55;
            return _index["default"].Data_Po_Pr_Log.destroy({
              where: {
                id: logItem.id
              }
            });
          case 55:
            _context19.next = 60;
            break;
          case 57:
            _context19.prev = 57;
            _context19.t4 = _context19["catch"](52);
            console.error("Error deleting record with id_data_hd: ".concat(logItem.id_data_hd), _context19.t4);
          case 60:
            _context19.next = 50;
            break;
          case 62:
            _context19.next = 67;
            break;
          case 64:
            _context19.prev = 64;
            _context19.t5 = _context19["catch"](48);
            _iterator10.e(_context19.t5);
          case 67:
            _context19.prev = 67;
            _iterator10.f();
            return _context19.finish(67);
          case 70:
            resolve({
              errCode: 0,
              errMessage: "\u0110\xE3 x\xF3a th\xF4ng tin th\xE0nh c\xF4ng"
            });
            _context19.next = 77;
            break;
          case 73:
            _context19.prev = 73;
            _context19.t6 = _context19["catch"](0);
            console.error(_context19.t6);
            return _context19.abrupt("return", res.status(500).json({
              errCode: 500,
              errMessage: 'Internal Server Error'
            }));
          case 77:
          case "end":
            return _context19.stop();
        }
      }, _callee16, null, [[0, 73], [7, 25, 28, 31], [11, 18], [32, 41, 44, 47], [48, 64, 67, 70], [52, 57]]);
    }));
    return function (_x31, _x32) {
      return _ref16.apply(this, arguments);
    };
  }());
};
var deleteCT = function deleteCT(machungtu, sopo) {
  return new Promise(/*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(resolve, reject) {
      var check_log_chungtu, check_log_hopdong, data_chungtu, _iterator11, _step11, logItem;
      return _regeneratorRuntime().wrap(function _callee17$(_context20) {
        while (1) switch (_context20.prev = _context20.next) {
          case 0:
            _context20.prev = 0;
            _context20.next = 3;
            return _index["default"].Data_ChungTu_Log.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                machungtu: machungtu
              },
              raw: true
            });
          case 3:
            check_log_chungtu = _context20.sent;
            _context20.next = 6;
            return _index["default"].Data_ChungTu_Hd_Log.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                machungtu: machungtu
              },
              raw: true
            });
          case 6:
            check_log_hopdong = _context20.sent;
            _context20.next = 9;
            return _index["default"].Data_ChungTu.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                machungtu: machungtu
              },
              raw: true
            });
          case 9:
            data_chungtu = _context20.sent;
            if (!(check_log_chungtu.length === 0 && check_log_hopdong.length === 0)) {
              _context20.next = 37;
              break;
            }
            //XÓA DATA CHỨNG TỪ TRƯỚC KHI INSRT LẠI
            _iterator11 = _createForOfIteratorHelper(data_chungtu);
            _context20.prev = 12;
            _iterator11.s();
          case 14:
            if ((_step11 = _iterator11.n()).done) {
              _context20.next = 26;
              break;
            }
            logItem = _step11.value;
            _context20.prev = 16;
            _context20.next = 19;
            return _index["default"].Data_ChungTu.destroy({
              where: {
                machungtu: logItem.machungtu
              }
            });
          case 19:
            _context20.next = 24;
            break;
          case 21:
            _context20.prev = 21;
            _context20.t0 = _context20["catch"](16);
            console.error("Error deleting record with", _context20.t0);
          case 24:
            _context20.next = 14;
            break;
          case 26:
            _context20.next = 31;
            break;
          case 28:
            _context20.prev = 28;
            _context20.t1 = _context20["catch"](12);
            _iterator11.e(_context20.t1);
          case 31:
            _context20.prev = 31;
            _iterator11.f();
            return _context20.finish(31);
          case 34:
            resolve({
              errCode: 0,
              errMessage: 'Đã xóa chứng từ thành công'
            });
            _context20.next = 38;
            break;
          case 37:
            resolve({
              errCode: 1,
              errMessage: 'Chứng từ đã kiểm tra, không thể xóa'
            });
          case 38:
            _context20.next = 44;
            break;
          case 40:
            _context20.prev = 40;
            _context20.t2 = _context20["catch"](0);
            console.error(_context20.t2);
            return _context20.abrupt("return", res.status(500).json({
              errCode: 500,
              errMessage: 'Internal Server Error'
            }));
          case 44:
          case "end":
            return _context20.stop();
        }
      }, _callee17, null, [[0, 40], [12, 28, 31, 34], [16, 21]]);
    }));
    return function (_x33, _x34) {
      return _ref17.apply(this, arguments);
    };
  }());
};
var deleteTaiSan = function deleteTaiSan(Duoc_Id, TenDuoc_Id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(resolve, reject) {
      var request, getdata;
      return _regeneratorRuntime().wrap(function _callee18$(_context21) {
        while (1) switch (_context21.prev = _context21.next) {
          case 0:
            _context21.prev = 0;
            //console.log('Duoc_Id', Duoc_Id, TenDuoc_Id)
            request = _index["default"].sqlhis2Connection.request();
            request.input('Duoc_Id', Duoc_Id);
            request.input('TenDuoc_Id', TenDuoc_Id);
            _context21.next = 6;
            return request.execute('[sp_QLPO_DELETE_TAISAN]');
          case 6:
            getdata = _context21.sent;
            resolve({
              errCode: 0,
              errMessage: 'Xóa tài sản thành công.'
            });
            _context21.next = 14;
            break;
          case 10:
            _context21.prev = 10;
            _context21.t0 = _context21["catch"](0);
            console.error(_context21.t0);
            return _context21.abrupt("return", res.status(500).json({
              errCode: 500,
              errMessage: 'Internal Server Error'
            }));
          case 14:
          case "end":
            return _context21.stop();
        }
      }, _callee18, null, [[0, 10]]);
    }));
    return function (_x35, _x36) {
      return _ref18.apply(this, arguments);
    };
  }());
};
var deleteDaTaKiemKe = function deleteDaTaKiemKe(KhoTaiSan_Id, data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(resolve, reject) {
      return _regeneratorRuntime().wrap(function _callee19$(_context22) {
        while (1) switch (_context22.prev = _context22.next) {
          case 0:
            _context22.prev = 0;
            _context22.next = 3;
            return _index["default"].Data_KiemKe.destroy({
              where: {
                KhoDuoc_Id: KhoTaiSan_Id,
                XacNhanKiemKe: null,
                DotKiemKe_Id: data.DotKiemKe_Id
              }
            });
          case 3:
            _context22.next = 5;
            return _index["default"].Data_DotKiemKe.destroy({
              where: {
                id: data.DotKiemKe_Id
              }
            });
          case 5:
            resolve({
              errCode: 0,
              errMessage: "\u0110\xE3 x\xF3a th\xF4ng tin th\xE0nh c\xF4ng"
            });
            _context22.next = 11;
            break;
          case 8:
            _context22.prev = 8;
            _context22.t0 = _context22["catch"](0);
            console.error(_context22.t0);
            //return res.status(500).json({ errCode: 500, errMessage: 'Internal Server Error' });
          case 11:
          case "end":
            return _context22.stop();
        }
      }, _callee19, null, [[0, 8]]);
    }));
    return function (_x37, _x38) {
      return _ref19.apply(this, arguments);
    };
  }());
};
var huyKiemKe = function huyKiemKe(IdKiemKe) {
  return new Promise(/*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(resolve, reject) {
      var _check_trangthaichuye, data, check_trangthaichuyen, id_chuyen, data_dachuyen;
      return _regeneratorRuntime().wrap(function _callee20$(_context23) {
        while (1) switch (_context23.prev = _context23.next) {
          case 0:
            _context23.prev = 0;
            _context23.next = 3;
            return _index["default"].Data_KiemKe.findOne({
              where: {
                id: IdKiemKe
              },
              raw: false
            });
          case 3:
            data = _context23.sent;
            _context23.next = 6;
            return _index["default"].sequelize.query('CALL sp_check_trangthaichuyen(:IdKiemKe)', {
              replacements: {
                IdKiemKe: IdKiemKe
              },
              raw: false
            });
          case 6:
            check_trangthaichuyen = _context23.sent;
            id_chuyen = (_check_trangthaichuye = check_trangthaichuyen[0]) === null || _check_trangthaichuye === void 0 ? void 0 : _check_trangthaichuye.Id_Chuyen;
            if (!(check_trangthaichuyen.length > 0)) {
              _context23.next = 41;
              break;
            }
            _context23.next = 11;
            return _index["default"].Data_KiemKe.findOne({
              where: {
                id: id_chuyen
              },
              raw: false
            });
          case 11:
            data_dachuyen = _context23.sent;
            if (!data_dachuyen) {
              _context23.next = 16;
              break;
            }
            data_dachuyen.TrangThaiChuyen = null;
            // Lưu thay đổi
            _context23.next = 16;
            return data_dachuyen.save();
          case 16:
            if (!data.KhoDuocSaiViTri_Id) {
              _context23.next = 28;
              break;
            }
            _context23.prev = 17;
            _context23.next = 20;
            return _index["default"].Data_KiemKe.destroy({
              where: {
                id: data.id
              }
            });
          case 20:
            _context23.next = 25;
            break;
          case 22:
            _context23.prev = 22;
            _context23.t0 = _context23["catch"](17);
            console.error("L\u1ED7i khi x\xF3a d\u1EEF li\u1EC7u v\u1EDBi ID ".concat(data.id, ":"), _context23.t0);
          case 25:
            resolve({
              errCode: 0,
              errMessage: 'Hủy kiểm kê thành công'
            });
            _context23.next = 39;
            break;
          case 28:
            if (!data) {
              _context23.next = 38;
              break;
            }
            data.IsCheckKiemKe = 0;
            data.SoLuongThucTe = null;
            data.ChenhLech = null;
            data.NgayKiemKe = null;
            _context23.next = 35;
            return data.save();
          case 35:
            resolve({
              errCode: 0,
              errMessage: 'Hủy kiểm kê thành công'
            });
            _context23.next = 39;
            break;
          case 38:
            resolve({
              errCode: 1,
              errMessage: 'Không tìm thấy thông tin'
            });
          case 39:
            _context23.next = 64;
            break;
          case 41:
            if (!data.KhoDuocSaiViTri_Id) {
              _context23.next = 53;
              break;
            }
            _context23.prev = 42;
            _context23.next = 45;
            return _index["default"].Data_KiemKe.destroy({
              where: {
                id: data.id
              }
            });
          case 45:
            _context23.next = 50;
            break;
          case 47:
            _context23.prev = 47;
            _context23.t1 = _context23["catch"](42);
            console.error("L\u1ED7i khi x\xF3a d\u1EEF li\u1EC7u v\u1EDBi ID ".concat(data.id, ":"), _context23.t1);
          case 50:
            resolve({
              errCode: 0,
              errMessage: 'Hủy kiểm kê thành công'
            });
            _context23.next = 64;
            break;
          case 53:
            if (!data) {
              _context23.next = 63;
              break;
            }
            data.IsCheckKiemKe = 0;
            data.SoLuongThucTe = null;
            data.ChenhLech = null;
            data.NgayKiemKe = null;
            _context23.next = 60;
            return data.save();
          case 60:
            resolve({
              errCode: 0,
              errMessage: 'Hủy kiểm kê thành công'
            });
            _context23.next = 64;
            break;
          case 63:
            resolve({
              errCode: 1,
              errMessage: 'Không tìm thấy thông tin'
            });
          case 64:
            _context23.next = 69;
            break;
          case 66:
            _context23.prev = 66;
            _context23.t2 = _context23["catch"](0);
            console.error(_context23.t2);
            //return res.status(500).json({ errCode: 500, errMessage: 'Internal Server Error' });
          case 69:
          case "end":
            return _context23.stop();
        }
      }, _callee20, null, [[0, 66], [17, 22], [42, 47]]);
    }));
    return function (_x39, _x40) {
      return _ref20.apply(this, arguments);
    };
  }());
};
var deleteCheckCT = function deleteCheckCT(machungtu, sopo) {
  return new Promise(/*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(resolve, reject) {
      var check_log_chungtu, check_log_hopdong, data_chungtu, _iterator12, _step12, logItem;
      return _regeneratorRuntime().wrap(function _callee21$(_context24) {
        while (1) switch (_context24.prev = _context24.next) {
          case 0:
            _context24.prev = 0;
            _context24.next = 3;
            return _index["default"].Check_Data_ChungTu_Log.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                machungtu: machungtu
              },
              raw: true
            });
          case 3:
            check_log_chungtu = _context24.sent;
            _context24.next = 6;
            return _index["default"].Check_Data_ChungTu_Hd_Log.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                machungtu: machungtu
              },
              raw: true
            });
          case 6:
            check_log_hopdong = _context24.sent;
            _context24.next = 9;
            return _index["default"].Check_Data_ChungTu.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                machungtu: machungtu
              },
              raw: true
            });
          case 9:
            data_chungtu = _context24.sent;
            if (!(check_log_chungtu.length === 0 && check_log_hopdong.length === 0)) {
              _context24.next = 37;
              break;
            }
            //XÓA DATA CHỨNG TỪ TRƯỚC KHI INSRT LẠI
            _iterator12 = _createForOfIteratorHelper(data_chungtu);
            _context24.prev = 12;
            _iterator12.s();
          case 14:
            if ((_step12 = _iterator12.n()).done) {
              _context24.next = 26;
              break;
            }
            logItem = _step12.value;
            _context24.prev = 16;
            _context24.next = 19;
            return _index["default"].Check_Data_ChungTu.destroy({
              where: {
                machungtu: logItem.machungtu
              }
            });
          case 19:
            _context24.next = 24;
            break;
          case 21:
            _context24.prev = 21;
            _context24.t0 = _context24["catch"](16);
            console.error("Error deleting record with", _context24.t0);
          case 24:
            _context24.next = 14;
            break;
          case 26:
            _context24.next = 31;
            break;
          case 28:
            _context24.prev = 28;
            _context24.t1 = _context24["catch"](12);
            _iterator12.e(_context24.t1);
          case 31:
            _context24.prev = 31;
            _iterator12.f();
            return _context24.finish(31);
          case 34:
            resolve({
              errCode: 0,
              errMessage: 'Đã xóa chứng từ thành công'
            });
            _context24.next = 38;
            break;
          case 37:
            resolve({
              errCode: 1,
              errMessage: 'Chứng từ đã kiểm tra, không thể xóa'
            });
          case 38:
            _context24.next = 44;
            break;
          case 40:
            _context24.prev = 40;
            _context24.t2 = _context24["catch"](0);
            console.error(_context24.t2);
            return _context24.abrupt("return", res.status(500).json({
              errCode: 500,
              errMessage: 'Internal Server Error'
            }));
          case 44:
          case "end":
            return _context24.stop();
        }
      }, _callee21, null, [[0, 40], [12, 28, 31, 34], [16, 21]]);
    }));
    return function (_x41, _x42) {
      return _ref21.apply(this, arguments);
    };
  }());
};
var deleteLogCTPO = function deleteLogCTPO(machungtu, sopo) {
  return new Promise(/*#__PURE__*/function () {
    var _ref22 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(resolve, reject) {
      var data_log, data_chungtu, dataidpo, dataPO_OLD, _iterator13, _step13, id_data_po, _data5, _iterator14, _step14, _loop4, _iterator15, _step15, logItem, data_dacheck_ct, _iterator16, _step16, itemCheck, data, data_dacheck, _iterator17, _step17, _itemCheck, _data4;
      return _regeneratorRuntime().wrap(function _callee22$(_context26) {
        while (1) switch (_context26.prev = _context26.next) {
          case 0:
            _context26.prev = 0;
            _context26.next = 3;
            return _index["default"].Data_ChungTu_Log.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                machungtu: machungtu
              },
              raw: true
            });
          case 3:
            data_log = _context26.sent;
            _context26.next = 6;
            return _index["default"].Data_ChungTu.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                machungtu: machungtu
              },
              raw: true
            });
          case 6:
            data_chungtu = _context26.sent;
            // Lấy ra tất cả id_data_po 
            dataidpo = data_log.map(function (item) {
              return {
                id_data_po: item.id_data_po
              };
            }); //console.log('data_log', data_log)
            dataPO_OLD = [];
            _iterator13 = _createForOfIteratorHelper(dataidpo);
            _context26.prev = 10;
            _iterator13.s();
          case 12:
            if ((_step13 = _iterator13.n()).done) {
              _context26.next = 26;
              break;
            }
            id_data_po = _step13.value.id_data_po;
            _context26.prev = 14;
            _context26.next = 17;
            return _index["default"].Data_PO.findOne({
              where: {
                id: id_data_po
              },
              raw: true
            });
          case 17:
            _data5 = _context26.sent;
            if (_data5) {
              dataPO_OLD.push(_data5);
            }
            _context26.next = 24;
            break;
          case 21:
            _context26.prev = 21;
            _context26.t0 = _context26["catch"](14);
            console.error("Error finding data for ".concat(machungtu, ":"), _context26.t0);
          case 24:
            _context26.next = 12;
            break;
          case 26:
            _context26.next = 31;
            break;
          case 28:
            _context26.prev = 28;
            _context26.t1 = _context26["catch"](10);
            _iterator13.e(_context26.t1);
          case 31:
            _context26.prev = 31;
            _iterator13.f();
            return _context26.finish(31);
          case 34:
            _iterator14 = _createForOfIteratorHelper(data_log);
            _context26.prev = 35;
            _loop4 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop4() {
              var logItem, hdItem, soluongconlai, soluongnhap, soluongnhapconlai, _data6;
              return _regeneratorRuntime().wrap(function _loop4$(_context25) {
                while (1) switch (_context25.prev = _context25.next) {
                  case 0:
                    logItem = _step14.value;
                    // Tìm item trong dataHD_OLD có cùng id và mataisan
                    hdItem = dataPO_OLD.find(function (item) {
                      return item.id === logItem.id_data_po && item.mataisan === logItem.mataisan;
                    });
                    if (!hdItem) {
                      _context25.next = 28;
                      break;
                    }
                    // Thực hiện phép trừ soluongdanhap từ dataHD_OLD với soluongnhap từ data_log
                    soluongconlai = hdItem.soluongdanhap - logItem.soluongnhap;
                    soluongnhap = hdItem.soluongpo - (hdItem.soluongdanhap - logItem.soluongnhap);
                    soluongnhapconlai = hdItem.soluongdanhap - logItem.soluongnhap; // Kiểm tra kết quả của phép trừ và cập nhật dacheck
                    if (soluongconlai === 0) {
                      hdItem.soluongnhap = null;
                      hdItem.dongianhap = null;
                      hdItem.dongiavatnhap = null;
                      hdItem.soluongdanhap = null;
                      hdItem.dacheckvoict = null;
                      hdItem.checkmataisanvoict = null;
                    } else if (soluongconlai > 0) {
                      hdItem.soluongnhap = soluongnhap * -1;
                      hdItem.soluongdanhap = soluongnhapconlai;
                      hdItem.dacheckvoict = 1;
                      hdItem.checkmataisanvoict = 1;
                      hdItem.soluongnhap_check = soluongnhap * -1;
                    }

                    // Cập nhật vào cơ sở dữ liệu
                    _context25.prev = 7;
                    _context25.next = 10;
                    return _index["default"].Data_PO.findOne({
                      where: {
                        id: hdItem.id
                      },
                      raw: false
                    });
                  case 10:
                    _data6 = _context25.sent;
                    if (!_data6) {
                      _context25.next = 22;
                      break;
                    }
                    // Cập nhật các giá trị
                    _data6.soluongnhap = hdItem.soluongnhap;
                    _data6.dongianhap = hdItem.dongianhap;
                    _data6.dongiavatnhap = hdItem.dongiavatnhap;
                    _data6.soluongdanhap = hdItem.soluongdanhap;
                    _data6.dacheckvoict = hdItem.dacheckvoict;
                    _data6.checkmataisanvoict = hdItem.checkmataisanvoict;
                    // Lưu thay đổi
                    _context25.next = 20;
                    return _data6.save();
                  case 20:
                    _context25.next = 23;
                    break;
                  case 22:
                    console.log("Record not found with id: ".concat(hdItem.id));
                  case 23:
                    _context25.next = 28;
                    break;
                  case 25:
                    _context25.prev = 25;
                    _context25.t0 = _context25["catch"](7);
                    console.error("Error updating record with id: ".concat(hdItem.id), _context25.t0);
                  case 28:
                  case "end":
                    return _context25.stop();
                }
              }, _loop4, null, [[7, 25]]);
            });
            _iterator14.s();
          case 38:
            if ((_step14 = _iterator14.n()).done) {
              _context26.next = 42;
              break;
            }
            return _context26.delegateYield(_loop4(), "t2", 40);
          case 40:
            _context26.next = 38;
            break;
          case 42:
            _context26.next = 47;
            break;
          case 44:
            _context26.prev = 44;
            _context26.t3 = _context26["catch"](35);
            _iterator14.e(_context26.t3);
          case 47:
            _context26.prev = 47;
            _iterator14.f();
            return _context26.finish(47);
          case 50:
            //console.log('dataHD_OLD', dataHD_OLD)
            _iterator15 = _createForOfIteratorHelper(data_log);
            _context26.prev = 51;
            _iterator15.s();
          case 53:
            if ((_step15 = _iterator15.n()).done) {
              _context26.next = 65;
              break;
            }
            logItem = _step15.value;
            _context26.prev = 55;
            _context26.next = 58;
            return _index["default"].Data_ChungTu_Log.destroy({
              where: {
                id: logItem.id
              }
            });
          case 58:
            _context26.next = 63;
            break;
          case 60:
            _context26.prev = 60;
            _context26.t4 = _context26["catch"](55);
            console.error("Error deleting record with", _context26.t4);
          case 63:
            _context26.next = 53;
            break;
          case 65:
            _context26.next = 70;
            break;
          case 67:
            _context26.prev = 67;
            _context26.t5 = _context26["catch"](51);
            _iterator15.e(_context26.t5);
          case 70:
            _context26.prev = 70;
            _iterator15.f();
            return _context26.finish(70);
          case 73:
            _context26.next = 75;
            return _index["default"].sequelize.query('CALL sp_get_po_dacheck_ct(:sopo)', {
              replacements: {
                sopo: sopo
              },
              raw: false
            });
          case 75:
            data_dacheck_ct = _context26.sent;
            if (!data_dacheck_ct) {
              _context26.next = 105;
              break;
            }
            _iterator16 = _createForOfIteratorHelper(data_dacheck_ct);
            _context26.prev = 78;
            _iterator16.s();
          case 80:
            if ((_step16 = _iterator16.n()).done) {
              _context26.next = 97;
              break;
            }
            itemCheck = _step16.value;
            _context26.prev = 82;
            _context26.next = 85;
            return _index["default"].Data_PO.findOne({
              where: {
                id: itemCheck.id
              },
              raw: false
            });
          case 85:
            data = _context26.sent;
            if (!data) {
              _context26.next = 90;
              break;
            }
            // Cập nhật các giá trị
            data.dacheckvoict = null;
            // Lưu thay đổi
            _context26.next = 90;
            return data.save();
          case 90:
            _context26.next = 95;
            break;
          case 92:
            _context26.prev = 92;
            _context26.t6 = _context26["catch"](82);
            console.error("Error updating record", _context26.t6);
          case 95:
            _context26.next = 80;
            break;
          case 97:
            _context26.next = 102;
            break;
          case 99:
            _context26.prev = 99;
            _context26.t7 = _context26["catch"](78);
            _iterator16.e(_context26.t7);
          case 102:
            _context26.prev = 102;
            _iterator16.f();
            return _context26.finish(102);
          case 105:
            _context26.next = 107;
            return _index["default"].sequelize.query('CALL sp_get_po_dacheck(:sopo)', {
              replacements: {
                sopo: sopo
              },
              raw: false
            });
          case 107:
            data_dacheck = _context26.sent;
            if (!data_dacheck) {
              _context26.next = 137;
              break;
            }
            _iterator17 = _createForOfIteratorHelper(data_dacheck);
            _context26.prev = 110;
            _iterator17.s();
          case 112:
            if ((_step17 = _iterator17.n()).done) {
              _context26.next = 129;
              break;
            }
            _itemCheck = _step17.value;
            _context26.prev = 114;
            _context26.next = 117;
            return _index["default"].Data_ChungTu_Log.findOne({
              where: {
                id: _itemCheck.id
              },
              raw: false
            });
          case 117:
            _data4 = _context26.sent;
            if (!_data4) {
              _context26.next = 122;
              break;
            }
            // Cập nhật các giá trị
            _data4.soluongnhap_check = _itemCheck.soluongnhap;
            // Lưu thay đổi
            _context26.next = 122;
            return _data4.save();
          case 122:
            _context26.next = 127;
            break;
          case 124:
            _context26.prev = 124;
            _context26.t8 = _context26["catch"](114);
            console.error("Error updating record", _context26.t8);
          case 127:
            _context26.next = 112;
            break;
          case 129:
            _context26.next = 134;
            break;
          case 131:
            _context26.prev = 131;
            _context26.t9 = _context26["catch"](110);
            _iterator17.e(_context26.t9);
          case 134:
            _context26.prev = 134;
            _iterator17.f();
            return _context26.finish(134);
          case 137:
            resolve({
              errCode: 0,
              errMessage: "\u0110\xE3 x\xF3a th\xF4ng tin th\xE0nh c\xF4ng"
            });
            _context26.next = 144;
            break;
          case 140:
            _context26.prev = 140;
            _context26.t10 = _context26["catch"](0);
            console.error(_context26.t10);
            return _context26.abrupt("return", res.status(500).json({
              errCode: 500,
              errMessage: 'Internal Server Error'
            }));
          case 144:
          case "end":
            return _context26.stop();
        }
      }, _callee22, null, [[0, 140], [10, 28, 31, 34], [14, 21], [35, 44, 47, 50], [51, 67, 70, 73], [55, 60], [78, 99, 102, 105], [82, 92], [110, 131, 134, 137], [114, 124]]);
    }));
    return function (_x43, _x44) {
      return _ref22.apply(this, arguments);
    };
  }());
};
var deleteCheckLogCTPO = function deleteCheckLogCTPO(machungtu, sopo) {
  return new Promise(/*#__PURE__*/function () {
    var _ref23 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23(resolve, reject) {
      var data_log, data_chungtu, dataidpo, dataPO_OLD, _iterator18, _step18, id_data_po, _data8, _iterator19, _step19, _loop5, _iterator20, _step20, logItem, data_dacheck_ct, _iterator21, _step21, itemCheck, data, data_dacheck, _iterator22, _step22, _itemCheck2, _data7;
      return _regeneratorRuntime().wrap(function _callee23$(_context28) {
        while (1) switch (_context28.prev = _context28.next) {
          case 0:
            _context28.prev = 0;
            _context28.next = 3;
            return _index["default"].Check_Data_ChungTu_Log.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                machungtu: machungtu
              },
              raw: true
            });
          case 3:
            data_log = _context28.sent;
            _context28.next = 6;
            return _index["default"].Check_Data_ChungTu.findAll({
              //attributes: ['SoBenhAn'],
              where: {
                machungtu: machungtu
              },
              raw: true
            });
          case 6:
            data_chungtu = _context28.sent;
            // Lấy ra tất cả id_data_po 
            dataidpo = data_log.map(function (item) {
              return {
                id_data_po: item.id_data_po
              };
            }); //console.log('data_log', data_log)
            dataPO_OLD = [];
            _iterator18 = _createForOfIteratorHelper(dataidpo);
            _context28.prev = 10;
            _iterator18.s();
          case 12:
            if ((_step18 = _iterator18.n()).done) {
              _context28.next = 26;
              break;
            }
            id_data_po = _step18.value.id_data_po;
            _context28.prev = 14;
            _context28.next = 17;
            return _index["default"].Data_PO.findOne({
              where: {
                id: id_data_po
              },
              raw: true
            });
          case 17:
            _data8 = _context28.sent;
            if (_data8) {
              dataPO_OLD.push(_data8);
            }
            _context28.next = 24;
            break;
          case 21:
            _context28.prev = 21;
            _context28.t0 = _context28["catch"](14);
            console.error("Error finding data for ".concat(machungtu, ":"), _context28.t0);
          case 24:
            _context28.next = 12;
            break;
          case 26:
            _context28.next = 31;
            break;
          case 28:
            _context28.prev = 28;
            _context28.t1 = _context28["catch"](10);
            _iterator18.e(_context28.t1);
          case 31:
            _context28.prev = 31;
            _iterator18.f();
            return _context28.finish(31);
          case 34:
            _iterator19 = _createForOfIteratorHelper(data_log);
            _context28.prev = 35;
            _loop5 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop5() {
              var logItem, hdItem, soluongconlai, soluongnhap, soluongnhapconlai, _data9;
              return _regeneratorRuntime().wrap(function _loop5$(_context27) {
                while (1) switch (_context27.prev = _context27.next) {
                  case 0:
                    logItem = _step19.value;
                    // Tìm item trong dataHD_OLD có cùng id và mataisan
                    hdItem = dataPO_OLD.find(function (item) {
                      return item.id === logItem.id_data_po && item.mataisan === logItem.mataisan;
                    });
                    if (!hdItem) {
                      _context27.next = 28;
                      break;
                    }
                    // Thực hiện phép trừ soluongdanhap từ dataHD_OLD với soluongnhap từ data_log
                    soluongconlai = hdItem.soluongdanhap2 - logItem.soluongnhap;
                    soluongnhap = hdItem.soluongpo - (hdItem.soluongdanhap2 - logItem.soluongnhap);
                    soluongnhapconlai = hdItem.soluongdanhap2 - logItem.soluongnhap; // Kiểm tra kết quả của phép trừ và cập nhật dacheck
                    if (soluongconlai === 0) {
                      hdItem.soluongnhap2 = null;
                      hdItem.dongianhap2 = null;
                      hdItem.dongiavatnhap2 = null;
                      hdItem.soluongdanhap2 = null;
                      hdItem.dacheckvoict2 = null;
                      hdItem.checkmataisanvoict2 = null;
                    } else if (soluongconlai > 0) {
                      hdItem.soluongnhap2 = soluongnhap * -1;
                      hdItem.soluongdanhap2 = soluongnhapconlai;
                      hdItem.dacheckvoict2 = 1;
                      hdItem.checkmataisanvoict2 = 1;
                      hdItem.soluongnhap_check = soluongnhap * -1;
                    }

                    // Cập nhật vào cơ sở dữ liệu
                    _context27.prev = 7;
                    _context27.next = 10;
                    return _index["default"].Data_PO.findOne({
                      where: {
                        id: hdItem.id
                      },
                      raw: false
                    });
                  case 10:
                    _data9 = _context27.sent;
                    if (!_data9) {
                      _context27.next = 22;
                      break;
                    }
                    // Cập nhật các giá trị
                    _data9.soluongnhap2 = hdItem.soluongnhap2;
                    _data9.dongianhap2 = hdItem.dongianhap2;
                    _data9.dongiavatnhap2 = hdItem.dongiavatnhap2;
                    _data9.soluongdanhap2 = hdItem.soluongdanhap2;
                    _data9.dacheckvoict2 = hdItem.dacheckvoict2;
                    _data9.checkmataisanvoict2 = hdItem.checkmataisanvoict2;
                    // Lưu thay đổi
                    _context27.next = 20;
                    return _data9.save();
                  case 20:
                    _context27.next = 23;
                    break;
                  case 22:
                    console.log("Record not found with id: ".concat(hdItem.id));
                  case 23:
                    _context27.next = 28;
                    break;
                  case 25:
                    _context27.prev = 25;
                    _context27.t0 = _context27["catch"](7);
                    console.error("Error updating record with id: ".concat(hdItem.id), _context27.t0);
                  case 28:
                  case "end":
                    return _context27.stop();
                }
              }, _loop5, null, [[7, 25]]);
            });
            _iterator19.s();
          case 38:
            if ((_step19 = _iterator19.n()).done) {
              _context28.next = 42;
              break;
            }
            return _context28.delegateYield(_loop5(), "t2", 40);
          case 40:
            _context28.next = 38;
            break;
          case 42:
            _context28.next = 47;
            break;
          case 44:
            _context28.prev = 44;
            _context28.t3 = _context28["catch"](35);
            _iterator19.e(_context28.t3);
          case 47:
            _context28.prev = 47;
            _iterator19.f();
            return _context28.finish(47);
          case 50:
            //console.log('dataHD_OLD', dataHD_OLD)
            _iterator20 = _createForOfIteratorHelper(data_log);
            _context28.prev = 51;
            _iterator20.s();
          case 53:
            if ((_step20 = _iterator20.n()).done) {
              _context28.next = 65;
              break;
            }
            logItem = _step20.value;
            _context28.prev = 55;
            _context28.next = 58;
            return _index["default"].Check_Data_ChungTu_Log.destroy({
              where: {
                id: logItem.id
              }
            });
          case 58:
            _context28.next = 63;
            break;
          case 60:
            _context28.prev = 60;
            _context28.t4 = _context28["catch"](55);
            console.error("Error deleting record with", _context28.t4);
          case 63:
            _context28.next = 53;
            break;
          case 65:
            _context28.next = 70;
            break;
          case 67:
            _context28.prev = 67;
            _context28.t5 = _context28["catch"](51);
            _iterator20.e(_context28.t5);
          case 70:
            _context28.prev = 70;
            _iterator20.f();
            return _context28.finish(70);
          case 73:
            _context28.next = 75;
            return _index["default"].sequelize.query('CALL sp_get_check_po_dacheck_ct(:sopo)', {
              replacements: {
                sopo: sopo
              },
              raw: false
            });
          case 75:
            data_dacheck_ct = _context28.sent;
            if (!data_dacheck_ct) {
              _context28.next = 105;
              break;
            }
            _iterator21 = _createForOfIteratorHelper(data_dacheck_ct);
            _context28.prev = 78;
            _iterator21.s();
          case 80:
            if ((_step21 = _iterator21.n()).done) {
              _context28.next = 97;
              break;
            }
            itemCheck = _step21.value;
            _context28.prev = 82;
            _context28.next = 85;
            return _index["default"].Data_PO.findOne({
              where: {
                id: itemCheck.id
              },
              raw: false
            });
          case 85:
            data = _context28.sent;
            if (!data) {
              _context28.next = 90;
              break;
            }
            // Cập nhật các giá trị
            data.dacheckvoict2 = null;
            // Lưu thay đổi
            _context28.next = 90;
            return data.save();
          case 90:
            _context28.next = 95;
            break;
          case 92:
            _context28.prev = 92;
            _context28.t6 = _context28["catch"](82);
            console.error("Error updating record", _context28.t6);
          case 95:
            _context28.next = 80;
            break;
          case 97:
            _context28.next = 102;
            break;
          case 99:
            _context28.prev = 99;
            _context28.t7 = _context28["catch"](78);
            _iterator21.e(_context28.t7);
          case 102:
            _context28.prev = 102;
            _iterator21.f();
            return _context28.finish(102);
          case 105:
            _context28.next = 107;
            return _index["default"].sequelize.query('CALL sp_get_check_po_dacheck(:sopo)', {
              replacements: {
                sopo: sopo
              },
              raw: false
            });
          case 107:
            data_dacheck = _context28.sent;
            if (!data_dacheck) {
              _context28.next = 137;
              break;
            }
            _iterator22 = _createForOfIteratorHelper(data_dacheck);
            _context28.prev = 110;
            _iterator22.s();
          case 112:
            if ((_step22 = _iterator22.n()).done) {
              _context28.next = 129;
              break;
            }
            _itemCheck2 = _step22.value;
            _context28.prev = 114;
            _context28.next = 117;
            return _index["default"].Check_Data_ChungTu_Log.findOne({
              where: {
                id: _itemCheck2.id
              },
              raw: false
            });
          case 117:
            _data7 = _context28.sent;
            if (!_data7) {
              _context28.next = 122;
              break;
            }
            // Cập nhật các giá trị
            _data7.soluongnhap_check = _itemCheck2.soluongnhap2;
            // Lưu thay đổi
            _context28.next = 122;
            return _data7.save();
          case 122:
            _context28.next = 127;
            break;
          case 124:
            _context28.prev = 124;
            _context28.t8 = _context28["catch"](114);
            console.error("Error updating record", _context28.t8);
          case 127:
            _context28.next = 112;
            break;
          case 129:
            _context28.next = 134;
            break;
          case 131:
            _context28.prev = 131;
            _context28.t9 = _context28["catch"](110);
            _iterator22.e(_context28.t9);
          case 134:
            _context28.prev = 134;
            _iterator22.f();
            return _context28.finish(134);
          case 137:
            resolve({
              errCode: 0,
              errMessage: "\u0110\xE3 x\xF3a th\xF4ng tin th\xE0nh c\xF4ng"
            });
            _context28.next = 144;
            break;
          case 140:
            _context28.prev = 140;
            _context28.t10 = _context28["catch"](0);
            console.error(_context28.t10);
            return _context28.abrupt("return", res.status(500).json({
              errCode: 500,
              errMessage: 'Internal Server Error'
            }));
          case 144:
          case "end":
            return _context28.stop();
        }
      }, _callee23, null, [[0, 140], [10, 28, 31, 34], [14, 21], [35, 44, 47, 50], [51, 67, 70, 73], [55, 60], [78, 99, 102, 105], [82, 92], [110, 131, 134, 137], [114, 124]]);
    }));
    return function (_x45, _x46) {
      return _ref23.apply(this, arguments);
    };
  }());
};
var getNhomQuyen = function getNhomQuyen(id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref24 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee24$(_context29) {
        while (1) switch (_context29.prev = _context29.next) {
          case 0:
            _context29.prev = 0;
            _context29.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_data_menucon_nhomquyen(:id)', {
              replacements: {
                id: id
              },
              raw: true
            });
          case 3:
            data = _context29.sent;
            //console.log('getNhomQuyen', data)
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
      }, _callee24, null, [[0, 7]]);
    }));
    return function (_x47, _x48) {
      return _ref24.apply(this, arguments);
    };
  }());
};
var getMenuCha = function getMenuCha(id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref25 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee25$(_context30) {
        while (1) switch (_context30.prev = _context30.next) {
          case 0:
            _context30.prev = 0;
            _context30.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_data_menucon_menucha(:id)', {
              replacements: {
                id: id
              },
              raw: true
            });
          case 3:
            data = _context30.sent;
            //console.log('getNhomQuyen', data)
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
      }, _callee25, null, [[0, 7]]);
    }));
    return function (_x49, _x50) {
      return _ref25.apply(this, arguments);
    };
  }());
};
var editMenuCon = function editMenuCon(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref26 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26(resolve, reject) {
      var menu_con;
      return _regeneratorRuntime().wrap(function _callee26$(_context31) {
        while (1) switch (_context31.prev = _context31.next) {
          case 0:
            _context31.prev = 0;
            _context31.next = 3;
            return _index["default"].Dm_Menu_Con.findOne({
              where: {
                id: data.id
              },
              raw: false
            });
          case 3:
            menu_con = _context31.sent;
            //console.log('data', data.group)
            menu_con.link = data.link;
            menu_con.tenmenu_con = data.tenmenu_con;
            menu_con.menu_cha_id = data.menu_cha_id;
            if (data.group !== undefined) {
              //console.log('data 2', data.group)
              menu_con.group_id = data.group.join(',');
            }
            _context31.next = 10;
            return menu_con.save();
          case 10:
            resolve({
              errCode: 0,
              errMessage: 'Sửa thông tin thành công'
            });
            _context31.next = 16;
            break;
          case 13:
            _context31.prev = 13;
            _context31.t0 = _context31["catch"](0);
            reject(_context31.t0);
          case 16:
          case "end":
            return _context31.stop();
        }
      }, _callee26, null, [[0, 13]]);
    }));
    return function (_x51, _x52) {
      return _ref26.apply(this, arguments);
    };
  }());
};
var xacnhanKiemKe = function xacnhanKiemKe(KhoTaiSan_Id, KhoQuanLy, data, DotKiemKe_Id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref27 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27(resolve, reject) {
      var currentTime, _iterator23, _step23, item, _data10;
      return _regeneratorRuntime().wrap(function _callee27$(_context32) {
        while (1) switch (_context32.prev = _context32.next) {
          case 0:
            _context32.prev = 0;
            currentTime = new Date(); // const DotKiemKe_Id_Int = Number(DotKiemKe_Id);
            // let dataxacnhan = await db.sequelize.query('CALL sp_get_data_kiemke(:KhoTaiSan_Id,:KhoQuanLy,:DotKiemKe_Id_Int)',
            //     {
            //         replacements: {
            //             KhoTaiSan_Id: KhoTaiSan_Id,
            //             KhoQuanLy: KhoQuanLy,
            //             DotKiemKe_Id_Int: DotKiemKe_Id_Int
            //         },
            //         raw: false
            //     }
            // );
            //console.log('dataxacnhan', dataxacnhan)
            _iterator23 = _createForOfIteratorHelper(data);
            _context32.prev = 3;
            _iterator23.s();
          case 5:
            if ((_step23 = _iterator23.n()).done) {
              _context32.next = 24;
              break;
            }
            item = _step23.value;
            _context32.prev = 7;
            _context32.next = 10;
            return _index["default"].Data_KiemKe.findOne({
              where: {
                id: item.id
              },
              raw: false
            });
          case 10:
            _data10 = _context32.sent;
            if (!_data10) {
              _context32.next = 16;
              break;
            }
            _data10.XacNhanKiemKe = 1;
            _data10.NgayXacNhanKiemKe = currentTime;
            // Lưu thay đổi
            _context32.next = 16;
            return _data10.save();
          case 16:
            resolve({
              errCode: 0,
              errMessage: 'Xác nhận kiểm kê thành công'
            });
            _context32.next = 22;
            break;
          case 19:
            _context32.prev = 19;
            _context32.t0 = _context32["catch"](7);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt Data_KiemKe c\xF3 id: ".concat(item.id), _context32.t0);
          case 22:
            _context32.next = 5;
            break;
          case 24:
            _context32.next = 29;
            break;
          case 26:
            _context32.prev = 26;
            _context32.t1 = _context32["catch"](3);
            _iterator23.e(_context32.t1);
          case 29:
            _context32.prev = 29;
            _iterator23.f();
            return _context32.finish(29);
          case 32:
            _context32.next = 37;
            break;
          case 34:
            _context32.prev = 34;
            _context32.t2 = _context32["catch"](0);
            reject(_context32.t2);
          case 37:
          case "end":
            return _context32.stop();
        }
      }, _callee27, null, [[0, 34], [3, 26, 29, 32], [7, 19]]);
    }));
    return function (_x53, _x54) {
      return _ref27.apply(this, arguments);
    };
  }());
};
var huyxacnhanKiemKe = function huyxacnhanKiemKe(KhoTaiSan_Id, KhoQuanLy, data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref28 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee28(resolve, reject) {
      var _iterator24, _step24, item, _data11;
      return _regeneratorRuntime().wrap(function _callee28$(_context33) {
        while (1) switch (_context33.prev = _context33.next) {
          case 0:
            _context33.prev = 0;
            // let dataxacnhan = await db.sequelize.query('CALL sp_get_data_dakiemke(:KhoTaiSan_Id,:KhoQuanLy)',
            //     {
            //         replacements: {
            //             KhoTaiSan_Id: KhoTaiSan_Id,
            //             KhoQuanLy: KhoQuanLy
            //         },
            //         raw: false
            //     }
            // );
            //console.log('dataxacnhan', dataxacnhan)
            _iterator24 = _createForOfIteratorHelper(data);
            _context33.prev = 2;
            _iterator24.s();
          case 4:
            if ((_step24 = _iterator24.n()).done) {
              _context33.next = 23;
              break;
            }
            item = _step24.value;
            _context33.prev = 6;
            _context33.next = 9;
            return _index["default"].Data_KiemKe.findOne({
              where: {
                id: item.id
              },
              raw: false
            });
          case 9:
            _data11 = _context33.sent;
            if (!_data11) {
              _context33.next = 15;
              break;
            }
            _data11.XacNhanKiemKe = null;
            _data11.NgayXacNhanKiemKe = null;
            // Lưu thay đổi
            _context33.next = 15;
            return _data11.save();
          case 15:
            resolve({
              errCode: 0,
              errMessage: 'Hủy xác nhận kiểm kê thành công'
            });
            _context33.next = 21;
            break;
          case 18:
            _context33.prev = 18;
            _context33.t0 = _context33["catch"](6);
            console.error("L\u1ED7i khi c\u1EADp nh\u1EADt Data_KiemKe c\xF3 id: ".concat(item.id), _context33.t0);
          case 21:
            _context33.next = 4;
            break;
          case 23:
            _context33.next = 28;
            break;
          case 25:
            _context33.prev = 25;
            _context33.t1 = _context33["catch"](2);
            _iterator24.e(_context33.t1);
          case 28:
            _context33.prev = 28;
            _iterator24.f();
            return _context33.finish(28);
          case 31:
            _context33.next = 36;
            break;
          case 33:
            _context33.prev = 33;
            _context33.t2 = _context33["catch"](0);
            reject(_context33.t2);
          case 36:
          case "end":
            return _context33.stop();
        }
      }, _callee28, null, [[0, 33], [2, 25, 28, 31], [6, 18]]);
    }));
    return function (_x55, _x56) {
      return _ref28.apply(this, arguments);
    };
  }());
};
module.exports = {
  getAllMenuCon: getAllMenuCon,
  getAllMenuCha: getAllMenuCha,
  createNewMenuCha: createNewMenuCha,
  deleteMenuCha: deleteMenuCha,
  editMenuCha: editMenuCha,
  getAllSelectMenuCha: getAllSelectMenuCha,
  getAllGroup: getAllGroup,
  createNewMenuCon: createNewMenuCon,
  deleteMenuCon: deleteMenuCon,
  getNhomQuyen: getNhomQuyen,
  getMenuCha: getMenuCha,
  editMenuCon: editMenuCon,
  deleteHopDong: deleteHopDong,
  deletePO: deletePO,
  deletePR: deletePR,
  deleteLogCTHD: deleteLogCTHD,
  deleteLogCTPO: deleteLogCTPO,
  deleteLogPOPR: deleteLogPOPR,
  deleteCT: deleteCT,
  deleteCheckLogCTPO: deleteCheckLogCTPO,
  deleteCheckLogCTHD: deleteCheckLogCTHD,
  deleteCheckCT: deleteCheckCT,
  deleteTaiSan: deleteTaiSan,
  xacnhanKiemKe: xacnhanKiemKe,
  huyxacnhanKiemKe: huyxacnhanKiemKe,
  deleteDaTaKiemKe: deleteDaTaKiemKe,
  huyKiemKe: huyKiemKe
};