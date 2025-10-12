import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router from '../api/routes/auth.routes.js'
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

app.use('/api/user', router)