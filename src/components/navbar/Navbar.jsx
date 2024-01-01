import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons';
import './navbar.css';
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='fd__navbar'>
      <div className='fd__navbar-links'>
        <div className='fd__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='fd__navbar-links_container'>
          <p><a href="#home">Home</a></p>
          <p><a href="#whatFutureDrive">What is FD?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className='fd__navbar-sign'>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
    </div>
  )
}

export default Navbar