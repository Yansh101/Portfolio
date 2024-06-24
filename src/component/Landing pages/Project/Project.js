import React from "react";
import "./project.css";

function Project() {
  const projects = [
    {
      title: "Waste Segregation Robot",
      description:
        "An automated waste segregation system was developed using Raspberry Pi and VGG16 CNN model to classify waste into paper, plastic, and metal. An IR sensor detects waste presence, a Pi Camera captures an image, and the VGG16 model processes and categorizes the waste, which is then sorted into respective bins by a servo motor. An excess bin is available when the primary bin is full, indicated by an LCD display.",
      gitHubLink: "https://github.com/Yansh101/Waste-Segregation-Robot",
    },
    {
      title: "Fire Extinguisher Robot",
      description:
        "An automated robot was developed that detects fire using flame sensor and extinguish it with the help of water tank. When two out of three sensors detect a fire, the robot halts, activates a water pump with a servo-controlled nozzle to extinguish the fire, and alerts low water levels with a buzzer for refilling.",
      gitHubLink: "https://github.com/Yansh101/Fire-Extinguisher-Robot",
    },
    {
      title: "Portfolio",
      description:
        "Made a portfolio to show off the user's journey. It's easy to use, letting people check out all the stuff the user has done. Everything's picked carefully to show off their talents and story.",
      demoLink: "#",
    },
  ];

  return (
    <div id="project">
      <div className="spacer"></div>
      <p className="section__text__p1 sectionp1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <div className="content">
              <h2 className="heading">{project.title}</h2>
              <p className="description">{project.description}</p>
              <div className="buttons">
                {project.gitHubLink && (
                  <a
                    href={project.gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btnproject"
                  >
                    GitHub
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btnproject"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact section */}
      <div id="contact" className="contact-section">
        <h1>Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img src="images/email.png" className="contact-icon" alt="Email" />
            <p>
              <a href="mailto:priyanshu1.joshi@gmail.com" className="mail">
                priyanshu1.joshi@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src="images/phone.png"
              className="icon contact-icon"
              alt="Phone"
            />
            <p>
              <a href="tel:+977 9860569464" className="mail">
                +977 9860569464
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
