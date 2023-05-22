const router = require('express').Router()
const ControllerCategories = require('../controllers/categories')


router.get('/categories', ControllerCategories.getAllCategory)
router.post('/categories', ControllerCategories.createCategory)
router.put('/categories/:id', ControllerCategories.updateCategory)
router.get('/categories/:id', ControllerCategories.detailCategory)
router.delete('/categories/:id', ControllerCategories.deleteCategory)







module.exports = router