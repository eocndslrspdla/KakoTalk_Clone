const connection = require('../db');

exports.createUser = (user_id, hashedPassword, name, callback) => {
  connection.query(
    'INSERT INTO users (username, password, nickname) VALUES (?, ?, ?)',
    [user_id, hashedPassword, name],
    callback
  );
};

exports.findByUsername = (user_id, callback) => {
  connection.query(
    'SELECT * FROM users WHERE username = ?',
    [user_id],
    callback
  );
};
