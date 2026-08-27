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
    findAll
    findById
}
const create = (user) =>{
    user.push(user)
    return user
}
module.exports ={
    createUser,
    getAllUsers
}

let id = 1
for(let i = 0;i< users.length; i++){
    if(users[i].id === id){
        return users[i]
    }
}
return undefined 