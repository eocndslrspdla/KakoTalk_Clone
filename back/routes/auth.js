const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/users');
const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { user_id, password, name } = req.body;
    if (!user_id || !password || !name) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    userModel.createUser(user_id, hashedPassword, name, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ success: true });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/login', (req, res) => {
  const { user_id, password } = req.body;
  if (!user_id || !password) {
    return res.status(400).json({ error: 'Missing user_id or password' });
  }

  userModel.findByUsername(user_id, async (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, 'yourjwtsecret', { expiresIn: '1h' });
    res.json({ success: true, token });
  });
});

module.exports = router;
