import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-title">
            <span className='titleX'>Reat & Node</span>
            <span className='titleY'>Blog</span>
        </div>
        <div className="header-image">
            <img className='headerImage' src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        </div>
    </div>
  )
}

export default Header