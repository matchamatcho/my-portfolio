import React from 'react';

// あなたのGitHubプロジェクト情報をここに記述します
const myProjects = [
  {
    id: 1,
    title: 'MatchaMatcho',
    description: 'あなたの代表的なプロジェクト。どのようなゲームで、どんな技術を使ったのかを簡潔に説明します。',
    imageUrl: 'https://via.placeholder.com/300', // プロジェクトのスクリーンショットなどに差し替えてください
    link: 'https://github.com/matchamatcho/matchamatcho'
  },
  {
    id: 2,
    title: 'プロジェクト名 2',
    description: '2番目のプロジェクト。制作で工夫した点や、学んだことなどを記述すると良いでしょう。',
    imageUrl: 'https://via.placeholder.com/300',
    link: '#' // あなたのプロジェクトURLに書き換えてください
  },
  {
    id: 3,
    title: 'プロジェクト名 3',
    description: '3番目のプロジェクト。このプロジェクトでのあなたの役割や、達成したことなどをアピールしましょう。',
    imageUrl: 'https://via.placeholder.com/300',
    link: '#' // あなたのプロジェクトURLに書き換えてください
  }
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {myProjects.map(project => (
          <div key={project.id} className="project">
            <div className="project-image-container">
              <img src={project.imageUrl} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project on GitHub</a>
            </div>
          </div>
        ))}
      </div>
      <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="button">
        GitHubで他のプロジェクトを見る
      </a>
    </section>
  );
}

export default Projects;