"use strict";

require('dotenv').config();
module.exports = {
  development: {
    username: process.env.DB_USERNAME_MYSQL,
    password: process.env.DB_PASSWORD_MYSQL,
    database: process.env.DB_DATABASE_NAME_MYSQL,
    host: process.env.DB_HOST_MYSQL,
    dialect: process.env.DB_DIALECT_MYSQL,
    port: process.env.DB_PORT_MYSQL,
    logging: false,
    query: {
      raw: true
    },
    timezone: '+07:00'
  },
  development_local: {
    username: 'postgres.ztsgilvqrekvltifcjbk',
    password: 'Nhauyen@0410',
    database: 'postgres',
    host: 'aws-0-ap-southeast-1.pooler.supabase.com',
    port: 5432,
    dialect: 'postgres',
    logging: false,
    query: {
      raw: true
    },
    timezone: '+07:00'
  },
  sqlServer: {
    server: process.env.DB_HOST_QLBV_TT,
    database: process.env.DB_DATABASE_NAME_QLBV_TT,
    username: process.env.DB_USERNAME_QLBV_TT,
    password: process.env.DB_PASSWORD_QLBV_TT,
    port: process.env.DB_PORT_QLBV_TT,
    pool: {
      max: 10,
      min: 2,
      acquire: 60000,
      idle: 30000
    },
    options: {
      encrypt: false,
      trustServerCertificate: false,
      enableArithAbort: false
    },
    requestTimeout: 60000,
    connectionTimeout: 60000
  },
  sqlServerHis2: {
    server: process.env.DB_HOST_EHOS,
    database: process.env.DB_DATABASE_NAME_EHOS,
    username: process.env.DB_USERNAME_EHOS,
    password: process.env.DB_PASSWORD_EHOS,
    port: process.env.DB_PORT_EHOS,
    pool: {
      max: 10,
      min: 2,
      acquire: 60000,
      idle: 30000
    },
    options: {
      encrypt: false,
      trustServerCertificate: false,
      enableArithAbort: false
    },
    requestTimeout: 60000,
    connectionTimeout: 60000
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
};