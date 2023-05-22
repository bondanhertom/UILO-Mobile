const router = require('express').Router()

const Controller = require("../controllers/product");

    router.post("/", Controller.addProduct)
    router.get("/", Controller.findAllProduct)
    router.get("/:id", Controller.detailProduct)
    router.put("/:id", Controller.editProduct)
    router.delete("/:id", Controller.deleteProduct);

module.exports = router;
