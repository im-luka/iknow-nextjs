import { useRouter } from "next/router";
import styles from "./hero.module.scss";

const Hero = () => {
  const router = useRouter();

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
          Music doesn&apos;t lie. If there is something to be changed in this
          world, then it can only happen through music.
        </p>
        <div className={styles.hero__content__actions}>
          <button
            className="button button-primary"
            onClick={() => router.push("/auth/login")}
          >
            Play Music
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
