
import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Footer from './components/Footer'
import Project from './pages/Project'
import { Flowbite } from 'flowbite-react';

const customTheme = {
  navbar: {
    base: 'bg-white text-black border-b-2', 
  },
  button: {
    color: {
      primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    },
  },
 
};
function App() {
  
  return (
    <div>
  <Flowbite theme={{ theme: customTheme }}></Flowbite>
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/project' element={<Project/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
    </div>
   
  );
}

  

export default App
