const express = require('express');
const authenticate = require('../middlewares/authetication');
const router = express.Router();

// Adding routes handlers to 'notes' path
router.use('/auth', require('./auth')); 
router.use('/products', authenticate, require('./products'));
router.use('/reviews', authenticate, require('./reviews'));
router.use('/users', authenticate, require('./users'));
router.use('/orders', authenticate, require('./orders'));

module.exports = router;