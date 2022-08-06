import styles from "./featured.module.scss";

const Featured = () => {
  return (
    <section className={styles.featured}>
      <div className={styles.featured__item}>
        <img src="/images/music/music-home2.jpg" alt="Man with guitar" />
      </div>

      <div className={styles.featured__item}>
        <img src="/images/music/music-home3.jpg" alt="Man with guitar" />
      </div>
    </section>
  );
};

export default Featured;
