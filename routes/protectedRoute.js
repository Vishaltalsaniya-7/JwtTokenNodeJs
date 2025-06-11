const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middelware/jwtHelper');

router.get('/dashboard', verifyToken, (req, res) => {
  res.json({ message: 'Welcome to the protected dashboard!' });
});

module.exports = router;
