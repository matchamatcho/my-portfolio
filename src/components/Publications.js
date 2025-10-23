import React from "react";

const Publications = () => {
  const publications = {
    domestic_conference: [
      {
        authors: "菊田 大地, 崔 明根, 坂本 大介, 小野 哲雄",
        year: 2025,
        title:
          "VR環境におけるターゲット選択での頭部・手部リダイレクションの影響調査",
        venue: "情報処理学会 研究報告ヒューマンコンピュータインタラクション（HCI）",
        volume: "2025-HCI-214, 4, 1-8, 2025年8月",
        link: "https://ipsj.ixsq.nii.ac.jp/records/2003781",
        award: "学生奨励賞",
      },
    ],
  };

  // 著者名に下線を引く関数
  const highlightAuthor = (authors) => {
    const targetName = "菊田 大地";
    const parts = authors.split(targetName);

    if (parts.length === 1) {
      return authors;
    }

    return (
      <>
        {parts[0]}
        <span style={{ fontWeight: 'bold' , textDecoration: 'underline'}}> {targetName}</span>    
        {parts[1] || ""}
      </>
    );
  };

  return (
    <section className="px-4 py-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8">Publications</h2>

      {/* 査読無し */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">
          査読なし国内会議（登壇）
        </h3>
        <ol className="list-decimal list-inside space-y-4">
          {publications.domestic_conference.map((pub, index) => (
            <li key={index} className="text-sm leading-relaxed text-gray-700">
              {highlightAuthor(pub.authors)}. {pub.year}. {pub.title}.{" "}
              {pub.venue}
              {pub.volume && `, ${pub.volume}`}
              {pub.note && `. ${pub.note}`}
              {pub.award && <span style={{ fontWeight: 'bold' }}> {pub.award}</span>}.              {pub.link && (
                <a
                  href={pub.link}
                  className="text-blue-600 hover:underline ml-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [Link]
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Publications;
