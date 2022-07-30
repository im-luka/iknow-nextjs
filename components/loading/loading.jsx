import styles from "./loading.module.scss";
import { CircleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <CircleLoader color="#99c2fc" size="7rem" />
      <h2>Loading...</h2>
    </div>
  );
};

export default Loading;
