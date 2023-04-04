
import lodash from "lodash";
import "./newsItem.css";
import noImg from "../img/no-image.png";

const NewsItem = ({ ifExists, item }) => {
  return (
    <div className="news__item-container">
      <div
        className={
          ifExists ? `news__item-wrapper-${"alt"}` : `news__item-wrapper`
        }
      >
        <img
          src={item.urlToImage ? item.urlToImage : noImg}
          alt="news-image"
          className="news__item-img"
        />
        <div className="news__item-content">
          <h3 className="news-item-title">
            {lodash.truncate(item.title, { length: 80 })}
          </h3>
          <p className="news-item-description">
            {lodash.truncate(item.description, { length: 10 })}
          </p>
          <div className="news__item-tag">
            <a href={item.url}>Click to read</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
