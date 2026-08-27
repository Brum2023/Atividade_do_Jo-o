const express = require("express")
const router = express.Router()


const userController = require("../controllers/userController")

app.post("/users",userController.createUser)
app.get("/users",userController.getAllUsers)
app.get("users/:id",userController.getUseById)
app.put("/user/:id",userController.updateUser)
app.delete("/users/:id",userController.deleteUser)

module.exports = router 