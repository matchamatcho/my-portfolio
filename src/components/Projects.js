import React from 'react';
import { Link } from 'react-router-dom';

// このデータは他のファイルからも参照できるようにエクスポートしておきます
export const myProjects = [
  {
    id: 5,
    title: 'CUI移動ゲーム',
    description: 'C++を用いて作成したCUIゲームです。クラス継承、メモリアロケータ、ステート管理を意識して作成しました',
    imageUrl: process.env.PUBLIC_URL + '/images/rightdown.png', // プロジェクトのスクリーンショットなどに差し替えてください
    link: '',
    videoUrl:'https://drive.google.com/file/d/1Jb2TrvFOz4uPwrRVwsvxlDto0dq-Ak1n/view?usp=sharing'
  },
  {
    id: 1,
    title: 'VR頭部回転増幅ソフトウェア',
    description: '研究で用いました。VRリダイレクション（頭部回転増幅）を使えます。',
    imageUrl: process.env.PUBLIC_URL + '/images/vrredirection.jpg', // プロジェクトのスクリーンショットなどに差し替えてください
    link: 'https://github.com/matchamatcho/projectAHR',
    videoUrl:'https://drive.google.com/file/d/1DZC52iGFlGCLRTLL5z6Hy6wa_3LhL6lq/view?usp=sharing'
  },
  {
    id: 2,
    title: '〇ai',
    description: '1週間ゲームジャムで作ったゲームです。「〇ai」の〇に入れて単語が出来るアルファベットに当たったら大きくなり、それ以外は当たったら小さくなる。ある程度小さくなったらゲームオーバー！',
    imageUrl: process.env.PUBLIC_URL + '/images/magario.png', // プロジェクトのスクリーンショットなどに差し替えてください
    link: 'https://github.com/matchamatcho/magario' ,// あなたのプロジェクトURLに書き換えてください
    videoUrl:'https://drive.google.com/file/d/150wgRVDllgDNXIIyi78qSRkPMOep6D9f/view?usp=drive_link'
  },
  {
    id: 3,
    title: 'トラップゲーム',
    description: 'トラップを避けてゴールを目指す！',
    imageUrl: process.env.PUBLIC_URL + '/images/trapgame.png', // プロジェクトのスクリーンショットなどに差し替えてください
    link: 'https://github.com/matchamatcho/3Dtrapgame' ,// あなたのプロジェクトURLに書き換えてください
    videoUrl:'https://drive.google.com/file/d/1vJOc9o2_P5Gpdhd773hiHOQEpGVK_qGZ/view?usp=drive_link'
  },
  {
    id: 4,
    title: '2Dシューティング',
    description: 'シューティングゲーム！',
    imageUrl: process.env.PUBLIC_URL + '/images/cppshooting.png',
    link: 'https://github.com/matchamatcho/CppShooting',
    videoUrl:'https://drive.google.com/file/d/1xHnbwTSZqHUcgexHgE1Q-LjwNYTgKFJM/view?usp=drive_link'
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
              <Link to={`/project/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="project-image-container">
                  <img src={project.imageUrl} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </Link>
              <div className="project-buttons">
                <Link to={`/project/${project.id}`} className="button">
                  詳細を見る
                </Link>
                <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="button">
                  動画を見る
                </a>
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