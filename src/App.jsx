import React from 'react'
import Navbar from './components/Navbar'
import './index.css';
import Hero from './components/Hero';
import Section from './components/section';
import Login from './pages/login/login';
import Signup from './pages/signup/Signup';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Donate from './pages/User/Donate';
import Tracking from './pages/User/Tracking';
import Incentives from './pages/User/Incentives';
import Disposal from './pages/User/Disposal';


const App = () => {
  return (
   
    <>
     {/* <Donate/> */}
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/donate' element={<Donate/>}/>
    <Route path='/tracking' element={<Tracking/>}/>
    <Route path='/disposal' element={<Disposal/>}/>
    <Route path='/incentives' element={<Incentives/>}/>
   </Routes>
    </>
  )
}

export default App