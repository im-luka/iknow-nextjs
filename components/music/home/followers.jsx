import { useRouter } from "next/router";
import styles from "./followers.module.scss";

const Followers = () => {
  const router = useRouter();

  return (
    <>
      <section className={`${styles.followers} ${styles.item1}`}>
        <div className={styles.followers__content}>
          <div className={styles.followers__content__title}>
            <h2>
              <span>SAY</span>. <span>SAY</span>. <span>SAY</span>.
            </h2>
            <h2>PLAY. PLAY. PLAY.</h2>
          </div>

          <div className={styles.followers__content__explore}>
            <div className={styles.followers__content__explore__modal}>
              🔥 Explore Your Music 🔥 Explore Your Music 🔥 Explore Your Music
              🔥 Explore Your Music 🔥 Explore Your Music 🔥 Explore Your Music
            </div>
          </div>

          <div className={styles.followers__content__description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            ipsam dicta, qui voluptatum suscipit animi sapiente provident
            necessitatibus nam et incidunt nesciunt eum id aspernatur illum sit
            quod eius at.
          </div>
        </div>

        <div className={styles.followers__image}>
          <img src="/images/music/music-home5.jpg" alt="Guitar player" />
        </div>
      </section>

      <section
        className={`${styles.followers} ${styles.item2}`}
        style={{ backgroundColor: "black" }}
      >
        <div className={styles.followers__content} style={{ order: 1 }}>
          <div className={styles.followers__content__title}>
            <h2>Follow Your Dreams</h2>
          </div>

          <div className={styles.followers__content__description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            ipsam dicta, qui voluptatum suscipit animi sapiente provident
            necessitatibus nam et incidunt nesciunt eum id aspernatur illum sit
            quod eius at.
          </div>

          <div className={styles.followers__content__actions}>
            <button
              className="button"
              onClick={() => router.push("/music/4you")}
            >
              I&apos;m a Dreamer
            </button>
          </div>
        </div>

        <div className={styles.followers__image}>
          <img src="/images/music/music-home4.jpg" alt="Guitar player" />
        </div>
      </section>
    </>
  );
};

export default Followers;
