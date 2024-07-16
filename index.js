const express=require('express')

const app = express()
const PORT = 3000

app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.post('/home',(req,res)=>{
    res.send("Welcome to home")
})
app.patch('/patch',(req,res)=>{
    res.send("This is patch requst")
})

app.listen(PORT, ()=>{
    console.log("Server Started");
})