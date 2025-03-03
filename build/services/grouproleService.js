"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _index = _interopRequireDefault(require("../models/index"));
var _role3 = _interopRequireDefault(require("../models/role"));
var _JWTService = require("./JWTService");
var _JWTAction = require("../middleware/JWTAction");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; } // import { createJWT } from '../middleware/JWTAction';
require('dotenv').config();
var getAllRole = function getAllRole() {
  return new Promise(/*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      var role, _role;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            role = '';
            _context.prev = 1;
            _context.next = 4;
            return _index["default"].sequelize.query('CALL sp_get_grouprole', {
              // replacements: { id: 2 },
              raw: false
            });
          case 4:
            _role = _context.sent;
            // console.log('roles', role)
            resolve(_role);
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
var createNewRoleGroup = function createNewRoleGroup(data, req, res) {
  return new Promise(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var success, key, groupRole, groupId, _key, user;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            success = true; // console.log('data', data)
            // const user = { use_groupId: parseInt(data.use_groupId) };
            // delete data.use_groupId;
            // let cookies = req.cookies;
            // console.log('cookies', cookies)
            _context2.t0 = _regeneratorRuntime().keys(data);
          case 3:
            if ((_context2.t1 = _context2.t0()).done) {
              _context2.next = 17;
              break;
            }
            key = _context2.t1.value;
            if (!data.hasOwnProperty(key)) {
              _context2.next = 15;
              break;
            }
            groupRole = data[key]; // console.log('groupRole', groupRole)
            _context2.prev = 7;
            _context2.next = 10;
            return _index["default"].Group_Roles.create({
              groupId: groupRole.groupId,
              roleId: groupRole.roleId
            });
          case 10:
            _context2.next = 15;
            break;
          case 12:
            _context2.prev = 12;
            _context2.t2 = _context2["catch"](7);
            success = false;
          case 15:
            _context2.next = 3;
            break;
          case 17:
            _context2.t3 = _regeneratorRuntime().keys(data);
          case 18:
            if ((_context2.t4 = _context2.t3()).done) {
              _context2.next = 25;
              break;
            }
            _key = _context2.t4.value;
            if (!(data[_key] && data[_key].groupId)) {
              _context2.next = 23;
              break;
            }
            groupId = data[_key].groupId;
            return _context2.abrupt("break", 25);
          case 23:
            _context2.next = 18;
            break;
          case 25:
            user = {
              use_groupId: groupId
            };
            if (success) {
              // let groupWithRoles = await getGroupWithRoles(user);
              // repairToken(req, res, groupWithRoles);
              resolve({
                errCode: 0,
                errMessage: 'Phân quyền thành công'
              });
            } else {
              resolve({
                errCode: 1,
                errMessage: 'Có lỗi khi phân quyền'
              });
            }
            _context2.next = 32;
            break;
          case 29:
            _context2.prev = 29;
            _context2.t5 = _context2["catch"](0);
            reject(_context2.t5);
          case 32:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 29], [7, 12]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};
var deleteRoleGroup = function deleteRoleGroup(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var success, key, groupRole;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            success = true;
            _context3.t0 = _regeneratorRuntime().keys(data);
          case 3:
            if ((_context3.t1 = _context3.t0()).done) {
              _context3.next = 17;
              break;
            }
            key = _context3.t1.value;
            if (!data.hasOwnProperty(key)) {
              _context3.next = 15;
              break;
            }
            groupRole = data[key]; // console.log('xóa', groupRole)
            _context3.prev = 7;
            _context3.next = 10;
            return _index["default"].Group_Roles.destroy({
              where: {
                groupId: groupRole.groupId,
                roleId: groupRole.roleId
              }
            });
          case 10:
            _context3.next = 15;
            break;
          case 12:
            _context3.prev = 12;
            _context3.t2 = _context3["catch"](7);
            success = false;
          case 15:
            _context3.next = 3;
            break;
          case 17:
            if (success) {
              resolve({
                errCode: 0,
                errMessage: 'Cập nhập phân quyền thành công'
              });
            } else {
              resolve({
                errCode: 1,
                errMessage: 'Có lỗi khi phân quyền'
              });
            }
            _context3.next = 23;
            break;
          case 20:
            _context3.prev = 20;
            _context3.t3 = _context3["catch"](0);
            reject(_context3.t3);
          case 23:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 20], [7, 12]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};
var getAllRoleGroup = function getAllRoleGroup(data) {
  // console.log(data.id)
  return new Promise(/*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      var grouprole;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_grouprole_checkbox(:groupId)', {
              replacements: {
                groupId: data.id
              },
              raw: true
            });
          case 3:
            grouprole = _context4.sent;
            resolve(grouprole);
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
      return _ref4.apply(this, arguments);
    };
  }());
};
var checkRoleGroup = function checkRoleGroup(data) {
  // console.log(data.id)
  return new Promise(/*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
      var grouprole;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_grouprole_check(:groupId)', {
              replacements: {
                groupId: data.id
              },
              raw: true
            });
          case 3:
            grouprole = _context5.sent;
            resolve(grouprole);
            _context5.next = 10;
            break;
          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            reject(_context5.t0);
          case 10:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 7]]);
    }));
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};
var createNewRole = function createNewRole(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _index["default"].Role.create({
              url: data.url,
              action: data.action,
              MoTa: data.mota,
              Nhom: 'role'
            });
          case 3:
            resolve({
              errCode: 0,
              errMessage: 'Tạo Role thành công'
            });
            _context6.next = 9;
            break;
          case 6:
            _context6.prev = 6;
            _context6.t0 = _context6["catch"](0);
            reject(_context6.t0);
          case 9:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 6]]);
    }));
    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());
};
var editRole = function editRole(data) {
  // console.log('data', data)
  return new Promise(/*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve, reject) {
      var _role2;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            if (!data.id) {
              resolve({
                errCode: 2,
                errMessage: 'Vui lòng chọn thông tin cần cập nhập'
              });
            }
            _context7.next = 4;
            return _index["default"].Role.findOne({
              where: {
                id: data.id
              },
              raw: false
            });
          case 4:
            _role2 = _context7.sent;
            if (!_role2) {
              _context7.next = 14;
              break;
            }
            _role2.url = data.url;
            _role2.action = data.action;
            _role2.MoTa = data.MoTa;
            _context7.next = 11;
            return _role2.save();
          case 11:
            resolve({
              errCode: 0,
              errMessage: 'Sửa Role thành công'
            });
            _context7.next = 15;
            break;
          case 14:
            resolve({
              errCode: 1,
              errMessage: 'Không tìm thấy thông tin'
            });
          case 15:
            _context7.next = 20;
            break;
          case 17:
            _context7.prev = 17;
            _context7.t0 = _context7["catch"](0);
            reject(_context7.t0);
          case 20:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 17]]);
    }));
    return function (_x13, _x14) {
      return _ref7.apply(this, arguments);
    };
  }());
};
var deleteRole = function deleteRole(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject) {
      var checkrole;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _index["default"].Group_Roles.findOne({
              where: {
                roleId: data
              }
            });
          case 3:
            checkrole = _context8.sent;
            if (checkrole) {
              _context8.next = 10;
              break;
            }
            _context8.next = 7;
            return _index["default"].Role.destroy({
              where: {
                id: data
              }
            });
          case 7:
            resolve({
              errCode: 0,
              errMessage: "\u0110\xE3 x\xF3a th\xF4ng tin th\xE0nh c\xF4ng"
            });
            _context8.next = 11;
            break;
          case 10:
            resolve({
              errCode: 1,
              errMessage: "Role \u0111ang s\u1EED d\u1EE5ng kh\xF4ng \u0111\u01B0\u1EE3c x\xF3a"
            });
          case 11:
            _context8.next = 16;
            break;
          case 13:
            _context8.prev = 13;
            _context8.t0 = _context8["catch"](0);
            reject(_context8.t0);
          case 16:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 13]]);
    }));
    return function (_x15, _x16) {
      return _ref8.apply(this, arguments);
    };
  }());
};
var getAllGroup = function getAllGroup() {
  return new Promise(/*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
      var group, _group;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            group = '';
            _context9.prev = 1;
            _context9.next = 4;
            return _index["default"].Group.findAll({
              attributes: ['id', 'Group', 'MoTa', 'MaGroup'],
              raw: true
            });
          case 4:
            _group = _context9.sent;
            //console.log('checkgroup', group)
            resolve(_group);
            _context9.next = 11;
            break;
          case 8:
            _context9.prev = 8;
            _context9.t0 = _context9["catch"](1);
            reject(_context9.t0);
          case 11:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[1, 8]]);
    }));
    return function (_x17, _x18) {
      return _ref9.apply(this, arguments);
    };
  }());
};
var checkGroup = function checkGroup(Group) {
  return new Promise(/*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resolve, reject) {
      var group;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return _index["default"].Group.findOne({
              where: {
                Group: Group
              }
            });
          case 3:
            group = _context10.sent;
            if (group) {
              resolve(true);
            } else {
              resolve(false);
            }
            _context10.next = 10;
            break;
          case 7:
            _context10.prev = 7;
            _context10.t0 = _context10["catch"](0);
            resolve(_context10.t0);
          case 10:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[0, 7]]);
    }));
    return function (_x19, _x20) {
      return _ref10.apply(this, arguments);
    };
  }());
};
var createNewGroup = function createNewGroup(data) {
  // console.log('data group', data)
  return new Promise(/*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(resolve, reject) {
      var check;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return checkGroup(data.group);
          case 3:
            check = _context11.sent;
            if (!(check === true)) {
              _context11.next = 8;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Nhóm quyền đã tồn tại'
            });
            _context11.next = 10;
            break;
          case 8:
            _context11.next = 10;
            return _index["default"].Group.create({
              Group: data.group,
              MoTa: data.mota,
              MaGroup: data.maGroup,
              Nhom: 'group'
            });
          case 10:
            resolve({
              errCode: 0,
              errMessage: 'Tạo nhóm quyền thành công'
            });
            _context11.next = 16;
            break;
          case 13:
            _context11.prev = 13;
            _context11.t0 = _context11["catch"](0);
            reject(_context11.t0);
          case 16:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[0, 13]]);
    }));
    return function (_x21, _x22) {
      return _ref11.apply(this, arguments);
    };
  }());
};
var editGroup = function editGroup(data) {
  // console.log('data', data)
  return new Promise(/*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(resolve, reject) {
      var group;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            if (!data.id) {
              resolve({
                errCode: 2,
                errMessage: 'Vui lòng chọn thông tin cần cập nhập'
              });
            }
            _context12.next = 4;
            return _index["default"].Group.findOne({
              where: {
                id: data.id
              },
              raw: false
            });
          case 4:
            group = _context12.sent;
            if (!group) {
              _context12.next = 14;
              break;
            }
            group.Group = data.Group;
            group.MoTa = data.MoTa;
            group.MaGroup = data.MaGroup;
            _context12.next = 11;
            return group.save();
          case 11:
            resolve({
              errCode: 0,
              errMessage: 'Sửa thông tin thành công'
            });
            _context12.next = 15;
            break;
          case 14:
            resolve({
              errCode: 1,
              errMessage: 'Không tìm thấy thông tin'
            });
          case 15:
            _context12.next = 20;
            break;
          case 17:
            _context12.prev = 17;
            _context12.t0 = _context12["catch"](0);
            reject(_context12.t0);
          case 20:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[0, 17]]);
    }));
    return function (_x23, _x24) {
      return _ref12.apply(this, arguments);
    };
  }());
};
var deleteGroup = function deleteGroup(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(resolve, reject) {
      var checkgroup;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            _context13.next = 3;
            return _index["default"].Group_Roles.findOne({
              where: {
                groupId: data
              }
            });
          case 3:
            checkgroup = _context13.sent;
            if (checkgroup) {
              _context13.next = 10;
              break;
            }
            _context13.next = 7;
            return _index["default"].Group.destroy({
              where: {
                id: data
              }
            });
          case 7:
            resolve({
              errCode: 0,
              errMessage: "\u0110\xE3 x\xF3a th\xF4ng tin th\xE0nh c\xF4ng"
            });
            _context13.next = 11;
            break;
          case 10:
            resolve({
              errCode: 1,
              errMessage: "Group \u0111ang s\u1EED d\u1EE5ng kh\xF4ng \u0111\u01B0\u1EE3c x\xF3a"
            });
          case 11:
            _context13.next = 16;
            break;
          case 13:
            _context13.prev = 13;
            _context13.t0 = _context13["catch"](0);
            reject(_context13.t0);
          case 16:
          case "end":
            return _context13.stop();
        }
      }, _callee13, null, [[0, 13]]);
    }));
    return function (_x25, _x26) {
      return _ref13.apply(this, arguments);
    };
  }());
};
module.exports = {
  getAllRole: getAllRole,
  getAllGroup: getAllGroup,
  createNewGroup: createNewGroup,
  editGroup: editGroup,
  createNewRole: createNewRole,
  editRole: editRole,
  getAllRoleGroup: getAllRoleGroup,
  checkRoleGroup: checkRoleGroup,
  deleteGroup: deleteGroup,
  deleteRole: deleteRole,
  createNewRoleGroup: createNewRoleGroup,
  deleteRoleGroup: deleteRoleGroup
};