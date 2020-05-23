const express = require('express');
const controller = require('../controllers/users');

const router = express.Router();

router.post('/', controller.createUser);
router.get('/', controller.getUsers);
router.get('/:id', controller.getUserById);

module.exports = router;