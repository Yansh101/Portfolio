import React from "react";
import "./about.css";

function About() {
  return (
    <div id="about">
      <div className="spacer"></div>
      <p className="section__text__p1 sectionp1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="about-container">
          <div className="detail-container">
            <h3>Education</h3>
            <p>
              Bachelor in Electronics, Communication, and Information
              Engineering
            </p>
          </div>
          <div className="textcontainer">
            {/* <h5>Hello, I'm Priyanshu Joshi</h5> */}
            <p>
              I'm a dedicated software developer with a passion for innovation
              and creating effective solutions. I'm known for my reliability and
              strong teamwork skills, thriving both independently and in
              collaborative environments. I adapt quickly to new situations and
              have a proven ability to learn rapidly. I'm eager to gain
              practical experience and contribute to forward-thinking projects,
              confident in my capability to swiftly acquire new skills and make
              a meaningful impact on your team.
            </p>
          </div>
        </div>
      </div>
      <div id="skills">
        <h1 className="section-title">My Skills</h1>
        <div className="skills-container">
          <div className="skill-card">
            <img src="images/Logo/html.png" alt="HTML" />
            <span className="alt-text">HTML</span>
          </div>
          <div className="skill-card">
            <img src="images/Logo/css.png" alt="CSS" />
            <span className="alt-text">CSS</span>
          </div>
          <div className="skill-card">
            <img src="images/Logo/javascript.png" alt="JavaScript" />
            <span className="alt-text">JavaScript</span>
          </div>
          <div className="skill-card">
            <img src="images/Logo/postgres.png" alt="Postgres" />
            <span className="alt-text">Postgres</span>
          </div>
          <div className="skill-card">
            <img src="images/Logo/bootstrap.png" alt="Bootstrap" />
            <span className="alt-text">Bootstrap</span>
          </div>
          <div className="skill-card">
            <img src="images/Logo/flexbox.png" alt="Flexbox" />
            <span className="alt-text">Flexbox</span>
          </div>
          <div className="skill-card">
            <img src="images/Logo/arduino.png" alt="Arduino" />
            <span className="alt-text">Arduino</span>
          </div>
          <div className="skill-card">
            <img src="images/Logo/latex.png" alt="LaTeX" />
            <span className="alt-text">LaTeX</span>
          </div>
          <div className="skill-card">
            <img src="images/Logo/react.png" alt="React" />
            <span className="alt-text">React</span>
          </div>
          <div className="skill-card">
            <img src="images/Logo/express.png" alt="Express" />
            <span className="alt-text">Express</span>
          </div>
          <div className="skill-card">
            <img src="images/Logo/github.png" alt="Github" />
            <span className="alt-text">Github</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
