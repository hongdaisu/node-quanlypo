"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _index = _interopRequireDefault(require("../models/index"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _JWTService = require("./JWTService");
var _JWTAction = require("../middleware/JWTAction");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _user7 = _interopRequireDefault(require("../models/user"));
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _require = require('sequelize'),
  Sequelize = _require.Sequelize;
require('dotenv').config();
var path = require('path');
var salt = _bcryptjs["default"].genSaltSync(10);
var handleUserLogin_bak = function handleUserLogin_bak(account, password, authAD) {
  var token = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  return new Promise(/*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      var userData, decodedToken, _user, isExist, users, _user2, adminAccounts, AD, check, groupWithRoles, payload, _token, _groupWithRoles, _payload, _token2;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            userData = {};
            if (!token) {
              _context.next = 15;
              break;
            }
            _context.prev = 3;
            decodedToken = _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET);
            //console.log('decodedToken', decodedToken)
            _context.next = 10;
            break;
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](3);
            return _context.abrupt("return", resolve({
              errCode: 4,
              errMessage: "Token kh\xF4ng h\u1EE3p l\u1EC7"
            }));
          case 10:
            _context.next = 12;
            return _index["default"].User.findOne({
              where: {
                id: decodedToken.id
              },
              raw: true
            });
          case 12:
            _user = _context.sent;
            _context.next = 70;
            break;
          case 15:
            _context.next = 17;
            return checkUserEmail(account);
          case 17:
            isExist = _context.sent;
            if (!isExist) {
              _context.next = 69;
              break;
            }
            _context.next = 21;
            return _index["default"].sequelize.query('CALL sp_get_user_login(:user)', {
              replacements: {
                user: account
              },
              raw: true
            });
          case 21:
            users = _context.sent;
            _user2 = users.reduce(function (result, item) {
              Object.keys(item).forEach(function (key) {
                result[key] = item[key];
              });
              return result;
            }, {}); // Danh sách tài khoản admin
            adminAccounts = ['Admin', 'tmn001-dn', 'ttn001-dn', 'ddc001-dn', 'NDA002-DN', 'LPU001-DN', 'BTK001-DN', 'NKA001-DN', 'TMK001-DN', 'PA001-DN', 'tha002-dn', 'ttd003-dn', 'hnt004-dn', 'hlp001-dn'];
            if (!adminAccounts.includes(account)) {
              _context.next = 48;
              break;
            }
            _context.next = 27;
            return _index["default"].User.findOne({
              attributes: ['password'],
              where: {
                account: account
              },
              raw: true
            });
          case 27:
            AD = _context.sent;
            _context.next = 30;
            return _bcryptjs["default"].compareSync(password, AD.password);
          case 30:
            check = _context.sent;
            if (!check) {
              _context.next = 45;
              break;
            }
            if (!_user2.use_groupId) {
              _context.next = 42;
              break;
            }
            _context.next = 35;
            return (0, _JWTService.getGroupWithRoles)(_user2);
          case 35:
            groupWithRoles = _context.sent;
            payload = {
              account: _user2.account,
              groupWithRoles: groupWithRoles,
              firstName: _user2.firstName,
              id: _user2.id,
              phongban_id: _user2.phongban_id,
              authAD: true,
              expiresIn: process.env.JWT_EXPIRES_IN,
              use_groupId: _user2.use_groupId,
              ky: _user2.ky
            };
            _token = (0, _JWTAction.createJWT)(payload);
            delete _user2.password;
            resolve({
              errCode: 0,
              errMessage: "OK",
              token: _token,
              data: groupWithRoles,
              user: _user2,
              authAD: authAD
            });
            _context.next = 43;
            break;
          case 42:
            resolve({
              errCode: 1,
              errMessage: "T\xE0i kho\u1EA3n ch\u01B0a \u0111\u01B0\u1EE3c ph\xE2n quy\u1EC1n"
            });
          case 43:
            _context.next = 46;
            break;
          case 45:
            resolve({
              errCode: 3,
              errMessage: "Sai m\u1EADt kh\u1EA9u"
            });
          case 46:
            _context.next = 67;
            break;
          case 48:
            if (!_user2) {
              _context.next = 66;
              break;
            }
            if (!(authAD === true)) {
              _context.next = 63;
              break;
            }
            if (!_user2.use_groupId) {
              _context.next = 60;
              break;
            }
            _context.next = 53;
            return (0, _JWTService.getGroupWithRoles)(_user2);
          case 53:
            _groupWithRoles = _context.sent;
            _payload = {
              account: _user2.account,
              groupWithRoles: _groupWithRoles,
              firstName: _user2.firstName,
              id: _user2.id,
              phongban_id: _user2.phongban_id,
              authAD: authAD,
              expiresIn: process.env.JWT_EXPIRES_IN,
              use_groupId: _user2.use_groupId,
              ky: _user2.ky
            };
            _token2 = (0, _JWTAction.createJWT)(_payload);
            delete _user2.password;
            resolve({
              errCode: 0,
              errMessage: "OK",
              token: _token2,
              data: _groupWithRoles,
              user: _user2,
              authAD: authAD
            });
            _context.next = 61;
            break;
          case 60:
            resolve({
              errCode: 1,
              errMessage: "T\xE0i kho\u1EA3n ch\u01B0a \u0111\u01B0\u1EE3c ph\xE2n quy\u1EC1n"
            });
          case 61:
            _context.next = 64;
            break;
          case 63:
            resolve({
              errCode: 3,
              errMessage: "Sai m\u1EADt kh\u1EA9u"
            });
          case 64:
            _context.next = 67;
            break;
          case 66:
            resolve({
              errCode: 2,
              errMessage: "Sai th\xF4ng tin t\xE0i kho\u1EA3n"
            });
          case 67:
            _context.next = 70;
            break;
          case 69:
            resolve({
              errCode: 1,
              errMessage: "Sai th\xF4ng tin t\xE0i kho\u1EA3n"
            });
          case 70:
            resolve(userData);
            _context.next = 76;
            break;
          case 73:
            _context.prev = 73;
            _context.t1 = _context["catch"](0);
            reject(_context.t1);
          case 76:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 73], [3, 7]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};
var handleUserLoginToken = function handleUserLoginToken(token) {
  return new Promise(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var decodedToken, users, _user3, groupWithRoles, payload, _token3;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.prev = 1;
            decodedToken = _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET);
            //console.log('decodedToken', decodedToken)
            _context2.next = 8;
            break;
          case 5:
            _context2.prev = 5;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", resolve({
              errCode: 4,
              errMessage: "Token \u0111\xE3 h\u1EBFt h\u1EA1n"
            }));
          case 8:
            _context2.next = 10;
            return _index["default"].sequelize.query('CALL sp_get_user_login(:user)', {
              replacements: {
                user: decodedToken.account
              },
              raw: true
            });
          case 10:
            users = _context2.sent;
            _user3 = users.reduce(function (result, item) {
              Object.keys(item).forEach(function (key) {
                result[key] = item[key];
              });
              return result;
            }, {});
            if (!_user3.use_groupId) {
              _context2.next = 22;
              break;
            }
            _context2.next = 15;
            return (0, _JWTService.getGroupWithRoles)(_user3);
          case 15:
            groupWithRoles = _context2.sent;
            // console.log('check role', groupWithRoles)
            payload = {
              account: _user3.account,
              //user.account,
              groupWithRoles: groupWithRoles,
              firstName: _user3.firstName,
              id: _user3.id,
              phongban_id: _user3.phongban_id,
              authAD: true,
              expiresIn: process.env.JWT_EXPIRES_IN,
              use_groupId: _user3.use_groupId,
              ky: _user3.ky
            }; // console.log('check payload', payload)
            _token3 = (0, _JWTAction.createJWT)(payload); // console.log('check createJWT login:', token)
            delete _user3.password;
            resolve({
              errCode: 0,
              errMessage: "OK",
              token: _token3,
              data: groupWithRoles,
              user: _user3,
              authAD: true
            });
            _context2.next = 23;
            break;
          case 22:
            resolve({
              errCode: 1,
              errMessage: "T\xE0i kho\u1EA3n ch\u01B0a \u0111\u01B0\u1EE3c ph\xE2n quy\u1EC1n"
            });
          case 23:
            _context2.next = 28;
            break;
          case 25:
            _context2.prev = 25;
            _context2.t1 = _context2["catch"](0);
            reject(_context2.t1);
          case 28:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 25], [1, 5]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};
var handleUserLogin = function handleUserLogin(account, password, authAD) {
  return new Promise(/*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var userData, isExist, users, _user4, AD, check, groupWithRoles, payload, token, _groupWithRoles2, _payload2, _token4;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            userData = {};
            _context3.next = 4;
            return checkUserEmail(account);
          case 4:
            isExist = _context3.sent;
            if (!isExist) {
              _context3.next = 55;
              break;
            }
            _context3.next = 8;
            return _index["default"].sequelize.query('CALL sp_get_user_login(:user)', {
              replacements: {
                user: account
              },
              raw: true
            });
          case 8:
            users = _context3.sent;
            _user4 = users.reduce(function (result, item) {
              Object.keys(item).forEach(function (key) {
                result[key] = item[key];
              });
              return result;
            }, {});
            if (!(account === 'Admin' || account === 'tha002-dn' || account === 'hmt002-dn'
            //|| account === 'dko001-dn'
            //|| account === 'tav002-dn'
            //|| account === 'pbn001-dn'
            )) {
              _context3.next = 34;
              break;
            }
            _context3.next = 13;
            return _index["default"].User.findOne({
              attributes: ['password'],
              where: {
                account: account
              },
              raw: true
            });
          case 13:
            AD = _context3.sent;
            _context3.next = 16;
            return _bcryptjs["default"].compareSync(password, AD.password);
          case 16:
            check = _context3.sent;
            if (!check) {
              _context3.next = 31;
              break;
            }
            if (!_user4.use_groupId) {
              _context3.next = 28;
              break;
            }
            _context3.next = 21;
            return (0, _JWTService.getGroupWithRoles)(_user4);
          case 21:
            groupWithRoles = _context3.sent;
            //console.log('check role', groupWithRoles)
            payload = {
              account: _user4.account,
              //user.account,
              groupWithRoles: groupWithRoles,
              firstName: _user4.firstName,
              id: _user4.id,
              phongban_id: _user4.phongban_id,
              authAD: true,
              expiresIn: process.env.JWT_EXPIRES_IN,
              use_groupId: _user4.use_groupId,
              ky: _user4.ky
            }; // console.log('check payload', payload)
            token = (0, _JWTAction.createJWT)(payload); // console.log('check createJWT login:', token)
            delete _user4.password;
            resolve({
              errCode: 0,
              errMessage: "OK",
              token: token,
              data: groupWithRoles,
              user: _user4,
              authAD: authAD
            });
            _context3.next = 29;
            break;
          case 28:
            resolve({
              errCode: 1,
              errMessage: "T\xE0i kho\u1EA3n ch\u01B0a \u0111\u01B0\u1EE3c ph\xE2n quy\u1EC1n"
            });
          case 29:
            _context3.next = 32;
            break;
          case 31:
            resolve({
              errCode: 3,
              errMessage: "Sai m\u1EADt kh\u1EA9u"
            });
          case 32:
            _context3.next = 53;
            break;
          case 34:
            if (!_user4) {
              _context3.next = 52;
              break;
            }
            if (!(authAD === true)) {
              _context3.next = 49;
              break;
            }
            if (!_user4.use_groupId) {
              _context3.next = 46;
              break;
            }
            _context3.next = 39;
            return (0, _JWTService.getGroupWithRoles)(_user4);
          case 39:
            _groupWithRoles2 = _context3.sent;
            // console.log('check role', groupWithRoles)
            _payload2 = {
              account: _user4.account,
              //user.account,
              groupWithRoles: _groupWithRoles2,
              firstName: _user4.firstName,
              id: _user4.id,
              phongban_id: _user4.phongban_id,
              authAD: authAD,
              expiresIn: process.env.JWT_EXPIRES_IN,
              use_groupId: _user4.use_groupId,
              ky: _user4.ky
            }; // console.log('check payload', payload)
            _token4 = (0, _JWTAction.createJWT)(_payload2); // console.log('check createJWT login:', token)
            delete _user4.password;
            resolve({
              errCode: 0,
              errMessage: "OK",
              token: _token4,
              data: _groupWithRoles2,
              user: _user4,
              authAD: authAD
            });
            _context3.next = 47;
            break;
          case 46:
            resolve({
              errCode: 1,
              errMessage: "T\xE0i kho\u1EA3n ch\u01B0a \u0111\u01B0\u1EE3c ph\xE2n quy\u1EC1n"
            });
          case 47:
            _context3.next = 50;
            break;
          case 49:
            resolve({
              errCode: 3,
              errMessage: "Sai m\u1EADt kh\u1EA9u"
            });
          case 50:
            _context3.next = 53;
            break;
          case 52:
            resolve({
              errCode: 2,
              errMessage: "Sai th\xF4ng tin t\xE0i kho\u1EA3n"
            });
          case 53:
            _context3.next = 56;
            break;
          case 55:
            resolve({
              errCode: 1,
              errMessage: "Sai th\xF4ng tin t\xE0i kho\u1EA3n"
            });
          case 56:
            // console.log('check data', userData)
            resolve(userData);
            _context3.next = 62;
            break;
          case 59:
            _context3.prev = 59;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);
          case 62:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 59]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};

// let refeshGroupWithRoles = (use_groupId) => {
//     // console.log('button', button)
//     return new Promise(async (resolve, reject) => {
//         try {
//             let groupWithRoles = await getGroupWithRoles(use_groupId);
//             resolve({
//                 data: groupWithRoles
//             })
//             // resolve(butonAction)
//         } catch (e) {
//             reject(e)
//         }
//     })
// }

var handleGetActionImage = function handleGetActionImage(button, User_Id) {
  // console.log('button', button)
  return new Promise(/*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      var butonAction, filename, URL_VIEW, imageUrl;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            butonAction = button;
            _context4.next = 4;
            return _index["default"].User.findOne({
              where: {
                id: User_Id
              },
              raw: false
            });
          case 4:
            filename = _context4.sent;
            // console.log('filename', filename)
            if (filename && filename.File) {
              // Tạo URL file
              URL_VIEW = process.env.URL_VIEW;
              imageUrl = "".concat(URL_VIEW, "/image/").concat(filename.File);
              resolve({
                errCode: 0,
                butonAction: butonAction,
                imageUrl: imageUrl // Trả về URL file
              });
            } else {
              resolve({
                errCode: 0,
                butonAction: butonAction
              });
              // resolve({
              //     errCode: 1,
              //     errMessage: 'User or file not found'
              // });
            }
            // resolve(butonAction)
            _context4.next = 11;
            break;
          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            reject(_context4.t0);
          case 11:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 8]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};
var handleGetAction = function handleGetAction(button) {
  //console.log('button handleGetAction', button)
  return new Promise(/*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
      var butonAction;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            try {
              butonAction = button;
              resolve({
                errCode: 0,
                butonAction: butonAction
              });
            } catch (e) {
              reject(e);
            }
          case 1:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};
var checkUserEmail = function checkUserEmail(userEmail) {
  return new Promise(/*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
      var _user5;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _index["default"].User.findOne({
              where: {
                account: userEmail
              }
            });
          case 3:
            _user5 = _context6.sent;
            if (_user5) {
              resolve(true);
            } else {
              resolve(false);
            }
            _context6.next = 10;
            break;
          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            resolve(_context6.t0);
          case 10:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 7]]);
    }));
    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());
};
var getAllUsers = function getAllUsers() {
  return new Promise(/*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve, reject) {
      var users;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _index["default"].sequelize.query('CALL sp_get_all_users', {
              raw: false
            });
          case 3:
            users = _context7.sent;
            resolve(users);
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
var hashUserPassword = function hashUserPassword(password) {
  return new Promise(/*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject) {
      var hashPassword;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _bcryptjs["default"].hashSync(password, salt);
          case 3:
            hashPassword = _context8.sent;
            resolve(hashPassword);
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
      return _ref8.apply(this, arguments);
    };
  }());
};
var createNewUser = function createNewUser(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
      var check, validationRules, errorMessage, _i, _validationRules, rule, NhanVien;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return checkUserEmail(data.account);
          case 3:
            check = _context9.sent;
            if (!(check === true)) {
              _context9.next = 8;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Tài khoản đã tồn tại'
            });
            _context9.next = 29;
            break;
          case 8:
            // let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            validationRules = [{
              field: 'account',
              message: 'Vui lòng nhập tài khoản sử dụng.'
            }, {
              field: 'nhanvien_id',
              message: 'Vui lòng chọn tên nhân viên.'
            },
            // { field: 'phongban_id', message: 'Vui lòng chọn phòng ban' },
            {
              field: 'group',
              message: 'Vui lòng chọn group'
            }];
            errorMessage = '';
            _i = 0, _validationRules = validationRules;
          case 11:
            if (!(_i < _validationRules.length)) {
              _context9.next = 19;
              break;
            }
            rule = _validationRules[_i];
            if (data[rule.field]) {
              _context9.next = 16;
              break;
            }
            errorMessage = rule.message;
            return _context9.abrupt("break", 19);
          case 16:
            _i++;
            _context9.next = 11;
            break;
          case 19:
            if (!errorMessage) {
              _context9.next = 23;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: errorMessage
            });
            _context9.next = 29;
            break;
          case 23:
            _context9.next = 25;
            return _index["default"].Dm_NhanVien.findOne({
              attributes: ['id', 'TenNhanVien', 'PhongBan_Id'],
              where: {
                id: data.nhanvien_id.NhanVien_Id
              },
              raw: true
            });
          case 25:
            NhanVien = _context9.sent;
            _context9.next = 28;
            return _index["default"].User.create({
              account: data.account,
              // password: hashPasswordFromBcrypt,
              nhanvien_id: data.nhanvien_id.NhanVien_Id,
              firstName: NhanVien.TenNhanVien,
              phongban_id: NhanVien.PhongBan_Id,
              use_groupId: data.group.id
            });
          case 28:
            resolve({
              errCode: 0,
              errMessage: 'Tạo user thành công'
            });
          case 29:
            _context9.next = 34;
            break;
          case 31:
            _context9.prev = 31;
            _context9.t0 = _context9["catch"](0);
            reject(_context9.t0);
          case 34:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 31]]);
    }));
    return function (_x17, _x18) {
      return _ref9.apply(this, arguments);
    };
  }());
};
var editUser = function editUser(data, file) {
  // console.log('data', data)
  return new Promise(/*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resolve, reject) {
      var NhanVien, datauser, filename, _filename;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            if (!data.User_Id) {
              resolve({
                errCode: 2,
                errMessage: 'Vui lòng chọn thông tin cần cập nhập'
              });
            }
            _context10.next = 4;
            return _index["default"].Dm_NhanVien.findOne({
              attributes: ['id', 'TenNhanVien', 'PhongBan_Id'],
              where: {
                id: data.NhanVien_Id
              },
              raw: true
            });
          case 4:
            NhanVien = _context10.sent;
            _context10.next = 7;
            return _index["default"].User.findOne({
              where: {
                id: data.User_Id
              },
              raw: false
            });
          case 7:
            datauser = _context10.sent;
            if (!file) {
              _context10.next = 47;
              break;
            }
            if (checkIMG(file)) {
              _context10.next = 14;
              break;
            }
            resolve({
              errCode: 3,
              errMessage: 'Vui lòng chọn loại file hình'
            });
            removeNonIMGFiles(__dirname + "/../image/");
            _context10.next = 45;
            break;
          case 14:
            if (datauser.File) {
              if (datauser.File === data.File) {} else {
                removeFileByName(datauser.File, __dirname + "/../image/");
              }
            } else {}
            if (!(data.id !== 'undefined')) {
              _context10.next = 32;
              break;
            }
            _context10.next = 18;
            return uploadFile(file);
          case 18:
            filename = _context10.sent;
            datauser.File = filename;
            datauser.account = data.account;
            datauser.firstName = NhanVien.TenNhanVien;
            datauser.nhanvien_id = data.nhanvien_id;
            datauser.use_groupId = data.id;
            datauser.phongban_id = NhanVien.PhongBan_Id;
            datauser.tamngung = data.tamngung;
            _context10.next = 28;
            return datauser.save();
          case 28:
            removeFilesWithoutExtension(__dirname + "/../image/");
            resolve({
              errCode: 0,
              errMessage: 'Sửa thông tin thành công'
            });
            _context10.next = 45;
            break;
          case 32:
            _context10.next = 34;
            return uploadFile(file);
          case 34:
            _filename = _context10.sent;
            //console.log('filename', filename)
            datauser.File = _filename;
            datauser.account = data.account;
            datauser.firstName = NhanVien.TenNhanVien;
            datauser.nhanvien_id = data.nhanvien_id;
            datauser.phongban_id = NhanVien.PhongBan_Id;
            datauser.tamngung = data.tamngung;
            _context10.next = 43;
            return datauser.save();
          case 43:
            removeFilesWithoutExtension(__dirname + "/../image/");
            resolve({
              errCode: 0,
              errMessage: 'Sửa thông tin thành công'
            });
          case 45:
            _context10.next = 67;
            break;
          case 47:
            if (!(data.id !== 'undefined')) {
              _context10.next = 59;
              break;
            }
            datauser.account = data.account;
            datauser.firstName = NhanVien.TenNhanVien;
            datauser.nhanvien_id = data.nhanvien_id;
            datauser.use_groupId = data.id;
            datauser.phongban_id = NhanVien.PhongBan_Id;
            datauser.tamngung = data.tamngung;
            _context10.next = 56;
            return datauser.save();
          case 56:
            resolve({
              errCode: 0,
              errMessage: 'Sửa thông tin thành công'
            });
            _context10.next = 67;
            break;
          case 59:
            datauser.account = data.account;
            datauser.firstName = NhanVien.TenNhanVien;
            datauser.nhanvien_id = data.nhanvien_id;
            // datauser.use_groupId = data.id;
            datauser.phongban_id = NhanVien.PhongBan_Id;
            datauser.tamngung = data.tamngung;
            _context10.next = 66;
            return datauser.save();
          case 66:
            resolve({
              errCode: 0,
              errMessage: 'Sửa thông tin thành công'
            });
          case 67:
            _context10.next = 72;
            break;
          case 69:
            _context10.prev = 69;
            _context10.t0 = _context10["catch"](0);
            reject(_context10.t0);
          case 72:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[0, 69]]);
    }));
    return function (_x19, _x20) {
      return _ref10.apply(this, arguments);
    };
  }());
};
var checkIMG = function checkIMG(file) {
  try {
    var allowedExtensions = ['.jpg'];
    var fileExtension = path.extname(file.originalname).toLowerCase();
    return allowedExtensions.includes(fileExtension);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      errCode: 500,
      errMessage: 'Internal Server Error'
    });
  }
};
var uploadFile = function uploadFile(file) {
  return new Promise(function (resolve, reject) {
    try {
      // Kiểm tra loại file
      var filenameWithoutExtension = path.basename(file.filename, path.extname(file.filename));
      var fileExtension = path.extname(file.filename).slice(1);
      // console.log(filenameWithoutExtension, fileExtension)
      var randomNumber = Math.floor(Math.random() * 100);
      var destPath = path.join(__dirname, "../image/");
      // const filename = `${Date.now()}-${file.originalname}`;
      var filename = "".concat(filenameWithoutExtension, ".").concat(randomNumber, ".").concat(fileExtension);
      _fs["default"].rename(file.path, path.join(destPath, filename), function (err) {
        if (err) {
          reject(err);
        } else {
          resolve(filename);
        }
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        errCode: 500,
        errMessage: 'Internal Server Error'
      });
    }
  });
};

// const uploadFile = (file) => {
//     return new Promise((resolve, reject) => {
//         const filenameWithoutExtension = path.basename(file.filename, path.extname(file.filename));
//         const fileExtension = path.extname(file.filename).slice(1);
//         const randomNumber = Math.floor(Math.random() * 100);
//         const destPath = path.join(__dirname, "../image/");
//         const filename = `${filenameWithoutExtension}.${randomNumber}.${fileExtension}`;
//         const filePath = path.join(destPath, filename);

//         // Đường dẫn tới file gốc và file đích
//         const originalFilePath = file.path;
//         const resizedFilePath = filePath;

//         // Resize hình ảnh về kích thước 800x600
//         sharp(originalFilePath)
//             .resize(800, 600)
//             .toFile(resizedFilePath, (err, info) => {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     // Sau khi resize xong, di chuyển file đến đích và resolve với tên file
//                     fs.rename(originalFilePath, resizedFilePath, (err) => {
//                         if (err) {
//                             reject(err);
//                         } else {
//                             resolve(filename);
//                         }
//                     });
//                 }
//             });
//     });
// };

var removeFilesWithoutExtension = function removeFilesWithoutExtension(directory) {
  try {
    _fs["default"].readdir(directory, function (err, files) {
      if (err) {
        console.error("Error reading directory:", err);
        return;
      }
      // Lặp qua từng file trong thư mục
      files.forEach(function (file) {
        var filePath = path.join(directory, file);
        // Sử dụng biểu thức chính quy để kiểm tra tên tệp
        var regex = /^[^.]+$/; // So khớp với bất kỳ ký tự nào ngoại trừ dấu chấm
        if (regex.test(file)) {
          // Nếu tên tệp không có phần mở rộng, xóa tệp
          _fs["default"].unlink(filePath, function (err) {
            if (err) {
              console.error("Error deleting file:", err);
            } else {
              console.log("File without extension deleted successfully:", filePath);
            }
          });
        }
      });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      errCode: 500,
      errMessage: 'Internal Server Error'
    });
  }
};
var removeNonIMGFiles = function removeNonIMGFiles(directory) {
  try {
    _fs["default"].readdir(directory, function (err, files) {
      if (err) {
        console.error("Error reading directory:", err);
        return;
      }

      // Lặp qua từng file trong thư mục
      files.forEach(function (file) {
        var filePath = path.join(directory, file);
        var fileExtension = path.extname(file).toLowerCase();
        // Kiểm tra xem file có phải là jpg không
        if (!fileExtension.includes('.jpg')) {
          _fs["default"].unlink(filePath, function (err) {
            if (err) {
              console.error("Error deleting file:", err);
            } else {
              console.log("Non-PDF file deleted successfully:", filePath);
            }
          });
        }
      });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      errCode: 500,
      errMessage: 'Internal Server Error'
    });
  }
};
var removeFileByName = function removeFileByName(filename, directory) {
  try {
    var filePath = path.join(directory, filename);
    _fs["default"].unlink(filePath, function (err) {
      if (err) {
        console.error("Error deleting file:", err);
      } else {
        console.log("File deleted successfully:", filePath);
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      errCode: 500,
      errMessage: 'Internal Server Error'
    });
  }
};
var deleteUser = function deleteUser(data) {
  return new Promise(/*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(resolve, reject) {
      var _user6;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return _index["default"].User.findOne({
              where: {
                id: data
              }
            });
          case 3:
            _user6 = _context11.sent;
            if (!_user6) {
              resolve({
                errCode: 2,
                errMessage: "Ng\u01B0\u1EDDi d\xF9ng kh\xF4ng t\u1ED3n t\u1EA1i"
              });
            }
            _context11.next = 7;
            return _index["default"].User.destroy({
              where: {
                id: data
              }
            });
          case 7:
            // await user.destroy();
            resolve({
              errCode: 0,
              errMessage: "\u0110\xE3 x\xF3a th\xF4ng tin th\xE0nh c\xF4ng"
            });
            _context11.next = 14;
            break;
          case 10:
            _context11.prev = 10;
            _context11.t0 = _context11["catch"](0);
            console.error(_context11.t0);
            return _context11.abrupt("return", res.status(500).json({
              errCode: 500,
              errMessage: 'Internal Server Error'
            }));
          case 14:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[0, 10]]);
    }));
    return function (_x21, _x22) {
      return _ref11.apply(this, arguments);
    };
  }());
};
var getAllCodeService = function getAllCodeService(typeInput) {
  return new Promise(/*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(resolve, reject) {
      var _res, allcode;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            if (typeInput) {
              _context12.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Missing prameter'
            });
            _context12.next = 12;
            break;
          case 5:
            _res = {};
            _context12.next = 8;
            return _index["default"].Allcode.findAll({
              where: {
                type: typeInput
              }
            });
          case 8:
            allcode = _context12.sent;
            _res.errCode = 0;
            _res.data = allcode;
            resolve(_res);
          case 12:
            _context12.next = 17;
            break;
          case 14:
            _context12.prev = 14;
            _context12.t0 = _context12["catch"](0);
            reject(_context12.t0);
          case 17:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[0, 14]]);
    }));
    return function (_x23, _x24) {
      return _ref12.apply(this, arguments);
    };
  }());
};
var getGroup_Id = function getGroup_Id(Group_Id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(resolve, reject) {
      var groupid, menu_cha, menu_con;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            _context13.next = 3;
            return _index["default"].Group.findOne({
              where: {
                id: Group_Id
              },
              raw: true
            });
          case 3:
            groupid = _context13.sent;
            _context13.next = 6;
            return _index["default"].Dm_Menu_Cha.findAll({
              //where: db.sequelize.literal(`FIND_IN_SET(${Group_Id}, group_id) > 0`),
              raw: true
            });
          case 6:
            menu_cha = _context13.sent;
            _context13.next = 9;
            return _index["default"].Dm_Menu_Con.findAll({
              where: _index["default"].sequelize.literal("FIND_IN_SET(".concat(Group_Id, ", group_id) > 0")),
              raw: true
            });
          case 9:
            menu_con = _context13.sent;
            //console.log('menu', menu)
            // resolve(groupid)
            resolve({
              groupid: groupid,
              menu_con: menu_con,
              menu_cha: menu_cha
            });
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
var getMaGroup = function getMaGroup() {
  return new Promise(/*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(resolve, reject) {
      var magroup;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            _context14.next = 3;
            return _index["default"].Group.findAll({
              attributes: ['Group', 'MaGroup'],
              raw: true
            });
          case 3:
            magroup = _context14.sent;
            resolve(magroup);
            _context14.next = 10;
            break;
          case 7:
            _context14.prev = 7;
            _context14.t0 = _context14["catch"](0);
            reject(_context14.t0);
          case 10:
          case "end":
            return _context14.stop();
        }
      }, _callee14, null, [[0, 7]]);
    }));
    return function (_x27, _x28) {
      return _ref14.apply(this, arguments);
    };
  }());
};
var getAllGroup = function getAllGroup() {
  return new Promise(/*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(resolve, reject) {
      var group, _group;
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            group = '';
            _context15.prev = 1;
            _context15.next = 4;
            return _index["default"].sequelize.query('CALL sp_get_all_group()', {
              // replacements: { user: account },
              raw: true
            });
          case 4:
            _group = _context15.sent;
            resolve(_group);
            _context15.next = 11;
            break;
          case 8:
            _context15.prev = 8;
            _context15.t0 = _context15["catch"](1);
            reject(_context15.t0);
          case 11:
          case "end":
            return _context15.stop();
        }
      }, _callee15, null, [[1, 8]]);
    }));
    return function (_x29, _x30) {
      return _ref15.apply(this, arguments);
    };
  }());
};
var getAllNhanVien = function getAllNhanVien() {
  return new Promise(/*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(resolve, reject) {
      var nhanvien, _nhanvien;
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            nhanvien = '';
            _context16.prev = 1;
            _context16.next = 4;
            return _index["default"].sequelize.query('CALL sp_get_all_nhanvien()', {
              // replacements: { user: account },
              raw: true
            });
          case 4:
            _nhanvien = _context16.sent;
            resolve(_nhanvien);
            _context16.next = 11;
            break;
          case 8:
            _context16.prev = 8;
            _context16.t0 = _context16["catch"](1);
            reject(_context16.t0);
          case 11:
          case "end":
            return _context16.stop();
        }
      }, _callee16, null, [[1, 8]]);
    }));
    return function (_x31, _x32) {
      return _ref16.apply(this, arguments);
    };
  }());
};
var checkXoaUser = function checkXoaUser(id) {
  return new Promise(/*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(resolve, reject) {
      var _require2, Op, checkxoa;
      return _regeneratorRuntime().wrap(function _callee17$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            _context17.prev = 0;
            _require2 = require('sequelize'), Op = _require2.Op;
            _context17.next = 4;
            return _index["default"].User.findOne({
              attributes: ['id'],
              where: {
                id: id,
                use_groupId: _defineProperty({}, Op.ne, null) // use_groupId khác null
              },
              raw: true
            });
          case 4:
            checkxoa = _context17.sent;
            // console.log('checkxoa', checkxoa)
            if (!checkxoa) {
              resolve({
                errCode: 0
              });
            } else {
              resolve({
                errCode: 1,
                errMessage: 'User đã được sử dụng, không được xóa.'
              });
            }
            _context17.next = 11;
            break;
          case 8:
            _context17.prev = 8;
            _context17.t0 = _context17["catch"](0);
            reject(_context17.t0);
          case 11:
          case "end":
            return _context17.stop();
        }
      }, _callee17, null, [[0, 8]]);
    }));
    return function (_x33, _x34) {
      return _ref17.apply(this, arguments);
    };
  }());
};
module.exports = {
  handleUserLogin: handleUserLogin,
  getAllUsers: getAllUsers,
  createNewUser: createNewUser,
  deleteUser: deleteUser,
  editUser: editUser,
  getAllCodeService: getAllCodeService,
  handleGetActionImage: handleGetActionImage,
  handleGetAction: handleGetAction,
  getGroup_Id: getGroup_Id,
  getAllGroup: getAllGroup,
  getAllNhanVien: getAllNhanVien,
  checkXoaUser: checkXoaUser,
  handleUserLoginToken: handleUserLoginToken,
  getMaGroup: getMaGroup
};