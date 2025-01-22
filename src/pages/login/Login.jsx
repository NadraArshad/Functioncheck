import React from 'react'
import "./login.css"
import {Link} from 'react-router-dom'

const Login = () => {
  return (
  <>

  <div className="main">
<div className="left"></div>
<div className="right">
<div className="form">
<h2>Log in to your account</h2>



<form>
    <label>Email Address *</label>
    <input type="text" />
    <label>Password *</label>
    <input type="password" /><br/>
    <button>Login</button>
    <p>New to Name?   <a href="/signup">Create an account</a></p>
</form>
</div>

</div>
</div>
  
  </>
  )
}

export default Login