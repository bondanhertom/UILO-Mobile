const router = require('express').Router()
const ControllerProducts = require('../controllers/products')


router.get('/pub/products', ControllerProducts.getAllProduct)
router.get('/pub/products/:id', ControllerProducts.getDetailProduct)







module.exports = router