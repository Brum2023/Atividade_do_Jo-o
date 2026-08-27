const express = require("express")
const userController = require("./controllers/userController")
const app = express()



app.use(express.json())

app.post("/users",(req,res)=>{
    console.log(req.body.name)
    res.send("Estamos testando")
})
app.get("/",(req,res)=>{
    response.send("Esta funcionando")

})
app.use(express.json)

app.get("/users",(req,res)=>{
    return res.json([
        {
        id:1,
        name:HPLovecraft
        }
    ])
}) 
 
app.post("/users",(req,res)=>{
   const {name} = req.body 
   const newUser = {
    id: Date.now(),  
    name:name
   }
 const createdUser = userModel.create(newUser)
 return res.status(201).json(createdUser)
})
app.post("/users",userController.createUser)
app.get("/user/:id",userController.getUserById)
app.put("/user/:id",userController.updateUser)
app.delete("/users/:id",userController.deleteUser)
app.use(express.json())
app.use("/users",useRoutes)
module.exports = app


