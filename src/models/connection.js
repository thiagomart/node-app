const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '0',
    port: '',
    user: '',
    password: '',
    database: '',
})

module.exports = connection