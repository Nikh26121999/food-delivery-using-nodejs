const express = require('express');
const router = express.Router();
const pricingController = require('../controllers/pricingController');

router.post('/calculate-price', pricingController.calculatePrice);

module.exports = router;
