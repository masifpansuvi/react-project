import React from 'react'
import { FaFacebook, FaInstagram, FaSquareTwitter, FaPinterest, FaSistrix } from "react-icons/fa6";
import './TopBar.css'
import { NavLink } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className='TopBar'>
     <div className="icons">
        <p><FaFacebook /> </p>
        <p><FaInstagram/></p>
        <p><FaPinterest /></p>
        <p><FaSquareTwitter /></p>
     </div>
     
     <div className="blog-pages">
      <NavLink to='/' className='navlink'><p>Home</p></NavLink>
      <NavLink to='/about' className='navlink'><p>About</p></NavLink>
      <NavLink to='/contact' className='navlink'><p>Contact</p></NavLink>
      <NavLink to='/write' className='navlink'><p>Write</p></NavLink>
      <NavLink to='/logout' className='navlink'><p>Logout</p></NavLink>
     </div>
     <div className="blog-profile">
      <img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Profile image" />
      <FaSistrix className='search-icon'/>
     </div>
    </div>
  )
}

export default TopBar