'use strict';

require('dotenv').config();
var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var mysql = require('mysql');
var mssql = require('mssql');
var basename = path.basename(__filename);
var env = process.env.NODE_ENV || 'development';
var envsql = process.env.NODE_SQL || 'sqlServer';
var envsqlhis2 = process.env.NODE_SQL_HIS2 || 'sqlServerHis2';
var config = require(__dirname + '/../config/config.js')[env];
var configsql = require(__dirname + '/../config/config.js')[envsql];
var configsqlhis2 = require(__dirname + '/../config/config.js')[envsqlhis2];
var db = {};
var sequelize;
var sqlConnection;
var sqlhis2Connection;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
sqlConnection = new mssql.ConnectionPool({
  user: configsql.username,
  password: configsql.password,
  server: configsql.server,
  database: configsql.database,
  options: {
    enableArithAbort: false
  }
});
sqlConnection.connect(function (err) {
  if (err) {
    console.error('Lỗi kết nối đến SQL QLNV_TT:', err);
    return;
  }
  console.log('Kết nối đến SQL QLNV_TT');
});
sqlhis2Connection = new mssql.ConnectionPool({
  user: configsqlhis2.username,
  password: configsqlhis2.password,
  server: configsqlhis2.server,
  database: configsqlhis2.database,
  options: {
    enableArithAbort: false
  }
});
sqlhis2Connection.connect(function (err) {
  if (err) {
    console.error('Lỗi kết nối đến SQL eHospital:', err);
    return;
  }
  console.log('Kết nối đến SQL eHospital');
});
fs.readdirSync(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
  var model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
});
Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
// Thêm kết nối với SQL Server vào db object
db.sqlConnection = sqlConnection;
db.sqlhis2Connection = sqlhis2Connection;
module.exports = db;