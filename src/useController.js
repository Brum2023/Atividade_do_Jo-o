const userModel = require("../models/userModel")

const getAllUsers = (req,res)=>{
  
const users = userModel.findAll()

  return res.json(users)
}


module.exports ={
     createUser,
    getAllUsers
}

 const findById = (id) => {
 return users.find(user => user.id === id)
}
 
return undefined 
 
console.log(userModel.findById(1))

const getUsrById = (req,res) => {
 const id = 1
 const user = userModel.findById(id)
 return res.json(user)

}
const getUserById = (req,res) =>{
    const teste = req 
    console.log(teste)
}