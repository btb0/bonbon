const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/items

// GET /api/candy
router.get('/', itemsCtrl.index);

module.exports = router;