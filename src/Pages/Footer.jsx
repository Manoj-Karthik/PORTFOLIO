import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
    <div className="footer">
  <div className="contact-info">
    <h3>Contact</h3>
    <p>Name: Manoj Karthik</p>
    <p>Designation: Java Full Stack Developer</p>
    <p>Email: chmanojkarthik0@example.com</p>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/chmanojkarthik/" target='_blank' > Manoj Karthik</a></p>
    <p>GitHub: <a href="https://github.com/manoj-karthik" target='_blank'>Your GitHub</a></p>
  </div>

  <div className="address-info">
    <h3>Address</h3>
    <p>Door Number: 9-398/1, Machilipatnam.</p>
    <p>District: Krishna District.</p>
    <p>City: Machilipoatnam.</p>
    <p>Street: Housing Board Colony. </p>
    <p>Pincode: 521001</p>
  </div>
</div>

<div className="copyright">&copy; MK-PORTFOLIO-2024</div>
    </>
  )
}

export default Footer;