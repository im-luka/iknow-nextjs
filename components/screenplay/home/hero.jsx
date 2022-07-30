import styles from "./hero.module.scss";
import Link from "next/link";
import { streamingServices } from "../../../data/streaming-service";
import StreamingService from "./streaming-service";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__container__info}>
          <h1>All your streaming services in one app.</h1>
          <p>
            Get personal recommendations for movies and TV shows available on
            Netflix, Disney Plus, Amazon Prime Video and many more.
          </p>

          <div className={styles.hero__container__info__actions}>
            <Link href="/screenplay/discovery">
              <button className="button button-primary">
                Discover movies & TV shows
              </button>
            </Link>
            <button className="button button-secondary">Features</button>
          </div>

          <span>Streaming services on JustWatch</span>

          <div className={styles.hero__container__info__services}>
            {streamingServices.map((service, index) => (
              <StreamingService
                key={index}
                name={service.name}
                imagePath={service.imagePath}
                url={service.url}
              />
            ))}
          </div>
        </div>

        <div className={styles.hero__container__image}>
          <img src="/images/screenplay/home/tv.webp" alt="Hero TV" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
