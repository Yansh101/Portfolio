import React from "react";
import profileImage from '../Photos/Profile.jpg';  // Adjust path accordingly
import './Profile.css';

function Profile() {
  return (
    <section id="profile" className="profile">
      <div className="section__pic-container profile-image-container">
        <img src={profileImage} alt="Profile pic" />
      </div>
      <div className="section__text profile-info">
        <p className="section__text__p1 sectionp1">Hello, I'm</p>
        <h1 className="title">Priyanshu Joshi</h1>
        <p className="section__text__p2 sectionp2">Full Stack Developer</p>
        <div className="btn-container">
          <a href="/Priyanshu-Joshi CV.pdf" download className="btn btn-color-2 btncv">Download CV</a>
          <a href="#contact" className="btn btn-color-1 btncv">Contact Info</a>
        </div>
        <div className="socialcontainer" id="socials-container">
          <a href="https://www.linkedin.com/in/priyanshu-joshi-65b4371b8/" target="_blank" rel="noopener noreferrer">
            <img src="images/linkedin.png" alt="LinkedIn" className="icon" />
          </a>
          <a href="https://github.com/Yansh101" target="_blank" rel="noopener noreferrer">
            <img src="images/github.png" alt="Github" className="icon" /> 
          </a>
        </div>
      </div>
    </section>
  );
}

export default Profile;