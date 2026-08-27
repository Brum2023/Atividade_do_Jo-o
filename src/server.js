const express = require("express")
const app = express()

app.get("/",(req,res)=> {
    response.send("Ola mundo")
})
app.get("/users",(re,res)=>{
    return res.json({
        id:1,
        name:HPLovecraft
})
})



app.listen(2000,() =>{
    console.log("Servidor roda em http://localhost:3000")
    

})