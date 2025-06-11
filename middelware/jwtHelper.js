const jwt = require('jsonwebtoken');

require('dotenv').config();
const secretKey = process.env.JWT_SECRET;

exports.generateToken = (user) => {
  return jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' });
};

exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ error: 'Token required' });
  }

  jwt.verify(token.replace('Bearer ', ''), secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    req.userId = decoded.id;
    next();
  });
};
