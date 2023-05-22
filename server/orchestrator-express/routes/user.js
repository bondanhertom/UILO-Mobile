const router = require('express').Router()

const Controller = require("../controllers/user");

router.post("/", Controller.createUser)
router.get("/", Controller.findAllUser)
router.get("/:id", Controller.findUserById)
router.delete("/:id", Controller.deleteUser);

module.exports = router;
