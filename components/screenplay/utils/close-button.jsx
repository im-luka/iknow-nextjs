import styles from "./close-button.module.scss";
import { AiOutlineClose } from "react-icons/ai";

const CloseButton = ({ onClick }) => {
  return (
    <div className={styles["close-btn"]} onClick={onClick}>
      <AiOutlineClose size="1.5rem" color="#1a76f8" />
    </div>
  );
};

export default CloseButton;
