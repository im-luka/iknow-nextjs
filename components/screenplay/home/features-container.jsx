import styles from "./features-container.module.scss";

const FeaturesContainer = ({ imagePath, quote, title, description, order }) => {
  return (
    <div className={styles.features__container}>
      <div
        className={styles.features__container__image}
        style={{ order: order }}
      >
        <img src={`/images/screenplay/${imagePath}`} alt={title} />
      </div>

      <div className={styles.features__container__content}>
        <span>{quote}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeaturesContainer;
