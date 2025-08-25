const mysql = require('mysql2/promise');


const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'cliente',
    password: process.env.DB_PASSWORD || '!QAZ2wsx',
    database: process.env.DB_DATABASE || 'avaliacao',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;