const bcrypt = require('bcryptjs');
const db = require('../config/db');

class User {
  static register(username, password, role, callback) {
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) return callback(err);
      const query = `INSERT INTO Users (username, password, role) VALUES (?, ?, ?)`;
      db.query(query, [username, hashedPassword, role], callback);
    });
  }

  static findByUsername(username, callback) {
    const query = `SELECT * FROM Users WHERE username = ?`;
    db.query(query, [username], callback);
  }
}

module.exports = User;
