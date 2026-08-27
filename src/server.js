const express = require("express")
const app = express()
const Port =2000;
app.get("/",(req,res)=> {
    response.send("Ola mundo")
})
app.get("/users",(re,res)=>{
    return res.json({
        id:1,
        name:HPLovecraft
})
})



app.listen(Port,() =>{
    console.log("Servidor roda em http://localhost:3000")
    

})