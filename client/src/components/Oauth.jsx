import React from 'react'
import { Button } from 'flowbite-react'
import { AiFillGoogleCircle } from 'react-icons/ai'
import {GoogleAuthProvider, signInWithPopup, getAuth, updateCurrentUser} from 'firebase/auth'
import {app} from '../firebase'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice';




const Oauth = () => {
  const auth=getAuth(app)
  const dispatch = useDispatch() 
    const handleGoogleClick=async()=>{
        const provider=new GoogleAuthProvider()
        provider.setCustomParameters({prompt:'select_account'})
        try {
          const resultsFromGoogle=await signInWithPopup(auth,provider)
          const res=await fetch('/api/user/google',{
            method: 'POST',
           headers: {"Content-Type": 'application/json'},
           body: JSON.stringify({
            name: resultsFromGoogle.user.displayName,
            email: resultsFromGoogle.user.email,
            profilePicture : resultsFromGoogle.user.profilePicture
           })
          })
          const data = await res.json();
console.log("fetch google data",data);
dispatch(signInSuccess(data));

        } catch (error) {
          console.log(error)
        }
      }
  return (
    <Button 
      type="button" 
      gradientDuoTone="pinkToOrange" 
      outline
      className="flex items-center gap-2"
      onClick={handleGoogleClick}
    >
      <AiFillGoogleCircle className="w-5 h-5 mr-2" />
      Continue with Google
    </Button>
  )
}

export default Oauth
