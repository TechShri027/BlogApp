import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router from '../api/routes/auth.routes.js'
import cors from 'cors'
dotenv.config()
const app=express()
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json())
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

app.use((err, req, res, next)=>{
    const statusCode=err.statusCode || 500
    const message=err.message || 'Internal server error'
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})