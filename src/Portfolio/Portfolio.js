import React from 'react';
import projects from '../data/Projects.js';

const Portfolio = (props) => {
  const projectViews = projects.map( project => {
    return (
      <div class={"project " + project.title}>
        <div class="projectLogo">
        </div>
        <div class="projectDescription">
          { project.description}
        </div>
        <a href={project.github} class="projectGithub">
          see project repository
        </a>
        <a href={project.url} class="projectUrl">
          go to site
        </a>
      </div>
    );
  });

  return(
    <article class="projects">
      { projectViews }
    </article>
  );

};

export default Portfolio;
