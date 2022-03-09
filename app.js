const express = require('express')
const res = require('express/lib/response')
const app = express()

app.get("/",(req,res,next)=>{
    res.send("hello world")
})






app.listen(3000)