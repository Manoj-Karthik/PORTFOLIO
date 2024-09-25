import React, { useState } from 'react';
import './LandingPage.css'; // Separate CSS file
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const LandingPage = () => {
  const navigate = useNavigate();
  const [hoveredSkill, setHoveredSkill] = useState(null);  // To handle hover state
  const [selectedSkill, setSelectedSkill] = useState(null); // To handle click state

  const skillRatings = {
    Java: 4,
    "Advance Java": 4,
    Servlets: 4,
    JDBC: 4,
    Spring: 4,
  };

  const skillDescriptions = {
    Java: "Java is a high-level, class-based, object-oriented programming language.",
    "Advance Java": "Advanced Java covers more advanced topics such as JDBC, Servlets, JSP, etc.",
    Servlets: "Java Servlets are used to create web applications.",
    JDBC: "JDBC is an API for connecting and executing queries on a database.",
    Spring: "Spring is a Java framework for building enterprise applications.",
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/public/ManojKarthik.pdf';
    link.download = 'ManojKarthik_Resume.pdf';
    link.click();
  };

  const getStars = (experience) => {
    const totalStars = 5;
    let stars = [];
    for (let i = 1; i <= totalStars; i++) {
      if (i <= experience) {
        stars.push(<span key={i} className="filled-star">★</span>); // Filled star
      } else {
        stars.push(<span key={i} className="empty-star">☆</span>); // Empty star
      }
    }
    return stars;
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill === selectedSkill ? null : skill); // Toggle description display
  };

  const handleReadMore = () => {
    navigate('/skills'); // Navigate to the skills page
  };

  return (
    <>
      <div className="home-container">
        <div className="left-section">
          <h1>Welcome to My Portfolio</h1>
          <br /><br />
          <p>
            Hi, I’m Manoj Karthik, a Full Stack Developer with experience in Java, Spring Boot, React, and more.
            This portfolio showcases my skills and projects.
          </p>
          <div className="links-section">
            <button className="resume-link" onClick={handleDownload}>RESUME</button>
            <button className="skills-link" onClick={() => navigate('/skills')}>SKILLS</button>
          </div>
        </div>

        <div className="right-section">
          <img src="/public/logo.png" alt="Profile" className="profile-image" />
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <h2>My Skills</h2>
          <div className="skills-grid">
            {Object.keys(skillDescriptions).map((skill) => (
              <div
                key={skill}
                className={`skill-card ${hoveredSkill === skill ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                onClick={() => handleSkillClick(skill)}
              >
                <h3>{skill}</h3>
                <div className="stars">{getStars(skillRatings[skill])}</div>
                {hoveredSkill === skill && (
                  <div className="hover-description">
                    {skillDescriptions[skill]}
                  </div>
                )}
                {selectedSkill === skill && (
                  <div className="full-description">
                    {skillDescriptions[skill]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Read More Button */}
        <div className="read-more-section">
          <button className="read-more-btn" onClick={handleReadMore}>Read More...</button>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default LandingPage;
