const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const register = (req, res) => {
  const { username, password, role } = req.body;
  User.register(username, password, role || 'user', (err, result) => {
    if (err) return res.status(500).json({ message: 'Registration failed' });
    res.status(200).json({ message: 'User registered successfully' });
  });
};

const login = (req, res) => {
  const { username, password } = req.body;
  User.findByUsername(username, (err, users) => {
    if (err || users.length === 0) return res.status(404).json({ message: 'User not found' });
    bcrypt.compare(password, users[0].password, (err, isMatch) => {
      if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
      const token = jwt.sign({ id: users[0].id, role: users[0].role }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ token });
    });
  });
};

module.exports = { register, login };
