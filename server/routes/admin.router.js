const express = require('express');
const router = express.Router();
const adminOnly = require('../strategies/adminOnly'); // Middleware function

router.get('/dashboard', adminOnly, (req, res) => {
  // Return data only accessible by admin
  res.json({ message: 'Welcome Admin' });
});

module.exports = router;
