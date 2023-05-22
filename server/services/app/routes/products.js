const router = require('express').Router()
const ControllerProducts = require('../controllers/products')


router.get('/products', ControllerProducts.getAllProduct)
router.post('/products', ControllerProducts.createProduct) 
router.get('/products/:id', ControllerProducts.getDetailProduct)

router.put('/products/:id', ControllerProducts.editProduct)
router.delete('/products/:id', ControllerProducts.deleteProduct)








module.exports = router