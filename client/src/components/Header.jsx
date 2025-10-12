import React from 'react'
import {Button, Navbar, NavbarCollapse, NavbarLink, NavbarToggle, TextInput} from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { BsSearchHeart } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

const Header = () => {
    const location=useLocation()
    const path=location.pathname;
  return (
    <Navbar className='border-b-2  dark:text-white h-20 pt-6'>
<Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
<span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-lg text-white'>Web's Tech</span>
Blog
</Link>
<form>
  <TextInput
  type='text'
  placeholder='Search...'
  rightIcon={BsSearchHeart}
  className='hidden lg:inline'
  />
</form>
<Button className='bg-white  lg:hidden' color='gray' >
    <BsSearchHeart/>
</Button>

<div className='flex gap-2 md:order-2'>
    <Button className=' hidden sm:inline' color='gray' pill >
    <FaMoon/>
</Button>
<Link to='/signin'>
<Button gradientDuoTone='purpleToBlue' outline>
    SignIn
</Button>
</Link>
<NavbarToggle/>
</div>
<NavbarCollapse>
    <NavbarLink active={path==='/'} as={'div'}>
        <Link to='/'>Home</Link>
    </NavbarLink>
     <NavbarLink active={path==='/about'} as={'div'}>
        <Link to='/about'>About</Link>
    </NavbarLink>
     <NavbarLink active={path==='/project'} as={'div'}>
        <Link to='/project'>Projects</Link>
    </NavbarLink>

</NavbarCollapse>
    </Navbar>
  )
}

export default Header