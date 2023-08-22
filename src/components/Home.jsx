import React from 'react';
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import EmailIcon from "@material-ui/icons/Email";
// import GitHubIcon from "@material-ui/icons/GitHub";
import { FaGithub, FaEnvelope,FaLinkedin } from 'react-icons/fa'
import  DownLoad from './DownLoad' ;
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
        <div className='about'>
            <h3>Hello, I'm Deepak Singh Chauhan</h3>
            <div className='prompt'>
                <p className='text'> A Software Developer with an insatiable appetite for learning and an innate drive for innovation</p>
                <a href="https://www.linkedin.com/in/deepak-singh-chauhan-14a7801ba/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
       
        <a href="mailto:thakurdeep3440@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope/>
          </a>
                <a href="https://github.com/Deepak3440/" target="_blank" rel="noopener noreferrer">
          <FaGithub /> 
        </a>


            </div>


        </div>
        <div className='skills'>
            <h2>Skills</h2>
            <ol className='list'>
                <li className='item'>
                    <h4>Front-End</h4>
                    <span> HTML,CSS,Bootstrap,Tailwind,
                        ReactJs</span>

                </li>
                <li className='item'>
                    <h4>Back-End</h4>
                    <span>NodeJs(Basic),ExpressJs,MySQL,
                        MongoDB,Git and GitHub</span>

                </li>
                <li className='item'>
                    <h4>Languages</h4>
                    <span> Java,Python(Basic),Javasricpt</span>

                </li>



            </ol>
            <DownLoad/>

        </div>
        
      
    </div>
  )
}

export default Home;
