const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'aa',
  database: 'users'
});

module.exports = connection;
