import { useRouter } from "next/router";
import { screenplayApiConfig } from "../../../api/apiConfig";
import styles from "./details-cover.module.scss";
import { BsDot, BsPlayFill } from "react-icons/bs";
import ActorsList from "./actors-list";
import PostersList from "./posters-list";
import FavoritesButton from "../utils/favorites-button";
import { useState } from "react";
import VideoModal from "../modal/video-modal";

const DetailsCover = ({ item, actors, images }) => {
  const [showVideo, setShowVideo] = useState(false);
  const {
    query: { category, id },
  } = useRouter();

  const showVideoModal = () => {
    setShowVideo(true);
  };

  const closeVideoModal = () => {
    setShowVideo(false);
  };

  function calculateLength() {
    const hrs = Math.floor(item.runtime / 60);
    let mins = item.runtime % 60;

    return `${hrs}h ${mins < 10 ? "0" : ""}${mins}min`;
  }

  function getGenres() {
    let names = [];
    item.genres.forEach((item) => names.push(item.name));

    return names.slice(0, 3).join(", ");
  }

  return (
    <section
      className={styles.details}
      style={{
        backgroundImage: `url(${screenplayApiConfig.coverImage(
          item.backdrop_path || item.poster_path
        )})`,
      }}
    >
      <div className={styles.details__container}>
        <div className={styles.details__container__about}>
          <div className={styles.details__container__about__content}>
            <h1>{item.title || item.name}</h1>
            <div className={styles.details__container__about__content__info}>
              <p>
                ⭐ {item.vote_average} <span>| {item.vote_count}</span>
              </p>

              <div
                className={
                  styles.details__container__about__content__info__numbers
                }
              >
                <p>
                  {category === "movie"
                    ? calculateLength()
                    : `${item.number_of_seasons} seasons`}
                </p>
                <p>
                  <BsDot size="1.25rem" />
                </p>
                <p>{getGenres()}</p>
                <p>
                  <BsDot size="1.25rem" />
                </p>
                <p>
                  {item.release_date
                    ? item.release_date.slice(0, 4)
                    : item.first_air_date
                    ? item.first_air_date.slice(0, 4)
                    : "Unknown"}
                </p>
              </div>
            </div>

            <p>{item.overview}</p>
          </div>

          <div className={styles.details__container__about__actions}>
            <button className="button button-primary" onClick={showVideoModal}>
              <BsPlayFill size="1.5rem" /> PLAY NOW
            </button>
            <button
              className="button button-secondary"
              onClick={showVideoModal}
            >
              TRAILER
            </button>

            {item && (
              <FavoritesButton
                item={{
                  id: item.id,
                  backdrop_path: item.backdrop_path,
                  title: item.title || item.name,
                  category: category,
                }}
              />
            )}
          </div>
        </div>

        <div className={styles.details__container__media}>
          <ActorsList actors={actors} />
          <PostersList posters={images} />
        </div>
      </div>

      {showVideo && (
        <VideoModal id={id} category={category} onClose={closeVideoModal} />
      )}
    </section>
  );
};

export default DetailsCover;
