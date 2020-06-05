const express = require('express')

const app = new express


app.get("/",(req,res)=>{

res.send("Hola Mundo!")
})

app.listen(3000,()=>{
  console.log("Server listening at port 3000")
})
