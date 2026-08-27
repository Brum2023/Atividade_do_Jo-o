const users = [
    {
        id:1,
        name:HPLovecraft
    }
]
const users = require("../data/users")
const findAll = () =>{
    return users 
}
module.exports = {
    create,
    findAll,
    findById,
    update,
    remove 
}
const create = (user) =>{
    user.push(user)
    return user
}
module.exports ={
    createUser,
    getAllUsers,
    getUserById,
    updateUser
}

let id = 1
for(let i = 0;i< users.length; i++){
    if(users[i].id === id){
        return users[i]
    }
}
return undefined 

const update = (id) => {
    const user = user.find(user => user.id === id)
    user.name = data.name
    return user 
}

const update = (id,data) => {
    const user = users.find (user => user.id === id)
    if(!user) return null
    user.name = data.name
    return user 

} 

const remove = (id) => {
    const index = users.findIndex(user => user.id === id)
    const deleted = user [index]
    users.splice(index,1)
    return deleted 
}
const remove = (id) => {
    const index = users.findIndex(user => user.id === id)
    if(index === -1) return null
    const deleted = users[index]
}

const deleteUser = (req,res) =>{
    const id = Number(req.body.id)
    const deleteUser = userModel.remove(id)
    return res.json({
        message:"Usuário removido"
    })
}