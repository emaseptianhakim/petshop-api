const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Login } = require('../models');

// Fungsi untuk menghasilkan token JWT
function generateToken(user) {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

// Fungsi Register
exports.register = async (req, res) => {
  try {
    // Destructure username and password from req.body
    const { user, password } = req.body;

    // Check if user already exists
    const existingUser = await Login.findOne({ where: { user } });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await Login.create({
      user,
      password: hashedPassword
    });

    // Generate JWT token
    const token = generateToken(newUser);

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fungsi Login
exports.login = async (req, res) => {
  try {
    // Destructure username and password from req.body
    const { user, password } = req.body;

    // Check if user exists
    const existingUser = await Login.findOne({ where: { user } });
    if (!existingUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Validate password
    const isValidPassword = await bcrypt.compare(password, existingUser.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Generate JWT token
    const token = generateToken(existingUser);

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
