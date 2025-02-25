"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _googleAuthLibrary = require("google-auth-library");
var _userService = _interopRequireDefault(require("../services/userService"));
var _bodyParser = require("body-parser");
var _user = _interopRequireDefault(require("../models/user"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _index = _interopRequireDefault(require("../models/index"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
require('dotenv').config();
var ActiveDirectory = require('activedirectory');
// const config = {
//     url: 'ldap://10.22.10.9',
//     baseDN: 'ou=FHMCDN,dc=fhmc,dc=com'
// };

var config = {
  url: process.env.URL_AD,
  baseDN: process.env.baseDN
};
var ad = new ActiveDirectory(config);
// const username = 'tmk001-dn-oa@fhmc.com';
// const password = 'Tmk@541981';

function authenticateAsync(username, password) {
  return new Promise(function (resolve, reject) {
    try {
      ad.authenticate(username, password, function (err, auth) {
        resolve(auth);
        // if (err) {
        //     reject(err);
        // } else {
        //     resolve(auth);
        // }
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        errCode: 500,
        errMessage: 'Internal Server Error'
      });
    }
  });
}

// // Sử dụng hàm authenticateAsync với async/await
// async function yourFunction() {
//     try {
//         const auth = await authenticateAsync(username, password);
//         console.log('auth', auth);
//         // Bạn có thể làm gì đó với giá trị auth tại đây
//     } catch (error) {
//         console.error('Error during authentication:', error);
//     }
// }
// yourFunction()

var handleLogin = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var account, password, userad, passwordad, authAD, userData, maxCookieLength, jwtPartsCount, i, startIndex, endIndex, jwtPart;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          account = req.body.account;
          password = req.body.password;
          userad = account + '@fhmc.com'; // console.log('acount', acount)
          passwordad = password; // let passwordad = 'Hoanmy@9999';
          if (!(!account || !password)) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", res.status(500).json({
            errCode: 1,
            message: 'Vui lòng nhập thông tin'
          }));
        case 7:
          _context.next = 9;
          return authenticateAsync(userad, passwordad);
        case 9:
          authAD = _context.sent;
          _context.next = 12;
          return _userService["default"].handleUserLogin(account, password, authAD);
        case 12:
          userData = _context.sent;
          // console.log('check data', userData)
          // //set cookie
          if (userData && userData.token) {
            maxCookieLength = 4000; // Giả sử giới hạn là 4000 thay vì 4096 để tránh vấn đề
            // Tính số lượng phần JWT cần chia nhỏ
            jwtPartsCount = Math.ceil(userData.token.length / maxCookieLength); // Lưu số lượng phần của JWT vào cookie
            // res.cookie('jwt_parts_count', jwtPartsCount, { expires: 7 });
            res.cookie('jwt_parts_count', jwtPartsCount, {
              httpOnly: true,
              maxAge: 60 * 60 * 10000,
              path: '/',
              sameSite: 'lax',
              // hoặc 'none' nếu HTTPS
              secure: false // HTTPS thì true, HTTP thì false
            });
            // Chia nhỏ chuỗi JWT thành các phần có độ dài tối đa là maxCookieLength
            for (i = 0; i < jwtPartsCount; i++) {
              startIndex = i * maxCookieLength;
              endIndex = Math.min((i + 1) * maxCookieLength, userData.token.length);
              jwtPart = userData.token.substring(startIndex, endIndex); // res.cookie(`jwt_${i}`, jwtPart, { expires: 7 });
              res.cookie("jwt_".concat(i), jwtPart, {
                httpOnly: true,
                maxAge: 60 * 60 * 10000
              });
            }
            // res.cookie('jwt', userData.token, { httpOnly: true, maxAge: 60 * 60 * 10000 })  //60 * 60 * 1000
          }
          return _context.abrupt("return", res.status(200).json({
            errCode: userData.errCode,
            message: userData.errMessage,
            token: userData.token,
            data: userData.data,
            // authAD: auth.auth,
            user: userData.user ? userData.user : {}
          }));
        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          return _context.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 17]]);
  }));
  return function handleLogin(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var handleLoginToken = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var token, userData, maxCookieLength, jwtPartsCount, i, startIndex, endIndex, jwtPart;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          token = req.body.token; // Lấy token từ req.body
          //console.log('Received token:', token);
          // let account = req.body.account;
          // let password = req.body.password;
          // let userad = account + '@fhmc.com';
          // // console.log('acount', acount)
          // let passwordad = password;
          // // let passwordad = 'Hoanmy@9999';
          // if (!account || !password) {
          //     return res.status(500).json({
          //         errCode: 1,
          //         message: 'Vui lòng nhập thông tin'
          //     })
          // }
          //let authAD = await authenticateAsync(userad, passwordad);
          // console.log('authAD', authAD)
          _context2.next = 4;
          return _userService["default"].handleUserLoginToken(token);
        case 4:
          userData = _context2.sent;
          // // console.log('check data', userData)
          // // //set cookie
          if (userData && userData.token) {
            maxCookieLength = 4000; // Giả sử giới hạn là 4000 thay vì 4096 để tránh vấn đề
            // Tính số lượng phần JWT cần chia nhỏ
            jwtPartsCount = Math.ceil(userData.token.length / maxCookieLength); // Lưu số lượng phần của JWT vào cookie
            // res.cookie('jwt_parts_count', jwtPartsCount, { expires: 7 });
            res.cookie('jwt_parts_count', jwtPartsCount, {
              httpOnly: true,
              maxAge: 60 * 60 * 10000
            });
            // Chia nhỏ chuỗi JWT thành các phần có độ dài tối đa là maxCookieLength
            for (i = 0; i < jwtPartsCount; i++) {
              startIndex = i * maxCookieLength;
              endIndex = Math.min((i + 1) * maxCookieLength, userData.token.length);
              jwtPart = userData.token.substring(startIndex, endIndex); // res.cookie(`jwt_${i}`, jwtPart, { expires: 7 });
              res.cookie("jwt_".concat(i), jwtPart, {
                httpOnly: true,
                maxAge: 60 * 60 * 10000
              });
            }
            // res.cookie('jwt', userData.token, { httpOnly: true, maxAge: 60 * 60 * 10000 })  //60 * 60 * 1000
          }
          return _context2.abrupt("return", res.status(200).json({
            errCode: userData.errCode,
            message: userData.errMessage,
            token: userData.token,
            data: userData.data,
            // authAD: auth.auth,
            user: userData.user ? userData.user : {}
          }));
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          return _context2.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return function handleLoginToken(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var handleLogout = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var cookies;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          cookies = Object.keys(req.cookies); // Lặp qua từng cookie và xóa nó
          cookies.forEach(function (cookie) {
            if (cookie.startsWith('jwt_')) {
              res.clearCookie(cookie);
            }
          });
          return _context3.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok'
          }));
        case 6:
          _context3.prev = 6;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          return _context3.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 6]]);
  }));
  return function handleLogout(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var handleGetAction = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var button, getActionButton;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          button = req.body.actionButton; //let User_Id = req.body.User_Id;
          //console.log('button', button)
          _context4.next = 4;
          return _userService["default"].handleGetAction(button);
        case 4:
          getActionButton = _context4.sent;
          return _context4.abrupt("return", res.status(200).json(getActionButton));
        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(200).json({
            errCode: -1,
            errMessage: "Error from server"
          }));
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return function handleGetAction(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var handleGetAllUsers = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var users;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _userService["default"].getAllUsers();
        case 3:
          users = _context5.sent;
          return _context5.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            users: users
          }));
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.status(200).json({
            errCode: -1,
            errMessage: "Error from server"
          }));
        case 10:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function handleGetAllUsers(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var handleEditUser = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var data, file, message;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          data = req.body;
          file = req.file; // console.log('data', data)
          // console.log('file', file)
          _context6.next = 5;
          return _userService["default"].editUser(data, file);
        case 5:
          message = _context6.sent;
          return _context6.abrupt("return", res.status(200).json(message));
        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", res.status(200).json({
            errCode: -1,
            errMessage: "Error from server"
          }));
        case 12:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 9]]);
  }));
  return function handleEditUser(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var handleDeleteUser = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var data, message;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          data = req.body.id;
          if (data) {
            _context7.next = 4;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            errCode: 1,
            message: 'Vui lòng chọn dòng cần xóa'
          }));
        case 4:
          _context7.next = 6;
          return _userService["default"].deleteUser(data);
        case 6:
          message = _context7.sent;
          return _context7.abrupt("return", res.status(200).json(message));
        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](0);
          return _context7.abrupt("return", res.status(200).json({
            errCode: -1,
            errMessage: "Error from server"
          }));
        case 13:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 10]]);
  }));
  return function handleDeleteUser(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var getAllCode = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
            var data;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return _userService["default"].getAllCodeService(req.query.type);
                case 2:
                  data = _context8.sent;
                  return _context8.abrupt("return", res.status(200).json(data));
                case 4:
                case "end":
                  return _context8.stop();
              }
            }, _callee8);
          })), 500);
          _context9.next = 7;
          break;
        case 4:
          _context9.prev = 4;
          _context9.t0 = _context9["catch"](0);
          return _context9.abrupt("return", res.status(200).json({
            errCode: -1,
            errMessage: "Error from server"
          }));
        case 7:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 4]]);
  }));
  return function getAllCode(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var handleGetGroupId = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var Group_Id, _yield$userService$ge, groupid, menu_con, menu_cha;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          Group_Id = req.params.Group_Id; // //console.log('Group_Id controler', Group_Id)
          // let groupid = await userService.getGroup_Id(Group_Id);
          // if (groupid instanceof Promise) {
          //     groupid = await groupid; // Chờ đến khi promise được giải quyết
          // }
          // return res.status(200).json({
          //     errCode: 0,
          //     errMessage: 'ok',
          //     groupid
          // })
          // Gọi hàm từ services và lấy kết quả
          _context10.next = 4;
          return _userService["default"].getGroup_Id(Group_Id);
        case 4:
          _yield$userService$ge = _context10.sent;
          groupid = _yield$userService$ge.groupid;
          menu_con = _yield$userService$ge.menu_con;
          menu_cha = _yield$userService$ge.menu_cha;
          return _context10.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            groupid: groupid,
            menu_con: menu_con,
            menu_cha: menu_cha
          }));
        case 11:
          _context10.prev = 11;
          _context10.t0 = _context10["catch"](0);
          console.error(_context10.t0);
          return _context10.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 15:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 11]]);
  }));
  return function handleGetGroupId(_x17, _x18) {
    return _ref10.apply(this, arguments);
  };
}();
var handleGetMaGroup = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var magroup;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return _userService["default"].getMaGroup();
        case 3:
          magroup = _context11.sent;
          if (!(magroup instanceof Promise)) {
            _context11.next = 8;
            break;
          }
          _context11.next = 7;
          return magroup;
        case 7:
          magroup = _context11.sent;
        case 8:
          return _context11.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            magroup: magroup
          }));
        case 11:
          _context11.prev = 11;
          _context11.t0 = _context11["catch"](0);
          console.error(_context11.t0);
          return _context11.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 15:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 11]]);
  }));
  return function handleGetMaGroup(_x19, _x20) {
    return _ref11.apply(this, arguments);
  };
}();
var handleGetAllGroup = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var group;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _context12.next = 3;
          return _userService["default"].getAllGroup();
        case 3:
          group = _context12.sent;
          return _context12.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            group: group
          }));
        case 7:
          _context12.prev = 7;
          _context12.t0 = _context12["catch"](0);
          return _context12.abrupt("return", res.status(200).json({
            errCode: -1,
            errMessage: "Error from server"
          }));
        case 10:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 7]]);
  }));
  return function handleGetAllGroup(_x21, _x22) {
    return _ref12.apply(this, arguments);
  };
}();
var handleGetAllNhanVien = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var nhanvien;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return _userService["default"].getAllNhanVien();
        case 3:
          nhanvien = _context13.sent;
          return _context13.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            nhanvien: nhanvien
          }));
        case 7:
          _context13.prev = 7;
          _context13.t0 = _context13["catch"](0);
          return _context13.abrupt("return", res.status(200).json({
            errCode: -1,
            errMessage: "Error from server"
          }));
        case 10:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 7]]);
  }));
  return function handleGetAllNhanVien(_x23, _x24) {
    return _ref13.apply(this, arguments);
  };
}();
var handleCreateNewUser = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          return _context15.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(resolve, reject) {
              var data, message;
              return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                while (1) switch (_context14.prev = _context14.next) {
                  case 0:
                    // console.log('req.body', req.body)
                    data = req.body;
                    _context14.prev = 1;
                    _context14.next = 4;
                    return _userService["default"].createNewUser(data);
                  case 4:
                    message = _context14.sent;
                    return _context14.abrupt("return", res.status(200).json(message));
                  case 8:
                    _context14.prev = 8;
                    _context14.t0 = _context14["catch"](1);
                    reject(_context14.t0);
                  case 11:
                  case "end":
                    return _context14.stop();
                }
              }, _callee14, null, [[1, 8]]);
            }));
            return function (_x27, _x28) {
              return _ref15.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return function handleCreateNewUser(_x25, _x26) {
    return _ref14.apply(this, arguments);
  };
}();
var handleCheckXoaUser = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var id;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          id = req.params.id; // console.log('id', id)
          return _context17.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(resolve, reject) {
              var message;
              return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                while (1) switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.prev = 0;
                    _context16.next = 3;
                    return _userService["default"].checkXoaUser(id);
                  case 3:
                    message = _context16.sent;
                    return _context16.abrupt("return", res.status(200).json(message));
                  case 7:
                    _context16.prev = 7;
                    _context16.t0 = _context16["catch"](0);
                    reject(_context16.t0);
                  case 10:
                  case "end":
                    return _context16.stop();
                }
              }, _callee16, null, [[0, 7]]);
            }));
            return function (_x31, _x32) {
              return _ref17.apply(this, arguments);
            };
          }()));
        case 2:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return function handleCheckXoaUser(_x29, _x30) {
    return _ref16.apply(this, arguments);
  };
}();
module.exports = {
  handleLogin: handleLogin,
  handleGetAllUsers: handleGetAllUsers,
  handleCreateNewUser: handleCreateNewUser,
  handleEditUser: handleEditUser,
  handleDeleteUser: handleDeleteUser,
  getAllCode: getAllCode,
  handleGetAction: handleGetAction,
  handleGetGroupId: handleGetGroupId,
  handleGetAllGroup: handleGetAllGroup,
  handleGetAllNhanVien: handleGetAllNhanVien,
  handleCheckXoaUser: handleCheckXoaUser,
  handleLogout: handleLogout,
  handleLoginToken: handleLoginToken,
  handleGetMaGroup: handleGetMaGroup
};