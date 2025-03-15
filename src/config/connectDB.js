require('dotenv').config();
const { query } = require('express');
const { Sequelize } = require('sequelize');
// const mysql = require('mysql');
// Option 3: Passing parameters separately (other dialects)


// const sequelize = new Sequelize('quanlycongvan', 'root', null, {
//     host: 'localhost',
//     dialect: 'mysql'
// });

const sequelize = new Sequelize(
    process.env.DB_DATABASE_NAME_MYSQL,
    process.env.DB_USERNAME_MYSQL,
    process.env.DB_PASSWORD_MYSQL,

    {
        host: process.env.DB_HOST_MYSQL,
        port: process.env.DB_PORT_MYSQL,
        dialect: process.env.DB_DIALECT_MYSQL,
        logging: false,
        query: {
            "raw": true
        },
        timezone: "+07:00"
    });

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Kết nối đến DB MYSQL');
    } catch (error) {
        console.error('Lỗi Kết nối đết DB MYSQL:', error);
    }
}

// // Kết nối PostgreSQL trên Supabase
// const sequelize = new Sequelize(
//     process.env.DB_DATABASE,
//     process.env.DB_USERNAME,
//     process.env.DB_PASSWORD,
//     {
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT,
//         dialect: process.env.DB_DIALECT,
//         dialectOptions: {
//             ssl: {
//                 require: true, // Supabase yêu cầu SSL
//                 rejectUnauthorized: false // Chấp nhận chứng chỉ tự ký
//             }
//         }
//     }
// );

// let connectDB = async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Kết nối đến DB Supabase thành công...');
//     } catch (error) {
//         console.error('Kết nối đến DB Supabase thất bại:', error);
//     }
// }


module.exports = connectDB;
