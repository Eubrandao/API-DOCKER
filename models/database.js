const mysql = require('mysql')
require('dotenv').config();
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database:process.env.DATABASE,
    port: process.env.PORT
});


// const connection = mysql.createConnection({
//     host: '192.168.179.128',
//     user:   'root',
//     password: 'password',
//     database: 'api',
//     port: '3315'

// })

module.exports = connection