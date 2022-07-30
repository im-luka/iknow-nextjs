import { screenplayApiConfig } from "../../../api/apiConfig";
import { useModalInfo } from "../../../context/modal-info-context";
import styles from "./movie-list-item.module.scss";

const MovieListItem = ({ movie, category }) => {
  const { showModal } = useModalInfo();

  const posterImage = screenplayApiConfig.posterImage(
    movie.poster_path || movie.backdrop_path
  );

  const showModalHandler = () => {
    showModal({
      id: movie.id,
      category: category,
      title: movie.title || movie.name,
      overview: movie.overview,
      poster_path: movie.poster_path,
      backdrop_path: movie.backdrop_path,
    });
  };

  return (
    <div
      className={styles["movie-item"]}
      style={{ backgroundImage: `url(${posterImage})` }}
      onClick={showModalHandler}
    >
      <h3 className={styles["movie-item__title"]}>
        {movie.title || movie.name}
      </h3>
    </div>
  );
};

export default MovieListItem;
