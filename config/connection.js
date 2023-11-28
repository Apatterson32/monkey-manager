const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

module.exports = connection;
