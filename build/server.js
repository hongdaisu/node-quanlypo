"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _viewEngine = _interopRequireDefault(require("./config/viewEngine"));
var _web = _interopRequireDefault(require("./route/web"));
var _connectDB = _interopRequireDefault(require("./config/connectDB"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _http = _interopRequireDefault(require("http"));
var _https = _interopRequireDefault(require("https"));
var _fs = _interopRequireDefault(require("fs"));
var _socket = require("socket.io");
var _nodeFetch = _interopRequireDefault(require("node-fetch"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; } // Thêm import cho https
// Thêm import cho fs
require('dotenv').config();
var app = (0, _express["default"])();

// app.use(cors({ origin: true }));
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  //res.setHeader('Access-Control-Allow-Origin', process.env.URL_REACT);
  //res.setHeader('Access-Control-Allow-Origin', process.env.URL_REACT);
  res.setHeader('Access-Control-Allow-Origin', req.protocol === 'https' ? process.env.URL_REACT_HTTPS : process.env.URL_REACT);

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, x-xsrf-token');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  // Pass to next layer of middleware
  next();
});

//config app
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(_bodyParser["default"].json({
  limit: '50mb'
}));
app.use(_bodyParser["default"].urlencoded({
  limit: '50mb',
  extended: true
}));
app.get('/proxy-image', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var imageUrl, response, buffer;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          imageUrl = req.query.url;
          if (!(!imageUrl.startsWith('http://') && !imageUrl.startsWith('https://'))) {
            _context.next = 4;
            break;
          }
          throw new Error('URL is not absolute');
        case 4:
          _context.next = 6;
          return (0, _nodeFetch["default"])(decodeURIComponent(imageUrl));
        case 6:
          response = _context.sent;
          if (response.ok) {
            _context.next = 9;
            break;
          }
          throw new Error("Failed to fetch image from source: ".concat(imageUrl));
        case 9:
          _context.next = 11;
          return response.arrayBuffer();
        case 11:
          buffer = _context.sent;
          res.set('Content-Type', 'image/jpeg');
          res.send(Buffer.from(buffer));
          _context.next = 20;
          break;
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](0);
          console.error('Error fetching image:', _context.t0);
          res.status(500).send('Error fetching image');
        case 20:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 16]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

//config cookie -parser
app.use((0, _cookieParser["default"])());
(0, _viewEngine["default"])(app);
(0, _web["default"])(app);
(0, _connectDB["default"])();
var port = process.env.PORT || 6969;
var portHttps = process.env.PORT_HTTPS || 6969; // Cổng cho HTTPS

app.use(function (req, res) {
  return res.send('404 not found');
});
var server = _http["default"].createServer(app);

// // Đường dẫn đến chứng chỉ và khóa riêng
// const certPath = 'F:/QLPO/NODEJS/certificate.pem';
// const keyPath = 'F:/QLPO/NODEJS/private-key.pem';

// // // đưa lên server
// // const certPath = 'D:/QLPO/NODEJS/certificate.pem';
// // const keyPath = 'D:/QLPO/NODEJS/private-key.pem';

// // Log đường dẫn đến file chứng chỉ
// //console.log('Đường dẫn đến certificate:', certPath);
// //console.log('Đường dẫn đến private key:', keyPath);

// const httpsOptions = {
//     key: fs.readFileSync(keyPath), // Đường dẫn đến khóa riêng
//     cert: fs.readFileSync(certPath) // Đường dẫn đến chứng chỉ
// };

// // // Tạo server HTTPS
// // const httpsOptions = {
// //     key: fs.readFileSync('F:/QLPO/NODEJS/private-key.pem'), // Đường dẫn đến khóa riêng
// //     cert: fs.readFileSync('F:/QLPO/NODEJS/certificate.pem') // Đường dẫn đến chứng chỉ
// // };

// const httpsServer = https.createServer(httpsOptions, app);

var io = new _socket.Server(server, {
  transports: ['websocket']
});
io.on("connection", function (socket) {
  console.log("Connected Socket");
  socket.on("disconnect", function () {
    console.log("Disconnected Socket");
  });
  socket.on("po_new_server", function (data) {
    io.emit("po_new_client", {
      yeucau_id: data.id,
      message: ""
    });
  });
  socket.on("pr_new_server", function (data) {
    io.emit("pr_new_client", {
      yeucau_id: data.id,
      message: ""
    });
  });
  socket.on("hd_new_server", function (data) {
    io.emit("hd_new_client", {
      yeucau_id: data.id,
      message: ""
    });
  });
  socket.on("getmachungtu_server", function (data) {
    io.emit("getmachungtu_client", {
      yeucau_id: data.id,
      message: ""
    });
  });
  socket.on("getchungtu_server", function (data) {
    io.emit("getchungtu_client", {
      yeucau_id: data.id,
      message: ""
    });
  });
  socket.on("getsopr_server", function (data) {
    io.emit("getsopr_client", {
      yeucau_id: data.id,
      message: ""
    });
  });
  socket.on("edit_mataisan_server", function (data) {
    io.emit("edit_mataisan_client", {
      yeucau_id: data.id,
      message: ""
    });
  });
  socket.on("edit_soluongpo_server", function (data) {
    io.emit("edit_soluongpo_client", {
      yeucau_id: data.id,
      message: ""
    });
  });
  socket.on("edit_dongiapo_server", function (data) {
    io.emit("edit_dongiapo_client", {
      yeucau_id: data.id,
      message: ""
    });
  });
  socket.on("edit_vat_server", function (data) {
    io.emit("edit_vat_client", {
      yeucau_id: data.id,
      message: ""
    });
  });
  socket.on("delete_hopdong_server", function (data) {
    io.emit("delete_hopdong_client", {
      yeucau_id: data.id,
      message: ""
    });
  });
  socket.on("delete_po_server", function (data) {
    io.emit("delete_po_client", {
      yeucau_id: data.id,
      message: ""
    });
  });
  socket.on("delete_ct_server", function (data) {
    io.emit("delete_ct_client", {
      yeucau_id: data.id,
      message: ""
    });
  });
  socket.on("delete_check_ct_server", function (data) {
    io.emit("delete_check_ct_client", {
      yeucau_id: data.id,
      message: ""
    });
  });
  socket.on("xacnhan_kiemke_server", function (data) {
    io.emit("xacnhan_kiemke_client", {
      DotKiemKe_Id: data.DotKiemKe_Id,
      message: ""
    });
  });
  socket.on("xacnhan_themtaisan_server", function (data) {
    io.emit("xacnhan_themtaisan_client", {
      DotKiemKe_Id: data.DotKiemKe_Id,
      message: ""
    });
  });
  socket.on("huyxacnhan_kiemke_server", function (data) {
    io.emit("huyxacnhan_kiemke_client", {
      DotKiemKe_Id: data.DotKiemKe_Id,
      message: ""
    });
  });
  socket.on("edit_vitrihientai_server", function (data) {
    io.emit("edit_vitrihientai_client", {
      DotKiemKe_Id: data.DotKiemKe_Id,
      errMessage: data.errMessage
    });
  });
  socket.on("edit_khoaphonghientai_server", function (data) {
    io.emit("edit_khoaphonghientai_client", {
      DotKiemKe_Id: data.DotKiemKe_Id,
      errMessage: data.errMessage
    });
  });
  socket.on("edit_ghichuhientai_server", function (data) {
    io.emit("edit_ghichuhientai_client", {
      DotKiemKe_Id: data.DotKiemKe_Id,
      errMessage: data.errMessage
    });
  });
  socket.on("edit_tinhtranghientai_server", function (data) {
    io.emit("edit_tinhtranghientai_client", {
      DotKiemKe_Id: data.DotKiemKe_Id,
      errMessage: data.errMessage
    });
  });
  socket.on("mataisan_kiemke_server", function (data) {
    io.emit("mataisan_kiemke_client", {
      DotKiemKe_Id: data.DotKiemKe_Id,
      message: ""
    });
  });
  socket.on("serial_kiemke_server", function (data) {
    io.emit("serial_kiemke_client", {
      DotKiemKe_Id: data.DotKiemKe_Id,
      message: ""
    });
  });
  socket.on("huy_kiemke_server", function (data) {
    io.emit("huy_kiemke_client", {
      DotKiemKe_Id: data.DotKiemKe_Id,
      message: ""
    });
  });
  socket.on("xoa_data_kiemke_server", function (data) {
    io.emit("xoa_data_kiemke_client", {
      DotKiemKe_Id: data.DotKiemKe_Id,
      message: ""
    });
  });
  socket.on("delete_pr_server", function (data) {
    io.emit("delete_pr_client", {
      yeucau_id: data.id,
      message: ""
    });
  });
  socket.on("delete_log_cthd_server", function (data) {
    io.emit("delete_log_cthd_client", {
      yeucau_id: data.id,
      message: ""
    });
  });
  socket.on("delete_check_log_cthd_server", function (data) {
    io.emit("delete_check_log_cthd_client", {
      yeucau_id: data.id,
      message: ""
    });
  });
  socket.on("delete_log_ctpo_server", function (data) {
    io.emit("delete_log_ctpo_client", {
      yeucau_id: data.id,
      message: ""
    });
  });
  socket.on("delete_check_log_ctpo_server", function (data) {
    io.emit("delete_check_log_ctpo_client", {
      yeucau_id: data.id,
      message: ""
    });
  });
  socket.on("delete_log_popr_server", function (data) {
    io.emit("delete_log_popr_client", {
      yeucau_id: data.id,
      message: ""
    });
  });
  socket.on("create_menu_cha_server", function (data) {
    io.emit("create_menu_cha_client", {
      yeucau_id: data.id,
      message: ""
    });
  });
  socket.on("edit_menu_cha_server", function (data) {
    io.emit("edit_menu_cha_client", {
      yeucau_id: data.id,
      message: ""
    });
  });
  socket.on("delete_menu_cha_server", function (data) {
    io.emit("delete_menu_cha_client", {
      yeucau_id: data.id,
      message: ""
    });
  });
  socket.on("delete_menu_con_server", function (data) {
    io.emit("delete_menu_con_client", {
      yeucau_id: data.id,
      message: ""
    });
  });
  socket.on("new_taisan_server", function (data) {
    io.emit("new_taisan_client", {
      yeucau_id: data.id,
      message: ""
    });
  });
  socket.on("edit_taisan_server", function (data) {
    io.emit("edit_taisan_client", {
      yeucau_id: data.id,
      message: ""
    });
  });
  socket.on("delete_taisan_server", function (data) {
    io.emit("delete_taisan_client", {
      yeucau_id: data.id,
      message: ""
    });
  });

  // Server-side: Nhận UserId từ client và xử lý logic với UserId đó
  socket.on("button_thanhtoan_server", function (data) {
    var userId = data.userId,
      benhan_id = data.benhan_id,
      yeucau_id = data.yeucau_id;
    //console.log('button_thanhtoan_server', userId)
    io.emit("button_thanhtoan_client", {
      yeucau_id: data.id,
      benhan_id: benhan_id,
      nguoikhoa: userId,
      message: ""
    });
  });
  socket.on("close_modal_server", function (data) {
    //console.log('close_modal_server')
    io.emit("close_modal_client", {
      yeucau_id: data.id,
      message: ""
    });
  });
  socket.on("new_phong_ban", function (data) {
    io.emit("phong_ban_new", {
      phong_ban_id: data.id,
      message: ""
    });
  });
  socket.on("edit_phong_ban", function (data) {
    io.emit("phong_ban_edited", {
      phong_ban_id: data.id,
      message: ""
    });
  });
  socket.on("delete_phong_ban", function (data) {
    io.emit("phong_ban_delete", {
      phong_ban_id: data.id,
      message: ""
    });
  });
  socket.on("delete_nhanvien", function (data) {
    io.emit("nhanvien_delete", {
      nhanvien_id: data.id,
      message: ""
    });
  });
  socket.on("edit_nhanvien", function (data) {
    //console.log('edit_nhanvien', data)
    io.emit("nhanvien_edited", {
      nhanvien_id: data.id,
      message: ""
    });
  });
  socket.on("new_nhanvien", function (data) {
    io.emit("nhanvien_new", {
      congvanden_id: data.id,
      message: ""
    });
  });
});
server.listen(port, function () {
  console.log("Kết nối server thành công:" + port);
});

// httpsServer.listen(portHttps, () => {
//     console.log("HTTPS Server running on port: " + portHttps);
// });

// // app.listen(port, () => {
// //     console.log("Kết nối server thành công:" + port)
// // })

// // module.exports = app;