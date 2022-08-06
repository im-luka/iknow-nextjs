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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            mollitia consequatur similique ullam molestias architecto dicta,
            voluptate modi neque laudantium amet eum eveniet error. Quos tempora
            obcaecati in voluptate et?
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
