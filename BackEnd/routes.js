const express = require('express');
const router = express.Router();
const orderController = require('./Controller/OrderController')


router.get('/order', async()=>{ return await orderController});

module.exports = router;