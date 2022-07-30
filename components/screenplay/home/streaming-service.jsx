import styles from "./streaming-service.module.scss";

const StreamingService = ({ name, imagePath, url }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className={styles["streaming-service"]}>
        <img src={`/images/screenplay/${imagePath}`} alt={name} />
      </div>
    </a>
  );
};

export default StreamingService;
