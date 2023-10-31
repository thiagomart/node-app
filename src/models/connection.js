import mysql from 'mysql2/promise'

const connection = mysql.createPool({
    host: '',
    port: '',
    user: '',
    password: '',
    database: '',
})

export default connection