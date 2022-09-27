const express = require("express")
const {createUser} = require("../../controllers/userControllers/userController")
const {helloController} = require("../../controllers/hello");
const router = express.Router()

router
    .get("/moon", helloController)
    .post("/register", createUser)

module.exports = router;