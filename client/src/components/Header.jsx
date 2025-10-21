import React from 'react'
import {Avatar, Button,  Dropdown,  Navbar, NavbarCollapse, NavbarLink, NavbarToggle, TextInput} from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { BsSearchHeart } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import {useSelector} from 'react-redux'

const Header = () => {
    const location=useLocation()
    const path=location.pathname;
    const {currentUser} = useSelector(state=>state.user)
    console.log(currentUser)
  return (
    <Navbar className='border-b-2  dark:text-white h-20 pt-6'>
<Link to='/' className='self-center whitespace-nowrap text-[20px] sm:text-[25px] font-semibold dark:text-white'>
<span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-lg text-white'>Web's Tech</span>
Blog
</Link>
<form>
  <TextInput
  type='text'
  placeholder='Search...'
  rightIcon={BsSearchHeart}
  className='hidden lg:inline text-[20px] sm:text-[25px]'
  />
</form>
<Button className='bg-white  lg:hidden' color='gray' >
    <BsSearchHeart/>
</Button>

<div className='flex gap-2 md:order-2'>
    <Button className=' hidden sm:inline' color='gray' pill >
    <FaMoon/>
</Button>
{currentUser ? (
   
   
<Dropdown
    arrowIcon={false}
    inline
    label={
        <Avatar
        key={currentUser.profilePicture}  // ← add this
        alt='userProfile'
        img={currentUser.profilePicture}
        rounded
      />
    }
>
    <Dropdown.Header>
        <span className='block text-sm'>@{currentUser.username}</span>
        <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
    </Dropdown.Header>

    {/* Using "as" prop to make it a Link */}
    <Dropdown.Item as={Link} to="/dashboard?tab=profile">
        Profile
    </Dropdown.Item>

    <Dropdown.Divider/>

    <Dropdown.Item >
        Sign out
    </Dropdown.Item>
</Dropdown>

):(
<Link to='/signin'>
<Button gradientDuoTone='purpleToBlue' outline className='text-[15px]'>
    SignIn
</Button>
</Link>
)}

<NavbarToggle/>
</div>
<NavbarCollapse>
    <NavbarLink active={path==='/'} as={'div'}>
        <Link to='/' className='text-[15px]'>Home</Link>
    </NavbarLink>
     <NavbarLink active={path==='/about'} as={'div'}>
        <Link to='/about' className='text-[15px]'>About</Link>
    </NavbarLink>
     <NavbarLink active={path==='/project'} as={'div'}>
        <Link to='/project' className='text-[15px]'>Projects</Link>
    </NavbarLink>

</NavbarCollapse>
    </Navbar>
  )
}

export default Header