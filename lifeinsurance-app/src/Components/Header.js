import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import profilePic from '../profile-image.jpg';
import '../styles/Header.css';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Life Insurance Logo" />
        </div>
        <ul className="nav-links">
          <li className='head-li'><Link to="/home">Home</Link></li>
          <li className='head-li'><Link to="/services">Services</Link></li>
          <li className='head-li'><Link to="/about">About Us</Link></li>
          <li className='head-li'><Link to="/contact">Contact</Link></li>
          <li className='head-li'><Link to="/login">Login / SignUp</Link></li>
        </ul>
        <div className="profile" onClick={toggleDropdown}>
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <div className={`dropdown ${dropdownOpen ? 'open' : ''}`}>
            <Link to="/profile">Profile</Link>
            <Link to="/login">Logout</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
