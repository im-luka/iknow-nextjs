import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__image}>
        <img
          src="/images/music/landing-page-girl.png"
          alt="Girl looking above"
        />
      </div>

      <div className={styles.hero__content}>
        <h1>Music. is. life. itself.</h1>
        <p>
          The emotions caused by music, the attitudes of it&apos;s composers and
          players, and the venues.
        </p>
        <div className={styles.hero__content__actions}>
          <button className="button button-primary">Play Music</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
