import React, { useState } from 'react';
import './Resume.css'; // Import your CSS file
import Footer from './Footer';

const Resume = () => {
  const [showPreview] = useState(true); // Show preview initially

  const handleDownload = () => {
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/public/ManojKarthik.pdf'; // Update with your resume file path
      link.download = 'ManojKarthik.pdf'; // Name of the downloaded file
      link.click();
    }, 1000);
  };

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
        </div>
    <div className="resume-container">
      <h1>My Resume</h1>
    
      {showPreview && (
        <div className="resume-preview">
          <iframe
            src="/public/ManojKarthik.pdf" // Update with your resume file path
            title="Resume Preview"
            width="100%"
            height="500px"
          />
          <p>Resume is displayed above. Click the button below to download.</p>
        </div>
      )}

      <button className="download-button" onClick={handleDownload}>
        Download Resume
      </button>
    </div>
    <Footer/>
    </>
  );
};

export default Resume;
