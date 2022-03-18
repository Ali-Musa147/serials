const express = require('express')
const app = express()
let PORT = process.env.PORT ||3000

app.get("/",(req,res,next)=>{
    res.send(`hello woerrldyu8 the env port is ${PORT}`)
})






app.listen(PORT)