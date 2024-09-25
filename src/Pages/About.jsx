import React from 'react';
import './About.css'; // Import CSS for styling
import Footer from './Footer';

const About = () => {
  return (
    <>
      <div className="home-container">
        <div className="left-section">
          <h1>Welcome to My Portfolio</h1>
          <br />
          <p>
            Hi, I’m Manoj Karthik, a Full Stack Developer with experience in Java, Spring Boot, React, and more.
            This portfolio showcases my skills and projects.
          </p>
          <div className="links-section">
            {/* <button className="resume-link" onClick={handleDownload}>RESUME</button>
          <button className="skills-link" onClick={() => navigate('/skills')}>SKILLS</button> */}
          </div>
        </div>

        <div className="right-section">
          <img src="/public/logo.png" alt="Profile" className="profile-image" />
        </div>
        <div className="about-container">
          <h1 className="about-title">About Me</h1>
          <p className="about-text">
            As a dedicated Full Stack Java Developer, I specialize in designing and building scalable, high-performance web applications. My expertise spans the entire development lifecycle, from crafting dynamic user interfaces with modern frameworks like React to developing robust back-end systems using Java, Spring Boot, and microservices architecture.
            <br /><br />
            I am passionate about leveraging technology to solve complex problems and drive innovation. My commitment to continuous learning and staying current with industry trends ensures that I bring fresh ideas and effective solutions to every project.
            <br /><br />
            I am currently seeking new opportunities where I can apply my skills and contribute to exciting projects. If you are interested in discussing how I can add value to your team or project, please feel free to connect with me.
          </p>
        </div>
      </div><br /><br /><br /><br /><br /><br />
      <Footer />
    </>
  );
};

export default About;
