import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./movie-list.module.scss";
import useFetch from "../../../hooks/use-fetch";
import { screenplayAxiosClient } from "../../../api/axiosClient";
import { screenplayApiCalls } from "../../../api/requestsApi";
import { Category, MovieType, TvType } from "../../../models/screenplay";
import Loading from "../../loading/loading";
import ErrorContent from "../../error/error-content";
import MovieListItem from "./movie-list-item";

const MovieList = ({ category, type, id }) => {
  let request;
  if (type === MovieType.Similar || type === TvType.Similar) {
    request = screenplayApiCalls.getSimilar(category, type, id, {
      params: { page: 1 },
    });
  } else {
    if (category === Category.Movie) {
      request = screenplayApiCalls.getMovies(type, { params: { page: 1 } });
    } else {
      request = screenplayApiCalls.getTvShows(type, { params: { page: 1 } });
    }
  }

  const { data, error, loading } = useFetch(screenplayAxiosClient, request);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorContent />;
  }

  return (
    <div className={styles["movie-list"]}>
      <Swiper grabCursor={true} spaceBetween={20} slidesPerView={"auto"}>
        {data.data.results.map((item) => (
          <SwiperSlide key={item.id} className={styles["swiper-slide"]}>
            <MovieListItem movie={item} category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
