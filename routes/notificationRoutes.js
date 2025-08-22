// backend/routes/notificationRoutes.js
const express = require('express');
const { getNotifications, createNotification } = require('../controllers/notificationController');

const router = express.Router();

// GET all notifications
router.get('/', getNotifications);

// POST a new notification
router.post('/', createNotification);

module.exports = router;
