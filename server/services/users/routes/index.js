const routes = require("express").Router()
const ControllerUser = require("../controllers/userController");


routes.get("/", ControllerUser.findAll)
routes.post("/", ControllerUser.createUser)
routes.get("/:id", ControllerUser.findById)
routes.delete("/:id", ControllerUser.deleteUser)


module.exports = routes
