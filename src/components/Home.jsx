import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Section from './section'
import './main.css';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <>
   <Navbar/>
   <Hero/>
   <Section/>
   {/* <h1>User Dashboard</h1>
   <Link to="/disposal">Disposal</Link>
   <Link to="/donate">Donate</Link>
   <Link to="/incentives">Incentives</Link>
   <Link to="/tracking">Tracking</Link> */}
   </>
  )
}

export default Home