import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
  type:String,
        required:true,
        unique:true
    },
    email:{
  type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
       
    },
    profilePicture:{
        type:String,
        default:"https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?semt=ais_hybrid&w=740&q=80"
    }
},{timestamps:true})

 const User=mongoose.model('User',userSchema)
 export default User;