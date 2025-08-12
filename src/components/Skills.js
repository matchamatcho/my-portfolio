import React from 'react';

// スキルと経験の種類をここに記述します
// 経験の種類: 実務経験, チーム開発, 個人開発, 学習経験
const mySkills = [
  { name: 'C++', experience: ['学習経験', '個人開発'] },
  { name: 'C#', experience: [ '個人開発'] },
  { name: 'C', experience: ['学習経験'] },
  { name: 'Python', experience: ['学習経験', '個人開発','チーム開発'] },
  { name: 'Unity', experience: ['学習経験', '個人開発'] },
  { name: 'Unreal Engine 5', experience: ['個人開発'] },
  { name: 'DirectX11', experience: [ '個人開発'] },
  { name: 'HTML', experience: [ 'チーム開発'] },
  { name: 'CSS', experience: ['チーム開発'] },
  { name: 'JavaScript', experience: ['チーム開発'] },
  { name: 'React', experience: ['チーム開発'] },
  { name: 'Node.js', experience: ['チーム開発'] },
  { name: 'Figma', experience: ['チーム開発'] },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skill-list">
        {mySkills.map(skill => (
          <div key={skill.name} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-experience-container">
              {skill.experience.map(exp => (
                <span key={exp} className={`skill-experience ${exp.replace(/\s+/g, '-').toLowerCase()}`}>
                  {exp}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;