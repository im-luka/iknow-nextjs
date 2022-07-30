import styles from "./error-content.module.scss";

const ErrorContent = () => {
  return (
    <div className={styles.error}>
      <div className={styles.error__image}>
        <img
          src="/images/error/robot.svg"
          alt="Robot displaying error occured"
        />
      </div>

      <div className={styles.error__content}>
        <h3>Oops! Something went wrong...</h3>
        <p>Have you tried turning it off and on?</p>
      </div>
    </div>
  );
};

export default ErrorContent;
