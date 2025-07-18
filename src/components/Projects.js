import React from 'react';

// あなたのGitHubプロジェクト情報をここに記述します
const myProjects = [
  {
    id: 1,
    title: 'VR頭部回転増幅ソフトウェア',
    description: '研究で用いました。VRリダイレクション（頭部回転増幅）を使えます。',
    imageUrl: process.env.PUBLIC_URL + '/images/tmp.png', // プロジェクトのスクリーンショットなどに差し替えてください
    link: 'https://github.com/matchamatcho/projectAHR'
  },
  {
    id: 2,
    title: '〇ai',
    description: '1週間ゲームジャムで作ったゲームです。「〇ai」の〇に入れて単語が出来るアルファベットに当たったら大きくなり、それ以外は当たったら小さくなる。ある程度小さくなったらゲームオーバー！',
    imageUrl: process.env.PUBLIC_URL + '/images/tmp.png', // プロジェクトのスクリーンショットなどに差し替えてください
    link: 'https://github.com/matchamatcho/magario' // あなたのプロジェクトURLに書き換えてください
  },
  {
    id: 3,
    title: 'トラップゲーム',
    description: 'トラップを避けてゴールを目指す！',
    imageUrl: process.env.PUBLIC_URL + '/images/tmp.png', // プロジェクトのスクリーンショットなどに差し替えてください
    link: 'https://github.com/matchamatcho/3Dtrapgame' // あなたのプロジェクトURLに書き換えてください
  },
  {
    id: 4,
    title: '2Dシューティング',
    description: 'シューティングゲーム！',
    imageUrl: process.env.PUBLIC_URL + '/images/tmp.png', 
    link: 'https://github.com/matchamatcho/CppShooting' 
  }
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list-wrapper">
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
      </div>
      <a href="https://github.com/matchamatcho" target="_blank" rel="noopener noreferrer" className="button">
        GitHubで他のプロジェクトを見る
      </a>
    </section>
  );
}

export default Projects;