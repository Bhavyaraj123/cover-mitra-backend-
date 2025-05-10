const express = require('express');
const router = express.Router();
const { adminLogin } = require('../controllers/authcontrollers');

// Route for admin login
router.post('/login', adminLogin);

module.exports = router;
