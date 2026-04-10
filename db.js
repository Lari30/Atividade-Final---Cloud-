const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: '129.148.36.222',
  user: 'remoto',
  password: 'ls081189',
  database: 'atividadefinal',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;