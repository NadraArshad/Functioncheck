import React from 'react'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="nav">
        <div className="logo"><h1>Logo</h1>
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Contact Us</h3>
        </div>
       
        <div className="btn">
        <button onClick={() => navigate("/login")}>Login</button>
        </div>
    </div>
    </>
  )
}

export default Navbar