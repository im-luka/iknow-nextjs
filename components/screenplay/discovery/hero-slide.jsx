import styles from "./hero-slide.module.scss";
import useFetch from "../../../hooks/use-fetch";
import { screenplayAxiosClient } from "../../../api/axiosClient";
import { screenplayApiCalls } from "../../../api/requestsApi";
import { MovieType } from "../../../models/screenplay";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroSlideItem from "./hero-slide-item";
import Loading from "../../loading/loading";
import ErrorContent from "../../error/error-content";
import { useEffect } from "react";

const HeroSlide = () => {
  const { data, error, loading } = useFetch(
    screenplayAxiosClient,
    screenplayApiCalls.getMovies(MovieType.Popular, { params: { page: 3 } })
  );

  useEffect(() => {
    SwiperCore.use([Autoplay]);
  }, []);

  if (loading) {
    return (
      <section className={styles.nocontent__container}>
        <Loading />;
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.nocontent__container}>
        <ErrorContent />
      </section>
    );
  }

  const movieItems = data.data.results.slice(0, 5);

  return (
    <section className={styles.hero_slide}>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
      >
        {movieItems.map((elem) => (
          <SwiperSlide key={elem.id}>
            {({ isActive }) => (
              <HeroSlideItem
                movie={elem}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlide;
