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
      technologies: ['Unity', 'C#', 'VR','META Core SDK'],
      conferenceUrl: 'https://ipsj.ixsq.nii.ac.jp/records/2003781', // 学会のURL
      paperUrl: 'https://drive.google.com/file/d/1S9-QdPoKB6gGSvdR-vOQYH3nR7eTo2TX/view?usp=sharing', // 原稿のURL
      slidesUrl: 'https://drive.google.com/file/d/1OpZ4ll3vKTsqZydADv7jFOTpqUpjC07q/view?usp=sharing', // スライドのURL
    },
    2: {
      extendedDescription: '「〇ai」は、1週間のゲームジャムで開発したユニークなコンセプトの2Dアクションゲームです。プレイヤーは、画面上に表示される「〇ai」の〇に当てはまるアルファベットに触れ、単語を完成させることでキャラクターの姿が変化します。間違ったアルファベットに当たるとキャラクターが小さくなり、一定のサイズ以下になるとゲームオーバーです。瞬時の判断力と移動スキルが試される、スピーディで中毒性のあるゲームプレイが特徴です。',
      technologies: ['Unity', 'C#'],
    },
    3: {
        extendedDescription: '巧妙に配置されたトラップを避けながら、ゴールを目指す3Dアクションゲームです。プレイヤーはジャンプを駆使して、様々なギミックが仕掛けられたステージをクリアしていきます。単純な操作性ながらも、タイミングや判断力が求められる奥深いゲームデザインを目指しました。',
        technologies: ['UE5', 'ブループリント'],
    },
    4: {
        extendedDescription: '古典的な2Dシューティングゲームです。C++とDirectX11を使い、基本構造から実装しました。オブジェクト指向設計を意識し、拡張性の高いコードを目指しました。',
        technologies: ['C++', 'クラス設計', 'DirectX11'],
    },
    5: {
        extendedDescription: 'このゲームはCUI上でプレイヤーを操作し、敵をよけながらゴールを目指すシンプルなゲームです。このゲームはC++の学習を目的としています。具体的には、クラス継承を利用し、ベースとなる仮想クラスからプレイヤークラスや敵クラスを派生させています。また、メモリアロケータを自作で実装しており、動的なメモリ管理を効率的に行いました。これは、敵キャラクターの生成、削除時に利用されています。ステート管理も導入し、gameの状態をタイトル、プレイ中、クリア画面などに分けています。これにより、コードの可読性や保守性が向上しています。',
        technologies: ['C++','クラス継承','メモリアロケータ','ステート管理'],
    },
    6: {
        extendedDescription: 'Apexでは敵の動きが激しく、狙いを定めるのが困難です。そこで、敵と同じように動くことで、敵の動きが小さく感じ、狙いやすくなる技術があります。このゲームは敵の動きに合わせてキャラクターを動かす練習をすることができます',
        technologies: ['Unity', 'C#'],
    },
    7:{
      extendedDescription:'UE5でアセットを用いたり、アニメーションを使うことを目的として作りました。\nまた、PlayerControllerクラスや、GameStateBaseクラスを継承したクラスを作り、レベルに設定しました。\n適切にクラスを分け、それぞれの役割を持たせることで、コードのどこで何が行われているか分かりやすく、保守性が高くなると感じました。',
      technologies: ['Unreal Engine 5', 'C++'],
    },
    8:{
      extendedDescription:'重力の向きを変更したとき、変更後の重力系で移動や視点移動が正しく行われるように、クウォタニオンを用いて計算しました。\nC++コンポーネントをアクタにアタッチすることでギミックを実装していきました。\nプレイヤーコントローラークラスやゲームステートクラスをC++で作成し、それを継承したBPクラスをレベルに設定し、細かい実装をC++で行い、簡単な調整をBPで行うことで、効率よく開発を進めることができました。',
      technologies: ['Unreal Engine 5', 'C++'],
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
            <p style={{ whiteSpace: 'pre-wrap' }}>{details.extendedDescription}</p>
            <h3>使用技術</h3>
            <ul>
                {details.technologies.map(tech => <li key={tech}>{tech}</li>)}
            </ul>
        </>
      )}
      {/* ↓↓↓ ボタンをdivで囲み、「動画を見る」ボタンを追加しました ↓↓↓ */}
      <div className="project-detail-buttons">
        {project.link&&(<a href={project.link} target="_blank" rel="noopener noreferrer" className="button">
          GitHubでプロジェクトを見る
        </a>)}
        {project.videoUrl&&(<a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="button">
          動画を見る
        </a>)}
        {details?.conferenceUrl&&(<a href={details.conferenceUrl} target="_blank" rel="noopener noreferrer" className="button">
          学会を見る
        </a>)}
        {details?.paperUrl&&(<a href={details.paperUrl} target="_blank" rel="noopener noreferrer" className="button">
          原稿を読む
        </a>)}
        {details?.slidesUrl&&(<a href={details.slidesUrl} target="_blank" rel="noopener noreferrer" className="button">
          スライドを見る
        </a>)}
      </div>
      <div className="project-detail-buttons">
        {project.unityRoomUrl && (
          <a href={project.unityRoomUrl} target="_blank" rel="noopener noreferrer" className="button">
            unityroomで遊ぶ
          </a>
        )}
      </div>

      <Link to="/" className="button" style={{marginTop: '20px'}}>
        ポートフォリオに戻る
      </Link>
    </div>
  );
}

export default ProjectDetail;