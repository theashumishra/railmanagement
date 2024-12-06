const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Leave this blank if no password is set
  database: 'railway_management'
});

module.exports = db;
