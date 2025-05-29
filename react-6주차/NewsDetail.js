import { useLocation } from 'react-router-dom';

function NewsDetail() {
  const news = useLocation().state;

  if (!news) return <p>뉴스 없음</p>;

  return (
    <div>
      <h2>{news.title}</h2>
      {news.urlToImage && <img src={news.urlToImage} alt="" width="300" />}
      <p>{news.description}</p>
      <button onClick={() => window.open(news.url)}>기사 보기</button>
    </div>
  );
}

export default NewsDetail;
