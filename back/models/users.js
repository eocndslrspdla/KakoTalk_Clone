const connection = require('../db');    // DB 연결 모듈 필요

// user_id : 본인 유저 ID
// friend_id : 친구 유저 ID
// callback : 콜백 함수

// 가입
exports.createUser = (username, hashedPassword, callback) => {
  connection.query(
    'INSERT INTO users (username, password_hash) VALUES (?, ?)',
    [username, hashedPassword],
    callback
  );
};

// 친구 찾기
exports.findByUsername = (username, callback) => {
  connection.query(
    'SELECT * FROM users WHERE username = ?',
    [username],
    callback
  );
};

// 친구 추가 기능
exports.addFriend = (user_id, friend_id, callback) => {
  connection.query(
    'INSERT INTO friends (user_id, friend_id) VALUES (?, ?), (?, ?)',
    [user_id, friend_id, friend_id, user_id],   // 양쪽 모두 추가 
    callback
  );
};

// 친구인지 검사
exports.isFriend = (user_id, friend_id, callback) => {
  connection.query(
    'SELECT COUNT(*) AS count FROM friends WHERE user_id = ? AND friend_id = ?',
    [user_id, friend_id],
    callback
  );
};

// 친구 목록 확인
exports.getFriendsList = (user_id, callback) => {
  connection.query(
    'SELECT u.id, u.username FROM friends f JOIN users u ON f.friend_id = u.id WHERE f.user_id = ? ',
    [user_id],
    callback
  )
}