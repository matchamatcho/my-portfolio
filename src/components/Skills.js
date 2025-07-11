import React from 'react';

// スキルとレベルをここに記述します (0から100の間の数値)
const mySkills = [
  { name: 'C++', level: 85 },
  { name: 'C#', level: 80 },
  { name: 'Unity', level: 75 },
  { name: 'Unreal Engine 5', level: 70 },
  { name: 'DirectX11', level: 65 },
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 80 },
  { name: 'JavaScript', level: 75 },
  { name: 'React', level: 70 },
  { name: 'Node.js', level: 60 },
  { name: 'Python', level: 80 },
  { name: 'Figma', level: 65 },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skill-bars">
        {mySkills.map(skill => (
          <div key={skill.name} className="skill-bar">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="skill-gauge-background">
              <div
                className="skill-gauge-level"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;