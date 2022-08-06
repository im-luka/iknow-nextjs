import { useRouter } from "next/router";
import { useRef, useEffect } from "react";
import { screenplayApiConfig } from "../../../api/apiConfig";
import { useModalInfo } from "../../../context/modal-info-context";
import FavoritesButton from "../utils/favorites-button";
import CloseButton from "../utils/close-button";
import styles from "./info-modal.module.scss";

const InfoModal = () => {
  const modalRef = useRef(null);
  const { item, closeModal } = useModalInfo();
  const router = useRouter();

  let posterImage = screenplayApiConfig.posterImage(item.poster_path);
  posterImage = posterImage.includes("null")
    ? "/images/error/no-image.jpg"
    : posterImage;

  useEffect(() => {
    const addAnimation = setTimeout(() => {
      modalRef.current.classList.add(styles.active);
    }, 10);

    return () => {
      clearTimeout(addAnimation);
    };
  }, []);

  const goToDetailsHandler = () => {
    router.push(`/screenplay/${item.category}/${item.id}`);
    closeModal();
  };

  return (
    <div ref={modalRef} className={styles.info__container}>
      <div className={styles.info__container__content}>
        <div className={styles.info__container__content__img}>
          <img src={posterImage} alt={item.title} />
        </div>

        <div className={styles.info__container__content__info}>
          <h2>{item.title}</h2>
          <p>{item.overview}</p>
          <div className={styles.info__container__content__info__actions}>
            <button
              className="button button-primary"
              onClick={goToDetailsHandler}
            >
              PLAY NOW
            </button>

            {item && (
              <FavoritesButton
                item={{
                  id: item.id,
                  backdrop_path: item.backdrop_path,
                  title: item.title,
                  category: item.category,
                }}
              />
            )}
          </div>
        </div>
      </div>

      <div
        className={styles.info__container__image}
        style={{
          backgroundImage: `url(${screenplayApiConfig.coverImage(
            item.backdrop_path
          )})`,
        }}
      ></div>

      <CloseButton onClick={closeModal} />
    </div>
  );
};

export default InfoModal;
