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
            If you want to be a rock star or just be famous, then run down the
            street naked, you&apos;ll make the news or something. But if you
            want music to be your livelihood, then play, play, play and play!
            And eventually you&apos;ll get to where you want to be.
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
            Remember the first time you went to a show and saw your favorite
            band. You wore their shirt, and sang every word. You didn&apos;t
            know anything about scene politics, haircuts, or what was cool. All
            you knew was that this music made you feel different from anyone you
            shared a locker with. Someone finally understood you. This is what
            music is about.
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
