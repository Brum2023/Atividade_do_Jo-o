const userModel = require("../models/userModel")

const getAllUsers = (req,res)=>{
  
const users = userModel.findAll()

  return res.json(users)
}


module.exports ={
     createUser,
    getAllUsers
}

 const getUserById = (req,res) => {
 const id = Number(req.params.id)
 const {name} = req.body
 const newData = {
  name:name
 }
const updateUser = userModel.update(id,newData)
return res.json(updatedUser)
}
 
return undefined 
 
console.log(userModel.findById(1))

const getUsrById = (req,res) => {
 const id = req.params.id
 const user = userModel.findById(id)
 if(!user){
  return res.status(404).json({
    message:"Usuario não encontrado"
  })
 }
 return res.json(user)

}
const getUserById = (req,res) =>{
    const teste = req 
    console.log(teste)
}
if(!updatedUser) {
  return res.status(404).json({
    message:"Usuário não encontrado"
  })
}
return res.json(updatedUser)

if (data.name) {
  user.name = data.name
}
return user 

const deledUser = userModel.remove(id)
if(!deletedUser) {
  return res.status(404).json({
    message:"Usuario não encontrado"
  })
}
return res.json({
  message:"Usuario removido"
})
