import FeaturesContainer from "./features-container";
import styles from "./features.module.scss";

const Features = () => {
  return (
    <section className="features">
      <FeaturesContainer
        quote="All in one place"
        title="Your streaming guide"
        description="Get personal recommendations and see what’s new across your
              favorite streaming services."
        imagePath="home/recommendations.webp"
      />

      <FeaturesContainer
        quote="One search"
        title="One search to rule them all"
        description="Never go back and forth between your services again to find out if a movie or TV show is available."
        imagePath="home/search.webp"
        order={1}
      />

      <FeaturesContainer
        quote="One watchlist"
        title="Combine all your watchlists"
        description="Keep track of all the TV shows and movies you want to watch in one list across all your devices."
        imagePath="home/watchlist.webp"
      />
    </section>
  );
};

export default Features;
