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
          <li><a href="../Landing pages/About.js" className='links'>About</a></li>
          <li><a href="../Landing pages/Project.js" className='links'>Project</a></li>
          <li><a href="../Landing pages/Contact.js" className='links'>Contact</a></li>
        </ul>
        </div>
    </nav>
  );
}

export default Navbar;
