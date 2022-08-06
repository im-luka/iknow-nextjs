import styles from "./music-container.module.scss";
import {
  SiSpotify,
  SiDeezer,
  SiApple,
  SiYoutubemusic,
  SiStarz,
} from "react-icons/si";

const CircleInfo = () => {
  return (
    <div className={styles.circle}>
      <div className={styles.circle__container}>
        <svg viewBox="0 0 100 100" width="100" height="100">
          <defs>
            <path
              id="circle"
              d="
                M 50, 50
                m-37, 0
                a 37,37 0 1,1 74,0
                a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text fontSize="16">
            <textPath xlinkHref="#circle">
              We are the best f*ck the rest
            </textPath>
          </text>
        </svg>
      </div>

      <div className={styles.circle__container__content}>
        <SiStarz />
      </div>
    </div>
  );
};

const MusicContainer = () => {
  return (
    <>
      <section className={styles.music}>
        <div className={styles.aligner}>
          <h2 className={styles.outline}>We are the best f*ck the rest</h2>
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
              <button className="button button-primary">Get Started</button>
              <button className="button button-secondary">
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

            <CircleInfo />
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
