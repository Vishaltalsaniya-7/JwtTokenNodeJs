const User = require('../models/userModels');
const bcrypt = require('bcryptjs');

const { generateToken } = require('../middelware/jwtHelper');




exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    const token = generateToken(newUser);
    res.status(201).json({ message: 'User registered', token });
  } catch (err) {
    console.error("Registration error:", err.message);
    res.status(500).json({ error: 'Server error during registration' });
  }
};
exports.login = async (req, res) => {
const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
 const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    const token = generateToken(user);
    res.json({ message:'login successful',token });
  } catch (err) {
    res.status(500).json({ error: 'Login error' });
  }
};
