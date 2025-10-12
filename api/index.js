import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const app=express()

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("mongodb is connected")
}).catch((error)=>{
    console.log("failed to connected mongodb:",error)
})


app.listen(3000,()=>{
    console.log('app is running on 3000')
})