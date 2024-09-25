import React from 'react';
import './Education.css'; // You can style the component in a separate CSS file

const Education = () => {
  return (
    <div className="education-container">
      <h1 className="education-heading">Education</h1>

      {/* 10th Section */}
      <div className="education-section">
        <h2>10th Grade</h2>
        <p><strong>School:</strong> Gowtham Model School</p><br />
        <p><strong>Year of Passing:</strong> 2013</p><br />
        <p><strong>Percentage:</strong> 70%</p><br />
      </div>

      {/* Inter Section */}
      <div className="education-section">
        <h2>Intermediate</h2>
        <p><strong>College:</strong> Sri Harsha Junior College</p><br />
        <p><strong>Year of Passing:</strong> 2015</p><br />
        <p><strong>Percentage:</strong> 47%</p><br />
      </div>

      {/* Degree Section */}
      <div className="education-section">
        <h2>Degree</h2>
        <p><strong>University:</strong> Krishna University</p><br />
        <p><strong>Course:</strong> Bachelor of Commerce (B.com) in Computes </p><br />
        <p><strong>Year of Passing:</strong> 2020</p><br />
        <p><strong>CGPA:</strong> 6.0/10</p><br />
      </div>

      {/* Certificates Section */}
      <div className="education-section certificates-section">
        <h2>Certificates</h2>

        {/* Certificate 1 */}
        <div className="certificate">
          <h3>Institute Name: Sathya Technologies</h3><br />
          <p><strong>Course Name:</strong> Java Full Stack </p><br />
          <p><strong>Duration:</strong> 7 Months (Aug 2023 - Feb 2024)</p><br />
        </div>

        {/* Certificate 2
        <div className="certificate">
          <h3>Institute Name: DEF Academy</h3>
          <p><strong>Course Name:</strong> Data Structures & Algorithms</p>
          <p><strong>Duration:</strong> 3 Months (Sep 2019 - Dec 2019)</p>
        </div> */}

        {/* Add more certificates as needed */}
      </div>
    </div>
  );
};

export default Education;
