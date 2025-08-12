import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { myProjects } from './Projects'; // Projects.jsからプロジェクトデータをインポート

function ProjectDetail() {
  const { projectId } = useParams();
  const project = myProjects.find(p => p.id === parseInt(projectId));

  if (!project) {
    return <div>プロジェクトが見つかりません。</div>;
  }

  // サンプルとして、プロジェクトごとの詳細な情報を追加します
  const projectDetails = {
    1: {
      extendedDescription: 'このVR頭部回転増幅ソフトウェアは、ユーザーの首の動きを仮想空間内で増幅することで、より少ない身体的な動きで広い視野を確保できるように設計されています。特に、身体的な制約があるユーザーや、限られたプレイスペースでのVR体験を向上させることを目的としています。UnityとC#を使用して開発しました。',
      technologies: ['Unity', 'C#', 'VR'],
    },
    2: {
      extendedDescription: '「〇ai」は、1週間のゲームジャムで開発したユニークなコンセプトの2Dアクションゲームです。プレイヤーは、画面上に表示される「〇ai」の〇に当てはまるアルファベットに触れ、単語を完成させることでキャラクターの姿が変化します。間違ったアルファベットに当たるとキャラクターが小さくなり、一定のサイズ以下になるとゲームオーバーです。瞬時の判断力と移動スキルが試される、スピーディで中毒性のあるゲームプレイが特徴です。',
      technologies: ['Unity', 'C#'],
    },
    3: {
        extendedDescription: '巧妙に配置されたトラップを避けながら、ゴールを目指す3Dアクションゲームです。プレイヤーはジャンプを駆使して、様々なギミックが仕掛けられたステージをクリアしていきます。単純な操作性ながらも、タイミングや判断力が求められる奥深いゲームデザインを目指しました。',
        technologies: ['Unity', 'C#'],
    },
    4: {
        extendedDescription: '古典的な2Dシューティングゲームに現代的な要素を取り入れた作品です。多様な敵キャラクターと弾幕、そして強力なボス戦が特徴です。C++とDirectX11を使い、基本構造から実装しました。オブジェクト指向設計を意識し、拡張性の高いコードを目指しました。',
        technologies: ['C++', 'DirectX11'],
    }
  };

  const details = projectDetails[project.id];

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <img src={project.imageUrl} alt={project.title} style={{ maxWidth: '600px', height: 'auto', margin: '20px 0' }}/>
      <p>{project.description}</p>
      {details && (
        <>
            <p>{details.extendedDescription}</p>
            <h3>使用技術</h3>
            <ul>
                {details.technologies.map(tech => <li key={tech}>{tech}</li>)}
            </ul>
        </>
      )}
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="button">
        GitHubでプロジェクトを見る
      </a>
      <br />
      <Link to="/" className="button" style={{marginTop: '20px'}}>
        ポートフォリオに戻る
      </Link>
    </div>
  );
}

export default ProjectDetail;