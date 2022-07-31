import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import styles from "./favorites-modal.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsSuitHeartFill } from "react-icons/bs";
import { screenplayApiConfig } from "../../../api/apiConfig";
import { useFavorites } from "../../../context/favorites-context";
import CloseButton from "../utils/close-button";

const FavoritesModal = () => {
  const favoritesRef = useRef(null);
  const { favorites, closeFavorites, removeItemFromFavorites } = useFavorites();
  const router = useRouter();

  useEffect(() => {
    const addAnimation = setTimeout(() => {
      favoritesRef.current.classList.add(styles.active);
    }, 10);

    return () => {
      clearTimeout(addAnimation);
    };
  }, []);

  return (
    <div ref={favoritesRef} className={styles.favorites}>
      <h2>
        Your Favs <BsSuitHeartFill color="red" />
      </h2>
      {favorites.length === 0 && (
        <div className={styles.favorites__nocontent}>
          <h2>No Favorites yet!</h2>
        </div>
      )}
      <Swiper
        grabCursor={true}
        direction={"vertical"}
        slidesPerView={"auto"}
        spaceBetween={10}
        className={styles.swiper}
      >
        {favorites.map((fav) => (
          <SwiperSlide key={fav.id} className={styles["swiper-slide"]}>
            <div className={styles.favorites__item}>
              <div className={styles.favorites__item__image}>
                <img
                  src={`${screenplayApiConfig.coverImage(fav.backdrop_path)}`}
                  alt={fav.title}
                />
              </div>

              <div className={styles.favorites__item__title}>
                <h3>{fav.title}</h3>
              </div>

              <div className={styles.favorites__item__action}>
                <button
                  className="button button-primary"
                  onClick={() => {
                    router.push(`/screenplay/${fav.category}/${fav.id}`);
                    closeFavorites();
                  }}
                >
                  Watch
                </button>
                <button
                  className="button button-secondary"
                  onClick={() => removeItemFromFavorites(fav.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <CloseButton onClick={closeFavorites} />
    </div>
  );
};

export default FavoritesModal;
