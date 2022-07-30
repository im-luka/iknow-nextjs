import { useRouter } from "next/router";
import styles from "./hero-slide-item.module.scss";
import { screenplayApiConfig } from "../../../api/apiConfig";

const HeroSlideItem = ({ movie, className }) => {
  const router = useRouter();

  const coverImage = screenplayApiConfig.coverImage(
    movie.backdrop_path || movie.poster_path
  );
  const posterImage = screenplayApiConfig.posterImage(
    movie.poster_path || movie.backdrop_path
  );

  const goToDetailsHandler = () => {
    router.push(`/screenplay/movie/${movie.id}`);
  };

  return (
    <div
      className={`${styles["hero-slide__item"]} ${
        className ? styles[className] : ""
      }`}
      style={{ backgroundImage: `url(${coverImage})` }}
    >
      <div className={styles["hero-slide__item__content"]}>
        <div className={styles["hero-slide__item__content__poster"]}>
          <img
            src={movie.poster_path ? posterImage : coverImage}
            alt={movie.title}
          />
        </div>
        <div className={styles["hero-slide__item__content__info"]}>
          <h1 className={styles.title}>{movie.title}</h1>
          <div className={styles.overview}>{movie.overview}</div>
          <div className={styles.btns}>
            <button
              className="button button-primary"
              onClick={goToDetailsHandler}
            >
              Watch now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlideItem;
