import React from "react";

const News = () => {
  const newsItems = [
    
    {
      date: "2025/11",
      title: "JPHacks award dayに参加しました(ディップ株式会社賞, 三菱重工業株式会社賞, ロート製薬株式会社賞, Innovator認定, Best Audience Award, Best Hack Award)",
    },{
      date: "2025/10",
      title: "JPHacks hack day 札幌会場に参加しました(株式会社ヤマレコ賞)",
    },
    {
      date: "2025/09",
      title: "HCI研究会で発表を行いました（学生奨励賞）",
    },
    {
      date: "2025/08",
      title: "コーエーテクモのインターンに参加しました",
    },
    {
      date: "2025/08",
      title: "バンダイナムコスタジオのインターンに参加しました",
    },
    {
      date: "2025/06",
      title: "技育ハッカソンVol.5に参加しました",
    },
    {
      date: "2025/06",
      title: "技育ハッカソンVol.4に参加しました",
    },
    {
      date: "2025/05",
      title: "Beginner's Hackathonに参加しました",
    },
    {
      date: "2025/04",
      title: "Unity 1週間ゲームジャムに参加しました",
    },
    {
      date: "2024/11",
      title: "AtCoderで緑になりました",
    },

    
  ];

  return (
    <section id="news">
      <div>
        <h2>News</h2>
        <div className="news-scroll-container">
          <div className="news-list">
            {newsItems.map((news, index) => (
              <div key={index} className="news-item">
                <div className="news-item-date">{news.date}</div>
                <h3 className="news-item-title">{news.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
