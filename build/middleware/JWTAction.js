"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _JWTService = require("../services/JWTService");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
require('dotenv').config();
// kiểm tra đường dẫn không cần phân quyền
var nonSecurePaths = ['/', '/api/login', '/api/login-token', '/api/logout', '/api/create-new-rolegroup', '/api/delete-rolegroup',
// KHI ĐƯA LÊN SERVER THÌ KO CẦN CÁC LINK NÀY
// 'http://10.22.10.22:8082',
//'http://dn-qlpo.fhmc.com:8086',
// 'http://localhost:8082',
//'http://qlpo.local:8086',
//'https://qlpo.local:8087',
//'http://10.22.22.1:8084', 
//'/api/get-menu/',
'/api/get-group_id/', '/api/get-magroup', '/api/url-view', '/api/get-group_id/undefined', '/api/exportcongvanden', '/api/exportcongvandi', '/api/get-all-select-menu-cha', '/api/get-all-nhomquyen', '/api/get-all-menucha', '/api/get-all-menu-con', '/api/delete-po', '/api/delete-pr', '/api/delete-log-popr', '/api/delete-hopdong', '/api/delete-log-ctpo', '/api/delete-log-cthd', '/api/delete-ct', '/api/delete-check-ct', '/api/download-file/TemplatePO.xlsx', '/api/download-file/TemplatePR.xlsx', '/api/download-file/TemplateHD.xlsx', '/api/exportnhapncc', '/api/export-kiemketaisan',
// '/api/download-po/DataPO.xlsx', '/api/download-pr/DataPR.xlsx', '/api/download-hd/DataHD.xlsx',
'/api/exportdatapo', '/api/exportdatapr', '/api/exportdatahd', '/api/get-check-editmataisanpo', '/api/get-check-editmataisanpr', '/api/get-check-editsoluongpo', '/api/delete-check-log-ctpo', '/api/delete-check-log-cthd', '/api/get-check-all', '/api/get-all-dvt', '/api/get-all-bv', '/api/get-all-pl', '/api/get-all-tgbh', '/api/get-all-tgkh', '/api/edit-taisan', '/api/create-new-ts', '/api/delete-taisan', '/api/get-all-kho', '/api/get-all-khoql', '/api/get-lankiemke', '/api/edit-khoaphonghientai', '/api/get-all-vitri', '/api/get-all-tinhtrang', '/api/get-all-kho-edit', '/api/xacnhan-kiemke', '/api/huyxacnhan-kiemke', '/api/delete-data-kiemke', '/api/timkiem-data-kiemke', '/api/get-all-nhanvien', '/api/get-all-nhanvien-phong', '/api/get-all-kho-qltk', '/api/get-all-tentaisan', '/api/xacnhan-themtaisan', '/api/get-all-nguoilap', '/api/get-all-ketoantruong', '/api/get-all-ketoantaisan', '/api/get-all-giamdoc', '/api/huy-kiemke', '/api/get-lichsukiemke', '/api/get-taisantheokho-lichsu', '/api/checkdata-chuaxacnhan', '/api/get-taisanxacnhantheokho-lichsu', '/api/get-taisanxacnhanallkho-lichsu', '/api/get-taisanxacnhantoanvien-kho-lichsu', '/api/get-all-nguoisudung', '/api/check-dongbo'];

// const nonSecurePathsGroup = ['api/get-group_id/undefined'];

var createJWT = function createJWT(payload) {
  // console.log('createJWT')
  var key = process.env.JWT_SECRET;
  var token = null;
  try {
    token = _jsonwebtoken["default"].sign(payload, key);
    // console.log(token)
  } catch (err) {
    console.log(err);
  }
  // console.log('createJWT token', token)
  return token;
};
var verifyToken = function verifyToken(token) {
  // console.log('verifyToken')
  // console.log('verifyToken', token)
  var key = process.env.JWT_SECRET;
  var decoded = null;
  try {
    decoded = _jsonwebtoken["default"].verify(token, key);
  } catch (err) {
    console.log(err);
  }
  // console.log(decoded)
  return decoded;
};
var combineJWTFromCookies = function combineJWTFromCookies(req) {
  try {
    var jwtPartsCount = req.cookies.jwt_parts_count;
    var combinedJWT = '';

    // Duyệt qua từng phần của JWT trong cookie và nối chúng lại với nhau
    for (var i = 0; i < jwtPartsCount; i++) {
      var jwtPart = req.cookies["jwt_".concat(i)];
      combinedJWT += jwtPart;
    }
    return combinedJWT;
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      errCode: 500,
      errMessage: 'Internal Server Error'
    });
  }
};
var removeCookiesByPrefix = function removeCookiesByPrefix(req, res, prefix) {
  var cookies = Object.keys(req.cookies);
  cookies.forEach(function (cookie) {
    if (cookie.startsWith(prefix)) {
      res.clearCookie(cookie);
    }
  });
};
var removeAllCookies = function removeAllCookies(req, res) {
  try {
    var cookies = Object.keys(req.cookies);
    cookies.forEach(function (cookie) {
      res.clearCookie(cookie);
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      errCode: 500,
      errMessage: 'Internal Server Error'
    });
  }
};
function parseExpiresIn(expiresIn) {
  try {
    var regex = /^(\d+)([smhd])$/; // Biểu thức chính quy để phân tích "1m" thành [1, "m"]
    var matches = expiresIn.match(regex);
    if (matches) {
      var value = parseInt(matches[1]); // Lấy giá trị số
      var unit = matches[2]; // Lấy đơn vị thời gian
      switch (unit) {
        case "s":
          return value;
        case "m":
          return value * 60;
        // Phút thành giây
        case "h":
          return value * 3600;
        // Giờ thành giây
        // case "d":
        //     return value * 86400; // Ngày thành giây
        // default:
        //     return null; // Đơn vị không hợp lệ
      }
    } else {
      return null; // Chuỗi không hợp lệ
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      errCode: 500,
      errMessage: 'Internal Server Error'
    });
  }
}
var checkUserJWT = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res, next) {
    var combinedJWT, decoded, user, groupWithRoles, expiresIn, expiresInInSeconds, currentTimestamp, issuedAtTimestamp, expirationTimestamp, payload, newToken, maxCookieLength, jwtPartsCount, i, startIndex, endIndex, jwtPart;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          if (!nonSecurePaths.includes(req.path)) {
            _context.next = 3;
            break;
          }
          return _context.abrupt("return", next());
        case 3:
          // const isNonSecurePath = nonSecurePaths.some(path => req.path.startsWith(path));
          // if (isNonSecurePath) {
          //     return next(); // Bỏ qua kiểm tra phân quyền nếu đường dẫn không yêu cầu
          // }
          combinedJWT = combineJWTFromCookies(req); // console.log('req.cookies', req.cookies);
          if (!combinedJWT) {
            _context.next = 34;
            break;
          }
          // console.log('combinedJWT');
          // if (nonSecurePathsGroup.includes(req.path)) return next();
          decoded = verifyToken(combinedJWT);
          user = {
            use_groupId: decoded.use_groupId
          };
          _context.next = 9;
          return (0, _JWTService.getGroupWithRoles)(user);
        case 9:
          groupWithRoles = _context.sent;
          if (!decoded) {
            _context.next = 31;
            break;
          }
          expiresIn = decoded.expiresIn;
          expiresInInSeconds = parseExpiresIn(expiresIn);
          currentTimestamp = Math.floor(Date.now() / 1000);
          issuedAtTimestamp = decoded.iat; // Tính thời gian hết hạn của cookie
          expirationTimestamp = issuedAtTimestamp + expiresInInSeconds; // console.log('expirationTimestamp', expirationTimestamp);
          // console.log('currentTimestamp', currentTimestamp);
          // Kiểm tra xem cookie có hết hạn chưa
          if (!(currentTimestamp < expirationTimestamp)) {
            _context.next = 27;
            break;
          }
          // console.log("Cookie còn hợp lệ.");
          payload = _objectSpread(_objectSpread({}, decoded), {}, {
            groupWithRoles: groupWithRoles
          });
          newToken = createJWT(payload);
          maxCookieLength = 4000; // Giả sử giới hạn là 4000 thay vì 4096 để tránh vấn đề
          // Tính số lượng phần JWT cần chia nhỏ
          jwtPartsCount = Math.ceil(newToken.length / maxCookieLength); // Lưu số lượng phần của JWT vào cookie
          res.cookie('jwt_parts_count', jwtPartsCount, {
            httpOnly: true,
            maxAge: 60 * 60 * 10000
          });
          // Chia nhỏ chuỗi JWT thành các phần có độ dài tối đa là maxCookieLength
          for (i = 0; i < jwtPartsCount; i++) {
            startIndex = i * maxCookieLength;
            endIndex = Math.min((i + 1) * maxCookieLength, newToken.length);
            jwtPart = newToken.substring(startIndex, endIndex); // res.cookie(`jwt_${i}`, jwtPart, { expires: 7 });
            res.cookie("jwt_".concat(i), jwtPart, {
              httpOnly: true,
              maxAge: 60 * 60 * 10000
            });
          }
          req.user = payload;
          next();
          _context.next = 29;
          break;
        case 27:
          // console.log("Cookie đã hết hạn.");
          removeAllCookies(req, res);
          return _context.abrupt("return", res.status(302).json({
            errCode: -1
          }));
        case 29:
          _context.next = 32;
          break;
        case 31:
          return _context.abrupt("return", res.status(401).json({
            errCode: -1,
            data: '',
            errMessage: 'Not authenticated'
          }));
        case 32:
          _context.next = 36;
          break;
        case 34:
          // console.log('Un combinedJWT');
          removeAllCookies(req, res);
          return _context.abrupt("return", res.status(302).json({
            errCode: -1
          }));
        case 36:
          _context.next = 42;
          break;
        case 38:
          _context.prev = 38;
          _context.t0 = _context["catch"](0);
          // console.log('combinedJWT', combinedJWT);
          console.error(_context.t0);
          return _context.abrupt("return", res.status(500).json({
            errCode: -1,
            data: '',
            errMessage: 'Internal server error 1'
          }));
        case 42:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 38]]);
  }));
  return function checkUserJWT(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var checkUserPermission = function checkUserPermission(req, res, next) {
  try {
    //console.log('checkUserPermission')
    // kiểm tra đường dẫn không cần phân quyền

    if (nonSecurePaths.includes(req.path)) return next();
    // const isNonSecurePath = nonSecurePaths.some(path => req.path.startsWith(path));

    // if (isNonSecurePath) {
    //     return next(); // Bỏ qua kiểm tra phân quyền nếu đường dẫn không yêu cầu
    // }
    if (req.user) {
      // console.log('checkUserPermission không lỗi')
      // if (nonSecurePathsGroup.includes(req.path)) return next();
      var email = req.user.email;
      var roles = req.user.groupWithRoles.reduce(function (acc, curr) {
        return acc.concat(Object.values(curr));
      }, []).filter(function (item) {
        return item && item.id;
      });
      var Url = req.path;
      var currentUrl = Url.replace(/\/\d+(\/\d*)*\/?$/, '');
      // console.log('check currentUrl', currentUrl)
      if (!roles || roles.length === 0) {
        return res.status(403).json({
          errCode: -1,
          data: '',
          errMessage: 'Không được phân quyền'
        });
      }
      var VIEW = roles.some(function (item) {
        return item.url === currentUrl;
      });

      // console.log('check VIEW', VIEW)
      if (currentUrl === "/api/get-action") {
        // console.log('next')
        next();
      } else {
        // console.log('stop')
        if (VIEW === true) {
          next();
        } else {
          return res.status(403).json({
            errCode: -1,
            data: '',
            errMessage: 'Không được phân quyền 1'
          });
        }
      }
    } else {
      // console.log('checkUserPermission lỗi')
      return res.status(401).json({
        errCode: -1,
        data: Button,
        errMessage: 'Not authenticated'
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      errCode: 500,
      errMessage: 'Internal Server Error'
    });
  }
};
var checkButonPermission = function checkButonPermission(req, res, next) {
  try {
    //console.log('checkButonPermission')
    // kiểm tra đường dẫn không cần phân quyền
    if (nonSecurePaths.includes(req.path)) return next();
    // const isNonSecurePath = nonSecurePaths.some(path => req.path.startsWith(path));

    // if (isNonSecurePath) {
    //     return next(); // Bỏ qua kiểm tra phân quyền nếu đường dẫn không yêu cầu
    // }
    var _Button = req.body.actionButton;
    //console.log('Button', Button)
    if (req.user) {
      //console.log('req.user', Button)
      // if (nonSecurePathsGroup.includes(req.path)) return next();
      // let roles = req.user.groupWithRoles
      var roles = req.user.groupWithRoles.reduce(function (acc, curr) {
        return acc.concat(Object.values(curr));
      }, []).filter(function (item) {
        return item && item.id;
      });
      //console.log('req.user', roles)
      if (!roles || roles.length === 0) {
        return res.status(403).json({
          errCode: -1,
          data: '',
          errMessage: 'Không được phân quyền'
        });
      }
      var buttonAction = roles.some(function (item) {
        return item.action === _Button;
      });
      //console.log('buttonAction', buttonAction)
      if (_Button === undefined) {
        next();
      } else {
        if (buttonAction === true) {
          next();
        } else {
          return res.status(403).json({
            errCode: -1,
            data: '',
            errMessage: 'Không được phân quyền'
          });
        }
      }
    } else {
      return res.status(401).json({
        errCode: -1,
        data: _Button,
        errMessage: 'Not authenticated'
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      errCode: 500,
      errMessage: 'Internal Server Error'
    });
  }
};
module.exports = {
  createJWT: createJWT,
  verifyToken: verifyToken,
  checkUserJWT: checkUserJWT,
  checkUserPermission: checkUserPermission,
  checkButonPermission: checkButonPermission
};