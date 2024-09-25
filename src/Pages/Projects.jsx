import React, { useEffect, useState } from 'react';
import './Projects.css';
import Footer from './Footer';

const Projects = () => {
  // const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   // Add a slight delay before starting the animation
  //   const timer = setTimeout(() => {
  //     setIsLoaded(true);
  //   }, 200); // Adjust the delay time if needed
  //   return () => clearTimeout(timer);
  // }, []);

  const projects = [
    {
      title: 'Contact Form',
      language: 'JavaScript',
      framework: 'React & Spring Boot',
      description: 'A contact form with validation and backend integration.',
      // bannerImage: '/public/contactform.jpg',
      githubLink: "https://github.com/manoj-karthik"
    },
    {
      title: 'To-Do List App',
      language: 'JavaScript',
      framework: 'React & Spring Boot',
      description: 'A simple to-do list application with full CRUD functionality.',
      // bannerImage: '/public/todolist.jpg',
      githubLink: "https://github.com/manoj-karthik"
    },
    {
      title: 'Blogging Platform',
      language: 'JavaScript',
      framework: 'React & Spring Boot',
      description: 'A platform for creating, editing, and managing blog posts.',
      // bannerImage: '/public/blogging.jpg',
      githubLink: "https://github.com/manoj-karthik"
    },
    {
      title: 'Portfolio',
      language: 'JavaScript',
      framework: 'React.js',
      description: 'A personal portfolio to showcase skills and projects.',
      // bannerImage: '/public/portfolio.jpg',
      githubLink: "https://github.com/manoj-karthik"
    },
    {
      title: 'Bank Of Baroda',
      language: 'Java',
      framework: 'Spring Boot',
      description: 'Banking Application platform for Add Account, Delete Account, Money Transfer, Deposit & Withdrawal.',
      // bannerImage: '/public/portfolio.jpg',
      githubLink: "https://github.com/manoj-karthik"
    },
    {
      title: 'Student Management',
      language: 'Java',
      framework: 'Spring Boot',
      description: 'Student Management System with CRUD opperations.',
      // bannerImage: '/public/portfolio.jpg',
      githubLink: "https://github.com/manoj-karthik"
    },
  ];

  const handleButtonClick = (link) => {
    window.open(link, "_blank"); // Open GitHub link in a new tab
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
        </div>

        <div className="right-section">
          <img src="/public/logo.png" alt="Profile" className="profile-image"  />
        </div>
      </div>

      <div className="projects-section">
        {projects.map((project, index) => (
         
             <div className="project-card animated-card"
            key={index}>
          
            {/* Display individual banner for each project */}
            {/* <div className="project-banner">
              <img src={project.bannerImage} alt={`${project.title} Banner`} className="banner-image" loading="lazy" />
            </div> */}
            <h2>{project.title}</h2>
            <p><strong>Language Used:</strong> {project.language}</p><br />
            <p><strong>Framework Used:</strong> {project.framework}</p><br />
            <p><strong>Description:</strong> {project.description}</p><br />
            <button 
              className="read-more-button" 
              onClick={() => handleButtonClick(project.githubLink)}
            >
              View on GitHub
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Projects;
