import React from 'react'
import './signup.css'
import {Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>

    <div className="main">
  <div className="left"></div>
  <div className="right">
  <div className="form">
  <h2>SignUp to Name</h2>
  
  
  
  <form>
  <label>Name *</label>
  <input type="text" />
      <label>Email Address *</label>
      <input type="text" />
      <label>Password *</label>
      <input type="password" /><br/>
      <button>Signup</button>
      <p>Already have an account?</p>
  </form>
  </div>
  
  </div>
  </div>
    
    </>
  )
}

export default Signup