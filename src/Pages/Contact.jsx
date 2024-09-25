import React from 'react'
import './Contact.css'
import Footer from './Footer';
const Contact = () => {
  const contactDetails = {
    name: 'Manoj Karthik',
    contactNumber: '+91 7893478958',
    email: 'chmanojkarthik0@gmail.com',
    address: '9-398/1, Machilipatnam',
    pincode: '521001',
    linkedin: 'https://www.linkedin.com/in/chmanojkarthik/',
    github: 'https://github.com/manoj-karthik',
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

    <div className="contact-container">
      <h1 className="animated-text">Contact Details</h1>
      <div className="contact-info">
        <p><strong>Name:</strong> {contactDetails.name}</p>
        <p><strong>Contact Number:</strong> {contactDetails.contactNumber}</p>
        <p><strong>Email:</strong> {contactDetails.email}</p>
        <p><strong>Address:</strong> {contactDetails.address}</p>
        <p><strong>Pincode:</strong> {contactDetails.pincode}</p>
        <p><strong>LinkedIn:</strong> <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer">{contactDetails.linkedin}</a></p>
        <p><strong>GitHub:</strong> <a href={contactDetails.github} target="_blank" rel="noopener noreferrer">{contactDetails.github}</a></p>
      </div>
    </div>
    <Footer/>
</>
  )
}
export default Contact;