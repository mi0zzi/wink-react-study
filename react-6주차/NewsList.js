import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'd831dea762814aeaab5afde28087a688';

function NewsList() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('general');

  useEffect(() => {
    async function getNews() {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
      );
      setNews(res.data.articles);
    }
    getNews();
  }, [category]);

  return (
    <div>
      <h2>뉴스</h2>
      <div>
        <button onClick={() => setCategory('general')}>general</button>
        <button onClick={() => setCategory('business')}>business</button>
        <button onClick={() => setCategory('sports')}>sports</button>
      </div>
      {news.map((item, i) => (
        <div key={i}>
          <Link to={`/news/${i}`} state={item}>{item.title}</Link>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
