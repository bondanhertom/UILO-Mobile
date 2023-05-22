const express = require("express");
const router = express.Router();
const usersRouter = require('./users.js')
const customersRouter = require('./customers.js')
const productRouter = require('./products.js')
const categoryRouter = require('./categories.js')


router.use(usersRouter)
router.use(productRouter)
router.use(customersRouter)
router.use(categoryRouter)





module.exports = router