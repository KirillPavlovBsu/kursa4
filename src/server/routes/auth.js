const express = require('express');
const controller = require('../controllers/auth');
const {verifyToken} = require('../middlewares/auth');

const router = express.Router();

router.post('/login', controller.login);
router.get('/check',verifyToken, controller.check);

module.exports = router;