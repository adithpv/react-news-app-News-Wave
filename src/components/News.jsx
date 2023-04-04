import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Pagination from "./Pagination";
import "./news.css";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(8);

  const currentPosts = newsData.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const apiKey = import.meta.env.VITE_API_KEY;

  const url = `https://newsapi.org/v2/top-headlines?country=in&category=general`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            "X-Api-Key": apiKey,
          },
        });
        const data = await response.json();
        setNewsData(data.articles);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="container">
      <div className="news__container">
        <div className="news__title-wrapper">
          <h2 className="news__main-title">Latest News</h2>
        </div>
        {isLoading && <p className="loading">Loading . .</p>}
        {error && <p className="error">Please reload the page</p>}
        <div className="news__list">
          {currentPosts &&
            currentPosts.map((item, index) => (
              <NewsItem key={index} item={item} />
            ))}
        </div>
      </div>
      <Pagination
        totalPosts={newsData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
};

News.defaultProps = {
  newsData: [],
};

export default News;
