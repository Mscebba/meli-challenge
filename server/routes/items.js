const express = require('express');
const router = express.Router();

const itemsController = require('../controllers/items');

router.get('/api/items/:id', itemsController.itemId);

router.get('/api/items', itemsController.searchItem);

module.exports = router;
