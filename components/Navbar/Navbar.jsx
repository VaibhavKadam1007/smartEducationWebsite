import React from 'react'
import './Navbar.css';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navcontainer">
         <span className="logo">lambok</span>
         <div className="navitems">
            <button className="navbtn">Register</button>
            <button className="navbtn">Login</button>
         </div>
      </div>
    </div>
  )
}

export default Navbar
