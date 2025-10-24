import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
        菊田大地と申します。ゲーム開発エンジニアを目指しています。主にC++を使ってゲーム開発や競技プログラミングに取り組んでいます。研究分野はヒューマンコンピュータインタラクション（HCI）です。
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-2">所属</h3>
          <p className="text-gray-700">
            北海道大学 大学院 情報科学院 情報科学専攻 情報理工学コース<br />
            ヒューマンコンピュータインタラクション研究室 修士1年
          </p>
        </div>
    </section>
  );
}

export default About;