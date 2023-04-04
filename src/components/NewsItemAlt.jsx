import "./NewsItem.css";

const NewsItemAlt = ({ ifExists, mockImg, title, description }) => {
  return (
    <div className={ifExists ? `news__item-wrapper-alt` : `news__item-wrapper`}>
      <div className="news__item-wrapper">
        <img src={mockImg} alt="" className="news__item-img" />
        <div className="news__item-content">
          <h3 className="news-item-title">{title}</h3>
          <p className="news-item-description">{description}</p>
          <div className="news__item-tag">Latest news</div>
        </div>
      </div>
    </div>
  );
};

export default NewsItemAlt;
