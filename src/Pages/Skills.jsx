import React, { useState } from 'react';
import Footer from './Footer';
import './Skills.css'; // Import the CSS

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);  // To handle hover state
  const [selectedSkill, setSelectedSkill] = useState(null); // To handle click state

  // Skill ratings
  const skillRatings = {
    Java: 4,
    "Advance Java": 4,
    Servlets: 4,
    JDBC: 4,
    Spring: 4,
    "Spring Boot": 4,
    Hibernate: 4,
    Microservices: 3,
    MYSQL: 5,
    ORACLE: 5,
    HTML: 5,
    CSS: 4,
    Bootstrap: 4,
    Javascript: 4,
    "React.js": 4
  };

  // Skill descriptions
  const skillDescriptions = {
    Java: "Java is a high-level, class-based, object-oriented programming language.",
    "Advance Java": "Advanced Java covers more advanced topics such as JDBC, Servlets, JSP, etc.",
    Servlets: "Java Servlets are used to create web applications.",
    JDBC: "JDBC is an API for connecting and executing queries on a database.",
    Spring: "Spring is a Java framework for building enterprise applications.",
    "Spring Boot": "Spring Boot is a project that simplifies Spring application development.",
    Hibernate: "Hibernate is an ORM framework for mapping Java objects to database tables.",
    Microservices: "Microservices is an architectural style that structures an application as a collection of services.",
    MYSQL: "MySQL is a widely-used open-source relational database management system.",
    ORACLE: "Oracle Database is a multi-model database management system.",
    HTML: "HTML stands for Hyper Text Markup Language, used to structure web pages.",
    CSS: "CSS is used to style HTML content in web development.",
    Bootstrap: "Bootstrap is a popular framework for building responsive web applications.",
    Javascript: "JavaScript is a programming language for web development to make pages interactive.",
    "React.js": "React.js is a JavaScript library for building user interfaces."
  };

  const getStars = (experience) => {
    const totalStars = 5;
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      if (i <= experience) {
        stars.push(<span key={i} className="filled-star">★</span>); // Filled star
      } else {
        stars.push(<span key={i} className="empty-star">☆</span>); // Empty star
      }
    }
    return stars;
  };

  // Handle skill click to show the full description
  const handleSkillClick = (skill) => {
    setSelectedSkill(skill === selectedSkill ? null : skill); // Toggle description display
  };

  return (
    <>
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
              <div className="stars">{getStars(skillRatings[skill])}</div> {/* Use skill-specific rating */}
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
      <Footer />
    </>
  );
}

export default Skills;
