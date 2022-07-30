import styles from "./posters-list.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { screenplayApiConfig } from "../../../api/apiConfig";

const PostersList = ({ posters }) => {
  return (
    <div className={styles.posters}>
      <h3>Posters</h3>
      <Swiper
        grabCursor={true}
        spaceBetween={15}
        slidesPerView={"auto"}
        className={styles.swiper}
      >
        {posters.map((image, index) => (
          <SwiperSlide key={index}>
            <a
              href={`${screenplayApiConfig.coverImage(image.file_path)}`}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={styles.posters__item}
                style={{
                  backgroundImage: `url(${screenplayApiConfig.coverImage(
                    image.file_path
                  )})`,
                }}
              ></div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PostersList;
