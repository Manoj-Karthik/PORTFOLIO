import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // CSS in a separate file

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/public/karthikch.png" alt="Logo" className="logo-image" />
      </div>
      <h3 className='logo_name'> Manoj Karthik </h3>
      <ul className="navbar-links">
        <li><Link to="/home" className="nav-link">HOME</Link></li>
        <li><Link to="/about" className="nav-link">ABOUT</Link></li>
        <li><Link to="/education" className='nav-link'>EDUCATION</Link></li>
        <li><Link to="/projects" className="nav-link">PROJECTS</Link></li>
        <li><Link to="/skills" className="nav-link">SKILLS</Link></li>
        <li><Link to="/resume" className="nav-link">RESUME</Link></li>
        <li><Link to="/contact" className="nav-link">CONTACT</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
