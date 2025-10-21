import bcrypt from 'bcrypt'
import User from '../models/user.model.js'
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken'

export  const signup=(async(req,res, next)=>{
   const {username, email, password }=req.body;
 
   if(!username || !email || !password){
   next(errorHandler(400, "All fields are required"))
   }
   const hashedPassword=bcrypt.hashSync(password, 10)
   const newuser=new User({username,email, password:hashedPassword })
   try {
    await newuser.save()
   res.status(200).json({message:'signup successfully'})
   } catch (error) {
    next(error)
   }
   
})

export  const signin=(async(req,res,next)=>{
const {email, password}=req.body

if(!email || !password){
   return next(errorHandler(400, 'All fields must be required'))
}

try {
   const existingUser=await User.findOne({email})
if(!existingUser){
   return next(errorHandler(404,'User not found'))
}

const comparePassword=await bcrypt.compare(password, existingUser.password)
if(!comparePassword){
   return next(errorHandler(401,'password is invalid'))
}

const token=jwt.sign({id:existingUser._id},process.env.JWT_SECRET)
const {password:pass, ...rest}=existingUser._doc
return res.status(200)
       .cookie('access_token',token,{
httpOnly:true
       })
       .json(rest)
} catch (error) {
   next(error)
}

})



export const google=async(req,res, next)=>{
   console.log("Google Auth Body:", req.body); 
   const {email, name, googlePhotoUrl}=req.body;
   try {
      const user=await User.findOne({email});
   if(user){
      const token=jwt.sign({id:user._id},process.env.JWT_SECRET);
      const {password, ...rest}=user._doc;
      res.status(200).cookie('access_token', token,{
         httpOnly:true,
      }).json(rest);
   }else{
const generatedPassword=Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
const hashedPassword=bcrypt.hashSync(generatedPassword,10)
const newUser=new User({
   username: name.toLowerCase().split('').join('')+Math.random().toString(9).slice(-4),
   email,
   password:hashedPassword,
   profilePicture:googlePhotoUrl
})
await newUser.save()
const token=jwt.sign({id: newUser._id}, process.env.JWT_SECRET);
const {password, ...rest}=newUser._doc;
res
.status(200)
.cookie('access_token', token,{
   httpOnly:true,
})
.json(rest);

}
   } catch (error) {
      console.log("Google Auth Error:", error);
      next(error)
  res.status(500).json({ success: false, message: error.message });

   }
}