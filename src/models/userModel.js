
    

const users = require("../data/users")
const findAll = () =>{
    return users 
}

const create = (user) =>{
    user.push(user)
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
module.exports = {
    create,
    findAll,
    findById,
    update,
    remove 
}