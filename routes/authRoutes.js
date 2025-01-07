const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');

router.post('/sign-in', login);

module.exports = router;