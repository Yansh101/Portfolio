import React from "react";
import "./Footer.css";

const currentdate = new Date();
const year = currentdate.getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div>
        <ul className="nav-links">
          <li>
            <a href="#about" className="links">
              About
            </a>
          </li>
          <li>
            <a href="#project" className="links">
              Project
            </a>
          </li>
          <li>
            <a href="#contact" className="links">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="spacer"></div>
      <div className="text">
        &copy; {year} Priyanshu Joshi. All rights reserved.
      </div>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/priyanshu-joshi-65b4371b8/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/Yansh101"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
