import bcrypt from 'bcrypt'
import User from '../models/user.model.js'
import { errorHandler } from '../utils/error.js';
export const signup=(async(req,res, next)=>{
   const {username, email, password }=req.body;
 
   if(!username || !email || !password){
   next(errorHandler(400, "All fields are required"))
   }
   const hashedPassword=bcrypt.hashSync(password, 10)
   const newuser=await User({username,email, password:hashedPassword })
   try {
    await newuser.save()
   res.status(200).json({message:'signup successfully'})
   } catch (error) {
    next(error)
   }
   
})