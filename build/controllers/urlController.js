"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUrlView = void 0;
var _phongbanService = _interopRequireDefault(require("../services/phongbanService"));
var _bodyParser = require("body-parser");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
require('dotenv').config();
var getUrlView = exports.getUrlView = function getUrlView(req, res) {
  // res.json({ url: process.env.URL_VIEW });
  //console.log('test')
  try {
    return res.status(200).json({
      errCode: 0,
      errMessage: 'ok',
      url: process.env.URL_VIEW
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      errCode: 500,
      errMessage: 'Internal Server Error'
    });
  }
};
module.exports = {
  getUrlView: getUrlView
};