const jwt = require('jsonwebtoken');
const ADMIN_PASSWORD = 'admin123'; 

// Generate JWT token for admin login
const generateAdminToken = () => {
  return jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Admin login function
const adminLogin = (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    const token = generateAdminToken();
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid password' });
  }
};

module.exports = {
  adminLogin,
};
