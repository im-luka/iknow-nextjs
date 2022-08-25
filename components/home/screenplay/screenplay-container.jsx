import { useRouter } from "next/router";
import styles from "./screenplay-container.module.scss";
import { BsCameraReelsFill } from "react-icons/bs";

const ScreenplayContainer = () => {
  const router = useRouter();

  const goToScreenplayPageHandler = () => {
    router.push("/screenplay");
  };

  return (
    <section id="screenplay" className={styles.screenplay}>
      <div className={styles.screenplay__cover}>
        <div className={styles.aligner}>
          <h2 className={styles.outline}>
            your favorite place for music & movies
          </h2>
        </div>

        <div className={styles.screenplay__cover__header}>
          <div className={styles.screenplay__cover__header__description}>
            It ain&apos;t a surprise that
          </div>

          <div className={styles.screenplay__cover__header__title}>
            MOVIES <br />
            CHANGE <br />
            THE WORLD
          </div>
        </div>

        <div className={styles.screenplay__cover__stats}>
          <div className={styles.screenplay__cover__stats__item}>
            <h2>375+</h2>
            <p>Movies 2 Choose</p>
          </div>

          <div className={styles.screenplay__cover__stats__item}>
            <BsCameraReelsFill />
            <p>Top & Popular</p>
          </div>

          <div className={styles.screenplay__cover__stats__item}>
            <h2>200+</h2>
            <p>TV Shows 2 Choose</p>
          </div>
        </div>
      </div>

      <div className={styles.screenplay__content}>
        <div className={styles.screenplay__content__actions}>
          <h3>Start Today</h3>
          <button
            className="button button-primary"
            onClick={goToScreenplayPageHandler}
          >
            Get Started
          </button>
        </div>

        <div className={styles.screenplay__content__container}>
          <div className={styles.screenplay__content__container__item}>
            <img
              src="/images/home/screenplay-grid1.jpg"
              alt="Screenplay covers"
            />
          </div>
          <div className={styles.screenplay__content__container__item}>
            <img
              src="/images/home/screenplay-covers.jpg"
              alt="Screenplay covers"
            />
          </div>
          <div className={styles.screenplay__content__container__item}>
            <img
              src="/images/home/screenplay-grid2.jpg"
              alt="Screenplay covers"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenplayContainer;
