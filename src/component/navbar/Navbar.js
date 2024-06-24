import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="container">
        <div className="logo">
          Priyanshu Joshi
        </div>
        <div>
        <ul className="nav-links">
          <li><a href="#about" className='links'>About</a></li>
          <li><a href="#project" className='links'>Project</a></li>
          <li><a href="#contact" className='links'>Contact</a></li>
        </ul>
        </div>
    </nav>
  );
}

export default Navbar;
