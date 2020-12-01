import React from 'react';
import about from '../data/About.js';

const About = (props) => {
  const me = about.me;
  const skills = about.skills;

  const skillViews = skills.map( skill => {
    return(
      <span>
        <em class="skillCategory">{skill.category + " · "}</em>
        {skill.list.join(" · ") + " · "}
      </span>
    );
  });

  return(
    <article class="About">
      <div class="aboutMe">
        <h1>{me.name}</h1>
        <p>{me.description}</p>
      </div>
      <div class="skills">
        <h1>skills</h1>
        <p>{ skillViews }</p>
      </div>
    </article>
  );
};

export default About;
