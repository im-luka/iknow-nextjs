import styles from "./artists.module.scss";

const Artists = () => {
  return (
    <section className={styles.artists}>
      <div className={styles.artists__content}>
        <div className={styles.artists__content__container}>
          <h2>Your favorite musicians in the same place</h2>

          <div className={styles.artists__content__container__help}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <p>
            Music, at its essence, is what gives us memories. And the longer a
            song has existed in our lives, the more memories we have of it. It
            drives you. It wakes you up, it gets you pumping. And, at the end of
            the day, the correct tune will chill you down.
          </p>
        </div>
      </div>

      <div className={styles.artists__image}>
        <div className={styles.artists__image__img}>
          <img src="/images/music/music-home1.jpg" alt="Singer performing" />

          <div className={styles.artists__image__img__border}></div>
        </div>
      </div>
    </section>
  );
};

export default Artists;
