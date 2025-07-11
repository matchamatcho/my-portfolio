import React from 'react';

const mySkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'Figma'];

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        {mySkills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;