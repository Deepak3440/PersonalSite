// Footer.js
import React from 'react';
// import InstagramIcon from "@material-ui/icons/Instagram";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import GitHubIcon from "@material-ui/icons/GitHub"; 
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { FaGithub,FaTwitter, FaInstagram,FaLinkedin, FaHome,FaPhone, FaEnvelope } from 'react-icons/fa'
import "./Footer.css";


function Footer() {
  return (
    <div className='footer'>
       <div className="left">
       
    

<div className="phone">
                    <h3 ><FaHome size={20} style={{color:"black",marginRight:"2rem"}}/>
                    Moradabad, Uttar Pradesh
                    </h3>
                </div>

                <div className="phone">
                    <h3 ><FaPhone size={20} style={{color:"black",marginRight:"2rem"}}/>
                    6307395107,7275147891
                    </h3>
                </div>
                <div className="email">
                    <h3>< FaEnvelope size={20} style={{color:"black",marginRight:"2rem"}}/>
                  thakurdeep3440@gmail.com
                    </h3>
                </div>
            </div>

      <div className='socialMedia'>
       
        
        <div className="socialIcons">
        <h3 className='About1'>About the Service</h3>
         <p className='fix'>Empowering you to overcome challenges and reach new height.<br/>Join us on the journey of learning and success.</p>
        <br/>
          <a href="https://www.instagram.com/_royal_chauhan_17/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://github.com/Deepak3440/" target="_blank" rel="noopener noreferrer">
            <FaGithub/> 
          </a>
          <a href="https://www.linkedin.com/in/deepak-singh-chauhan-14a7801ba/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <p className="footer-name">&copy; 2023 DeepakSingh</p>
    </div>
  );
}

export default Footer;
