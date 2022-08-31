import styles from "./music-container.module.scss";
import { SiSpotify, SiDeezer, SiApple, SiYoutubemusic } from "react-icons/si";
import CircleMenu from "../../ui/circle-menu";
import { useRouter } from "next/router";

const MusicContainer = () => {
  const router = useRouter();

  const goToMusicPageHandler = () => {
    router.push("/music");
  };

  return (
    <>
      <section id="music" className={styles.music}>
        <div className={styles.aligner}>
          <h2 className={styles.outline}>your favorite place for music</h2>
        </div>

        <div className={styles.music__container}>
          <div className={styles.music__container__info}>
            <h1>Music is the way of life</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque delectus illo, error possimus minus minima excepturi
              deserunt! Commodi beatae nam, ducimus quisquam consectetur illum
              aperiam temporibus corporis atque, officia perspiciatis.
            </p>

            <div className={styles.music__container__info__actions}>
              <button
                className="button button-primary"
                onClick={goToMusicPageHandler}
              >
                Get Started
              </button>
              <button
                className="button button-secondary"
                onClick={goToMusicPageHandler}
              >
                See Our Features
              </button>
            </div>

            <div className={styles.music__container__info__stats}>
              <div className={styles.music__container__info__stats__item}>
                <h3>
                  13749<span>+</span>
                </h3>
                <p>Thousands of music that you can listen to every day</p>
              </div>

              <div className={styles.music__container__info__stats__item}>
                <h3>
                  4189<span>+</span>
                </h3>
                <p>Various artists that you can choose to play anytime</p>
              </div>
            </div>
          </div>

          <div className={styles.music__container__image}>
            <img
              src="/images/home/music-cover1.jpg"
              alt="Musician performing on the stage"
            />

            <CircleMenu />
          </div>
        </div>
      </section>

      <div className={styles.providers}>
        <div className={styles.providers__container}>
          <div className={styles.providers__container__item}>
            <SiSpotify />
            <h3>Spotify</h3>
          </div>
          <div className={styles.providers__container__item}>
            <SiDeezer />
            <h3>Deezer</h3>
          </div>
          <div className={styles.providers__container__item}>
            <SiApple />
            <h3>Apple</h3>
          </div>
          <div className={styles.providers__container__item}>
            <SiYoutubemusic />
            <h3>Youtube music</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicContainer;
