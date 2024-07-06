import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#about", text: "About" },
    { href: "#project", text: "Project" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <nav className="container">
      <div className="logo">Priyanshu Joshi</div>
      <ul className={`desktop-nav ${isMenuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="links">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isMenuOpen && (
        <ul className="mobile-nav">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={toggleMenu}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
