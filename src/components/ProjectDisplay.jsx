import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ProjectList } from '../helper/ProjectsList';
import { FaGithub } from 'react-icons/fa'
import './ProjectDisplay.css';

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const githubLink = project.githubLink;
  const siteLink= project.siteLink;

  const navigate = useNavigate();

  const navigateToProjects = () => {
    navigate('/projects');
  };

  return (
    <div className="project">
      <Link to="/projects"></Link>
      <h1>{project.name}</h1>
      <img src={project.image} alt="" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      {githubLink && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub className="dee" />
        </a>
      )}
      <div className="button-container">
        <button className="back-button" onClick={navigateToProjects}>
          Back to Projects
        </button>
        <Link to={siteLink}>
          <button className="back-button">
           Want To Visit
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectDisplay;
