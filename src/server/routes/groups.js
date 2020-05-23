const express = require('express');
const controller = require('../controllers/groups');

const router = express.Router();

router.post('/', controller.createGroup);
router.get('/', controller.getGroups);
router.get('/:id', controller.getGroupById);

module.exports = router;