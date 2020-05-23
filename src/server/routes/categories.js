const express = require('express');
const controller = require('../controllers/categories');

const router = express.Router();

router.post('/', controller.createCategory);
router.get('/', controller.getAllCategories);
router.get('/:id', controller.getCategoryById);
router.post('/:id/addEvent', controller.addEvent);

module.exports = router;