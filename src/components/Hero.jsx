import  "./hero.css";
import NewsItemAlt from "./NewsItemAlt";
import mockImg1 from "../img/mockImg-1.jpg";
import mockImg2 from "../img/mockImg-2.jpg";

const Hero = () => {
  const title = "Stay informed, stay up-to-date";
  const description =
    "Delivering the latest events, trends, and developments from around the world.";
  const title2 = "News at your fingertips";
  const description2 =
    "Stay ahead of the game with news at your fingertips, anytime and anywhere.";

  return (
    <div className="container">
      <section className="hero__section">
        <div className="hero__section-left">
          <div className="hero__section-left-tagline">
            <p>News, updates, and more</p>
          </div>
          <h1 className="hero__section-title">Daily News Feed</h1>
          <div className="hero__section-btn">
            <button>See what's new</button>
          </div>
        </div>

        <div className="hero__section-right">
          <NewsItemAlt
            ifExists
            mockImg={mockImg1}
            title={title}
            description={description}
          />
          <NewsItemAlt
            mockImg={mockImg2}
            title={title2}
            description={description2}
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
