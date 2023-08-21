import React from 'react';
import './About.css';
import Pic from "../assets/deep1.jpg";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-image">
          <img src={Pic} alt="About Us" />
        </div>
        <div className="about-text">
          <h1>About Us</h1>
          <p>
          Hello, I'm Deepak Singh Chauhan, a highly motivated individual with a passion for computer science and technology. I am currently pursuing my<b> B.Tech in Computer Science Engineering from Moradabad Institute of Technology (AKTU-Lucknow)</b>, with a batch year of 2020-2024.<p/>
          <h2>Begin Your Learning Odyssey</h2>
          <p>
          Apart from my academic achievements, I have actively participated in various courses and certifications to enhance my skills. I have completed courses in<b> Full Stack Development,Java,Machine Learning</b> as well as improving my soft skills and personality development. I have also acquired knowledge in the field of Data Science.
          </p>
          <p>
          I have been a member of the <b>Member of College Alumni Association</b>,Managed the Alumni meets for different session, where I honed my communication and teamwork abilities.
          </p>
          
          
          
           
          
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
