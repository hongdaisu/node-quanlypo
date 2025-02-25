"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _menuService = _interopRequireDefault(require("../services/menuService"));
var _bodyParser = require("body-parser");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var handleGetAllMenuCon = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
              var menu;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return _menuService["default"].getAllMenuCon();
                  case 3:
                    menu = _context.sent;
                    return _context.abrupt("return", res.status(200).json({
                      errCode: 0,
                      errMessage: 'ok',
                      menu: menu
                    }));
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
            return function (_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function handleGetAllMenuCon(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var handleGetAllMenuCha = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          return _context4.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
              var menu_cha;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return _menuService["default"].getAllMenuCha();
                  case 3:
                    menu_cha = _context3.sent;
                    return _context3.abrupt("return", res.status(200).json({
                      errCode: 0,
                      errMessage: 'ok',
                      menu_cha: menu_cha
                    }));
                  case 7:
                    _context3.prev = 7;
                    _context3.t0 = _context3["catch"](0);
                    reject(_context3.t0);
                  case 10:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, null, [[0, 7]]);
            }));
            return function (_x7, _x8) {
              return _ref4.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function handleGetAllMenuCha(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var handleCreateNewMenuCha = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          data = req.body;
          return _context6.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
              var message;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.prev = 0;
                    _context5.next = 3;
                    return _menuService["default"].createNewMenuCha(data);
                  case 3:
                    message = _context5.sent;
                    return _context5.abrupt("return", res.status(200).json(message));
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
            return function (_x11, _x12) {
              return _ref6.apply(this, arguments);
            };
          }()));
        case 2:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function handleCreateNewMenuCha(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var handleDeleteMenuCha = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var id, message;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          id = req.body.id;
          if (id) {
            _context7.next = 4;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            errCode: 1,
            message: 'Vui lòng chọn dòng cần xóa'
          }));
        case 4:
          _context7.next = 6;
          return _menuService["default"].deleteMenuCha(id);
        case 6:
          message = _context7.sent;
          return _context7.abrupt("return", res.status(200).json(message));
        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](0);
          console.error(_context7.t0);
          return _context7.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 14:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 10]]);
  }));
  return function handleDeleteMenuCha(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var handleEditMenuCha = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          data = req.body;
          return _context9.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject) {
              var message;
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.prev = 0;
                    _context8.next = 3;
                    return _menuService["default"].editMenuCha(data);
                  case 3:
                    message = _context8.sent;
                    return _context8.abrupt("return", res.status(200).json(message));
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
            return function (_x17, _x18) {
              return _ref9.apply(this, arguments);
            };
          }()));
        case 2:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function handleEditMenuCha(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var handleGetAllSelectMenuCha = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return _menuService["default"].getAllSelectMenuCha();
        case 3:
          data = _context10.sent;
          if (!(data instanceof Promise)) {
            _context10.next = 8;
            break;
          }
          _context10.next = 7;
          return data;
        case 7:
          data = _context10.sent;
        case 8:
          return _context10.abrupt("return", res.status(200).json({
            errCode: 0,
            errMessage: 'ok',
            data: data
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
  return function handleGetAllSelectMenuCha(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
var handleGetAllGroup = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          return _context12.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(resolve, reject) {
              var group;
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.prev = 0;
                    _context11.next = 3;
                    return _menuService["default"].getAllGroup();
                  case 3:
                    group = _context11.sent;
                    return _context11.abrupt("return", res.status(200).json({
                      errCode: 0,
                      errMessage: 'ok',
                      group: group
                    }));
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
            return function (_x23, _x24) {
              return _ref12.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function handleGetAllGroup(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
var handleCreateNewMenuCon = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var data, message;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          data = req.body;
          _context13.next = 4;
          return _menuService["default"].createNewMenuCon(data);
        case 4:
          message = _context13.sent;
          return _context13.abrupt("return", res.status(200).json(message));
        case 8:
          _context13.prev = 8;
          _context13.t0 = _context13["catch"](0);
          console.error(_context13.t0);
          return _context13.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 8]]);
  }));
  return function handleCreateNewMenuCon(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
var handleDeleteMenuCon = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var id, message;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          id = req.body.id;
          if (id) {
            _context14.next = 4;
            break;
          }
          return _context14.abrupt("return", res.status(200).json({
            errCode: 1,
            message: 'Vui lòng chọn dòng cần xóa'
          }));
        case 4:
          _context14.next = 6;
          return _menuService["default"].deleteMenuCon(id);
        case 6:
          message = _context14.sent;
          return _context14.abrupt("return", res.status(200).json(message));
        case 10:
          _context14.prev = 10;
          _context14.t0 = _context14["catch"](0);
          console.error(_context14.t0);
          return _context14.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 14:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 10]]);
  }));
  return function handleDeleteMenuCon(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();
var handleDeleteHopDong = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var id, message;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          id = req.body.id; //console.log('handleDeleteHopDong', id)
          if (id) {
            _context15.next = 4;
            break;
          }
          return _context15.abrupt("return", res.status(200).json({
            errCode: 1,
            message: 'Vui lòng chọn dòng cần xóa'
          }));
        case 4:
          _context15.next = 6;
          return _menuService["default"].deleteHopDong(id);
        case 6:
          message = _context15.sent;
          return _context15.abrupt("return", res.status(200).json(message));
        case 10:
          _context15.prev = 10;
          _context15.t0 = _context15["catch"](0);
          console.error(_context15.t0);
          return _context15.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 14:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 10]]);
  }));
  return function handleDeleteHopDong(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();
var handleDeletePO = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var sopo, message;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          sopo = req.body.sopo; //console.log('handleDeleteHopDong', id)
          if (sopo) {
            _context16.next = 4;
            break;
          }
          return _context16.abrupt("return", res.status(200).json({
            errCode: 1,
            message: 'Vui lòng chọn dòng cần xóa'
          }));
        case 4:
          _context16.next = 6;
          return _menuService["default"].deletePO(sopo);
        case 6:
          message = _context16.sent;
          return _context16.abrupt("return", res.status(200).json(message));
        case 10:
          _context16.prev = 10;
          _context16.t0 = _context16["catch"](0);
          console.error(_context16.t0);
          return _context16.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 14:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[0, 10]]);
  }));
  return function handleDeletePO(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();
var handleDeletePR = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var sopr, message;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          sopr = req.body.sopr; //console.log('handleDeleteHopDong', id)
          if (sopr) {
            _context17.next = 4;
            break;
          }
          return _context17.abrupt("return", res.status(200).json({
            errCode: 1,
            message: 'Vui lòng chọn dòng cần xóa'
          }));
        case 4:
          _context17.next = 6;
          return _menuService["default"].deletePR(sopr);
        case 6:
          message = _context17.sent;
          return _context17.abrupt("return", res.status(200).json(message));
        case 10:
          _context17.prev = 10;
          _context17.t0 = _context17["catch"](0);
          console.error(_context17.t0);
          return _context17.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 14:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[0, 10]]);
  }));
  return function handleDeletePR(_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}();
var handleDeleteLogCTHD = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var _req$body, machungtu, sopo, message;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          _req$body = req.body, machungtu = _req$body.machungtu, sopo = _req$body.sopo; //console.log('machungtu', machungtu)
          if (machungtu) {
            _context18.next = 4;
            break;
          }
          return _context18.abrupt("return", res.status(200).json({
            errCode: 1,
            message: 'Vui lòng chọn dòng cần xóa'
          }));
        case 4:
          _context18.next = 6;
          return _menuService["default"].deleteLogCTHD(machungtu, sopo);
        case 6:
          message = _context18.sent;
          return _context18.abrupt("return", res.status(200).json(message));
        case 10:
          _context18.prev = 10;
          _context18.t0 = _context18["catch"](0);
          console.error(_context18.t0);
          return _context18.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 14:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[0, 10]]);
  }));
  return function handleDeleteLogCTHD(_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}();
var handleDeleteCheckLogCTHD = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var _req$body2, machungtu, sopo, message;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          _req$body2 = req.body, machungtu = _req$body2.machungtu, sopo = _req$body2.sopo; //console.log('machungtu', machungtu)
          if (machungtu) {
            _context19.next = 4;
            break;
          }
          return _context19.abrupt("return", res.status(200).json({
            errCode: 1,
            message: 'Vui lòng chọn dòng cần xóa'
          }));
        case 4:
          _context19.next = 6;
          return _menuService["default"].deleteCheckLogCTHD(machungtu, sopo);
        case 6:
          message = _context19.sent;
          return _context19.abrupt("return", res.status(200).json(message));
        case 10:
          _context19.prev = 10;
          _context19.t0 = _context19["catch"](0);
          console.error(_context19.t0);
          return _context19.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 14:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[0, 10]]);
  }));
  return function handleDeleteCheckLogCTHD(_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}();
var handleDeleteLogPOPR = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var sopo, message;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _context20.prev = 0;
          sopo = req.body.sopo; //console.log('machungtu', machungtu)
          if (sopo) {
            _context20.next = 4;
            break;
          }
          return _context20.abrupt("return", res.status(200).json({
            errCode: 1,
            message: 'Vui lòng chọn dòng cần xóa'
          }));
        case 4:
          _context20.next = 6;
          return _menuService["default"].deleteLogPOPR(sopo);
        case 6:
          message = _context20.sent;
          return _context20.abrupt("return", res.status(200).json(message));
        case 10:
          _context20.prev = 10;
          _context20.t0 = _context20["catch"](0);
          console.error(_context20.t0);
          return _context20.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 14:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[0, 10]]);
  }));
  return function handleDeleteLogPOPR(_x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}();
var handleDeleteLogCTPO = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var _req$body3, machungtu, sopo, message;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.prev = 0;
          _req$body3 = req.body, machungtu = _req$body3.machungtu, sopo = _req$body3.sopo; //console.log('machungtu', machungtu, sopo)
          if (machungtu) {
            _context21.next = 4;
            break;
          }
          return _context21.abrupt("return", res.status(200).json({
            errCode: 1,
            message: 'Vui lòng chọn dòng cần xóa'
          }));
        case 4:
          _context21.next = 6;
          return _menuService["default"].deleteLogCTPO(machungtu, sopo);
        case 6:
          message = _context21.sent;
          return _context21.abrupt("return", res.status(200).json(message));
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
    }, _callee21, null, [[0, 10]]);
  }));
  return function handleDeleteLogCTPO(_x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}();
var handleDeleteCheckLogCTPO = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    var _req$body4, machungtu, sopo, message;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.prev = 0;
          _req$body4 = req.body, machungtu = _req$body4.machungtu, sopo = _req$body4.sopo; //console.log('machungtu', machungtu, sopo)
          if (machungtu) {
            _context22.next = 4;
            break;
          }
          return _context22.abrupt("return", res.status(200).json({
            errCode: 1,
            message: 'Vui lòng chọn dòng cần xóa'
          }));
        case 4:
          _context22.next = 6;
          return _menuService["default"].deleteCheckLogCTPO(machungtu, sopo);
        case 6:
          message = _context22.sent;
          return _context22.abrupt("return", res.status(200).json(message));
        case 10:
          _context22.prev = 10;
          _context22.t0 = _context22["catch"](0);
          console.error(_context22.t0);
          return _context22.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 14:
        case "end":
          return _context22.stop();
      }
    }, _callee22, null, [[0, 10]]);
  }));
  return function handleDeleteCheckLogCTPO(_x43, _x44) {
    return _ref22.apply(this, arguments);
  };
}();
var handleDeleteCT = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res) {
    var _req$body5, machungtu, sopo, message;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.prev = 0;
          _req$body5 = req.body, machungtu = _req$body5.machungtu, sopo = _req$body5.sopo; //console.log('machungtu', machungtu, sopo)
          if (machungtu) {
            _context23.next = 4;
            break;
          }
          return _context23.abrupt("return", res.status(200).json({
            errCode: 1,
            message: 'Vui lòng chọn dòng cần xóa'
          }));
        case 4:
          _context23.next = 6;
          return _menuService["default"].deleteCT(machungtu, sopo);
        case 6:
          message = _context23.sent;
          return _context23.abrupt("return", res.status(200).json(message));
        case 10:
          _context23.prev = 10;
          _context23.t0 = _context23["catch"](0);
          console.error(_context23.t0);
          return _context23.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 14:
        case "end":
          return _context23.stop();
      }
    }, _callee23, null, [[0, 10]]);
  }));
  return function handleDeleteCT(_x45, _x46) {
    return _ref23.apply(this, arguments);
  };
}();
var handleDeleteTaiSan = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
    var _req$body6, Duoc_Id, TenDuoc_Id, message;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _context24.prev = 0;
          _req$body6 = req.body, Duoc_Id = _req$body6.Duoc_Id, TenDuoc_Id = _req$body6.TenDuoc_Id; //console.log('machungtu', machungtu, sopo)
          _context24.next = 4;
          return _menuService["default"].deleteTaiSan(Duoc_Id, TenDuoc_Id);
        case 4:
          message = _context24.sent;
          return _context24.abrupt("return", res.status(200).json(message));
        case 8:
          _context24.prev = 8;
          _context24.t0 = _context24["catch"](0);
          console.error(_context24.t0);
          return _context24.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context24.stop();
      }
    }, _callee24, null, [[0, 8]]);
  }));
  return function handleDeleteTaiSan(_x47, _x48) {
    return _ref24.apply(this, arguments);
  };
}();
var handleDeleteDataKiemKe = /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25(req, res) {
    var _req$body7, KhoTaiSan_Id, data, message;
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          _context25.prev = 0;
          _req$body7 = req.body, KhoTaiSan_Id = _req$body7.KhoTaiSan_Id, data = _req$body7.data; //console.log('KhoTaiSan_Id', KhoTaiSan_Id)
          _context25.next = 4;
          return _menuService["default"].deleteDaTaKiemKe(KhoTaiSan_Id, data);
        case 4:
          message = _context25.sent;
          return _context25.abrupt("return", res.status(200).json(message));
        case 8:
          _context25.prev = 8;
          _context25.t0 = _context25["catch"](0);
          console.error(_context25.t0);
          return _context25.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context25.stop();
      }
    }, _callee25, null, [[0, 8]]);
  }));
  return function handleDeleteDataKiemKe(_x49, _x50) {
    return _ref25.apply(this, arguments);
  };
}();
var handleHuyKiemKe = /*#__PURE__*/function () {
  var _ref26 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26(req, res) {
    var IdKiemKe, message;
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          _context26.prev = 0;
          IdKiemKe = req.body.IdKiemKe; //console.log('KhoTaiSan_Id', KhoTaiSan_Id)
          _context26.next = 4;
          return _menuService["default"].huyKiemKe(IdKiemKe);
        case 4:
          message = _context26.sent;
          return _context26.abrupt("return", res.status(200).json(message));
        case 8:
          _context26.prev = 8;
          _context26.t0 = _context26["catch"](0);
          console.error(_context26.t0);
          return _context26.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context26.stop();
      }
    }, _callee26, null, [[0, 8]]);
  }));
  return function handleHuyKiemKe(_x51, _x52) {
    return _ref26.apply(this, arguments);
  };
}();
var handleDeleteCheckCT = /*#__PURE__*/function () {
  var _ref27 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27(req, res) {
    var _req$body8, machungtu, sopo, message;
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          _context27.prev = 0;
          _req$body8 = req.body, machungtu = _req$body8.machungtu, sopo = _req$body8.sopo; //console.log('machungtu', machungtu, sopo)
          if (machungtu) {
            _context27.next = 4;
            break;
          }
          return _context27.abrupt("return", res.status(200).json({
            errCode: 1,
            message: 'Vui lòng chọn dòng cần xóa'
          }));
        case 4:
          _context27.next = 6;
          return _menuService["default"].deleteCheckCT(machungtu, sopo);
        case 6:
          message = _context27.sent;
          return _context27.abrupt("return", res.status(200).json(message));
        case 10:
          _context27.prev = 10;
          _context27.t0 = _context27["catch"](0);
          console.error(_context27.t0);
          return _context27.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 14:
        case "end":
          return _context27.stop();
      }
    }, _callee27, null, [[0, 10]]);
  }));
  return function handleDeleteCheckCT(_x53, _x54) {
    return _ref27.apply(this, arguments);
  };
}();
var handleGetNhomQuyen = /*#__PURE__*/function () {
  var _ref28 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee28(req, res) {
    var id, data;
    return _regeneratorRuntime().wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          _context28.prev = 0;
          id = req.body.data.id; // console.log('id', id)
          _context28.next = 4;
          return _menuService["default"].getNhomQuyen(id);
        case 4:
          data = _context28.sent;
          return _context28.abrupt("return", res.status(200).json(data));
        case 8:
          _context28.prev = 8;
          _context28.t0 = _context28["catch"](0);
          console.error(_context28.t0);
          return _context28.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context28.stop();
      }
    }, _callee28, null, [[0, 8]]);
  }));
  return function handleGetNhomQuyen(_x55, _x56) {
    return _ref28.apply(this, arguments);
  };
}();
var handleGetMenuCha = /*#__PURE__*/function () {
  var _ref29 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee29(req, res) {
    var id, data;
    return _regeneratorRuntime().wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          _context29.prev = 0;
          id = req.body.data.id; // console.log('id', id)
          _context29.next = 4;
          return _menuService["default"].getMenuCha(id);
        case 4:
          data = _context29.sent;
          return _context29.abrupt("return", res.status(200).json(data));
        case 8:
          _context29.prev = 8;
          _context29.t0 = _context29["catch"](0);
          console.error(_context29.t0);
          return _context29.abrupt("return", res.status(500).json({
            errCode: 500,
            errMessage: 'Internal Server Error'
          }));
        case 12:
        case "end":
          return _context29.stop();
      }
    }, _callee29, null, [[0, 8]]);
  }));
  return function handleGetMenuCha(_x57, _x58) {
    return _ref29.apply(this, arguments);
  };
}();
var handleEditMenuCon = /*#__PURE__*/function () {
  var _ref30 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee31(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee31$(_context31) {
      while (1) switch (_context31.prev = _context31.next) {
        case 0:
          data = req.body;
          return _context31.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref31 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee30(resolve, reject) {
              var message;
              return _regeneratorRuntime().wrap(function _callee30$(_context30) {
                while (1) switch (_context30.prev = _context30.next) {
                  case 0:
                    _context30.prev = 0;
                    _context30.next = 3;
                    return _menuService["default"].editMenuCon(data);
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
  return function handleEditMenuCon(_x59, _x60) {
    return _ref30.apply(this, arguments);
  };
}();
var handleXacNhanKiemKe = /*#__PURE__*/function () {
  var _ref32 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee33(req, res) {
    var _req$body9, KhoTaiSan_Id, KhoQuanLy, data, DotKiemKe_Id;
    return _regeneratorRuntime().wrap(function _callee33$(_context33) {
      while (1) switch (_context33.prev = _context33.next) {
        case 0:
          _req$body9 = req.body, KhoTaiSan_Id = _req$body9.KhoTaiSan_Id, KhoQuanLy = _req$body9.KhoQuanLy, data = _req$body9.data, DotKiemKe_Id = _req$body9.DotKiemKe_Id;
          return _context33.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref33 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee32(resolve, reject) {
              var message;
              return _regeneratorRuntime().wrap(function _callee32$(_context32) {
                while (1) switch (_context32.prev = _context32.next) {
                  case 0:
                    _context32.prev = 0;
                    _context32.next = 3;
                    return _menuService["default"].xacnhanKiemKe(KhoTaiSan_Id, KhoQuanLy, data, DotKiemKe_Id);
                  case 3:
                    message = _context32.sent;
                    return _context32.abrupt("return", res.status(200).json(message));
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
            return function (_x65, _x66) {
              return _ref33.apply(this, arguments);
            };
          }()));
        case 2:
        case "end":
          return _context33.stop();
      }
    }, _callee33);
  }));
  return function handleXacNhanKiemKe(_x63, _x64) {
    return _ref32.apply(this, arguments);
  };
}();
var handleHuyXacNhanKiemKe = /*#__PURE__*/function () {
  var _ref34 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee35(req, res) {
    var _req$body10, KhoTaiSan_Id, KhoQuanLy, data;
    return _regeneratorRuntime().wrap(function _callee35$(_context35) {
      while (1) switch (_context35.prev = _context35.next) {
        case 0:
          _req$body10 = req.body, KhoTaiSan_Id = _req$body10.KhoTaiSan_Id, KhoQuanLy = _req$body10.KhoQuanLy, data = _req$body10.data;
          return _context35.abrupt("return", new Promise(/*#__PURE__*/function () {
            var _ref35 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee34(resolve, reject) {
              var message;
              return _regeneratorRuntime().wrap(function _callee34$(_context34) {
                while (1) switch (_context34.prev = _context34.next) {
                  case 0:
                    _context34.prev = 0;
                    _context34.next = 3;
                    return _menuService["default"].huyxacnhanKiemKe(KhoTaiSan_Id, KhoQuanLy, data);
                  case 3:
                    message = _context34.sent;
                    return _context34.abrupt("return", res.status(200).json(message));
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
            return function (_x69, _x70) {
              return _ref35.apply(this, arguments);
            };
          }()));
        case 2:
        case "end":
          return _context35.stop();
      }
    }, _callee35);
  }));
  return function handleHuyXacNhanKiemKe(_x67, _x68) {
    return _ref34.apply(this, arguments);
  };
}();
module.exports = {
  handleGetAllMenuCon: handleGetAllMenuCon,
  handleGetAllMenuCha: handleGetAllMenuCha,
  handleCreateNewMenuCha: handleCreateNewMenuCha,
  handleDeleteMenuCha: handleDeleteMenuCha,
  handleEditMenuCha: handleEditMenuCha,
  handleGetAllSelectMenuCha: handleGetAllSelectMenuCha,
  handleGetAllGroup: handleGetAllGroup,
  handleCreateNewMenuCon: handleCreateNewMenuCon,
  handleDeleteMenuCon: handleDeleteMenuCon,
  handleGetNhomQuyen: handleGetNhomQuyen,
  handleGetMenuCha: handleGetMenuCha,
  handleEditMenuCon: handleEditMenuCon,
  handleDeleteHopDong: handleDeleteHopDong,
  handleDeletePO: handleDeletePO,
  handleDeletePR: handleDeletePR,
  handleDeleteLogCTHD: handleDeleteLogCTHD,
  handleDeleteLogCTPO: handleDeleteLogCTPO,
  handleDeleteLogPOPR: handleDeleteLogPOPR,
  handleDeleteCT: handleDeleteCT,
  handleDeleteCheckLogCTPO: handleDeleteCheckLogCTPO,
  handleDeleteCheckLogCTHD: handleDeleteCheckLogCTHD,
  handleDeleteCheckCT: handleDeleteCheckCT,
  handleDeleteTaiSan: handleDeleteTaiSan,
  handleXacNhanKiemKe: handleXacNhanKiemKe,
  handleHuyXacNhanKiemKe: handleHuyXacNhanKiemKe,
  handleDeleteDataKiemKe: handleDeleteDataKiemKe,
  handleHuyKiemKe: handleHuyKiemKe
};