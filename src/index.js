const express=require("express")
const mongoose=require("mongoose")
const multer =require('multer')
const route=require("./route/route")
const app=express()

mongoose.set('strictQuery', false)

app.use(express.json())

app.use(multer().any())

mongoose.connect("mongodb+srv://prageet:4zGItzVIrinYLkAI@myproject.kthcntq.mongodb.net/shoppingCart",{ useNewUrlParser:true})
.then(()=>{console.log("MongoDB is connected")})
.catch(err=>console.log(err))

app.use("/",route)
app.listen(3000,()=>{console.log("Express app running on port 3000")})
