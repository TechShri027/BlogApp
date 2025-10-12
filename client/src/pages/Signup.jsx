import { TextInput } from 'flowbite-react'
import React from 'react'
import { Label, Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
  <div className='min-h-screen mt-20 '>
 <div className='flex flex-col md:flex-row  gap-x-16 p-3 max-w-7xl mx-auto items-center'>
{/* left div */}
<div className='flex-1 text-center md:text-left'>
<Link to='/' className='font-bold dark:text-white text-4xl '>
<span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-lg text-white'>Web's Tech</span>
Blog
</Link>
<p className='text-xl mt-8'>Welcome to the Demo Blog Please Signup to Explore More Blogs and features..</p>
</div>

{/* right div */}
<div className='flex-1 mt-20 w-full md:w-[400px] text-left'>
<form className='flex flex-col gap-7'>
  <div>
    <Label value='Your username' className='text-[15px]'></Label>
    <TextInput 
     type='text'
     placeholder='Username'
     id='username'
    /> 
  </div>
   <div>
    <Label value='Your Email' className='text-[15px]'></Label>
    <TextInput 
     type='email'
     placeholder='name@gmail.com'
     id='email'
    /> 
  </div>
   <div>
    <Label value='Your password' className='text-[15px]'></Label>
    <TextInput 
     type='password'
     placeholder='Password'
     id='password'
    /> 
  </div>
  <Button gradientDuoTone='purpleToPink' className='h-12 text-xl'>Sign Up</Button>
</form>
<div className='flex gap-2 text-[20px] mt-5'>
<span>have an account?</span>
<Link to='/signin' className='text-blue-400'>Sign In</Link>
</div>

</div>

</div>
  </div>


   
  )
}

export default Signup