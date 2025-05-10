const jwt = require('jsonwebtoken');

// Middleware to verify admin JWT token
const verifyAdmin = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  const tokenWithoutBearer = token.startsWith('Bearer ') ? token.slice(7) : token;

  jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    if (decoded.role === 'admin') {
      next();
    } else {
      return res.status(403).json({ message: 'Forbidden' });
    }
  });
};

module.exports = {
  verifyAdmin,
};
