import { Router } from "express";
import express from 'express'
const router=express.Router()

router.get('/signup', (req, res)=>{
    console.log('api is working')
})

export default router;