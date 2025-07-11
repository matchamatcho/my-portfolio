import React from 'react';

const myProjects = [
  {
    id: 1,
    title: 'プロジェクト1',
    description: 'これは最初のプロジェクトの説明です。どのような技術を使い、何を実現したのかを記述します。',
    imageUrl: 'https://via.placeholder.com/300',
    link: '#'
  },
  {
    id: 2,
    title: 'プロジェクト2',
    description: 'これは2番目のプロジェクトの説明です。課題や解決策などを盛り込むと良いでしょう。',
    imageUrl: 'https://via.placeholder.com/300',
    link: '#'
  },
  {
    id: 3,
    title: 'プロジェクト3',
    description: 'これは3番目のプロジェクトの説明です。チームでの役割や成果などを記述します。',
    imageUrl: 'https://via.placeholder.com/300',
    link: '#'
  }
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {myProjects.map(project => (
          <div key={project.id} className="project">
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;