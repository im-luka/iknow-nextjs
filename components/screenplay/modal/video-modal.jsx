import { screenplayAxiosClient } from "../../../api/axiosClient";
import { screenplayApiCalls } from "../../../api/requestsApi";
import useFetch from "../../../hooks/use-fetch";
import ErrorContent from "../../error/error-content";
import Loading from "../../loading/loading";
import styles from "./video-modal.module.scss";

const VideoModal = ({ id, category, onClose }) => {
  const { data, error, loading } = useFetch(
    screenplayAxiosClient,
    screenplayApiCalls.getVideos(category, id, { params: {} })
  );

  if (loading) {
    return (
      <div className={styles.video__container} onClick={onClose}>
        <div className={styles.video__container__modal}>
          <Loading />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.video__container} onClick={onClose}>
        <ErrorContent />
      </div>
    );
  }

  return (
    <div className={styles.video__container} onClick={onClose}>
      <div className={styles.video__container__modal}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${data.data.results[0].key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
