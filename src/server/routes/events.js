const express = require('express');
const controller = require('../controllers/events');

const router = express.Router();

router.post('/', controller.createEvent);
router.get('/', controller.getEvents);
router.get('/:id', controller.getEventById);

module.exports = router;